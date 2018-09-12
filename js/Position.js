export class Position {

    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    setPosition(x, y){
        this._x = x;
        this._y = y;
    }

    get x(){
        return this._x;
    }

    set x(xPosition){
        this._x = xPosition;
    }

    get y(){
        return this._y;
    }

    set y(yPosition){
        this._y = yPosition;
    }

}