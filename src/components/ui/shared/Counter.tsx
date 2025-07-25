import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="p-4 border rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-2">{count}</h2>
      <div className="space-x-2">
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
}
