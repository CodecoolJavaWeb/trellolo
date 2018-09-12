import { NoteView } from "./Note/NoteView";



for(let note of storage.notes){
    let noteController = new noteController(note);
    let noteView = new NoteView(noteController);
    container.appendChild(noteView.element);
}

