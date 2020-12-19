import React from 'react'

//rfce shortcut for react functional component don't forget

function Search({handleInput}) {  // rather than use props.handleinput props is destructured and it child object can be used directly, this helps to ensure that the code is neater
    return (
       <section className='searchbox-wrap'>
           <input type="text" 
           placeholder='Search Your poison' 
           className="searchbox" 
           onChange={handleInput}/>
       </section>
    )
}

export default Search
