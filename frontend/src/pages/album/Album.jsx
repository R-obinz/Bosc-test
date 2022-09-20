import React from 'react'
import './album.css'
import Navbar from '../../components/navbar/Navbar'
import MyAlbums from '../../components/MyAlbums/MyAlbums'
function Album() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-5'>
        <MyAlbums/>
        </div>
        </div>
      
    </div>
  )
}

export default Album