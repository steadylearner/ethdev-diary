import React, { useState } from 'react';
// import Web3 from "web3";
// import { storageAbi } from "./abis";
import './App.css';

// const web3 = new Web3(Web3.givenProvider);

// Find it with $truffle console
// const contractAddr = '0x97EaC1d4C5eA22dE6ba7292FA5d01a591Aac83A7';
// const SimpleContract = new web3.eth.Contract(storageAbi, contractAddr);

function App() {
  const [number, setNumber] = useState(0);
  const [getNumber, setGetNumber] = useState('0x00')

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSet}>
          <label>
            Set Number:
            <input 
              type="text"
              name="name"
              value={number}
              onChange={ e => setNumber(e.target.value) } />
          </label>
          <input type="submit" value="Set Number" />
        </form>
        <br/>
        <button
          onClick={handleGet}
          type="button" > 
          Get Number 
        </button>
        { getNumber }
      </header>
    </div>  
  );

}

export default App;
