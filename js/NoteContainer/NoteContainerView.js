export class NoteContainerView {
    constructor(noteContainerController){
        this.noteContainerController = noteContainerController;

    }



    renderContainer(){
        return
        `<div class="container" ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)">
            <div class="title"><textarea contenteditable="true">${this.noteContainerController.container.content}</textarea>
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