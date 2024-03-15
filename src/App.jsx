import { useState } from 'react'
import './App.css'
import Head from './components/Head'

function App() {
  const [name, setName] = useState('');
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')))
  function handlebtn () {
    confirm('Rostan ham ushbu malumotni ochirmohchimisiz');
    
  }
  function handlebtnn () {
    confirm('Rostan ham ushbu malumotni tahrilamohchimisiz');
    
  }
  function handleClick(e) {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      name: name,
      status: false
    }


    function getData() {
      let data = [];
      if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
      }
      return data;
    }

    let old = getData();
    old.push(todo);
    localStorage.setItem('todos', JSON.stringify(old));
    setName('');
    let copy = JSON.parse(JSON.stringify(todos));
    copy.push(todo)
    setTodo(copy)
  }


  return (
    <>
      <div className="container">
        <Head></Head>
        <div>
          <form>
            <input className='input' type="text" placeholder='Enter todo here' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={handleClick}>Submit</button>
          </form>
          <div className="todo__wrapper">
           
           {
            todos && todos.map((el, index) => {
              return (
              
                <div key={index} className="todo__item">
                  <div className="block1">
                    <input type="checkbox"/>
                    <p>{el.name}</p>
                  </div>

                  <div className="actions">
                    <button onClick={handlebtnn} className='edit'>Edit</button>
                    <button onClick={handlebtn} className='delete'>Delete</button>
                  </div>
                </div>

              )
            })
           }
          
        

          </div>
        </div>
      </div>
    </>
  )
}

export default App
