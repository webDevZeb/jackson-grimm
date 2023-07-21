import React from 'react'
import jacksonBand from '../images/jackson-band.webp'
import soberAlbum from '../images/sober-album.jpeg'
import { Link } from 'react-router-dom'

const Press = () => {
  return (
    <>
      <div className="bg-gray-200">
        <header className="h-screen/3 overflow-hidden">
          <div className="relative">
            <img
              src={jacksonBand}
              alt="Jackson holding guitar"
              style={{ width: '100%', height: '35vh', objectFit: 'cover' }}
              className="opacity-40  w-auto h-auto"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-gray-800 text-2xl md:text-3xl tracking-widest">
                Press Kit
              </h1>
            </div>
          </div>
        </header>
        <div className="border rounded-lg shadow-xl p-6 max-w-3xl mx-auto mt-5 mb-5    bg-slate-50 custom-container">
          <div className="grid grid-cols-2 justify-center items-center gap-2 ">
            <div className=" ">
              <p className="mb-4">
                <span className="italic font-bold"> Sober Again </span>released
                August 6th, 2021. Currently spinning on Folk Radio and streaming
                on all platforms.
              </p>
              <p className="italic">
                "..a basically perfect Americana album"{' '}
                <span className="not-italic">-country.d</span>
              </p>
            </div>
            <img
              src={soberAlbum}
              alt="Bull Moose Party band"
              className="max-w-full h-auto "
            />
          </div>
        </div>
        <div className="flex  justify-center p-6 -mt-5">
          <p className="max-w-3xl">
            Jackson Grimm marries folk pop melodies with the lonesome sound of
            traditional Appalachian music. In a region with a strong music
            culture, it is no surprise that Grimm's songwriting is
            representative of his musical birthplace: Asheville, NC.
            <br></br>
            <br></br>
            The Bull Moose Party was Grimm's backing band for his 2018 debut
            album which was hailed "..a basically perfect Americana album"
            (country.de), as well as his 2021 release "Sober Again". The core of
            the band continues to play as the One Stringband. While each of the
            band members demonstrate years of proficiency on their instruments,
            what sets this ensemble apart from the others are the vocal
            harmonies and the band dynamics. Audiences can tell when bands have
            been playing together for years and this group shows that 10-fold.
            <br></br> <br></br>
            Jackson Grimm & the Bull Moose Party brings a perfect mixture of
            high-energy bluegrass, beautiful melodies, & real, raw songwriting.
          </p>
        </div>
        <div className="text-center">
          <Link to="https://jacksongrimm.bandcamp.com/merch">
            <button className="rounded bg-yellow-800 text-gray-100 font-bold  py-2 px-4 mr-4 tracking-widest  hover:opacity-80 duration-500 shadow-xl ">
              STREAM <span className="font-normal">//</span> PURCHASE
            </button>
          </Link>
          <Link to="/contact">
            <button className="rounded bg-slate-50 text-yellow-800 font-bold  py-2 px-4 mr-4 tracking-widest hover:opacity-70 duration-500 mb-8 shadow-xl ">
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Press
