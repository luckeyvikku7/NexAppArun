import { useState, useEffect } from 'react';
import LoadingCard from "@/components/LoadingCard";
import { execPath } from 'process';





export default  function TicketList() {

  const [data, setData] = useState([]);
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
      .then(fetchedData => {setData(fetchedData)});
     }
  catch(error){
    console.log("UnabletoGetData")
  }

  })
  setShowComponent(false)
  }    
  , []);



  return (
    <>

    {showComponent &&  <LoadingCard/> } 
      {data.map((ticket) => (
      

        <div key={ticket.id} className=" shadow-xl shadow-lg-500/40 m-10 p-10 rounded-lg border-gray-400 border-2">
          <h3 className=' text-black'>{ticket.title}</h3>
          <p className=' text-black'>Distance :  {ticket.distance} km</p>
        </div>
      ))}
      {data.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}