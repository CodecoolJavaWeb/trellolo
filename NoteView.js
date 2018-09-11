export class NoteView {
    constructor(noteController){
        this.noteController = noteController;
        this.element = this.createElement();
        this.initializeEventListiners();
    }

    renderNote(){
        return `
        <div>
            <div draggable='true'></div>
            <div><textarea></textarea></div>
        </div>`
    }

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderNote().trim();
        return element.content.firstChild;
    }

    initializeEventListiners(){
        
    }

}