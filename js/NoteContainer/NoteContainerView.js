export class NoteContainerView {
    constructor(noteContainerController){
        this.noteContainerController = noteContainerController;

    }



    renderContainer(){
        return
        `<div class="container" ondrop="hanldeDrop(event)" ondragoover="allowDrop(event)">
        </div>`;
    }

    createElement(){

    }

    initializeEventListeners(){
        
    }


}