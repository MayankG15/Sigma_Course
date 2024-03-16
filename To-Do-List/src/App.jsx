import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
// import './App.css'

import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos,setTodos] = useState([])
  const [showFinished,setshowFinished] = useState(true)

  useEffect(() => {
    let todoString= localStorage.getItem("todos")
    if(todoString){
      let todos= JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }  
  }, [])
  

  const toggleFinished= ()=>{
    setshowFinished(!showFinished)
  }

  const saveToLS = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  // const [mytodo,setMyTodo] = useState(0)
  const handleEdit= (e,id)=>{
    let t =todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos=todos.filter(item=>{
      return item.id!==id;
    });
    
    setTodos(newTodos)
    saveToLS()
  }


  const handleDelete= (e,id)=>{
    let newTodos=todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos)
    saveToLS()
  }


  const handleAdd= ()=>{
    setTodos([...todos,{id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    saveToLS()
  }


  const handleChange= (e)=>{
    setTodo(e.target.value)
  }


  const handleCheckbox =  (e) => {
    let id= e.target.name;
    let index= todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto bg-violet-100 my-5 rounded-xl p-5 min-h-[80vh] w-1/2">
      <h1 className='font-bold text-center text-xl'>itask -  Manage your Todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo </h2>
          <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5 py-1" />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 disable:bg-voilet-700 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md'>Save</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> show Finished
        <h2 className='text-lg font-bold'>Your ToDos</h2>
        <div className="todos">
        {todos.length===0 && <div className='m-5'>No todos to display</div>}
        {todos.map(item=>{

        
          return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/2 my-3 justify-between">
          <div className='flex gap-5'>
          <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          
           
            <div className="buttons flex h-full ">
              <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
              <button onClick={(e)=>handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
            </div>
           

          </div>
        })}
        </div>
      </div>
    </>
  )
}

export default App
