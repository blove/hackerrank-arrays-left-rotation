//global variables
let n = 0;
let d = 0;
let data = [];

//read standard input
process.stdin.setEncoding("utf8");
process.stdin.resume();

//store input
let input = "";
process.stdin.on("data", function(data) {
  input += data;
});
process.stdin.on("end", function() {
  let linesOfInput = input.split("\n");
  let temp = linesOfInput[0].split(" ");
  temp.map(Number);
  n = temp[0];
  d = temp[1];

  data = linesOfInput[1].split(" ");

  main();
})

//let's do it
function main() {
  //verify values
  if (n <= 0 || d <= 0 || data.length > n || data.length < d) {
    throw Error("The input values are invalid.");
  }

  //get result
  //let result = getResultsUsingLoop();
  //let result = getResultUsingArrayMap();
  let result = getResultsUsingArrayShift();

  //output
  process.stdout.write(result.join(" "));
}

//Solution using for-loop
function getResultsUsingLoop() {
  let leftRotate = function(result) {
    let temp = [];
    for (var i=0; i<n-1; i++) {
      temp[i] = result[i+1];
    }
    temp[i] = result[0];
    return temp;
  };

  let result = data.slice(0);
  for (let i = 0; i < d; i++) {
    result = leftRotate(result);
  }

  return result;
}

//Solution using array.map()
function getResultUsingArrayMap() {
  let result = data.map(function(value, index) {
    let pos = parseInt(index) + parseInt(d);
    if (pos > n-1) {
      pos = pos - n;
    }
    return data[pos];
  });

  return result;
}

//Solution using array.shift()
function getResultsUsingArrayShift() {
  let temp = data.slice(0);
  for (let i=0; i<n-1; i++) {
    let first = temp.shift();
    temp.push(first);
  }
  return temp;
}
