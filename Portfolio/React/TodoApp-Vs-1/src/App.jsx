import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoitems from "./components/ToDoItem"
import ToDoItems2 from "./components/ToDoitems2"
import "./App.css";


function App() {
  

  return (
    <>
      <center className = "Todo-Container">
        <AppName/>
       <AddToDo/>
       <div className="items-container">
       <ToDoitems/>
       <ToDoItems2/>
       </div>

      

     
      </center>
    </>
  )
}

export default App
