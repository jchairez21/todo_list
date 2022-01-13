import './App.css';
import DisplayToDo from './components/DisplayToDo';
import { useState } from 'react';
import FormToDo from './components/FormToDo';

function App() {

  // [0][1]
  const [newTodoList, setNewTodoList] = useState(
    [
      { name: "test1", status: true },
      { name: "test2", status: false }
    ]
  )


  // CREATE ⬅
  const createTodo = (eNewTodo) => {
    console.log(eNewTodo)
    const copy = [...newTodoList]
    copy.push(eNewTodo)
    setNewTodoList(copy);
  }

  // DELETE ⬅
  const deleteTodo = (deleteidx) => {
    console.log(deleteidx)
    const filterTodo = newTodoList.filter((todo, idx) => {
      if (deleteidx !== idx) {
        return true
      } else return false
    })
    setNewTodoList(filterTodo)
  }

  // UPDATE ⬅
  const updateTodo = (idx) => {
    const copy = [...newTodoList]
    if (copy[idx].status === true) {
      copy[idx].status = false
    } else {
      copy[idx].status = true
    }
    setNewTodoList(copy)
  }


  return (
    <div className="App">
      <FormToDo createToDo={createTodo} />
      {
        newTodoList.map((newTodo, idx) => {
          return <DisplayToDo todo={newTodo} key={idx} idx={idx} deleteTodo={deleteTodo} updateTodo={updateTodo}
          />
        })
      }
    </div>
  );
}

export default App;

