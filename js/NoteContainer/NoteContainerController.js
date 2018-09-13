import {storage} from "../Storage/Storage.js";

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


}