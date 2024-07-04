import { useState } from 'react'
import { PropTypes } from "prop-types"

const handleAdd = (event, newValue) => {
  console.log(event, newValue);
}

export const CounterApp = ({ value }) => {
    
    const [counter, setCounter] = useState(value);
    const counterAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
        console.log('+1');
    }
    const counterMinus = () => setCounter(counter - 1);
    const counterReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp: </h1>
      <h2 id="counter">{counter}</h2>
          <button onClick={ (event) => handleAdd(event, 'Hola') }>Button</button>
          <button onClick={ counterAdd }>
              +1
          </button>
          <button onClick={ counterMinus }>
              - 1
          </button>
          <button aria-label='btn-reset' onClick={ counterReset }>
              Reset
          </button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number
}
// defaultProps dejara de usarse en siguientes versiones de React
// los default props deben ser definidos en el main
// tambien pueden ser definidos en la funcion, directamente como una desestructuracion
// CounterApp.defaultProps = {
//     value:7
// }