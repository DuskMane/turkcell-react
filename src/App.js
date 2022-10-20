import { useState } from "react";
import AutoCounter from "./components/AutoCounter";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from "./components/Header";
import User from "./components/User";

function App() {
   const user ={
     username: "Duskmane",
     age: 22,
     city: "Adana",
  };
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <Header  />
      <User data={user} />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      {showCounter && <AutoCounter />}
      <button onClick={() => setShowCounter(!showCounter)}>Stop/Start</button>
    </div>
  );
}

export default App;
