class Storage {
    constructor(){
        this.notesSet = new Set();
        this.load();    
    }

    add(note){
        this.notes.add(note);
        this.save();
    }

    remove(note){
        this.notesSet.delete(note);
        this.save();
    }

    save(){
        localStorage.setItem('notes', JSON.stringify([...this.notes]))
    }

    load(){
        let notes = JSON.parse(localStorage.getItem('notes'));
        if(notes !== null){
            for(let note of notes){
                this.notes.add(Note.createFromObject(note));
            }
        }
    }

}

export let localStorage = new Storage();