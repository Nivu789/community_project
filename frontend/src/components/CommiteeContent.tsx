
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useFetchCommitteeImages } from "../hooks/useFetchCommitteeImages";
import { useState } from "react";

const CommiteeContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase: "linear"
    };

    const [refetch] = useState(false)
    const {committeeName} = useParams()
    const committeeToFetch = committeeName?.split('-')[0]
    
    const {images} = useFetchCommitteeImages(committeeToFetch+"/",refetch)


    return (
        <div>
            <div>
                <div className="flex justify-center text-4xl bg-red-500 py-4 bg-gradient-to-r">title</div>
            </div>
            <div className='flex justify-center flex-col w-full gap-24'>
                <div className='flex justify-center text-2xl'>Directors</div>
                <div className='grid grid-cols-2 mx-auto'>
                    <div>
                        <img src="../logo.png" alt="" />
                        <p className='text-center'>President</p>
                    </div>
                    <div>
                        <img src="../logo.png" alt="" />
                        <p className='text-center'>Secretary</p>
                    </div>
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='text-lg font-bold'>Who are we?</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque distinctio alias ullam voluptatibus quis, fugit, quibusdam ut nisi iusto vitae praesentium! Labore non, nostrum ratione deleniti illo accusamus qui asperiores.
                        Quisquam, inventore assumenda. Distinctio, nulla provident velit aspernatur quae vitae adipisci impedit corrupti cupiditate minima. Beatae, vel quia tempora, doloribus odio dolore, quisquam cupiditate harum aspernatur eius doloremque laboriosam autem!
                        Ex non corrupti fugiat. Sequi eos placeat pariatur ipsa adipisci modi animi nostrum, ab iste est, dolorum repudiandae esse ut laborum eaque magni quod quis praesentium saepe voluptatibus excepturi inventore?
                        Aspernatur quidem molestiae quis totam deserunt maxime animi aliquam incidunt illum, corporis error minus dolorum nisi architecto quas labore vero. Laudantium voluptates sequi, maiores delectus architecto optio neque obcaecati consequatur!
                        Sed, provident obcaecati rerum cumque deserunt iusto est voluptatem blanditiis veniam, voluptatibus laborum ut quis illum vitae maxime. Error, blanditiis eos. Tenetur consequatur, numquam adipisci odio quas dolorum possimus quidem!</div>
                </div>

                <div>
                    <div className='text-xl font-bold  bg-red-500 py-2 px-4'>Our recent activities</div>
                    <div className="h-32 slider-container">
                        <Slider {...settings} className="h-full">
                            {images && images.map((image)=>(
                                <div className="h-full bg-red-600">
                                <img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="object-cover w-full h-full"/>
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