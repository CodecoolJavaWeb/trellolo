
export class NoteContainer {
  constructor(id) {
    this._list = new Array();
    this._containerId = id;
  }

//   static createContainerFromObject(object){
//     let note = new Note();
//     Object.assign(note, object);
//     Object.assign(position, object._position)
//     note.position = position;
//     return note;
// }

  get list() {
    return this._list;
  }

  set list(newList) {
    this._list = newList;
  }

  get containerId() {
    return this._containerId;
  }

  set containerId(newId) {
    this._containerId = newId;
  }

}