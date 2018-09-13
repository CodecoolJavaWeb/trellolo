import { NoteView } from "../Note/NoteView.js";
import { NoteController } from "../Note/NoteController.js";

export class AddButtonController {
  constructor() {

  }

  handleClick(e, containerId) {
    console.log('we r here');
    let note = new Note(containerId);
    let noteController = new NoteController(note);
    let noteView = new NoteView(noteController);
    let container = this.element.getElementsByClassName('note-area')[0];
    container.appendChild(noteView.element);
   
  }

  
}