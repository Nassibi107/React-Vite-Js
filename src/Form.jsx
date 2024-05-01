
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from "yup"
const onSubmitForm = (data) =>{
  console.log(data);
}

const schema = yup.object({
  fullName :yup.string().required(),
  age :yup.number().required(),
  password :yup.string().test('vlue',"must be exactyl 5 caractres", value => {
    return value
  }),
  email : yup.string().email()
})

function Form () {

  const {register,handleSubmit,formState} = useForm({
    mode :'onBlur',
    resolver : yupResolver(schema),
  });
  const {errors ,isSubmitted ,isValid} = formState

  return (
    <div className="container">
       {isSubmitted && isValid && <div className="alert alert-primary">
          <strong>Success :</strong>
          Form isSubmitted
        </div>}
        <h2 className="display-6 text-primary">Create User</h2>
        <hr className="text-primary"/>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
              <label htmlFor="fullname">Full name</label>
              <input className="form-control" type="text" {...register('fullName',{

                /*required : true,
                minLength : {
                  value : 5,
                  message :"to many characters"
                }*/
              })} />
              {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
          </div>
          <div className="form-group">
              <label htmlFor="age">Age</label>
              <input className="form-control" type="number"  {...register('age',{
                        /*required : true,
                        min :{
                          value : 16,
                          message :"your not major"
                        },
                        max :{
                          value : 50,
                          message :"this age not avilible !!"
                        }*/
              })}  />
              {errors.age && <span className="text-danger">{errors.age.message}</span>}
          </div>
          <div className="form-group">
              <label htmlFor="email">email</label>
              <input className="form-control" type="email" {...register('email')}  />
          </div>
          <div className="form-group">
              <label htmlFor="password">password</label>
              <input className="form-control" type="password" {...register('password',{
               /* validate : (value) => {
                  return value === '123456' || 'invalid password';
                }*/
              })}  />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <div className="form-group" >
              <label htmlFor="country">country</label>
             <select    className="form-select"  {...register('conutry')}  >
              <option value = "">select your country </option>
              <option value="MA">Morroco</option>
              <option value="tr">turkiay</option>
              <option value="sp">spain</option>
             </select>
          </div>
            <input type="submit" className="btn btn-primray" value="Submit"/>
        </form>
    </div>
  )
}

export default Form
