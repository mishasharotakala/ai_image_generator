import React from 'react'
import './imageGenerator.css'
import default_image from '../Assets/default_image.svg'

const imageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className="header">
      AI Image <span>Generator</span>
      </div>

      <div className="img-loading">
        <div className="image">
            <img src={default_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default imageGenerator
