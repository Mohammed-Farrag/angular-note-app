import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Route, RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { SingleNoteComponent } from './single-note/single-note.component';
import { NoteService } from './note.service';

const Router: Routes = [
  {path: 'new', component: NewNoteComponent},
  {path: 'all-notes', component:AllNotesComponent},
  {path: 'singe-note', component: SingleNoteComponent},
];


@NgModule({
  imports: [
  BrowserModule, 
  FormsModule, 
  RouterModule.forRoot(Router) 
  ],
  declarations: [ 
    AppComponent, NavbarComponent, 
    NewNoteComponent, AllNotesComponent, 
    SingleNoteComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [NoteService]
})
export class AppModule { }
