import { Note } from "./Note";
import { NoteController } from "./NoteController";
import { NoteView } from "./NoteView";

export class ButtonController {
    constructor(){

    }

    handleDoubleClickOnButton1(e){
        createNewNoteInProperList(100, 100);
    }

    handleDoubleClickOnButton2(e){
        createNewNoteInProperList(200, 100);
    }

    handleDoubleClickOnButton3(e){
        createNewNoteInProperList(300, 100);
    }


    createNewNoteInProperList(x, y){
        let note = new Note(x, y);
        let noteController = new NoteController(note);
        let noteView = new NoteView(noteController);
        let container = document.getElementsByClassName("container")[0];
    }

}