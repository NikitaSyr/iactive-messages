import React, {useEffect} from 'react';
import './App.css';
import {messagesAPI} from "./api/api";
import Messages from "./components/Messages/Messages";

function App() {
  useEffect(() => {
    (async () => {
      const data = await messagesAPI.getFirstMessages();
      console.log(data)
    })()
  }, []);

  return (
    <div className="app">
      <Messages/>
    </div>
  );
}

export default App;
