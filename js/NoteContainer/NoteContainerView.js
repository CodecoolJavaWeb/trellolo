import { NoteContainer } from "../NoteContainer/NoteContainer.js";
import { NoteContainerController } from "../NoteContainer/NoteContainerController.js";

export class NoteContainerView {
    constructor(noteContainerController){
        this.noteContainerController = noteContainerController;
        this.element = this.createElement();
        this.initializeEventListeners();
    }

    // renderContainer(){
    //     return `<div class="container" ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)">
    //         <div class="title"><textarea contenteditable="true">${this.noteContainerController.noteContainer.content}</textarea>
    //         </div>
    //     </div>`;
    // }

    renderContainer(){
        return `<div class="list" id=${this.noteContainerController.noteContainer.containerId}>
        <div class="note-area"></div>
        <div class="add-note-area">
          <button class="add-note">ADD</button>
        </div>`
    }

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderContainer().trim();
        return element.content.firstChild;
    }

    approveElement() {
        console.log('the right one');
    }

    initializeEventListeners(){
        let check = this.element.getElementsByClassName('add-note')[0];
        check.addEventListener('click', function() {console.log(this.parentElement.parentElement);});
    }
    


}