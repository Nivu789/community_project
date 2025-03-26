
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useFetchCommitteeImages } from "../hooks/useFetchCommitteeImages";
import { useEffect, useState } from "react";
import { committeeDetails } from "./committeeDetails";

const CommiteeContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase: "linear"
    };

    interface DetailsOfCommittee {
        title:string,
        about:string,
        president:string,
        presidentPhoto:string
        secretary:string,
        secretaryPhoto:string
    }

    const [refetch,setRefetch] = useState(false)
    const {committeeName} = useParams()
    const committeeToFetch = committeeName?.split('-')[0]

    const [detailsOfCommitte,setDetailsOfCommittee] = useState<DetailsOfCommittee>({
        title:"",
        about:"",
        president:"",
        presidentPhoto:"",
        secretary:"",
        secretaryPhoto:"",
    })
    
    const {images} = useFetchCommitteeImages(committeeToFetch+"/",refetch)

    useEffect(()=>{
        switch (committeeToFetch) {
            case "farmers":
                setDetailsOfCommittee(committeeDetails[0])
                break;
            
            case "army":
                setDetailsOfCommittee(committeeDetails[1])
                break;

            case "wemen":
                setDetailsOfCommittee(committeeDetails[2])
                break;
            case "children":
                setDetailsOfCommittee(committeeDetails[3])
                break;
            default:
                break;
        }
        setRefetch(prev=>!prev)
    },[committeeToFetch])
    

    return (
        <div>
            <div>
                <div className="flex justify-center lg:text-6xl text-4xl bg-orange-200 py-4 bg-gradient-to-r font-malayalam font-bold text-orange-800">{detailsOfCommitte.title}</div>
            </div>
            <div className='flex justify-center flex-col w-full gap-24'>
                <div  className='flex justify-center text-2xl w-full items-center'>
                    <div className="bg-orange-300 py-4 lg:px-96 px-16 shadow-lg font-semibold text-white">ഭാരവാഹികൾ </div>
                </div>
                <div className='grid grid-cols-2 mx-auto lg:gap-24 p-2 gap-4'>
                    <div className="lg:w-[400px] lg:h-[500px] w-52 h-60">
                        <img src={detailsOfCommitte.presidentPhoto} alt="" className="object-cover w-full h-full"/>
                        <div className='text-center'>
                        <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>PRESIDENT<p className='font-bold text-white'>{detailsOfCommitte.president}</p></p>
                  
                        </div>
                    </div>
                    <div className="lg:w-[400px] lg:h-[500px] w-52 h-60">
                        <img src={detailsOfCommitte.secretaryPhoto} alt="" className="object-cover w-full h-full"/>
                        <div className='text-center'>
                        <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>SECRETARY<p className='font-bold text-white'>{detailsOfCommitte.secretary}</p></p>
                  
                        </div>
                    </div>
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='text-lg font-bold'>Who are we?</div>
                    <div>{detailsOfCommitte.about}</div>
                </div>

                <div>
                    <div className='text-xl font-bold  bg-red-500 py-2 px-4'>Our recent activities</div>
                    <div className="max-h-80">
                        <Slider {...settings} className="h-80">
                            {images && images.map((image)=>(
                                <div className="h-full bg-red-600">
                                <img src={`https://samskrithibucket.s3.amazonaws.com/${image}`} alt="" className="object-cover w-full h-80 object-center"/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommiteeContent