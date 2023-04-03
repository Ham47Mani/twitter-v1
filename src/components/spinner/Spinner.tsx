import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className='border border-gray-200 dark:border-gray-700 p-4'>
      <svg className="w-8 h-8 mx-auto animate-spin-fast">
        <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={{stroke: "rgb(29, 161, 242)", opacity: 0.2}}>
        </circle>
        <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={{
          stroke: "rgb(29, 161, 242)",
          strokeDasharray: 80,
          strokeDashoffset: 60,
        }}>
        </circle>
      </svg>
    </div>
  )
}

export default Spinner