import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import OtherCard from "./Components/OtherCard";
const val = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const obj1 = {
  name: "diamond",
  icon: <i className="far fa-gem"></i>,
  color: "red",
};
const obj2 = {
  name: "heart",
  icon: <i className="fas fa-heart"></i>,
  color: "red",
};
const obj3 = {
  name: "spade",
  icon: <i className="fab fa-canadian-maple-leaf"></i>,
  color: "black",
};
const obj4 = {
  name: "club",
  icon: <i className="fas fa-tree"></i>,
  color: "black",
};
let objectArray = [obj1, obj2, obj3, obj4];

const result = [];
const fun = () => {
  for (let i = 0; i < objectArray.length; i++) {
    for (let j = 0; j < val.length; j++) {
      let o = {
        ...objectArray[i],
        value: val[j],
      };
      result.push(o);
    }
  }
};
fun();

function App() {
  const [data, setData] = useState(result);
  const [visible, setVisible] = useState(false);
  const [pickFive, setPickFive] = useState([]);

  const suffleHandler = () => {
    setVisible(false);
    setPickFive([]);
    let arr = [...result];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setData(arr);
  };

  const pickCardHandler = () => {
    let arr = [...data];
    if (data.length > 5) {
      let fiveData = [arr[0], arr[2], arr[1], arr[4], arr[3]];
      setPickFive(fiveData);
      let restArr = arr.filter((item, i) => i > 5);
      setData(restArr);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {data &&
          data.map((item, i) => (
            <Card
              key={i}
              name={item.name}
              color={item.color}
              icon={item.icon}
              value={item.value}
            />
          ))}
      </div>
      <div className="buttons">
        <button onClick={suffleHandler}>Suffle</button>
        <button onClick={pickCardHandler}>Pick 5 Card's</button>
      </div>
      <div className="buttons">
        {visible && <p>Not allowed to pick five card's.</p>}
      </div>
      <div className="container">
        {pickFive &&
          pickFive.map((item, i) => (
            <OtherCard
              key={i}
              name={item.name}
              color={item.color}
              icon={item.icon}
              value={item.value}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
