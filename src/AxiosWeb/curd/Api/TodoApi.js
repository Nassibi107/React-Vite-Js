import myAxios from "./axios"



export default {
   gettAll : async() => {
      const data  = await myAxios.get('/')
      return data.data
   },
   create : async (todo) => {
      const data  = await myAxios.post('/',todo)
      return data;
   },
   update : () => [],
   delete : () => [],
}
