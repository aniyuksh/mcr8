import React from "react";


const Card = ({item}) => {

  const dt = new Date(item.eventStartTime).toUTCString();
  // console.log(dt);


  return (
    <>
      <div className="relative">
        <img
          src={item.eventThumbnail}
          alt="item.name"
          className="h-[15rem] w-[15rem] rounded-md"
        />
         <p className="absolute top-2 left-2 text-black bg-white p-2  border-white rounded-md">{item.eventType}</p> 
      </div>
      <div>
        <p>{dt}</p>
        <p>{item.title}</p>
      </div>
    </>
      
 
  );
};

export default Card;
