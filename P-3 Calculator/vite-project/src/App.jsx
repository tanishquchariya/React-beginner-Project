import React from 'react'
import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'

const App = () => {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [activeInput, setActiveInput] = useState("first")
  const [result, setResult] = useState("")

  function findroot(first, second) {
    let low = 1;
    let high = Number(first);
    let base = Number(second);
    let mid;
    while (low <= high) {
      mid = (low + high) / 2;
      let checkval = 1
      for (let i = 0; i < base; i++){
        checkval = checkval * mid;

        // if (checkval > Number(first)) {
        //   break;
        // }
      }

      if (checkval == Number(first)) {
        return mid;
      } else if (checkval < Number(first)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

    }
    console.log(mid);
    
    return mid;
  }
  function handleClick(value) {
    if (value === 'del') {
      setFirst("")
      setSecond("")
      setResult(0)
    } else if (value === '+') {
      setResult((Number(first) + Number(second)).toPrecision(2))
    } else if (value === '-') {
      setResult((Number(first) - Number(second)).toPrecision(2))
    } else if (value === '*') {
      setResult((Number(first) * Number(second)).toPrecision(2))
    } else if (value === '/') {
      setResult((Number(first) / Number(second)).toPrecision(2))
    } else if (value === '^') {
      setResult((Number(first) ** Number(second)).toPrecision(2))
    } else if (value == 'c') {
      if (activeInput === "first") {
        setFirst(first.slice(0, -1));
      } else {
        setSecond(second.slice(0, -1));
      }
    } else if (value === 'root') {
      // setResult(Number(Math.sqrt(first)).toPrecision(2))
      // setResult((Number(Math.pow(Number(first), 1 / Number(second)))).toPrecision(2))
      setResult(findroot(first, second).toFixed(3))
    }
    else {

      if (activeInput === "first") {
        // first-number logic
        setFirst(first + value)
      }

      else if (activeInput === "second") {
        // second-number logic
        setSecond(second + value)
      }

    }
  }

  return (
    <div className='calculator'>
      <div className='displayResult'>
        <h1>{result}</h1>
      </div>

      <div className='inputRow'>
        <div className='inputGroup'>
          <label>First number</label>
          <input
            type="text"
            value={first}
            placeholder='Enter First Number'
            onFocus={() => setActiveInput("first")}
            onChange={(e) => setFirst(e.target.value)} />

        </div>
        <div className='inputGroup'>
          <label>Second number</label>
          <input
            type="text"
            value={second}
            placeholder="Enter Second Number"
            onFocus={() => setActiveInput("second")}
            onChange={(e) => setSecond(e.target.value)}
          />
        </div>
      </div>

      <div className="buttonContainer">

        {/* Row 1 */}
        <Button
          value="clear"
          placeholder="C"
          onClick={() => handleClick("c")}
        />

        <Button
          value="sqrt"
          placeholder="√"
          onClick={() => handleClick("root")}
        />

        <Button
          value="power"
          placeholder="^"
          onClick={() => handleClick("^")}
        />

        <Button
          value="/"
          placeholder="÷"
          onClick={() => handleClick("/")}
        />


        {/* Row 2 */}
        <Button
          value={7}
          placeholder="7"
          onClick={() => handleClick(7)}
        />

        <Button
          value={8}
          placeholder="8"
          onClick={() => handleClick(8)}
        />

        <Button
          value={9}
          placeholder="9"
          onClick={() => handleClick(9)}
        />

        <Button
          value="*"
          placeholder="×"
          onClick={() => handleClick("*")}
        />


        {/* Row 3 */}
        <Button
          value={4}
          placeholder="4"
          onClick={() => handleClick(4)}
        />

        <Button
          value={5}
          placeholder="5"
          onClick={() => handleClick(5)}
        />

        <Button
          value={6}
          placeholder="6"
          onClick={() => handleClick(6)}
        />

        <Button
          value="-"
          placeholder="−"
          onClick={() => handleClick("-")}
        />


        {/* Row 4 */}
        <Button
          value={1}
          placeholder="1"
          onClick={() => handleClick(1)}
        />

        <Button
          value={2}
          placeholder="2"
          onClick={() => handleClick(2)}
        />

        <Button
          value={3}
          placeholder="3"
          onClick={() => handleClick(3)}
        />

        <Button
          value="+"
          placeholder="+"
          onClick={() => handleClick("+")}
        />


        {/* Row 5 */}
        <Button
          value={0}
          placeholder="0"
          className="zeroButton"
          onClick={() => handleClick(0)}
        />

        <Button
          value="."
          placeholder="."
          onClick={() => handleClick(".")}
        />

        <Button
          value="del"
          placeholder="Del"
          onClick={() => handleClick("del")}
        />

      </div>
    </div>
  )
}

export default App