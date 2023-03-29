import React from 'react'
import Main from '../cmps/Main'
import Row from '../cmps/Row'
import { requests } from '../Request'

function Home() {
  return (
    <>
      <Main/>
      <Row rowId="1" title="UpComing" fetchURL={requests.requestUpcoming}/>
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowId="4" title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row rowId="5" title="Horror" fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home