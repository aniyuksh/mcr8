import React, { useContext, useState } from 'react'

import Navbar from '../components/Navbar';
import Select from '../components/Select';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { Context } from '../context/DataContext';

const Listing = () => {

    const {toShow} = useContext(Context)
  return (
    <div>
        <Navbar />
        <Select />
        <div className='flex flex-wrap gap-5 justify-center mb-10'>
            {
                toShow.meetups.map((event)=>{
                    return(
                        
                        <div key={event.id}>
                            <Link to={`/single/${event.id}`}>
                            <Card item={event} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        
        
    </div>
  )
}

export default Listing