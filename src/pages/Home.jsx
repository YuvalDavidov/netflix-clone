import React from 'react'
import Main from '../cmps/Main'
import Row from '../cmps/Row'
import { requests } from '../Request'

function Home() {
  return (
    <>
      <Main/>
      <Row title="UpComing" fetchURL={requests.requestUpcoming}/>
      <Row title="Popular" fetchURL={requests.requestPopular}/>
      <Row title="Trending" fetchURL={requests.requestTrending}/>
      <Row title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row title="Horror" fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home