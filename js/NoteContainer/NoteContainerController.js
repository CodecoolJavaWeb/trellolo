import {storage} from "../Storage/Storage.js";
import { Note } from "../Note/Note.js";
import { NoteController } from "../Note/NoteController.js";
import { NoteView } from "../Note/NoteView.js";

export class NoteContainerController{
    constructor(noteContainer){
        this.noteContainer = noteContainer;
        storage.add(this.noteContainer);
    }


    handleDrag(e){
        e.dataTransfer.setData("text", e.target.id);
    }

    handleDrop(e){
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }

    allowDrop(e){
        e.preventDefault();
    }

    detectContainer() {
        let elementBelow = document.elementFromPoint(event.clientX, event.clientY);
    }

    handleClick(e) {
        let containerId = this.noteContainer.containerId;
        let note = new Note(containerId);
        let noteController = new NoteController(note);
        let noteView = new NoteView(noteController);
        let container = document.getElementById(containerId).firstChild;
        console.log(container.childElementCount);
        if (container.childElementCount <= 4) {
            container.appendChild(noteView.element);
        }
      }

}