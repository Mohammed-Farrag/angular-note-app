import { Component, VERSION } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  indexMode: boolean = true;
  constructor(private router: Router){

  }

addNewNote(){
  this.indexMode = !this.indexMode;
  this.router.navigate(['/new']);
}


}
