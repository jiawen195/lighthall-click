import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var storedCount = parseInt(localStorage.getItem('count'));
  if (isNaN(storedCount)) {
    storedCount = 0;
  }
  const [count, setCount] = useState(storedCount);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count])

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>
        Click Count: {count}
      </h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
