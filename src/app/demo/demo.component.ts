import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [DemoService]
})
export class DemoComponent implements OnInit {
	public userId:string = '';
  constructor(private router: Router,
              private demoService: DemoService) { }

  ngOnInit() {
  	this.userId = localStorage.getItem('userId');
  }

  public logout() {
  	localStorage.removeItem('userId');
  	this.router.navigate(['/login']);
  }

}
