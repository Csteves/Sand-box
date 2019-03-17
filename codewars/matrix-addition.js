// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

let x =  [ [1, 2, 3],
           [3, 2, 1],
           [1, 1, 1] ]

let y =   [ [2, 2, 1],
            [3, 2, 3],
            [1, 1, 3] ]

// Imperative approach
function matrixAddition(a,b){
    let sumMatrix = [];
    for (let i = 0; i < a.length; i++){
        let [currentRowA, currentRowB] = [a[i],b[i]];
        let j = i;
        sumMatrix.push([]);
        for(let i = 0; i < currentRowA.length; i++){
            let sum = currentRowA[i] + currentRowB[i];
            sumMatrix[j][i] = sum;
        }
    }
    return sumMatrix;
}
// Functional approach using Higher Order Functions
function functionalMatrixAddition(a, b){
    // first dimension of array
    return a.map(function(n, i){
        // second dimensiion of array
      return n.map(function(o, j){
          // for each matrice return n + m ||(o = a[i][j]) + b[i][j]
        return o + b[i][j];
      });
    });
  }

console.log(matrixAddition(x,y))
console.log(functionalMatrixAddition(x,y))