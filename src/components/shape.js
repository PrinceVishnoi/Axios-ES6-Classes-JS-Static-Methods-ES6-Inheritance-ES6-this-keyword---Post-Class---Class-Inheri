// declare class

// export class using module.exports
class Shape{
    constructor(name){
       this.name;

    }

    drawShape(){
        return`${this.name} is drawn`;
    }

    calculateArea(length,width){
        return 2*(length*width);
        
    }
    color(color){
        return `${color} is Applied on ${this.name}`;
    }
    
}
module.exports = Shape;
