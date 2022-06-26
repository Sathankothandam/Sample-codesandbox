import { useState } from "react";
import "./styles.css";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [add, setAdd] = useState([]);

  let HandleChange = (e) => {
    setValue(e.target.value);
  };
  let Handleadd = () => {
    setAdd([...add, value]);
    setValue("");
  };
  return (
    <div className="App">
      <input
        value={value}
        onChange={HandleChange}
        placeholder="Add something"
      />
      <button onClick={Handleadd}>Add</button>
      <br />
      <br />
      <br />

      {add.map((e) => (
        <div className="list">{e}</div>
      ))}
      <div className="clear">
        <button
          onClick={() => {
            setAdd([]);
          }}
        >
          Clear Data
        </button>
      </div>
    </div>
  );
}
