import React from 'react'
import jacksonFlag from '../images/jackson-flag.jpeg'
import { Helmet } from 'react-helmet-async'

const Bio = () => {
  return (
    <>
      <Helmet>
        <title>Jackson Grimm - Bio</title>
        <meta name="description" content="Learn more about Jackson." />
        <link rel="canonical" href="/bio" />
      </Helmet>
      <header className="h-screen/3 overflow-hidden pt-20 md:pt-0 ">
        <div className="relative">
          <img
            src={jacksonFlag}
            alt="Jackson holding guitar"
            style={{ width: '100%', height: '35vh', objectFit: 'cover' }}
            className="opacity-50  w-auto h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-gray-800 text-2xl md:text-3xl tracking-widest">
              Bio
            </h1>
          </div>
        </div>
      </header>
      <main className="flex bg-gray-200">
        <div className="items-center  mx-auto ">
          <p className="p-8 max-w-4xl">
            Jackson Grimm marries folk pop melodies with the lonesome sound of
            traditional Appalachian music. In a region with a strong music
            culture, it is no surprise that Grimm's songwriting is
            representative of his musical birthplace: Asheville, NC. His songs
            run the gambit from an homage to a traditional country waltz in "If
            Not For You", an unrequited love song driven by a Beatles-esque
            melody in "I'd Hold You (But I Don't Wanna Hold You)", to a drunken
            partygrass song à la Old Crow Medicine Show in "Last Train Home".
            <br></br>
            <br></br>
            Grimm lives in Asheville, North Carolina, and can be found playing
            solo or around Western North Carolina with bluegrass band, The Bull
            Moose Party. The band is also the band on Grimm's latest album by
            the same name, "The Bull Moose Party"
            <br></br>
            <br></br>
            Grimm studied Traditional Music at Warren Wilson College under the
            tutelage of great players like Wayne Erbsen and Kevin Kehrberg. He
            also studied guitar, banjo, mandolin, and singing with the Western
            North Carolina music master, Josh Goforth. Josh was the obvious
            choice when it came to finding a producer for Jackson's latest
            album.
            <br></br>
            <br></br>
            Grimm also plays extensively as a sideman for his father,
            singer-songwriter Tim Grimm. Touring with Tim has taken him to over
            20 states in the US and 7 countries in Europe (Netherlands, Germany,
            Italy, Ireland, Scotland, Wales, & England). He has appeared on,
            written songs on, and co-produced the last two Tim Grimm albums.
            Jackson has also shared the stage and played with singer-songwriters
            Ben Bedford, Krista Detor, and Jennie DeVoe.
          </p>
        </div>
      </main>
    </>
  )
}

export default Bio
