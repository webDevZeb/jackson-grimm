import React from 'react'
import sliderData from '../Data/sliderData'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { useEffect } from 'react'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderData.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearInterval(slideInterval)
    }
  }, [currentIndex])

  return (
    <>
      <div className="relative group">
        <div
          className="grid grid-cols-2 gap-2 justify-items-center items-center"
          style={{ height: '250px' }}
        >
          <div className=" " style={{ whiteSpace: 'pre-line' }}>
            <p className="mb-4 " style={{ whiteSpace: 'pre-line' }}>
              {sliderData[currentIndex].description}
            </p>
          </div>
          <img
            src={sliderData[currentIndex].image}
            alt="Bull Moose Party band"
            className="max-w-full h-auto object-cover shadow-2xl "
            style={{ maxHeight: '250px' }}
          />
        </div>

        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliderData.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer hover:text-gray-400 duration-300"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </>
  )
}

export default Slider
