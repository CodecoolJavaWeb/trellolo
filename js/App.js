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
let addButtonController = new AddButtonController();

let mainButton = document.getElementsByTagName("h1")[0].addEventListener("click", handleNewContainer);
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


function handleNewContainer(){
    for(let i = 0; i < 3; i++) {
        let noteContainer = new NoteContainer(i);
        let noteContainerController = new NoteContainerController(noteContainer);
        let noteContainerView = new NoteContainerView(noteContainerController);
        container.appendChild(noteContainerView.element);
    }

}
