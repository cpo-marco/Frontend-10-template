import {Evaluator} from "/toyjs/evaluator.js"
import {parse} from "/toyjs/SyntaxParser.js"

document.getElementById("run").addEventListener('click', event =>{
    let r = new Evaluator().evaluate(parse(document.getElementById("source").value))    
    console.log(r);
})