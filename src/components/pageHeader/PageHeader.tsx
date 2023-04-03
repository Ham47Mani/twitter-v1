import React from 'react';

import "./pageHeader.scss";

type pageHeaderProps = {
  pageName: string
}

const PageHeader = ({pageName}: pageHeaderProps) => {
  return (
    <div className='page-header'>
      <h4 className='page-header__title'>{pageName}</h4>
      <i className="fa-brands fa-twitter  text-lg  text-blue-400"></i>
    </div>
  )
}

export default PageHeader