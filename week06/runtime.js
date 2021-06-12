export class ExecutionContext {
    constructor(realm, lexicalEnviroment, variableEnviroment){
        variableEnviroment = variableEnviroment || lexicalEnviroment;
        this.lexicalEnviroment = lexicalEnviroment;
        this.variableEnviroment = variableEnviroment;
        this.realm = realm;
    }
    //LexicalEnviroment: {a:1, b:2}
}

export class Reference {
    constructor(object, property) {
        this.object = object;
        this.property = property;
    }
    set(value) {
        this.object[this.property] = value;
    }
    get() {
        return this.object[this.property];
    }
}

export  class Realm{
    constructor(){
        this.global = new  Map(),
        this.Object = new  Map(),
        this.Object.call = function(){

        }
        this.Object_prototype = new Map()
    }
}

export class EnviromentRecord{
    constructor(){
        this.thisValue
        this.variables = new Map();
        this.outer = null;            
        }
 
}
