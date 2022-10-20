// src/App.
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/config/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.counter.list)
  console.log(todos)
  const [state, setState] = useState("")
  const titleChange = (e) => {
    setState(e.target.value)
    console.log(e.target.value)
}
const submit = (e) => {
  e.preventDefault();
  dispatch(addTodo({id:todos.length+1, title:state}))
}
    return (
      <div>
        <form onSubmit={submit}>
          <input onChange={titleChange}></input>
          <button>추가</button>
        </form>
        {todos.map((item)=>{
          return (
            <div key={item.id}>{item.title}</div>
          )
        })}
       
      </div>
    )
  }

export default App;