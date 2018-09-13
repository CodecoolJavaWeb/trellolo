import {storage} from "../Storage/Storage.js";

export class NoteController{
    constructor(note, containerId){
        this.note = note;
        storage.getContainerById(containerId).list.push(this.note);
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