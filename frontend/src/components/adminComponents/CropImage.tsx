import ReactCrop,{ type Crop,PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useState ,useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type {RootState} from '../../store/store'
import { useDebounceEffect } from '../../hooks/useDebounceEffect'
import { useNavigate } from 'react-router-dom'




// export default function CropImage() {
    
//   return (
//     <ReactCrop crop={crop} onChange={c => setCrop(c)}>
//       <img src={imgSrc} />
//     </ReactCrop>
//   )
// }

import React from 'react'
import { setImage } from '../../store/imageSlice'

const CropImage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
 

  async function onDownloadCropClick() {
    const image = imgRef.current
    const previewCanvas = previewCanvasRef.current
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist')
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    )
    const ctx = offscreen.getContext('2d')
    if (!ctx) {
      throw new Error('No 2d context')
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    )
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    // const blob = await offscreen.convertToBlob({
    //   type: 'image/png',
    // })

    // if (blobUrlRef.current) {
    //   URL.revokeObjectURL(blobUrlRef.current)
    // }
    // blobUrlRef.current = URL.createObjectURL(blob)

    // if (hiddenAnchorRef.current) {
    //   hiddenAnchorRef.current.href = blobUrlRef.current
    //   hiddenAnchorRef.current.click()
    // }
  }

  function canvasPreview(
    image: HTMLImageElement,
    canvas: HTMLCanvasElement,
    crop: PixelCrop,
    scale = 1,
    rotate = 0
  ) {
    console.log('canvasPreview called');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.restore();
  }

  useDebounceEffect(
    () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          
        );
      }
    },
    100,
    [completedCrop]
  );


    const imgSrc = useSelector((state:RootState)=>state.image.src)

    useEffect(() => {
      console.log('Image source updated:', imgSrc);
    }, [imgSrc]);
  
    useEffect(() => {
      console.log('Completed crop updated:', completedCrop);
    }, [completedCrop]);


    // console.log(imgSrc)
  const [crop, setCrop] = useState<Crop>()

  const saveImage = () =>{
    const image = imgRef.current
    const previewCanvas = previewCanvasRef.current
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist')
    }

    const ctx = previewCanvas.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    const dataUrl = previewCanvas.toDataURL('image/jpeg');
    dispatch(setImage(dataUrl))
    navigate('/admin/dashboard/host-event')
  }

  return (
    <div className='bg-red-400 h-screen justify-center flex items-center flex-col px-24'>
      <div className='flex justify-end w-full'>
        <button className='mb-2 px-14 p-2 bg-green-500 rounded-lg' onClick={saveImage}>Save</button>
      </div>
      <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={(c) => setCompletedCrop(c)}>
      <div className='w-full h-full bg-black'>
        <img src={imgSrc} className='bg-cover' ref={imgRef}/>
      </div>
    </ReactCrop>
    {!!completedCrop && <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          </div>
    }
    </div>
  )
}

export default CropImage