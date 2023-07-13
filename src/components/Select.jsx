import React from 'react'

const Select = () => {
  return (
    <div className='flex justify-between p-8'>
        <div>
            <h1 className='text-5xl'>Meetup Events</h1>
        </div>
        <div>
            <select className='p-4'>
                <option value="online">
                    Online
                </option>
                <option value="offline">
                    Offline
                </option>
                <option selected>
                    Both
                </option>
                
            </select>
        </div>
    </div>
  )
}

export default Select