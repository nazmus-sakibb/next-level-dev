import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counter/CounterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-6">
        <button
          className="border-2 border-green-500 rounded-md px-2 py-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-2 border-green-500 rounded-md px-2 py-3"
          onClick={() => dispatch(incrementByAmount(7))}
        >
          Increment by value
        </button>
        <div>{count}</div>
        <button
          className="border-2 border-red-500 rounded-md px-2 py-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
