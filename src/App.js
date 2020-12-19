import Search from './components/Search'
import React, { useState } from 'react'


function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  })

  const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=f3fde9f9'
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {
        ...prevState,
        s: s
      }
    });
    console.log(state.s);
  } 

  return (
    <div className="App">
      <header>
        <h1>
        Movie Database
        </h1>
      </header>
      <main>
        <Search handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
