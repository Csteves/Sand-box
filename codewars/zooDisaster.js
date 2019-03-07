// It's a Zoo Disaster!
// Here is a list of zoo animals, and what they can eat

// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass

// Figure out who eats who until no more eating is possible.

//INPUT
// A comma-separated string representing all the things at the zoo

// OUTPUT
// A list of strings (refer to the example below) where:
// The first element is the initial zoo (same as INPUT)
// The last element is a comma-separated string of what the zoo looks like when all the eating has finished
// All other elements (2nd to last-1) are of the form X eats Y describing what happened

// EXAMPLE
// "fox,bug,chicken,grass,sheep" ======= input
// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"] ====== output


let animals = ["antelope eats grass",
    "big-fish eats little-fish",
    "bug eats leaves",
    "bear eats big-fish",
    "bear eats bug",
    "bear eats chicken",
    "bear eats cow",
    "bear eats leaves",
    "bear eats sheep",
    "chicken eats bug",
    "cow eats grass",
    "fox eats chicken",
    "fox eats sheep",
    "giraffe eats leaves",
    "lion eats antelope",
    "lion eats cow",
    "panda eats leaves",
    "sheep eats grass"];

var whoEatsWho = function (zoo) {
    if (!zoo[0]) { return [zoo, zoo] }
    let aniObj = {};
    let order = []
    let zooArr = zoo.split(",");
    animals.forEach((item, i) => {
        let aniType = item.split(' ');
        if (!aniObj.hasOwnProperty(aniType[0])) {
            aniObj[aniType[0]] = [];
            aniObj[aniType[0]].push(aniType[2])
        } else {
            aniObj[aniType[0]].push(aniType[2])
        }
    })
    for (let i = 1; i < zooArr.length; i++) {
        let str = ""
        let ani = zooArr[i];
        let animal = '';
        let food = '';
        if (ani) {
            if (i >= 1) {
                if (aniObj[zooArr[i - 1]] && aniObj[zooArr[i - 1]].includes(zooArr[i])) {
                    [animal, food] = [zooArr[i - 1], zooArr[i]];
                    zooArr.splice(i, 1);
                    i += 0 - i;
                } else if (aniObj[ani] && aniObj[ani].includes(zooArr[i - 1])) {
                    [animal, food] = [ani, zooArr[i - 1]]
                    zooArr.splice(i - 1, 1);
                    i += 0 - i;
                } else if (aniObj[ani] && aniObj[ani].includes(zooArr[i + 1])) {
                    [animal, food] = [ani, zooArr[i + 1]];
                    zooArr.splice(i + 1, 1);
                    i += 0 - i
                } else if (aniObj[zooArr[i + 1]] && aniObj[zooArr[i + 1]].includes(zooArr[i])) {
                    [animal, food] = [zooArr[i + 1], zooArr[i]]
                    zooArr.splice(i, 1);
                    i += 0 - i
                } else if (ani === 'grass' || ani === 'leaves') {
                    if (aniObj[zooArr[i + 1]] && aniObj[zooArr[i + 1]].includes(ani)
                        || (aniObj[zooArr[i - 1]] && aniObj[zooArr[i - 1]].includes(ani))) {
                        zooArr.splice(i, 1)
                        i += 0 - i
                    }
                }
                if (animal.length && food.length) { str = `${animal} eats ${food}` }
            }
        }
        if(str) order.push(str);
    }
    order = [...order, zooArr.join(',')]
    return [zoo, ...order]
}

console.log(whoEatsWho("grass,grass,cow,leaves,bug,big-fish,leaves,bear"))
