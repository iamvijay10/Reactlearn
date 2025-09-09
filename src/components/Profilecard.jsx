import React from 'react'

function Profilecard({persons}) {
  return (
    <div className='profiles'>
        {persons.map((person,i)=>(
 <div key={i} className='dp'>
    <img src={person.image}/>
    <h1>{person.name}</h1>
    <p>{person.des}</p>
      </div>
  ))}
    </div>
    )
}

export default Profilecard