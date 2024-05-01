
import axios from "axios";
import { useEffect, useState } from "react"

import API from '../Api/TodoApi'



function TodoList() {

   const [data, setData] = useState([]);


   useEffect (()=> {
         (async () =>{
            const data = await API.gettAll()
            setData(data);
         })()
   },[])
  return (
   <div className="container">
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

