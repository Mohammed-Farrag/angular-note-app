import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

allNote: Note[];
  constructor( private noteService: NoteService) { 

    this.allNote = noteService.notes;


  }

  ngOnInit() {
  }


deleteNote(id:number){
  this.noteService.deleteNote(id);
}
}