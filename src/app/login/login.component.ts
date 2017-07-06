import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
	public userId:string = '';
	public errorTipForUserId:string = '';
	public password:string = '';
	public errorTipForPassword:string = '';
  constructor(private loginService: LoginService,
  				private el: ElementRef,
  				private router: Router) { }

  ngOnInit() {
  }

  public login() {
  	if(!this.userId){
  		this.focus(this.el.nativeElement.querySelector('input[type="text"]'));
  		this.errorTipForUserId = 'Please input User ID';
  		return;
  	}else if(!this.password){
  		this.focus(this.el.nativeElement.querySelector('input[type="password"]'));
  		this.errorTipForPassword = 'Please input password';
  		return;
  	}
  	this.loginService.getUsers()
  	.then(this.validate)
  	.then(this.navigate2Home)
  	.catch((errMsg:any)=>{
  		console.log('Opoos~~ error happend here, errMsg is: ' + errMsg);
  	})
  }

  public checkEnter(event:any) {
  	if(event.key === 'Enter'){
  		this.login();
  	}
  }

  private validate=(users:Array<any>)=> {
  	let user:any = this.loginService.findUser(users, this.userId);
  	if(!user){
  		this.focus(this.el.nativeElement.querySelector('input[type="text"]'));
  		this.errorTipForUserId = 'User ID is not exist';
  		throw "User ID is not exist";
  	}else if(user.Password !== this.password){
  		this.focus(this.el.nativeElement.querySelector('input[type="password"]'));
  		this.errorTipForPassword = 'Password is incorrect';
  		throw "Password is incorrect";
  	}
  	return Promise.resolve(true);
  }

  private navigate2Home=()=> {
  	localStorage.setItem('userId', this.userId)
  	this.router.navigate(['/demo/home']);
  };

  private focus=(dom:any)=>{
  	if(dom){
  		dom.focus();
  	}
  }
}
