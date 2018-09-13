export class NoteContainerView {
    constructor(noteContainerController){
        this.noteContainerController = noteContainerController;
        this.element = this.createElement();
    }



    renderContainer(){
        return `<div class="container" ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)">
            <div class="title"><textarea contenteditable="true">${this.noteContainerController.noteContainer.content}</textarea>
            </div>
        </div>`;
    }

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderContainer().trim();
        return element.content.firstChild;
    }

    initializeEventListeners(){
                
    }


}