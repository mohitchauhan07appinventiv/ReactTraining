import React, {useState} from 'react'
import MovieCard from './components/MovieCard';
import Data from './components/data';
import useStyle from './style';
import data from './generateData';

const MoviePage = () => {
    const classes=useStyle();

    const [rating, setRating] = useState(Data[0].rating);

    setTimeout(()=>{
        setRating(Math.round((rating+0.1)*10)/10);
        Data[0].rating=rating;
    
    },2000);
    console.log(data.src + '<- I am here');
    return (
        <div className={classes.movieCardWrapper}>
        {
            Data.map((data, index)=>(
                <MovieCard key={index} id= {data.id} src={data.media} title={data.title} desc={data.desc} rating={data.rating} />
            ))
        }
        </div>
    )
}
export default MoviePage
