import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgCloseR } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth > 768)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()
  const location = useLocation()

  // makes sure page starts at top when a new link is visited on mobile nav
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth > 768)
    }

    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  const handleHamburgerClick = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isMediumScreen ? (
        <header className="bg-gray-600 p-6">
          <nav className="text-gray-300 flex justify-between items-center">
            <div>
              <h1 className="text-2xl tracking-widest">Jackson Grimm</h1>
            </div>
            <div className="space-x-8">
              <Link
                className="hover:text-gray-100 duration-500"
                to="/home"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="/press"
                onClick={() => setIsOpen(!isOpen)}
              >
                Press Kit
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="/tour"
                onClick={() => setIsOpen(!isOpen)}
              >
                Tour
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="https://jacksongrimm.bandcamp.com/merch"
                onClick={() => setIsOpen(!isOpen)}
              >
                Store
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="/media"
                onClick={() => setIsOpen(!isOpen)}
              >
                Media
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="/bio"
                onClick={() => setIsOpen(!isOpen)}
              >
                Bio
              </Link>
              <Link
                className="hover:text-gray-100 duration-500"
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
      ) : (
        <div className="fixed top-0 left-0 w-full z-10 ">
          <nav className="bg-gray-600 p-6 text-gray-300 flex items-center justify-between ">
            <div className="flex items-center">
              {isOpen ? (
                <CgCloseR
                  className="cursor-pointer text-gray-300 hover:text-slate-50  duration-500"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
              ) : (
                <GiHamburgerMenu
                  style={{ width: '1.5rem', height: '1.5rem' }}
                  onClick={handleHamburgerClick}
                  className="cursor-pointer text-gray-300  hover:text-slate-50  duration-500 "
                ></GiHamburgerMenu>
              )}

              <h1 className="text-2xl tracking-widest ml-4">Jackson Grimm</h1>
            </div>
          </nav>
          {isOpen && (
            <div
              ref={menuRef}
              className="tracking-widest absolute left-0 bg-gray-800 flex flex-col z-20 p-12 rounded-br-xl text-xl  h-screen text-slate-50 opacity-80 font-bold"
            >
              <Link
                className="hover:text-slate-400 duration-500 mb-3  "
                to="/home"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </Link>
              <Link
                className="hover:text-slate-400 duration-500 mb-3"
                to="/press"
                onClick={() => setIsOpen(!isOpen)}
              >
                Press Kit
              </Link>
              <Link
                className="hover:text-slate-400 duration-500 mb-3"
                to="/tour"
                onClick={() => setIsOpen(!isOpen)}
              >
                Tour
              </Link>
              <Link
                className="hover:text-slate-400 duration-500 mb-3"
                to="https://jacksongrimm.bandcamp.com/merch"
                onClick={() => setIsOpen(!isOpen)}
              >
                Store
              </Link>
              <Link
                className="hover:text-slate-400 duration-500 mb-3"
                to="/media"
                onClick={() => setIsOpen(!isOpen)}
              >
                Media
              </Link>
              <Link
                className="hover:text-slate-400 duration-500 mb-3"
                to="/bio"
                onClick={() => setIsOpen(!isOpen)}
              >
                Bio
              </Link>
              <Link
                className="hover:text-slate-400 duration-500"
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Header
