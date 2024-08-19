
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

type GalleryFolderCardProps = {
  folderName?:string,
  dir:string
  imgSrc?:string,
  className?:string
}

const GalleryFolderCard = ({folderName,dir,imgSrc,className}:GalleryFolderCardProps) => {
  console.log(folderName)
  console.log(dir)

  const linkTo = dir === "gallery" 
    ? `/admin/dashboard/gallery/${folderName}` 
    : dir === 'member-gallery' 
    ? `/gallery/${folderName}` 
    : "#";

  return (
    <Link to={linkTo}><div className={className ? className :'relative w-40 h-40 lg:w-72 lg:h-40 flex flex-col text-white gap-2 p-1 text-center bg-white rounded-lg mt-4'}>
        <PhotoProvider>
        <div className='w-full h-full'>
          <PhotoView key={imgSrc} src={imgSrc}>
            <img className="object-cover object-center w-full h-full bg-white" src={imgSrc ? imgSrc :'/logo.png'}/>
            </PhotoView>
        </div>
        </PhotoProvider>
        {dir=="gallery" || dir=="member-gallery" ? <div className='bg-orange-800'>
            {folderName}
        </div>:null}
        
    </div></Link>
  )
}

export default GalleryFolderCard