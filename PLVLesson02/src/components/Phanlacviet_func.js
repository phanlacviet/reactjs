import React from 'react'

export default function Phanlacviet_func(props) {
    const users = {
        name:"phan lac viet",
        age:20
    }
  return (
    <div>
        <h2>function components DEMO</h2>
        <p>
            welcome to , {users.name} , {users.age}
        </p>
    </div>
  )
}
