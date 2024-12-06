import React, { useEffect,useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title,category}) => {
  const [apiData,setApiData]= useState([]);
  const cardsRef =useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmZlMzNmMDE2YjgwM2JjMjM3NTMzOGY2NDBiYzJjNCIsIm5iZiI6MTczMzQ3MDQ1NS44MDA5OTk5LCJzdWIiOiI2NzUyYThmNzgwZTViOGYwYTc1NjJlZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3iJm3jDXragJprLP44KK1yOK63MvJiTUDvIrG-Qz7GE'
    }
  };
  
  
const handleWheel= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className='title-cards'>
        <h2>{title?title:'Popular on Netflix'}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p><b>{card.original_title}</b></p>

            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards