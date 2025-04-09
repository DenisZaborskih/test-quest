import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    if (value !== '') console.log(value);
  };

  const handleInput = (e) => {
    setValue(e);
  };

  return (
    <main className="main-area">
      <Header />
      <div className="main-area__input-area">
        <Input placeholder="Введите текст..." onChange={handleInput} />
        <Button onClick={handleButtonClick} />
      </div>
    </main>
  );
}

export default App;
