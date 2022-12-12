import React from "react";

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Olá, {name}. Também conhecido como {heroName}
            </h1>
        </div>
    )
}

export default Greet