import { NoteView } from "../Note/NoteView";

export class AddButtonController {
  constructor() {

  }

  handleClick() {
    let note = new Note();
    let noteController = new Controller(note);
    let noteView = new NoteView(noteController);
    

  }

}