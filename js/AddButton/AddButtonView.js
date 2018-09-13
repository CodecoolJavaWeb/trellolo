export class AddButtonView {
  constructor(addButtonController) {
    this.addButtonController = addButtonController;
    this.registerEventListeners();
  }

    registerEventListeners() {
    const containerId = this.element.getElementsByClassName('note-area')[0].containerId;
    this.element.getElementsByClassName('add-note')[0].addEventListener("click", this.addButtonController.handleDblClick.bind(this.addButtonController, containerId));
}

  
}