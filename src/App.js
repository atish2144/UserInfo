// import logo from './logo.svg';
// import './App.css';
import Data from './component/Data';
import { useState } from "react";
// import ComponentA from "./component/ComponentA";
// import ComponentB from "./component/ComponentB";
function App() {

  // const [count, setcount] = useState(0)

  // const handleChange = () => {
  //   setcount(count + 1)
  // }


  return (
    <div className="App" >
      <Data></Data>
      {/* <ComponentA count={count} />

      <ComponentB handleChange={handleChange} /> */}
    </div>
  );
}

export default App;
