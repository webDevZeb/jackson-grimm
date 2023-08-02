import React from 'react'
import jacksonOutdoors from '../images/jackson-outdoors.jpeg'
import { Helmet } from 'react-helmet-async'

const Media = () => {
  return (
    <>
      <Helmet>
        <title>Media</title>
        <meta name="description" content="Music and video." />
        <link rel="canonical" href="/media" />
      </Helmet>
      <div className="bg-gray-200 pt-20 md:pt-0">
        <header className="h-screen/3 overflow-hidden">
          <div className="relative">
            <img
              src={jacksonOutdoors}
              alt="Jackson holding guitar"
              style={{ width: '100%', height: '35vh', objectFit: 'cover' }}
              className="opacity-40  w-auto h-auto"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-gray-800 text-2xl md:text-3xl tracking-widest">
                Media
              </h1>
            </div>
          </div>
        </header>
        <div className="flex justify-center p-6">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/68gl6q8DljVb39CVfmtCgO?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-3xl"
          ></iframe>
        </div>
        <div className="flex justify-center p-6 pt-0">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/67CY06CQajt7zVhD0QFEAL?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-3xl"
          ></iframe>
        </div>
        <div className="justify-center flex p-6 pt-0">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/shxoPaa9SIQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className=" max-w-3xl"
          ></iframe>
        </div>
        <div className="justify-center flex p-6 pt-0">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/lry89GQoQRE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className=" max-w-3xl"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Media
