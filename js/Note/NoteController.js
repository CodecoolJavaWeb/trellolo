

export class NoteController{
    constructor(note, containerId){
        this.note = note;
        localStorage.getContainerById(containerId).list.push(this.note);
    }

    handleDragStart(e) {
        e.dataTransfer.setData('plain/text', '');
        this.note.position.setPosition(e.clientX, e.clientY);
    }

    handleChangeNote(e) {
        this.note.content = e.target.innerText;
        localStorage.save();
    }

    handleDeleteNote(e) {
        e.target.parentElement.remove();
        localStorage.remove(this.note);
    }
}