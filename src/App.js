import Search from './components/Search'
import React, { useState } from 'react'
import Axios from 'axios'


function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  })

  const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=f3fde9f9'
  const search = (e) => {
    if(e.key === 'Enter'){
      Axios(apiurl + '&s=' + state.s).then((data) => {
        console.log(data)
      })
    }
  }
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
        <Search handleInput={handleInput} search={search}/>
      </main>
    </div>
  );
}

export default App;
