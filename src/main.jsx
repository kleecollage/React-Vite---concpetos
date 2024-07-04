import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';
import {CounterApp} from './CounterApp';
import FirstApp from './FirstApp';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <CounterApp value={73}/>
    {/* <FirstApp title='title default desde el main'/> */}
  </React.StrictMode>
);