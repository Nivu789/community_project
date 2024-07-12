import ReactCrop,{ type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type {RootState} from '../../store/store'


// export default function CropImage() {
    
//   return (
//     <ReactCrop crop={crop} onChange={c => setCrop(c)}>
//       <img src={imgSrc} />
//     </ReactCrop>
//   )
// }

import React from 'react'

const CropImage = () => {
    console.log("grgrgg")
    const imgSrc = useSelector((state:RootState)=>state.image.src)
    console.log(imgSrc)
  const [crop, setCrop] = useState<Crop>()
  return (
    <div><ReactCrop crop={crop} onChange={c => setCrop(c)}>
        <img src={imgSrc} />
    </ReactCrop></div>
  )
}

export default CropImage