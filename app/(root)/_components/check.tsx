import React from 'react'

const Check = () => {
  const handleClick = () => {
    console.log('handle clicked')
  }
  return <div onClick={handleClick}>check</div>
}

export default Check
