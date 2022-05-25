// import logo from './logo.svg';
// import './App.css';
import Data from './component/Data';
// import List from './component/List';
import { useState, createContext } from "react";
// import ComponentA from "./component/ComponentA";
// import ComponentB from "./component/ComponentB";
// import User from './component/User';
// import User1 from './User1';
import CompA from "./component/CompA";


// export const firstName = createContext();

function App() {

  // const [count, setcount] = useState(0)
  const [value, setValue] = useState(0)
  // const handleChange = () => {
  //   setcount(count + 1)
  // }

  // function alert(data) {
  //   console.log(data);
  //   setValue(data)
  // }

  const handleChange = () => {
    setValue(prev => prev + 1)
  }


  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }} >
      {/* <User alert={alert}></User> */}
      {/* <User1 val={value} ></User1> */}

      <Data></Data>
      {/* <ComponentA count={count} />
      <ComponentB handleChange={handleChange} /> */}
      {/* <List></List> */}
      {/* <firstName.Provider value={{ fn: "abc", ln: "pqr" }}> */}
      {/* <CompA data={value} handleChange={handleChange}></CompA> */}
      {/* </firstName.Provider> */}




    </div>
  );
}

export default App;
