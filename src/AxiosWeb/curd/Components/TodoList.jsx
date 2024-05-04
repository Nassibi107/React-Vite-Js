
import axios from "axios";
import { useEffect, useState } from "react"

import API from '../Api/TodoApi'
import TodoForm from "./TodoForm";


function TodoList() {

   const [data, setData] = useState([]);

   const [mes, setMes] = useState({message : "" , type : ""});

   useEffect (()=> {
         (async () =>{
            const data = await API.gettAll()
            setData(data);
         })()


   },[])
   const onCreate = (todo) => {
      setMes((() => {
         message : "the item has added successfuly !"
         type : "primary"
     } ))
    setData(prv => [...prv,todo])

   }
  return (
   <div className="container">
      {/* {mes.message  ? <div className={`alert alert-${mes.type}`}>
            <strong>success</strong>
            <p>{mes.message}</p>
        </div> : ""} */}
      <TodoForm onCreate = {onCreate}/>
      <h1 className="alert">TodoList</h1>
      <hr/>
      <table className="table table-responsive text-center" >
         <thead className="thead-inverse">
            <tr>
               <th> #id</th>
               <th> Title</th>
               <th>Competed</th>
            </tr>
         </thead>
         <tbody>
            {
               data?.map((value) => <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                 <td className={`badge bg-${value.completed? 'success' : 'danger'}`}>&nbsp;</td>
                  </tr>)
            }
         </tbody>
      </table>
   </div>
  )
}

export default TodoList

