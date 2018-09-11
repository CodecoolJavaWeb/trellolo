import { Position } from ".Position.js";


export class Note {

    constructor(x, y){
        this._id = null;
        this._title = "New note.";
        this._content = "New content.";
        this._position = new Position(x, y);
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

    get title(){
        return this._title;
    }

    set title(newTitle){
        this._title = newTitle;
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