import { storage } from "../Storage/Storage.js";

export class NoteController{
    constructor(note){
        this.note = note;
        storage.add(this.note);
    }

    handleDragStart(e) {
        e.dataTransfer.setData('plain/text', '');
        this.note.position.setPosition(e.clientX, e.clientY);
    }

    handleChangeNote(e) {
        this.note.content = e.target.innerText;
        storage.save();
    }

    handleDeleteNote(e) {
        e.target.parentElement.remove();
        storage.remove(this.note);
    }
}