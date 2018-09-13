import { NoteContainer } from "../NoteContainer/NoteContainer.js";
import { NoteContainerController } from "../NoteContainer/NoteContainerController.js";

export class NoteContainerView {
    constructor(noteContainerController){
        this.noteContainerController = noteContainerController;
        this.element = this.createElement();
        this.initializeEventListeners();
        let id = null;
    }

    // renderContainer(){
    //     return `<div class="container" ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)">
    //         <div class="title"><textarea contenteditable="true">${this.noteContainerController.noteContainer.content}</textarea>
    //         </div>
    //     </div>`;
    // }

    renderContainer(){
<<<<<<< HEAD
        return `<div class="list" id=${this.noteContainerController.noteContainer.containerId} ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)"
        ><div class="note-area"></div
        ><div class="add-note-area"
          ><button class="add-note">ADD</button
        ></div>`
=======
        return `<div class="list" id="${this.noteContainerController.noteContainer.containerId}">
        <div class="note-area"></div>
        <div class="add-note-area">
          <button class="add-note">ADD</button>
        </div>`
>>>>>>> 0303609a0e6591b3cbb80cb454a35df022e3d8dc
    }

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderContainer().trim();
        return element.content.firstChild;
    }

    initializeEventListeners(){
        let check = this.element.getElementsByClassName('add-note')[0];
        // check.addEventListener('click', this.getContainerId);
        check.addEventListener('click', this.noteContainerController.handleClick.bind(this.noteContainerController));

    }

}