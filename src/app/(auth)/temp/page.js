"use client";
import React from 'react'
import axios from 'axios';

const Temp = () => {

  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/hello');
        const data = await response.data;
        setDatas(response.data);
        console.log(response, datas);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Temp</h1>
      <p>data: {  datas.map((data, index) =>(
        <div className='my-4' key={index}> {data.title} </div>
      ))}</p>
    </div>
  )
}

export default Temp
