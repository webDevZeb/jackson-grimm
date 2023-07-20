import React from 'react'
import albumData from '../Data/albumData'

const Album = () => {
  return (
    <div className="flex justify-center p-4 ">
      <div className="lg:grid md:grid-cols-2 md:gap-4  ">
        {albumData.map((album) => {
          const { id, title, image, year, link } = album
          return (
            <div
              key={id}
              className="border p-4 flex flex-col items-center rounded-lg bg-white my-4 lg:my-0"
            >
              <a href={link} className="text-center ">
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    style={{ height: '300px' }}
                    className="hover:scale-[1.1] duration-500 transform transition "
                  />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="text-gray-500 text-sm">{year}</span>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album
