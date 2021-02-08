import './App.css';
import { useState } from 'react'

function App() {
  const [todoItemValue, setTodoItemValue] = useState('')
  const [todoItems, addTodoItem] = useState([])
  const [indexValue, setIndexValue] = useState()

  const getTodoValue = (e) => {
    setTodoItemValue(e.target.value)
  }
  const addTodo = () => {
    const todoItemList = [...todoItems]
    todoItemList.push({todo:todoItemValue,completed:false})
    addTodoItem(todoItemList)
    setTodoItemValue('')
  }
  const deleteTodo = (index) => {
    const todoItemList = [...todoItems]
    todoItemList.splice(index, 1)
    addTodoItem(todoItemList)
  }
  const editTodo = (index) => {
    const itemValue = todoItems[index]
    setTodoItemValue(itemValue.todo)
    setIndexValue(index)
  }
  const updateTodo = () => {
    const list = [...todoItems]
    list[indexValue].todo = todoItemValue
    addTodoItem(list)
    setIndexValue()
    setTodoItemValue('')
  }
  const doLineThrough = (index) =>{
    const list = [...todoItems]
    list[index].completed = !list[index].completed 
    addTodoItem(list)
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input placeholder="Type your todo" value={todoItemValue} onChange={getTodoValue} />
      { typeof indexValue === 'number' ?
        <button onClick={updateTodo} className="update-btn"><i class="fas fa-pencil-alt"></i></button> :
        <button onClick={addTodo} className="add-btn"><i class="fas fa-plus-circle"></i></button>
      }
      <ul>
        {todoItems.map((item, index) => {
          return (
            <li key={index} className={todoItems[index].completed ? 'line-show' : 'line-hide'}>
              {item.todo}
             <button className="delete-btn" onClick={() => deleteTodo(index)}><i className="far fa-trash-alt"></i></button>
              <button className="edit-btn" onClick={() => editTodo(index)}> <i class="far fa-edit"></i></button>
              <button className="stroke-btn" onClick={()=>doLineThrough(index)}><i class="fas fa-strikethrough"></i></button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
