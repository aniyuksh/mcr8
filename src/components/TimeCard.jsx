import React from 'react'

const TimeCard = ({data}) => {
    const sdt = new Date(data[0].eventStartTime).toUTCString();
    const edt = new Date(data[0].eventEndTime).toUTCString();
    console.log(sdt)
    console.log(edt)
  return (
    <div className=''>
        <div>
            <p>
                {sdt} to {edt}
            </p>
        </div>
        <div>
            <p>{data[0].location}</p>
            <p>{data[0].address}</p>
            
        </div>
        <div>
            <p>&#8377; {data[0].price}</p>
        </div>
    </div>
  )
}

export default TimeCard