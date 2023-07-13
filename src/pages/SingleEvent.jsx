import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Context } from '../context/DataContext';
import TimeCard from '../components/TimeCard';
import SpeakerCard from '../components/SpeakerCard';
import Rvsp from "../components/Modals/Rsvp"
// import AlreadyR from "../components/Modals/AlreadyRSVP"
import AlreadyRSVP from '../components/Modals/AlreadyRSVP';
const SingleEvent = () => {
    const {id} = useParams();
    
   
    const {toShow ,  modalrv , modalAlready , setModalAlready , setModalRv} = useContext(Context);
    const event = toShow.meetups.filter((a)=> a.id === (id));

    const RSVPed = new Date(event[0].eventStartTime).getTime() > new Date().getTime() ;
    console.log("true" , RSVPed) ;
  return (
    <div className=''>
        
            <Navbar />
        
        <div className='flex justify-center p-5 '>
            
            <div className='flex-1' >
                <div className='mb-5'>
                    <h1 className='text-4xl font-semibold'>{event[0].title}</h1>
                </div>
                <div className='mb-2'>
                    <p>Hosted By: </p>
                    <p className='font-semibold'>{event[0].hostedBy}</p>
                </div>
                <div className='mb-7'>
                    <img src={event[0].eventThumbnail} alt="event image" className='h-[300px] w-[400px]' />
                </div>
                <div className='w-[400px] mb-7'>
                    <div>
                        <p className='text-2xl font-semibold mb-7'>Details : </p>
                    </div>
                    <div>
                        <p>{event[0].eventDescription}</p>
                    </div>
                </div>
                <div className=''>
                    <div className='mb-4'>
                        <p className='font-semibold text-2xl'>Additional Information :</p>
                    </div>
                    <div className=' flex mb-4'>
                        <p><span className='font-semibold'>Dress Code : </span> {event[0].additionalInformation.dressCode}</p>
                        <p><span className='font-semibold'>Age Restrictions : </span> {event[0].additionalInformation.ageRestrictions}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Event Tags</h1>
                    <div className='flex gap-10 mr-5 my-4'>
                        {
                            event[0].eventTags.map((item, index)=>{
                                return(
                                    <div key={index}>
                                        <button className='bg-red-300 px-2 py-1 border-none rounded-md'>
                                            {item}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>

            <div className='flex-1 ' >
                
                <div className='max-w[20vw]   w-[20vw]'>
                    <TimeCard data={event} />
                </div>
                <div className=''>
                    <p className='font-bold'>Speakers: ({event[0].speakers.length})</p>
                    <div className='flex gap-10 p-2'>
                        {
                            event[0].speakers.map((speaker, index)=>{
                                return(
                                    <div key={index}  className='flex justify-center  text-center'>
                                        <SpeakerCard speaker={speaker} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                <div>
                    {
                        !RSVPed ? <button className='bg-red-300 px-2 py-1 border-none rounded-md' onClick={(e)=>setModalAlready(true)}>Already RVSPed</button> : <button className='bg-red-300 px-2 py-1 border-none rounded-md' onClick={(e)=>setModalRv(true)}>RVSP</button>
                    }
                </div>
                {modalrv && <Rvsp />}
                {modalAlready && <AlreadyRSVP />}
            </div>
        </div>
    </div>
  )
}

export default SingleEvent