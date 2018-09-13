
export class NoteContainer {
  constructor(id) {
    this._list = new Array();
    this._containerId = id;
    this._content = "New content.";
  }

  static createContainerFromObject(object){
    let container = new NoteContainer();
    Object.assign(container, object);
    return container;
}

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

  get content(){
    return this._content;
  }



}