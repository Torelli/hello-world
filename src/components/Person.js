import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>
                Eu sou {person.name}. Eu tenho {person.age} anos. Eu sei {person.skill}
            </h2>
        </div>
    )
}

export default Person
