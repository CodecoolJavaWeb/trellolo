

export class NoteController{
    constructor(note){
        this.note = note;
        localStorage.add(this.note);
    }
    
    handleTitleChange(element){
        this.note._title = element.target.innertText;
        localStorage.save();
    }

    handleContentChange(element){
        this.note.content = element.target.innerText;
        localStorage.save();
    }


    handleDragStart(event) {
        let shiftX = event.clientX - note.getBoundingClientRect().left;
        let shiftY = event.clientY - note.getBoundingClientRect().top;

        note.style.position = 'absolute';
        note.style.zIndex = 100;

        document.body.appendChild(note);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            note.style.left = pageX - shiftX + 'px';
            note.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(evemt.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        onMouseUp = function() {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

    onDragStart = function() {
        return false;
    }


}