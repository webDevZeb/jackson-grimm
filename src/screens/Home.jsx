import React from 'react'
import bandMountain from '../images/band-mountain.png'
import Album from '../components/Album'

const Home = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="">
          <img
            src={bandMountain}
            alt="Jackson holding a guitar"
            className=" w-full h-1/3 object-cover opacity-80 "
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl p-6">
            New album, <span className="italic">Sober Again</span> available
            now.
          </h1>
          <a href="https://jacksongrimm.bandcamp.com/album/sober-again">
            <button className="rounded bg-yellow-800 text-gray-100 font-bold  py-2 px-4 mr-4 tracking-widest lg:mb-4 hover:opacity-80 duration-500">
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
