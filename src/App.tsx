import { useState } from "react";
import { Counter } from "../src/components/ui/shared/Counter";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";

export function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img src={logo} alt="Bun Logo" className="h-36 p-6" />
        <img src={reactLogo} alt="React Logo" className="h-36 p-6" />
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold mb-4">Tugas 6 - Counter App</h1>

          {/* Komponen Counter menerima props dari App */}
          <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
          />

          {/* Tombol Reset */}
          <button
            onClick={reset}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          >
            Reset Counter
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
