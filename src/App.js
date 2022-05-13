import './App.css';
import React from 'react';
import Header from "./Components/header";
import {Balance} from "./Components/balance";
import {AccSummary} from "./Components/accSummary";
import {TransHistory} from "./Components/transHistory";
import {AddTransaction} from "./Components/addTransaction";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return <> 
  <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <AccSummary/>
      <TransHistory/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
    </>
}

export default App;
