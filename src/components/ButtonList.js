import React from 'react'

function ButtonList() {

  const buttonNames = ["All", "Cricket", "Music", "Movies", "Programming", "React", "Javscript", "Angular"]

  const buttonName = () => {
    return (<>
      {buttonNames.map(element => <button className='bg-slate-200 py-2 px-4 mx-1 rounded-2xl'> {element} </button>)}
    </>)
  }

  return (
    <div>{buttonName()}</div>
  )
}

export default ButtonList