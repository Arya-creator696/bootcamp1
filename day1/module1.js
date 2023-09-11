export class Greeter {
    constructor(greerName){
        this.greerName = greerName;
    }
    sayHelloTo(name){
        console.log("Hello "+name + " from "+ this.greerName)
    }
}