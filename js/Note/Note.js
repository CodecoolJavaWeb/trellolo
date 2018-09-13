export class Note {

    constructor(containerId){
        this._id = null;
        this._containerId = containerId;
        this._content = "New content.";
    }


    static createNoteFromObject(object){
        let note = new Note();
        Object.assign(note, object);
        return note;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get content(){
        return this._content;
    }

    set content(newContent){
        this._content = newContent;
    }

}