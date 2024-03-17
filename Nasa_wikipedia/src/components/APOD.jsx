import { useState, useEffect } from "react";
import "../assets/APOD.css";

const SectionOne = () =>{
  
  const [ data, setData ] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      const apikey = 'xn8uQzQDMFF89UO6Lj4cCONhM6UzpLOtNFsukTW0';
      // console.log(apikey)
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  },[])

  return <div>
    <div className="container">
        <h3>{data.title}</h3>
        <img src={data.url} alt={data.title} />
        <p className="date">Date:- {data.date}</p>
        <p className="para" style={{ width: '80%', fontSize: '20px' }}>
          {data.explanation}
        </p>
    </div>
  </div>
}

export default SectionOne;
