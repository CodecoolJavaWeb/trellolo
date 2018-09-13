

export class Note {

    constructor(){
        this._containerId = null;
        this._content = "New content.";
    }


    static createNoteFromObject(object){
        let note = new Note();
        let position = new Position();
        Object.assign(note, object);
        Object.assign(position, object._position)
        note.position = position;
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

    get position(){
        return this._position;
    }

    set position(newPosition){
        this._position = newPosition;
    }

}