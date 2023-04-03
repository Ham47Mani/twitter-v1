import PageHeader from '@/components/pageHeader/PageHeader'
import React, { Fragment } from 'react'

type linkPageProps = {
  params: {
    linkName: string
  }
}

const page = ({params}: linkPageProps) => {  
  return (
    <Fragment>
      {/* ====== Header ====== */}
      <PageHeader pageName={params.linkName}/>

      <div className='mt-8 text-center text-lg font-bold' >{params.linkName} not working now</div>
    </Fragment>
  )
}

export default page