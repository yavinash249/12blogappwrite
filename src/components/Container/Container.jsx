// eslint-disable-next-line no-unused-vars
import React  from 'react'

// eslint-disable-next-line react/prop-types
function Container({children}) {
  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>
      {children}
    </div>
  )
}

export default Container
