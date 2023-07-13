import React, { useContext } from 'react'
import "./Already.css"
import { Context } from '../../context/DataContext'


const AlreadyRSVP = () => {
  const { setModalAlready} = useContext(Context);
  return (
    <div>
        <div className='modal-wrapper'></div>
        <div className='modal-container'>
                <p>Pay at the venue</p>
                <button onClick={(e)=>setModalAlready(false)}>Submit</button>
        </div>
        
    </div>
  )
}

export default AlreadyRSVP