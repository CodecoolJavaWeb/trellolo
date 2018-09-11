

export class NoteController{
    constructor(note){
        this.note = note;
        localStorage.add(this.note);
    }
    
    handleTitleChange(element){
        this.note._title = element.target.innertText;
        localStorage.save();
    }

}