

export class NoteController{
    constructor(note){
        this.note = note;
        localStorage.add(this.note);
    }
    
    // handleContentChange(element){
    //     this.note._title = element.target.innertText;
    //     localStorage.save();
    // }

    handleDragStart(e) {
        e.dataTransfer.setData('plain/text', '');
        this.note.position.setPosition(e.clientX, e.clientY);
    }
}