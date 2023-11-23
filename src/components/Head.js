import React from 'react'

function Head() {
    return (<div className='grid grid-flow-col p-5 m-2 shadow-2xl'>
        <div className='flex col-span-1'>
            <img className='h-10' src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg'></img>
            <img className='h-10 mx-5' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'></img>
        </div>
        <div className='flex col-span-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
            <button className='border bg-slate-100 hover:bg-slate-200 border-gray-400 p-2 ml-0 rounded-r-full' type='button' >
            <img className='h-6 px-4' src='https://static.thenounproject.com/png/92231-200.png'></img>
            </button>
        </div>
        <div className='col-span-1'>
            <img className='h-10' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
        </div>
    </div>)
}

export default Head