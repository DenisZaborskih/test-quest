import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App (){
  const handleButtonClick = () => {
    console.log()
  }

  return (
    <main className="main-area">
      <Header />
      <Input placeholder="Введите текст..."/>
      <Button />
    </main>
  );
}

export default App;