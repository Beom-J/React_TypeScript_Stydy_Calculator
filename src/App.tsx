import { useState } from "react";

function App() {
  
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("0");

  const [calculator, setCalculator] = useState({
    inputText: "",
    result: "0",
  })

  const handleClickNumber = (num: number) => {
    setInputText(inputText === "" ? num.toString() : inputText + num);

    setCalculator( {...calculator, inputText: calculator.inputText === "" ? num.toString() : calculator.inputText + num})
  }

  const handleClickOperator = (operator: string) => {
    if (inputText === "") return;

    if(!checkLastText()) return;

    setInputText(inputText + operator );
  }

  const handleClickReset = () => {
    setInputText("");
    setResult("0");
  };

  const handleClickEqual = () => {
    if(!checkLastText()) return;

    // eslint-disable-next-line no-eval
    const value = eval(inputText);
    setResult(value);
  };

  const checkLastText = () => {
    const last = inputText.substring(inputText.length - 1, inputText.length);
    if (last === '+' || last === '-' || last === '*' || last === '/') {
      return false;
    }

    return true;
  }

  return (
    <div style={{ width: "200px", backgroundColor: "#EEEEEE" }}>
      <div style={{ textAlign: "right" }}>{inputText === "" ? 0 : inputText}</div>
      <div style={{ textAlign: "right" }}>{result}</div>
      <NumberButton num={1} onClick={handleClickNumber} />
      <NumberButton num={2} onClick={handleClickNumber} />
      <NumberButton num={3} onClick={handleClickNumber} />
      <OperatorButton operator={'+'} onClick={handleClickOperator}/>
      <br />
      <NumberButton num={4} onClick={handleClickNumber} />
      <NumberButton num={5} onClick={handleClickNumber} />
      <NumberButton num={6} onClick={handleClickNumber} />
      <OperatorButton operator={'-'} onClick={handleClickOperator}/>
      <br />
      <NumberButton num={7} onClick={handleClickNumber} />
      <NumberButton num={8} onClick={handleClickNumber} />
      <NumberButton num={9} onClick={handleClickNumber} />
      <OperatorButton operator={'*'} onClick={handleClickOperator}/>
      <br />
      <NumberButton num={0} onClick={handleClickNumber} />
      <ChangeResultButton keyValue={'c'} onClick={handleClickReset} />
      <ChangeResultButton keyValue={'='} onClick={handleClickEqual} />
      <OperatorButton operator={'/'} onClick={handleClickOperator}/>
    </div>
  );
}

function NumberButton({ num, onClick }: { num: number, onClick: ( num: number) => void }) {
  return <button onClick={() => onClick(num)}>{num}</button>
}

function OperatorButton({ operator, onClick }: { operator: string, onClick: ( operator: string ) => void}) {
  return  <button onClick={() => onClick(operator)}>{operator}</button>
}

function ChangeResultButton({ keyValue, onClick }: {keyValue: string, onClick: () => void}){
  return <button onClick={() => onClick()}>{keyValue}</button>
}

export default App;
