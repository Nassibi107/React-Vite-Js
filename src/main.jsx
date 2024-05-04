import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"

import TodoForm from './AxiosWeb/curd/Components/TodoForm.jsx'
import TodoList from './AxiosWeb/curd/Components/TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < TodoList/>
  </React.StrictMode>,
)
