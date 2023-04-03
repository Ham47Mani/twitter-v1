import React from 'react'

type AsibarbarBoxProps = {
  title: string,
  children: React.ReactNode
}

const AsidebarBox = ({title, children}: AsibarbarBoxProps) => {
  return (
    <div className='asidebar-box'>
      <h3 className="asidebar-box__title">{title}</h3>
      {children}
    </div>
  )
}

export default AsidebarBox