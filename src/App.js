// import logo from './logo.svg';
// import './App.css';
import Data from './component/Data';
import List from './component/List';
import { useState } from "react";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import User from './component/User';
import User1 from './User1';
function App() {

  // const [count, setcount] = useState(0)
  const [value, setValue] = useState()
  // const handleChange = () => {
  //   setcount(count + 1)
  // }

  function alert(data) {
    console.log(data);
    setValue(data)
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }} >
      <User alert={alert}></User>
      <User1 val={value} ></User1>

      {/* <Data></Data> */}
      {/* <ComponentA count={count} />
      <ComponentB handleChange={handleChange} /> */}
      {/* <List></List> */}




    </div>
  );
}

export default App;
