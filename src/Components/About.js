import React, { useEffect, useState } from 'react';

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setcount(count + 1);
      const date = new Date();
      setDate(date);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const [date, setDate] = useState(new Date());

  return <h1>{date.toLocaleTimeString()}</h1>;
}

export default App;