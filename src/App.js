import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User/User';

function App() {
  const [friend, setFriend] = useState([false]);
  return (
    <div className="App">
      <h1>Is Friend: {friend.toString()}</h1>
      <button onClick={() => setFriend(!friend)}>Check Friend</button>
      <User friend = {friend}></User>
    </div>
  );
}

export default App;
