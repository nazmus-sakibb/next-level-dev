import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <div className="flex gap-6">
        <button className="border-2 border-green-500 rounded-md px-2 py-3">
          Increment
        </button>
        <div>{count}</div>
        <button className="border-2 border-red-500 rounded-md px-2 py-3">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
