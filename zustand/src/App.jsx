import { useRef } from 'react';
import './App.css';
import { create } from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  update: newState => set({ count: newState }),
}));

const ViewCounter = () => {
  const counter = useStore(state => state.count);
  return <h1>{counter}</h1>;
};

const ControlCounter = () => {
  const inputRef = useRef(null);
  const handleIncrement = useStore(state => state.increment);
  const handleDecrement = useStore(state => state.decrement);
  const handleReset = useStore(state => state.reset);
  const handleUpdate = useStore(state => state.update);

  const handleClick = () => {
    const newValue = inputRef.current.value;
    handleUpdate(Number(newValue));
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
      <input type="number" ref={inputRef} />
      <button onClick={handleClick}>add</button>
    </>
  );
};

function App() {
  return (
    <>
      <ViewCounter />
      <ControlCounter />
    </>
  );
}

export default App;
