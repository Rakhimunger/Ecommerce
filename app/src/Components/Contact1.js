import React from 'react'

const Contact1 = () => {
  return (
    <div>
        <h1>Want to chat now or get a call from us?</h1>
        <div className='flex'>
        
   
        <div className="box-content  h-44 w-44 bg-red-500">
          <p className='mx-2  font-sans text-[15px]'>
          Our messaging assistant can quickly solve many issues or direct you to the right person or place.Our messaging assistant can quickly solve many issues or direct you to the right person or place.
          </p>
        
          
          <div className=''>
          <button type="button" class="focus:outline-none text-white bg-gray-700 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:focus:ring-black">Start Chatting</button>
          </div>
        </div>

        <div className="box-content h-44 w-44  bg-white">
          <p className='mx-2 font-sans  text-[15px]'>
          We'll first get a few details about your issue and then someone will call you right away.
          </p>
       
         
          <div className=''>
          <button type="button" class="focus:outline-none text-white bg-gray-700 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:focus:ring-black">call me</button>
          </div>
        </div>
        
      </div>  
   

      
    </div>
  )
}

export default Contact1
