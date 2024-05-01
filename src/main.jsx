import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"

import TodoForm from './AxiosWeb/curd/Components/TodoForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < TodoForm/>
  </React.StrictMode>,
)
