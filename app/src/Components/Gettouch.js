import React from "react";

const Gettouch = () => {
  return (
    <div className="bg-white py-10">
      <h1 className="text-black font-bold text-2xl text-center mb-10">
        Want to chat now or get a call from us?
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-10 mx-auto px-4">
        {/* First Card */}
        <div className="border border-slate-400 p-4 shadow-lg w-full max-w-md">
          <div className="mx-auto flex justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="-2 -2.5 24 24"
            >
              <path
                fill="black"
                d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003zM16 10.017a7 7 0 0 0 0 .369zq.007-.16.004-4.019a3 3 0 0 0-3-2.997H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743z"
              />
            </svg>
          </div>
          <h5 className="text-[18px] font-bold text-black mt-2">Chat right now</h5>
          <p className="text-slate-500">
            Our messaging assistant can quickly solve many issues or direct you to the right person or place.
          </p>
          <p className="text-[15px] mt-3 font-bold text-slate-500">
            Instant chat and always available.
          </p>
          <button className="px-4 py-2 hover:bg-yellow-300 bg-gray-800 rounded-full text-white mt-3">
            Start chat
          </button>
        </div>

        {/* Second Card */}
        <div className="border border-slate-400 p-4 shadow-lg w-full max-w-md">
          <div className="mx-auto flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2 2 0 0 0 .006.134q.008.124.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141s2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4 4 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874S3.527 6.11 3.833 4m5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09s11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a5 5 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508s-1.302-1.739-1.508-2.36a5 5 0 0 1-.125-.447z"
              />
            </svg>
          </div>
          <h5 className="text-[18px]  font-bold text-black mt-2">Call me</h5>
          <p className="text-slate-500">
          We'll first get a few details about your issue and then someone will call you right away.
          </p>
        
          <button className="px-4 py-2 hover:bg-yellow-300 bg-gray-800 rounded-full text-white mt-3">
            Call me
          </button>
        </div>
      </div>

      <p className="text-lg font-bold mt-8 text-black text-center">
        Here are a few things you can take care of on your own
      </p>

      <div className="flex flex-col sm:flex-row justify-between mt-11 mx-auto px-4 sm:px-44">
        {/* Task Items */}
        <div className="flex items-center flex-col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
          </svg>
          <p className="text-blue-500">Check on an order</p>
        </div>

        <div className="flex items-center flex-col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <p className="text-blue-500">Manage content & devices</p>
        </div>

        <div className="flex items-center flex-col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p className="text-blue-500">Account settings</p>
        </div>
      </div>
    </div>
  );
};

export default Gettouch;
