import React from 'react'

function Person({ person }) {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.skill}</td>
        </tr>
    )
}

export default Person
