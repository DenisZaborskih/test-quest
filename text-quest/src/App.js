import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App (){
  const [value, setValue] = useState('');

  const handleButtonClick = () => {
    console.log(value);
  }

  const handleInput = (e) => {
    setValue(e);
  }

  return (
    <main className="main-area">
      <Header />
      <Input placeholder="Введите текст..." onChange={handleInput}/>
      <Button children={'Нажать!'} onClick={handleButtonClick}/>
    </main>
  );
}

export default App;