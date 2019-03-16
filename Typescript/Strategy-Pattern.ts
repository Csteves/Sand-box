// Implementing the Strategy Pattern using Typscript

// Interfaces to Poly-morph the method fly & quack, through composition of an implemention class
interface Flybehavior {
    fly()
}
interface QuackBehavior {
    quack()
}
//  Behavior implementation classes encapsulating behaviors for each instance
//FLY BEHAVIORS
class FlyWithwings implements Flybehavior{
    fly(){
        console.log('I fly in the sky!')
    }
}
class NoFly implements Flybehavior{
    fly(){
        console.log(":( I can't fly")
    }
}
class FlysByPerson implements Flybehavior{
    fly(){
        console.log('I only fly in the hand of my fellow debugger')
    }
}
// QUACK BEHAVIORS
class Quack implements QuackBehavior{
    quack(){
       console.log(" quack quack")
    }
}
class Squeak implements QuackBehavior{
    quack(){
       console.log("Squueeeakkk");
    }
}
class Mute implements QuackBehavior{
    quack(){
       console.log("........");
    }
}
// Base Abstract Class Duck
abstract class Duck{
    flyBehavior:Flybehavior;
    quackBehavior:QuackBehavior;
    subSpecie:string;
    abstract display():void;
    performQuack(){
        this.quackBehavior.quack()
    };
    performFly(){
        this.flyBehavior.fly()
    };
     setFlyBehavior( fb:Flybehavior ){
        this.flyBehavior = fb;
     };
    setQuackBehavior(qb:QuackBehavior){
        this.quackBehavior = qb;
    };

}

// Derived instance classes
class Mallard extends Duck{
    constructor(fly?:Flybehavior, quack?:QuackBehavior, subSpecie?:string){
        super();
        this.flyBehavior = fly || new NoFly();
        this.quackBehavior = quack || new Quack();
        this.subSpecie = subSpecie || null;
    }

    display(){
        console.log(`I'm a ${this.subSpecie} Mallard`);
    }
}
class RubberDuck extends Duck{
    constructor(fly?:Flybehavior, quack?:QuackBehavior, subSpecie?:string){
        super();
        this.flyBehavior = fly || new NoFly();
        this.quackBehavior = quack || new Squeak();
        this.subSpecie = subSpecie || null;
    }
    display(){
        console.log("Rubber Ducky");
    }
}

const myMal = new Mallard();
myMal.display();
myMal.performFly();
myMal.performQuack();
myMal.setQuackBehavior(new Mute());
myMal.performQuack();

const debucky = new RubberDuck();
debucky.display();
debucky.performFly();
debucky.performQuack();
debucky.setFlyBehavior(new FlysByPerson());
debucky.performFly();

const subMal = new Mallard(new FlyWithwings(),new Mute(),"striped")
subMal.display();
subMal.performFly();
subMal.performQuack();

