// https://github.com/steadylearner/Rust-Full-Stack/blob/master/parcel-react/src/components/Main.js

import React, { useState } from "react";
import Web3 from "web3";
import { storageAbi } from "./abis";

const web3 = new Web3(Web3.givenProvider);

//
const contractAddr = '0xAcA0812aDb08B3F5EFEb0872C2Aa121aFdb649a8';
const contract = new web3.eth.Contract(storageAbi, contractAddr);

export default function Main() {
  const [number, setNumber] = useState(0);
  const [getNumber, setGetNumber] = useState('0x00');

  const handleSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contract.methods.set(number)
                      .estimateGas();
    const result = await contract.methods.set(number).send({
      from: account,
      gas,
    });

    console.log(result);
  };

  const handleGet = async (e) => {
    e.preventDefault();
    const result = await contract.methods.get().call();
    setGetNumber(result);
    console.log(result);
  };

  return (
    <main className="font-two" >
      <h1>React Parcel Ethereum example</h1>
      <header className="App-header">
        <form
          onSubmit={handleSet}
        >
          <label >
            Set Number:
            <input
              type="text"
              name="name"
              value={number}
              onChange={ e => setNumber(e.target.value) }
            />
          </label>
          <input type="submit" value="Set Number" />
        </form>
        <br/>
        <button
          onClick={handleGet}
          type="button"
        >
          Get Number
        </button>
        <span>
          {getNumber}
        </span>
      </header>
    </main>
  );
}
