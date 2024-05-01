import axios from "axios"


const Myaxios = axios.create(
   {
      baseURL:'https://jsonplaceholder.typicode.com',
      timeout:5000
   }
)


export default Myaxios;
