import React, { useContext } from 'react'
import "./Already.css"
import { Context } from '../../context/DataContext'



const Rsvp = () => {
    const { setModalRv} = useContext(Context);
  return (
    <div>
    <div className='modal-wrapper'>
    </div>
    <div className='modal-container'>
        <div>
            <p>Complete your RVSP</p>
            <p>Fill personal Information</p>
        </div>
        <div>
            <label htmlFor="name">
                <input type="text" placeholder='Enter name' />
            </label>
            <label htmlFor="mail">
                <input type="text" placeholder='Enter mail' />
            </label>
            <button onClick={(e)=>setModalRv(false)}>Submit</button>
        </div>
    </div>
</div>
  )
}

export default Rsvp