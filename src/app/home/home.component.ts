import { Component, OnInit } from '@angular/core';

import { DemoService } from '../demo/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public logLevels:Array<any> = [
		'DEBUG',
		'INFO',
		'WARN',
		'ERROR',
		'FATAL'
	];
	public headers:Array<any> = [
		'TimeStamp',
		'Log Marker',
		'Logger',
		'Log Level',
		'Current Thread',
		'Log Message'
	];

	public logItems:Array<any> = [];
  constructor(private demoService: DemoService) { }

  ngOnInit() {
  	this.demoService.getLogItems()
  	.then((items:any)=>{
  		this.logItems = items;
  	});
  }

  public changeLogLevel(level:string) {
  	this.demoService.getLogItems()
  	.then((items:any)=>{
  		this.logItems = this.demoService.filterLogItems(items, level);
  	});
  }
}
