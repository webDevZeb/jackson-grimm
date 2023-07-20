import React from 'react'
import SocialLink from './SocialLink'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 text-sm text-center p-2">
        <div className="flex  text-xl text-gray-100 justify-center ">
          <SocialLink />
        </div>
        &copy; {year} Jackson Grimm. All rights reserved.
      </footer>
    </>
  )
}

export default Footer
