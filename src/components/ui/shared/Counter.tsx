type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function Counter({ count, onIncrement, onDecrement }: CounterProps) {
  return (
    <div className="p-4 border rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-2">{count}</h2>
      <div className="space-x-2">
        <button onClick={onDecrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={onIncrement} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
}
