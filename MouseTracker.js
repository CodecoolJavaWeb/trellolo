class MouseTracker {
    constructor(){
        this.x = 0;
        this.y = 0;
        document.addEventListiner("dragover", this.handleMouseMove.bind(this));
    }

    handleMouseMove(e){
        this.x = e.clientX;
        this.y = e.clientY;
    }

}

export let mouseTracker = new MouseTracker();