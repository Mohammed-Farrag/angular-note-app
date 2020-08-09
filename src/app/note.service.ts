import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService {

  constructor() { }

notes: Note[] = [
  {title: 'note one', description: 'note #1 descriptiokaljfnb'},
  {title: 'note two', description: 'note #2 descriptiokaljfnb'},
  {title: 'note three', description: 'note #3 descriptiokaljfnb'},
]

addNote(addedNte: Note){
  this.notes.push(addedNte);
}

deleteNote(id: number){
  this.notes.splice(id,1 );
}

}