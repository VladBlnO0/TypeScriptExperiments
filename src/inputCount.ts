import readlineSync from "readline-sync";

const numElements = readlineSync.question(
  "Enter the number of elements for the array: ",
);

const numElementsStr: number = parseInt(numElements);

const inputArray: number[] = [];

if (numElementsStr > 0) {
  const count = 0;

  function getElement(
    numElements: string,
    inputArray: number[],
    count: number,
  ) {
    if (count < numElementsStr) {
      const num = readlineSync.question("Enter element " + (count + 1) + ": ");

      inputArray.push(parseInt(num));

      count++;
      getElement(numElements, inputArray, count);
    } else {
      const totalSum = inputArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      console.log("Your array: " + totalSum + "\n");
    }
  }

  getElement(numElements, inputArray, count);
} else {
  console.log("Invalid number of elements entered.\n");
}
