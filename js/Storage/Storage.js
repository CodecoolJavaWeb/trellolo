import {Note} from "../Note/Note.js";

class Storage {
    constructor(){
        this.containers = new Array();
        this.load();    
    }

    save(){
        localStorage.setItem('containers', JSON.stringify([...this.containers]))
    }

    load(){
        let containers = JSON.parse(localStorage.getItem('containers'));
        if(containers !== null){
            for(let container of containers){
                this.containers.add(NoteContainer.createFromObject(container));
            }
        }
    }

    getContainerById(id) {
        return this.containers[id];
    }

}

export let storage = new Storage();