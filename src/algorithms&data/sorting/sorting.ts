/**
 * Bubble sort
 * @param array - The array to be sorted
 * @returns The sorted array
 */
function bubbleSort(array: number[]): number[] {
  const n: number = array.length;
  let isSwapped: boolean;

  for (let i = 0; i < n - 1; i++) {
    isSwapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      const current: number | undefined = array[j];
      const next: number | undefined = array[j + 1];

      if (current !== undefined && next !== undefined) {
        if (current > next) {
          [array[j], array[j + 1]] = [next, current];
          isSwapped = true;
        }
      }
    }

    if (!isSwapped) break;
  }

  return array;
}

/**
 * Selection sort
 * @param array - The array to be sorted
 * @returns The sorted array
 */
function selectionSort(array: number[]): number[] {
  const len: number = array.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex: number = i;

    for (let j = i + 1; j < len; j++) {
      const currentValue: number = array[j] as number;
      const minIndexValue: number = array[minIndex] as number;

      if (currentValue < minIndexValue) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex]!, array[i]!];
    }
  }

  return array;
}

/**
 * Sorts an array of numbers using the Insertion Sort algorithm.
 * @param array - The array of numbers to be sorted.
 * @returns The sorted array.
 */
function insertionSort(array: number[]): number[] {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    // The current element to be inserted into the sorted section
    const current = array[i];
    let j = i - 1;

    // Shift elements of the sorted section that are greater than current
    // to one position ahead of their current position
    while (j >= 0 && array[j]! > current!) {
      array[j + 1] = array[j]!;
      j--;
    }

    // Place the current element into its correct location
    array[j + 1] = current!;
  }

  return array;
}

/*
 * Quick sort
 * @param array - The array to be sorted
 * @returns The sorted array
 */
function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot: number | undefined = array[array.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (pivot !== undefined && (array[i] as number) < pivot) {
      left.push(array[i] as number);
    } else {
      right.push(array[i] as number);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)] as number[];
}

/*
 * Merge sort
 * @param array - The array to be sorted
 * @returns The sorted array
 */
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      const leftValue: number | undefined = left[leftIndex];
      const rightValue: number | undefined = right[rightIndex];

      if (leftValue !== undefined && rightValue !== undefined) {
        if (leftValue < rightValue) {
          result.push(leftValue);
          leftIndex++;
        } else {
          result.push(rightValue);
          rightIndex++;
        }
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  return merge(mergeSort(left), mergeSort(right));
}

const array: number[] = [56, -16, 52, 20];
console.log(array);

console.log("\n\nBubble sort");
console.log(bubbleSort(array));

console.log("\n\nSelection sort");
console.log(selectionSort(array));

console.log("\n\nInsertion sort");
console.log(insertionSort(array));

console.log("\n\nQuick sort");
console.log(quickSort(array));

console.log("\n\nMerge sort");
console.log(mergeSort(array));
