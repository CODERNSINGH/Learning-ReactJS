import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import DummyData from '../DummyData/data'

export default function Mainpage() {
    const[data,setData] = useState([])

    useEffect(() => {
      async function News() {
          // Uncomment this and replace with real API if needed
          // let res = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=YOUR_API_KEY')
          // let response = await res.json()
          // setData(response.articles)

          // Temporary dummy data
          setData(DummyData.articles)
      }

      News()
  }, []) // Empty dependency array ensures it runs once on mount

  return (
    <div>
        {data.map((x)=><Card imageURL={x.urlToImage} title={x.title} description={x.description} time={x.publishedAt} author={x.author}/>)}
        
    </div>
  )
}
