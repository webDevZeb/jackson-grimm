import React from 'react'
import soberagainhero from '../images/sober-again-hero.webp'
import { Helmet } from 'react-helmet-async'

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="relative w-screen h-screen">
      <Helmet>
        <title>Jackson Grimm - Enter Site</title>
        <meta name="description" content="Enter the site." />
        <link rel="canonical" href="/" />
      </Helmet>
      <img
        src={soberagainhero}
        alt="sober again album"
        className="object-cover object-center h-full w-full"
      />
      <div className="absolute inset-0 flex sm:items-center  pl-8">
        <div className="flex flex-col">
          <h2 className="text-md text-gray-200 mb-10 font-bold my-5">
            Stream or buy the new album now.
          </h2>
          <div className="">
            <a href="https://jacksongrimm.bandcamp.com/album/sober-again">
              <button className="rounded bg-gray-300 text-gray-700  py-2 px-4 mr-4 tracking-widest mb-6 block">
                STREAM // PURCHASE
              </button>
            </a>
            <Link to="/home">
              <button className="rounded bg-gray-200 text-gray-700 py-2 px-4 tracking-widest block">
                ENTER SITE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
