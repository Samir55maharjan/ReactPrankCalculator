
import './App.css';
import { BtnArea } from './components/BtnArea';
import { Display } from './components/Display';
import {useState} from 'react';

const operators =["%", "/", "*", "-", "+"];
const App=() => {

  const [strToDisplay, setStrToDisplay]= useState("");
  const [lastOperators, setLastOperators]= useState("");
 
  

 

  const handleOnButtonClick=(val)=> {
    console.log(val);
    if (val === "C") {
      
      return setStrToDisplay(strToDisplay.slice(0, -1));
    }
    if (val === "AC") {
      return setStrToDisplay("");
    }
    if (val === "=") {
      const lastChar= strToDisplay[strToDisplay.length - 1];

      let temStr = strToDisplay
      
      if(operators.includes(lastChar)){
        temStr=strToDisplay.slice(0, -1);
      }
      return setStrToDisplay(eval(temStr).toString());
    }

    if (operators.includes(val)) {
      
      if(!strToDisplay) {
        return;
      }
      let temStr = strToDisplay
      const lastChar = strToDisplay [strToDisplay.length -1];

      if (operators.includes(lastChar)) {
        temStr=strToDisplay.slice(0, -1);

      }
      setStrToDisplay(temStr + val);
      setLastOperators(val);
      return;
    }

    if (val === "."){
      if (lastOperators) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperators)

        const numberAfterLastOperator = strToDisplay.slice(operatorIndex)

        if(numberAfterLastOperator.includes(".")){
          return;
        }
      }
      if (!lastOperators && strToDisplay.includes(".")){
        return;
      }
    }

    setStrToDisplay(strToDisplay + val);
   
    
    
  };

  return (
    <div>
       <div className="wrapper">
   
    <div className="calculator">
        {/* <div class="display">0.00</div> */}
        <Display strToDisplay={strToDisplay}/>
        <BtnArea handleOnButtonClick={handleOnButtonClick}/>
        
        {/* <div class="btn btn-ac">AC</div>
        <div class="btn btn-c">C</div>
        <div class="btn btn-percent">%</div>
        <div class="btn btn-divide">/</div>
        <div class="btn btn-7">7</div>
        <div class="btn btn-8">8</div>
        <div class="btn btn-9">9</div>
        <div class="btn btn-x">*</div>
        <div class="btn btn-4">4</div>
        <div class="btn btn-5">5</div>
        <div class="btn btn-6">6</div>
        <div class="btn btn-minus">-</div>
        <div class="btn btn-1">1</div>
        <div class="btn btn-2">2</div>
        <div class="btn btn-3">3</div>
        <div class="btn btn-plus">+</div>
        <div class="btn btn-0">0</div>
        <div class="btn btn-dot">.</div>
        <div class="btn btn-equals">=</div> */}
    </div>


   </div>

    </div>
  );
}

export default App;
