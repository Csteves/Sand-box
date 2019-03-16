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
    flyBehavior = new NoFly();
    quackBehavior = new Quack()
    display(){
        console.log("I'm a Mallard");
    }
}
class RubberDuck extends Duck{
    flyBehavior = new NoFly();
    quackBehavior = new Squeak();
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
