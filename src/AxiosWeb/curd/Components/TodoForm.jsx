
import { useForm } from 'react-hook-form'
import TodoModel from '../Models/TodoModels';
import API from '../Api/TodoApi.js'
function TodoForm() {

   const submitForm = (data) => {
       const todo  = new TodoModel(data.title,data.completed);
       API.create(todo).then (
         res => console.log(res)
       )

   }

   const {register,handleSubmit,formState} = useForm();
   const {errors,isLoading,isUpdate,isDirty,isValid} = formState
   return (
      <>
      <h2>{isUpdate ? 'Update' : 'Create'} todo</h2>
      <hr/>
      {
          isLoading
              ?
              <h6>Loading ...</h6>
              :
              <form onSubmit={handleSubmit(submitForm)}>
                  <div className="form-group">
                      <label className="form-label">Title</label>
                      <input type="text" className="form-control" {...register('title', {
                          required: {
                              value: 'true',
                              message: 'Required field'
                          },
                      })}/>
                      <small className="text-danger">{errors.title?.message}</small>
                  </div>
                  <div className="form-group">
                      <input type="checkbox"
                             className="form-check-input" {...register('completed')}/>
                      <label className='form-check-label'>&nbsp; Completed</label>
                  </div>
                  <div className="form-group mt-2">
                      <input disabled={!isValid || !isDirty} type="submit" className={'btn btn-primary'}
                             value={isUpdate ? 'Update' : 'Create'}/>
                  </div>
              </form>

      }

  </>
);

}

export default TodoForm

