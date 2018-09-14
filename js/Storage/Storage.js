import {Note} from "../Note/Note.js";
import { NoteContainer } from "../NoteContainer/NoteContainer.js";

class Storage {
    constructor(){
        this.containers = new Array();
        this.load();    
    }

    add(container){
        this.containers.push(container);
        this.save();
    }

    remove(container){
        this.containers.remove(container);
        this.save();
    }

    save(){
        localStorage.clear();
        this.containers.length = 0;
        localStorage.setItem('containers', JSON.stringify([...this.containers]))
    }

    load(){
        let containers = JSON.parse(localStorage.getItem('containers'));
        if(containers !== null){
            for(let container of containers){
                this.containers.push(NoteContainer.createContainerFromObject(container));
            }
        }
    }

    getContainerById(id) {
        return this.containers[id];
    }

}

export let storage = new Storage();