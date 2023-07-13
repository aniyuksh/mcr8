import React from 'react'

const SpeakerCard = ({speaker}) => {
    
  return (
    <div className='flex'>
        <div>
            <img src={speaker.image} alt="speaker image" className='h-[80px] w-[80px] rounded-full object-cover' />
            <div className='flex flex-col'>
                <p className='font-semibold'>{speaker.name}</p>
                <p>{speaker.designation}</p>
            </div>
            
        </div>
    </div>
  )
}

export default SpeakerCard