let arrayValues = document.getElementById('array-vals');
let executeButton = document.getElementById('execute-button');
let codeDisplay = document.getElementById('code-display');
let arrayLength = document.getElementById('array-length');
let arrayAtI = document.getElementById('array-at-i');
let visualization = document.getElementById('visualization');

// To do:
// 1. Separate array slot #s visually DONE
// 2. Explanation - note that arrays start at 0 DONE
// 3. Make selected array element light up DONE
// 4. Make clear button
// 5. Use style to connect numbers and stuff more?
// 6. Use regex to strip quotation marks from elements if text
//    for visual representation, or add them for "code" section?

arrayValues.defaultValue = '"do", "re", "mi", "fa", "so"';

executeButton.onclick = () => {
  updatePage();
};

const updatePage = () => {
  parsedArray = arrayValues.value.split(',');
  showVisualization(parsedArray);
  showArrayCode(parsedArray);
};

const showVisualization = (arr) => {
  //empty out whatever is in visualation already
  visualization.innerHTML = '';
  // for every value in text input, create a div representing value in array
  for (let i = 0; i < arr.length; i++) {
    let node = document.createElement('DIV');
    let iNode = document.createElement('span');
    iNode.innerHTML = i;
    iNode.setAttribute('class', 'i-val');
    let textNode = document.createTextNode(arr[i]);
    node.setAttribute('class', 'array-element');
    node.setAttribute('id', i);
    // Set 0 as default "selected" spot in array
    if (i === 0) {
      node.classList.add('selected');
    }
    node.appendChild(iNode);
    node.appendChild(textNode);
    visualization.appendChild(node);
  }

  // Clicking element in visualization brings up textual representation of value at that array location
  document.addEventListener('click', function (e) {
    if (e.target && Number.isInteger(parseInt(e.target.id))) {
      let i = e.target.id;
      // remove selected class from previously chosen array el
      document
        .getElementsByClassName('selected')[0]
        .classList.remove('selected');
      // add selected class to element you're clicking
      document.getElementById(i).classList.add('selected');
      // Textual representation of how contents of array shown at particular index
      arrayAtI.innerHTML = `myArray[${i}] = ${arr[i]}`;
    }
  });
};

const showArrayCode = (arr) => {
  // Display code to create array, length, & vals at different spots
  codeDisplay.innerHTML = `var myArray = [${arr}];`;
  arrayLength.innerHTML = `myArray.length = ${arr.length}`;
  arrayAtI.innerHTML = `myArray[0] = ${arr[0]}`;
};
