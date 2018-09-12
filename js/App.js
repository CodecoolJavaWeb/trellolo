import { NoteView } from "./Note/NoteView";

// for(let note of storage.notes){
//     let noteController = new noteController(note);
//     let noteView = new NoteView(noteController);
//     container.appendChild(noteView.element);
// }

for (let i=0; i<storage.containers.length; i++) {
    let noteContainer = new NoterContainer(i);
    for(let note of noteContainer){
        let noteController = new noteController(note);
        let noteView = new NoteView(noteController);
        container.appendChild(noteView.element);
    }
}

