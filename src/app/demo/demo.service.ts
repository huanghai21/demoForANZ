import { Injectable } from '@angular/core';
import { HttpHelperService } from '../service/http-helper.service';

@Injectable()
export class DemoService {
  constructor(private httpHelperService: HttpHelperService) { }

  public getLogItems=(): Promise<any> =>{
  	return this.httpHelperService.get('./assets/json_data/logs.json')
  	.map(this.extractData)
  	.toPromise();
  };
  private extractData=(logs: Array<any>):Array<any> =>{
  	let logItems:Array<any> = [];
  	logs.forEach((item:any)=>{
  		logItems = logItems.concat(item.LogItems);
  	});
  	return logItems;
  };

  public filterLogItems(logItems: Array<any>, logLevel:string) {
  	return logItems.filter((item:any)=>{
  		return item.LogLevel === logLevel;
  	});
  }
}
