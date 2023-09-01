import React from 'react'
import "./HomeScreen.css"
import Row from './Row';
import requests from './requests';
import Navbar from './Navbar';
import Banner from './Banner';

function HomeScreen() {
  return (
    <div className='HomeScreen'>
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title ="Comedyy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title ="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  )
}

export default HomeScreen