"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      console.log(data)
      setImages(data)
    } catch (error) {
      console.error("Error Fetching Images", error)
    }
  }

  //useEffect(() => {
  //  getImages()
 // }, [])

  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white'>Get Images</button>
      <div className='p-10'>
        {images.map((elem, i) => (
          <img 
            key={i}
            src={elem.download_url}
            width={300}
            height={300}
            className='m-10 rounded inline-block'
            alt={`Random image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
