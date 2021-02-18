import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  extras: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.extras = navigation.extras;
    this.error = this.extras?.state?.error;
   }

  ngOnInit(): void {
  }

}
