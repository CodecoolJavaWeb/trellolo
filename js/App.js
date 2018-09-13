"use strict";

import { NoteView } from "./Note/NoteView.js";
import { NoteContainer } from "./NoteContainer/NoteContainer.js";
import { NoteController } from "./Note/NoteController.js";
import { AddButtonController } from "./AddButton/AddButtonController.js";
import { storage } from "./Storage/Storage.js";

// for(let note of storage.notes){
//     let noteController = new noteController(note);
//     let noteView = new NoteView(noteController);
//     container.appendChild(noteView.element);
// }
let addButtonController = new AddButtonController();

// const containerId = document.getElementsByClassName('note-area')[0].containerId;
// document.getElementsByClassName('add-note')[0].addEventListener("click", console.log('sdfd'));
// document.getElementsByClassName('add-note')[0].addEventListener("click", addButtonController.handleDblClick.bind(addButtonController, containerId));

// for (let i=0; i<storage.containers.length; i++) {
//     let noteContainer = new NoteContainer(i);
//     for(let note of noteContainer){
//         let noteController = new NoteController(note);
//         let noteView = new NoteView(noteController);
//         container.appendChild(noteView.element);
//     }
// }

