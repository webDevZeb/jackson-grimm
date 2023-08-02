import React from 'react'
import jacksonContact from '../images/jackson-contact.avif'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import SocialLink from '../components/SocialLink'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Get in touch." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <header className="h-screen/3 overflow-hidden pt-20 md:pt-0 ">
        <div className="relative">
          <img
            src={jacksonContact}
            alt="Jackson holding guitar"
            style={{ width: '100%', height: '35vh', objectFit: 'cover' }}
            className="  w-auto h-auto "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-gray-800 text-2xl md:text-3xl tracking-widest">
              Contact
            </h1>
          </div>
        </div>
      </header>
      <div className="antialiased bg-gray-200">
        <div className="flex  justify-center items-center md:p-12 p-2 ">
          <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-slate-600 w-full max-w-4xl p-8 sm:p-12 md:rounded-xl shadow-lg text-white overflow-hidden rounded-xl">
            <div className="flex flex-col space-y-8 justify-between w-full">
              <div>
                <h1 className="font-bold text-3xl tracking wide">Booking</h1>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="inline-flex space-x-2 items-center">
                    <a href="tel:812-341-7416">
                      <BsFillTelephoneFill className="text-green-300" />
                    </a>
                    <a href="tel:812-341-7416">812-341-7416</a>
                  </div>
                </div>

                <div>
                  <div className="inline-flex space-x-2 items-center">
                    <a href="mailto:gambillz@gmail.com">
                      <IoMdMail className="text-green-300" />
                    </a>
                    <a href="mailto:jonathancoley180@gmail.com">
                      jacksongrimmmusic@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 text-2xl">
                <SocialLink />
              </div>
            </div>

            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-slate-200 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-slate-200  rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-9 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                <form
                  action="https://formsubmit.co/jacksongrimmmusic@gmail.com"
                  method="POST"
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label htmlFor="" className="text-md">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="" className="text-md">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="" className="text-md">
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      required
                      placeholder="Message"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-block self-end bg-green-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
