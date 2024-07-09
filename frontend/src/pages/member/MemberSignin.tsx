import { MouseEventHandler } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast , ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MemberSignin = () => {

  const navigate = useNavigate()

  type Inputs = {
    phone: string
    password: string
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
      axios.post('http://localhost:3000/user/login',{data})
      .then((response)=>{
        if(response.data.message){
          toast.success(response.data.message,{
            onClose:()=>{localStorage.setItem("token",response.data.token)
              navigate('/home')}
          })
          
        }else{
          toast.error(response.data.error)
        }
      })
  }

    return (
      <>
      <ToastContainer position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      />

        <div className="bg-gray-200 flex justify-center items-center lg:p-32 p-28 w-screen">
          <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
            <h1 className="font-bold text-center block text-2xl">Log In</h1>
            <form>
            <label className="text-gray-500 block mt-3">Phone Number
          <input 
          autoFocus={true} 
          type="text" id="username" 
          className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" 
          {...register("phone",{required:true})}/>
        </label>
            {errors.phone && <span>This field is required</span>}
            <label className="text-gray-500 block mt-3">Phone Number
          <input 
          autoFocus={true} 
          type="password" id="password" 
          className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" 
          {...register("password",{required:true})}/>
        </label>
            {errors.password && <span>This field is required</span>}
            <Button value="Submit" onClick={handleSubmit(onSubmit)} />  
            </form>
          </div>
          </div>
          </>
      )
    }
    
    
    function Button({value,onClick}:{value:string,onClick:MouseEventHandler}){
        return (
        <button onClick={onClick} className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
      {value}
  </button>
        )
    }


export default MemberSignin