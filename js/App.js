"use strict";

import { NoteView } from "./Note/NoteView.js";
import { NoteContainer } from "./NoteContainer/NoteContainer.js";
import { NoteController } from "./Note/NoteController.js";
import { AddButtonController } from "./AddButton/AddButtonController.js";
import { storage } from "./Storage/Storage.js";
import { NoteContainerController } from "./NoteContainer/NoteContainerController.js";
import { NoteContainerView } from "./NoteContainer/NoteContainerView.js";

// for(let note of storage.notes){
//     let noteController = new noteController(note);
//     let noteView = new NoteView(noteController);
//     container.appendChild(noteView.element);
// }

window.addEventListener("load", handleNewContainer);
let container = document.getElementsByClassName("container")[0];

// document.getElementsByClassName('add-note')[0].addEventListener("click", addButtonController.handleClick.bind(addButtonController, containerId));

// for (let i=0; i<storage.containers.length; i++) {
//     let noteContainer = new NoteContainer(i);
//     let noteContainerController = new NoteContainerController(noteContainer);
//     let noteContainerView = new NoteContainerView(noteContainerController);
//     for(let note of noteContainer.list){
//         let noteController = new NoteController(note);
//         let noteView = new NoteView(noteController);
//         noteContainer.appendChild(noteView.element);
//     }
// }


localStorage.clear();

let containerIterator=0;
function handleNewContainer(){
    // for(let i = 0; i < 3; i++) {
    //     let noteContainer = new NoteContainer(i);
    //     let noteContainerController = new NoteContainerController(noteContainer);
    //     let noteContainerView = new NoteContainerView(noteContainerController);
    //     container.appendChild(noteContainerView.element);
    // }
    while(containerIterator < 3) {
        let noteContainer = new NoteContainer(containerIterator);
        let noteContainerController = new NoteContainerController(noteContainer);
        let noteContainerView = new NoteContainerView(noteContainerController);
        container.appendChild(noteContainerView.element);
        containerIterator++;
    }
    
}


