import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('filho')}>Cumprimentar pai</button>
    </div>
  )
}

export default ChildComponent
