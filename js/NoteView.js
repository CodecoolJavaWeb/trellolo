export class NoteView {
    constructor(noteController){
        this.noteController = noteController;
        this.element = this.createElement();
        this.initializeEventListiners();
    }

    renderNote(){
        return 
        `<div draggable="true">
            <div class="dragger"></div>
            <div><textarea conteneditable = "true">${this.noteController.note.content}</textarea></div>
        </div>`;
    }

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderNote().trim();
        return element.content.firstChild;
    }

    initializeEventListiners(){
        this.element.getElementsByTagName('textarea')[0].addEventListener('input', this.noteController.handleContentChange.bind(this.noteController));
        
        let dragger = this.element.getFirstChild();
        dragger.addEventListener('dragstart', this.noteController.handleDragStart.bind(this.noteController));
        dragger.addEventListener('dragend', this.noteController.handleDragEnd.bind(this.noteController));
    }

}