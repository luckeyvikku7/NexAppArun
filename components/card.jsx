import { useState, useEffect } from 'react';
import LoadingCard from "@/components/LoadingCard";
import { execPath } from 'process';





export default  function TicketList() {

  const [data, setData] = useState([]);
  const [ShowSpinner, setShowSpinner] = useState(false); 
  const [showComponent, setShowComponent] = useState(false);
  
  
  // based on your data you should store it here in state
  // const [location, setLocation] = useState(null);


  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setLocation({
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude,
  //           });
  //         }
  //       );
  //     } else {
  //       setError('Geolocation is not supported by your browser.');
  //     }
  //   }, []);




  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await getTickets();
  //       setData(result);
  //     };
      
  //   fetchData();
  // }, []);



  useEffect(() => {
    setShowSpinner(true)
    setShowComponent(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
    // Fetch data from Flask API here
    try{
    fetch('https://luckeyvikku.pythonanywhere.com/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ latitude, longitude })
    }) .then(response => response.json())
      .then(fetchedData => {setData(fetchedData);setShowSpinner(false)});
     }
  catch(error){
    console.log("UnabletoGetData")
  }

  })
  setShowComponent(false)
  }    
  , []);



  return (
    <div>
         { ShowSpinner && 
          <div class='pt-20 flex space-x-2 justify-center   h-screen '>
 	            <span class='sr-only'>Loading...</span>
              <div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
              <div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
              <div class='h-8 w-8 bg-white rounded-full animate-bounce'></div>
        </div>}
    <div className=' pt-10 lg:grid grid-cols-3  '>
      
    {showComponent &&  <LoadingCard/> } 
      {data.map((ticket) => (
      <div class=" m-10 relative max-w-md rounded-lg bg-gradient-to-tr from-black to-slate-800 p-0.5 shadow-lg shadow-black hover:bg-gradient-to-tr hover:from-slate-800 hover:to-black hover:cursor-pointer">
      <div class=" bg-grey-800 p-7 rounded-md">
          <h1 class="font-bold text-xl mb-2">{ticket.title}</h1>
          <h2>Distance :  {ticket.distance} km</h2>
      </div>
      </div>

        // <div key={ticket.id} className=" relative shadow-xl shadow-lg-500/40 m-10 p-10 rounded-lg border-gray-400 border-2">
        //   <h3 className=' text-black'>{ticket.title}</h3>
        //   <p className=' text-black'>Distance :  {ticket.distance} km</p>
        // </div>
      ))}
      {data.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </div>
    </div>
  )
}