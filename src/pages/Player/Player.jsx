import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrown_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id}=useParams();
  const navigate = useNavigate();
  const [apiData,setApiData]= useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmZlMzNmMDE2YjgwM2JjMjM3NTMzOGY2NDBiYzJjNCIsIm5iZiI6MTczMzQ3MDQ1NS44MDA5OTk5LCJzdWIiOiI2NzUyYThmNzgwZTViOGYwYTc1NjJlZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3iJm3jDXragJprLP44KK1yOK63MvJiTUDvIrG-Qz7GE'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  



  return (
    <div className='player'>
      <img src={back_arrown_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player