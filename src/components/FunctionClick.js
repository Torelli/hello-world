import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Botão clicado")
    }
  return (
    <div>
      <button onClick={clickHandler}>Clique aqui!</button>
    </div>
  )
}

export default FunctionClick
