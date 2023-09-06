import React from 'react'
import bandMountain from '../images/band-mountain.png'
import Album from '../components/Album'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jackson Grimm - Home</title>
        <meta name="description" content="Jackson Grimm music and merch." />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="bg-gray-200 pt-20 md:pt-0">
        <div className="">
          <img
            src={bandMountain}
            alt="Jackson holding a guitar"
            className=" w-full h-1/3 object-cover opacity-80 "
          />
        </div>
        <div className="text-center">
          <h1 className="text-xl p-6">
            New album, <span className="italic font-bold">Sober Again</span>{' '}
            available now.
          </h1>
          <a href="https://jacksongrimm.bandcamp.com/album/sober-again">
            <button className="rounded bg-yellow-800 text-gray-100 font-bold  py-2 px-4 mr-4 tracking-widest lg:mb-4 hover:opacity-80 duration-500 shadow-xl">
              STREAM <span className="font-normal">//</span> PURCHASE
            </button>
          </a>
        </div>
        <div>
          <Album />
        </div>
      </div>
    </>
  )
}

export default Home
