import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => (<Person key={person.id} person={person} />))
    return <div>
        <table className='tabela'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Habilidade</th>
                </tr>
            </thead>
            <tbody>
                {personList}
            </tbody>
        </table>
    </div>

}

export default NameList
