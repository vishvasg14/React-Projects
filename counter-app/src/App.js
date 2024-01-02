import { useState } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="mainDiv d-flex  justify-content-center align-items-center flex-column gap-10  fs-1">
      {/* <Navbar/> */}

      <div className="Heading ">Increment & Decrement</div>
      <div className="bg-white d-flex justify-content-center gap-12 py-2 border-white rounded-3 ">
        <button onClick={()=>setCount(count-1)}>-</button>
        <div className="px-5">{count}</div>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
      <button className="my-3 ResetBtn" onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
