import axios from "axios"
import { GetDerivedStateFromProps, SetStateAction, useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { BASE_URL } from "../../config/config"
import moment from "moment"
import Swal from "sweetalert2"


type Inputs = {
    title: string
    description?: string,
    last_date?: string
    file?: FileList
}

type AnnouncementFormProps = {
    refetch: React.Dispatch<React.SetStateAction<boolean>>
    dataToBeEdited: Announcement[] | null
}

type Announcement = {
    title: string;
    description?: string;
    last_date?: string;
    file?: File;
}

const AnnouncementForm = ({ refetch, dataToBeEdited }: AnnouncementFormProps) => {

    const [item, setItem] = useState<Announcement | null>(null)

    const {
        register,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    useEffect(() => {
        if (dataToBeEdited && dataToBeEdited.length > 0) {
            setItem(dataToBeEdited[0]);
        } else {
            setItem(null);
        }
    }, [dataToBeEdited])

    useEffect(() => {
        if (item) {
            reset({
                title: item.title,
                description: item.description,
                last_date: moment(item.last_date).format("yyyy-MM-DD")
            })
        }
    }, [item])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        const formData = new FormData()

        if (data.file && data.file.length > 0) {

            formData.append('file', data.file[0]);
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You sure you want to continue without any file?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    formData.append('title', data.title);

                    if (data.description) {
                        formData.append('description', data.description)
                    }
                    console.log(`Appending title: ${data.title}`);

                    if (data.last_date) {
                        formData.append("last_date", data.last_date)
                        console.log(`Appending lat date: ${data.last_date}`);
                    }

                    axios.post(`${BASE_URL}/admin/post-announcement`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((response) => {
                        if (response.data.success) {
                            refetch((prev) => !prev)
                            console.log("now work on displaying")
                        } else {
                            console.log("not working dumbass")
                        }
                    })
                } else {
                    formData.append('title', data.title);

                    if (data.description) {
                        formData.append('description', data.description)
                    }
                    console.log(`Appending title: ${data.title}`);

                    if (data.last_date) {
                        formData.append("last_date", data.last_date)
                        console.log(`Appending lat date: ${data.last_date}`);
                    }

                    axios.post(`${BASE_URL}/admin/post-announcement`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((response) => {
                        if (response.data.success) {
                            refetch((prev) => !prev)
                            console.log("now work on displaying")
                        } else {
                            console.log("not working dumbass")
                        }
                    })
                }
            });
        }
        formData.append('title', data.title);

        if (data.description) {
            formData.append('description', data.description)
        }
        console.log(`Appending title: ${data.title}`);

        if (data.last_date) {
            formData.append("last_date", data.last_date)
            console.log(`Appending lat date: ${data.last_date}`);
        }

        axios.post(`${BASE_URL}/admin/post-announcement`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            if (response.data.success) {
                refetch((prev) => !prev)
                
                console.log("now work on displaying")
            } else {
                console.log("not working dumbass")
            }

        })

       

    }

    const date = watch("last_date")
    useEffect(() => {
        const presentDate = new Date()
        if (date && new Date(date) < presentDate) {
            setError("last_date", {
                type: "manual",
                message: "Invalid date provided"
            })
        } else {
            clearErrors("last_date")
        }
    }, [date])

    return (


        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)} >
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" {...register("title")} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"  {...register("description")} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="date" {...register("last_date")} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last date</label>
                {errors.last_date && <span className="text-red-600">{errors.last_date.message}</span>}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="file"  {...register("file")} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">File if any</label>
                </div>

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}

export default AnnouncementForm