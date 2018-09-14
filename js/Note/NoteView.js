export class NoteView {
    constructor(noteController){
        this.noteController = noteController;
        this.element = this.createElement();
        this.initializeEventListiners();
    }

    renderNote(){
        return `<div class="note" draggable="true"
                    ><div class="note-manipulator dragger"></div
                    ><div class="note-manipulator closer">&times;</div
                    ><div><textarea class="note-content" conteneditable = "true">${this.noteController.note.content}</textarea></div
                ></div>`;
    } 

    createElement(){
        let element = document.createElement('template');
        element.innerHTML = this.renderNote().trim();
        return element.content.firstChild;
    }

    deleteElement() {
        // const noteContains = this.nextSibling.getElementsByTagName('textarea')[0].innerHTML;
        // localStorage.removeItem(noteContains);
        this.parentNode.remove();
    }

    initializeEventListiners(){
        console.log(this.element.firstChild.nextSibling);
        this.element.firstChild.nextSibling.addEventListener('click', this.deleteElement);
        // this.element.getElementsByTagName('textarea')[0].addEventListener('input', this.noteController.handleContentChange.bind(this.noteController));
        // this.element.getElementById('closer').addEventListener('click', this.noteController.handleDeleteNote.bind(this.noteController));

        // let dragger = this.element.getElementById('dragger');
        // dragger.addEventListener('dragstart', this.noteController.handleDragStart.bind(this.noteController));
        // dragger.addEventListener('dragend', this.noteController.handleDragEnd.bind(this.noteController));
    }

}