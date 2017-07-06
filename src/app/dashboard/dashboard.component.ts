import { Component, OnInit, ElementRef } from '@angular/core';
import { DemoService } from '../demo/demo.service';

declare var require:any;
var echarts = require('echarts');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private el: ElementRef, private demoService: DemoService) { }

  ngOnInit() {
  	this.demoService.getLogItems()
  	.then(this.initCharts);
  }

  private initCharts=(items:Array<any>)=>{
  	this.initPieChart(items);
  	this.initLineChart(items);
  };

  private initPieChart=(logItems:any)=>{
  	let pieChart:any = echarts.init(this.el.nativeElement.querySelector('#pieChart'));
  	let option: any = {
  		title: {
  			text: 'Log Types', 
  			x: 'center'
  		},
  		tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
  		legend: {
  			// orient: 'vertical',
        	top: '10%',
  			data: ['INFO', 'DEBUG', 'TRACE']
  		},
  		color: ['#449d44', '#025aa5', '#960930'],
  		series: [{
  			type: 'pie',
  			name: 'Log Level',
  			center: ['50%', '60%'],
  			data: [{
  				name: 'INFO',
  				value: this.demoService.filterLogItems(logItems, 'INFO').length
  			},{
  				name: 'DEBUG',
  				value: this.demoService.filterLogItems(logItems, 'DEBUG').length
  			},{
  				name: 'TRACE',
  				value: this.demoService.filterLogItems(logItems, 'TRACE').length
  			}]
  		}]
  	}
  	pieChart.setOption(option);
  };

  private initLineChart=(logItems:any)=>{  	
  	let lineChart:any = echarts.init(this.el.nativeElement.querySelector('#lineChart'));
  	let option = {
		    title : {
		        text: 'Logs Over Time',
		        x: 'center'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	top: '10%',
		        data: ['INFO', 'DEBUG', 'TRACE']
		    },
		    grid: {
		    	top: '30%'
		    },
		    color: ['#449d44', '#025aa5', '#960930'],
		    calculable : true,
		    xAxis : [
		        {
		            type: 'time'
		        }
		    ],
		    yAxis : [
		        {
		            type: 'value'
		        }
		    ],
		    series : [
		        {
		            name:'INFO',
		            type:'line',
		            data:[
		            	// this.buildData(logItems, 'INFO'),
		                ['2015-04-21', 3],
		                ['2015-05-21', 5],
		                ['2015-06-21', 9]
		            ]
		        },
		        {
		            name:'DEBUG',
		            type:'line',
		            data:[
  						// this.buildData(logItems, 'DEBUG'),
		                ['2015-04-21', 4],
		                ['2015-05-21', 2],
		                ['2015-06-21', 6]
		            ]
		        },{
		            name:'TRACE',
		            type:'line',
		            data:this.buildData(logItems, 'TRACE')
		        }
		    ]
		};
                    
  	lineChart.setOption(option);
  };

  private buildData=(logItems:any, type:string)=>{
  	//TODO: same date, same count, how to build data??
  	let count:number = 1;
  	let data:any = this.demoService.filterLogItems(logItems, type)
  	.map((item:any)=>{
  		let date:string = item.TimeStamp.slice(0 ,item.TimeStamp.length - 4);
  		return [date, count++]
  	});
  	console.log(data);
  	return data;
  }

}
