import { RiAdminLine } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Inputs = {
    username: string
    password: string
  }

const Signin = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post(`${BASE_URL}/user/login-admin`,{data})
        .then((response)=>{
            if(response.data.message){
                toast.success(response.data.message,{
                    onClose:()=>{localStorage.setItem("adminToken",response.data.adminToken)
                      navigate('/admin/dashboard')}
                  })
            }else if(response.data.error){
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
    
    <div className='h-screen w-full bg-gradient-to-br from-slate-300 to-slate-600 flex items-center justify-center'>
        <div className='bg-red-800 lg:w-1/4 w-3/4 p-8 rounded-md'>
        <div className='flex justify-center text-2xl text-white mb-10 items-center gap-4'><RiAdminLine className="text-4xl"/>Admin Login</div>
            <form className='flex flex-col gap-6 text-xl' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username" className='text-white'>Username:</label>
                    <input type="text" className="lg:p-2 p-1" placeholder='enter username for admin' {...register("username")}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username" className='text-white'>Password:</label>
                    <input type="password" className="lg:p-2 p-1" placeholder='enter password for admin' {...register("password")}/>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-black text-white p-3 px-5 rounded-lg' type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signin