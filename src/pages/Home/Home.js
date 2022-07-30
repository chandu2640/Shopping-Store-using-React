import React from 'react'
import './Home.css'
import Banner from  '../../assets/banner1.png'
import Man from  '../../assets/men.png'
import Women from  '../../assets/women.png'
import Child from  '../../assets/child.png'

const Home = () => {
  return (
    <div>
        <div class="all_cont">

<div class="slider_header">
    <img src={Banner} alt=""/>
</div>
<div className="category">
    <img src={Man} alt="" />
    <img src={Women} alt="" />
    <img src={Child} alt="" />
</div>





</div>
    </div>
  )
}

export default Home