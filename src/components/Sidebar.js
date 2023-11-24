import React from 'react'
import {useSelector} from 'react-redux'
import store from '../utils/store'

function Sidebar() {

   const isMenuOpen =  useSelector(store=>store.app.isMenuOpen)

   if(!isMenuOpen) return null
    return (
        <div className='p-5 shadow-2xl col-span-1 '>
            <h1 className='font-bold py-3'>Subscriptions</h1>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Premium</li>
            </ul>
            <h1 className='font-bold py-3'>Watch Later</h1>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Premium</li>
            </ul>
        </div>
    )
}

export default Sidebar