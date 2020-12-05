import React, { useState } from 'react';


const exampleData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

let sortedData = [...exampleData]
sortedData = sortedData.sort(function(a, b) {
  return a - b;
});

function linearSearch(value, dataset) {
  let count = 0;
  for (let i=0; i < dataset.length; i++) {
    count++;
    if (dataset[i] === value) return {wasFound: true, count}
  }
  return {wasFound: false, count}
}

function binarySearch(value, dataset, start=0, end=null, count=0) {
  end = end === null ? dataset.length : end;
  count++;

  if (start > end) return {wasFound: false, count}

  const index = Math.floor((start + end) / 2);
  const item = dataset[index];

  console.log(start, end);
  if (item == value) {
      return {wasFound: true, count};
  }
  else if (item < value) {
      return binarySearch(value, dataset, index + 1, end, count);
  }
  else if (item > value) {
      return binarySearch(value, dataset, start, index - 1, count);
  }
}

function App() {
  const [linearCount, setLinearCount] = useState(0);
  const [binaryCount, setBinaryCount] = useState(0);
  const [linearFound, setLinearFound] = useState(false);
  const [binaryFound, setBinaryFound] = useState(false);

  const performSearch = (e) => {
    e.preventDefault();
    let val = parseInt(e.target[0].value);
    let linear = linearSearch(val, exampleData);
    setLinearCount(linear.count);
    setLinearFound(linear.wasFound);

    let binary = binarySearch(val, sortedData);
    console.log(binary);
    setBinaryCount(binary.count);
    setBinaryFound(binary.wasFound);
  }

  return (
    <main className='App'>
      <form onSubmit={performSearch}>
        Search for:
        <input type='text' />
        <button>Search</button>
      </form>
      

      <h3>Linear Search</h3>
      {linearFound ? 'Found!' : 'Not found!'}
      <br />
      Searches Required: {linearCount}

      <h3>Binary Search</h3>
      {binaryFound ? 'Found!' : 'Not found!'}
      <br />
      Searches Required: {binaryCount}
    </main>
  );
}

export default App;