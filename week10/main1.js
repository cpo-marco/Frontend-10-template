function createElement(type, attributes, ...children){
    let element 
    if(typeof type === "string"){
        element = new ElementWrapper(type);
    } else {
        element = new type;
    }
    for(let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for(let child of children){
        if(typeof child === "string") {
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    return element;
}

class ElementWrapper{
    constructor(type){
        this.root  = document.createElement(type);
    }
    setAttribute(name, value){
        this.root .setAttribute(name, value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }

}

class TextWrapper{
    constructor(content){
        this.root  = document.createTextNode(content);
    }
    setAttribute(name, value){
        this.root .setAttribute(name, value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }

}


class Carousel {
    constructor(){
        this.root  = document.createElement("div");
    }
    setAttribute(name, value){
        this.root .setAttribute(name, value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

let d = [
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"
]

//document.body.appendChild(a);

a.mountTo(document.body);