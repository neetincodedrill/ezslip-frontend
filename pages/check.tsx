import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        you clicked {count } times
      </button>

      <h2> you clicked {count } times</h2>
    </div>
  );
}

export default Example;