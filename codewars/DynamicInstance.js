
// So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

// If .firstName or .lastName are changed, then .fullName should also be changed
// If .fullName is changed, then .firstName and .lastName should also be changed.
// Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
            get: function () { return this.firstName + " " + this.lastName},
            set: function (value) {
                let nameArr = value.split(' ');
                if(nameArr.length === 2){
                    [ this.firstName, this.lastName ] = [ nameArr[0], nameArr[1] ];
                }
            }
    });
};

let n = new NamedOne('John', "Doe");
n.firstName = "roy";
n.lastName  = 'Levine';
console.log(n.firstName)
console.log(n.lastName)
console.log(n.fullName)
n.fullName = 'Bucky Brooks'
console.log(n.firstName)
console.log(n.lastName)
console.log(n.fullName)