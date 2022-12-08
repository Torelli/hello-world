import React from "react";

const Hello = (props) => {
    console.log(props)
    return( 
        <div>
            <h1>Olá, {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Hello