import React from 'react'
import data from './data';
const fetchApi = () => {
    const fetchDataFromApi = () => {
        if(localStorage.getItem('fetchFile')===null){
            fetch('https://api.adviceslip.com/advice').then((apiData)=>{
                return apiData.json();
            }).then((actualData)=>{
                // console.log(actualData.slip);
                  localStorage.setItem('fetchFile',JSON.stringify(actualData.slip));
            }).catch((error)=>{
                console.log(`Error -- > ${error}`);
            })
            console.log('local storage was empty, fetched new file into it')
        }else{
            console.log("data is already stored in local storage fetch will not called");
        }
    }

    const x = localStorage.getItem('fetchFile');
    console.log(JSON.parse(x));
    console.log(localStorage.getItem('fetchFile')===null)
    localStorage.clear();
    return (
        <div>
            <button onClick={fetchDataFromApi}>Click me</button>
        </div>
    )
}

export default fetchApi;
