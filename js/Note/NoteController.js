

export class NoteController{
    constructor(note){
        this.note = note;
        localStorage.add(this.note);
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
        e.target.closest('.note').remove();
        localStorage.remove(this.note);
    }
}