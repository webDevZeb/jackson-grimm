import React from 'react'
import socialData from '../Data/socialData'

const SocialLink = () => {
  return (
    <>
      {socialData.map((social) => {
        const { id, link, icon } = social
        return (
          <div key={id} className="m-2">
            <a target="_blank" href={link}>
              {icon}
            </a>
          </div>
        )
      })}
    </>
  )
}

export default SocialLink
