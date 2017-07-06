import { Injectable } from '@angular/core';
import { HttpHelperService } from '../service/http-helper.service';

@Injectable()
export class LoginService {

  constructor(private httpHelperService: HttpHelperService) { }

  public getUsers(): Promise<any> {
  	//POST should be better
  	return this.httpHelperService.get('./assets/json_data/users.json').toPromise();
  }

  public findUser(users:Array<any>, userId:string) {
  	return users.find((item:any)=>{
  		return item.UserId === userId;
  	});
  }
}
