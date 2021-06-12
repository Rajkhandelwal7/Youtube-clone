import React from 'react'
import './RecommendedVideo.css';
import VideoCard from './VideoCard';


function RecommendedVideos() {
    return (
        <div className="recommended">
        <h2>Recommended</h2>
        <div className="recommended__videos">
        <VideoCard 
        title="React JS Crash Course 2021"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s68-c-k-c0x00ffffff-no-rj"
        channel="Traversy Media"
        image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLtqhjnv15Y388joYu5qQ3VjlhZw"
        />
         <VideoCard 
        title="Mystery of Mehul Choksi | Uncle of Nirav Modi | Explained by Dhruv Rathee"
        views="715K"
        timestamp="2 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhvf_ZuLibghCHG05UcpP5S5Pt4B2Nw5AbcNWOYFg=s68-c-k-c0x00ffffff-no-rj"
        channel="Dhruv Rathee"
        image="https://i.ytimg.com/an_webp/GLv6fIAFy78/mqdefault_6s.webp?du=3000&sqp=CNOdk4YG&rs=AOn4CLDSrzO3Py4dHHp9UK59w_8WUUCwAg"/>
         <VideoCard 
        title="iQOO Z3 Unboxing and Quick look - Fully Loaded?"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwngJZm17vNotc0ojgs5rPQ7MC0eI7a2WsOtjw4SzLA=s68-c-k-c0x00ffffff-no-rj"
        channel="Tech Burner"
        image="https://i.ytimg.com/an_webp/LZ2ei13lkIw/mqdefault_6s.webp?du=3000&sqp=CNSBk4YG&rs=AOn4CLChVBuF8x8ArN3T-zQa00wPXfrBAQ"
        />
         <VideoCard 
        title="Recruitments with Pepcoding | Hire with Pep | Best Talent Pool for Hiring"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj"
        channel="Pepcoding"
        image="https://i.ytimg.com/vi/WRHnJ0lF9G8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClJ8PagqQKtS8Z8VNY0fiGknyWfQ"
        />
         <VideoCard 
        title="How Much Time is Required To Become A Full Stack Web Developer "
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwngB8yVRcQ-M-0W1z6WyTMvflDrx2-sSlRpt2fBSpg=s68-c-k-c0x00ffffff-no-rj"
        channel="Coding Ninjas"
        image="https://i.ytimg.com/vi/c_lpodRqK2w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuRDYTBOyqzy0kvM7Kw2x6-g60qw"
        />
         <VideoCard 
        title="ज़्यादा सोचना छोड़ो - Sandeep Maheshwari | How To Stop Overthinking?"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniPiQ6rIL47wFuvLVfEZcHurDVYrKtLrTVXDLPH7g=s88-c-k-c0x00ffffff-no-rj"
        channel="Sandeep Maheshwari"
        image="https://i.ytimg.com/an_webp/kdXa4J_lKcY/mqdefault_6s.webp?du=3000&sqp=COSyk4YG&rs=AOn4CLCoc097DGs5K4CWqAsG8zw797UAOw"
        />
         <VideoCard 
        title="Attitude is everything ! Sonu Sharma "
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwngh3ELitQauqc0cZq2o1X5NAlDVhEIT4BFCrjdk=s88-c-k-c0x00ffffff-no-rj"
        channel="Sonu Sharma"
        image="https://i.ytimg.com/an_webp/XhBgw3lxW48/mqdefault_6s.webp?du=3000&sqp=CJypk4YG&rs=AOn4CLDbTbbsE_QTxfTcP4nufgZp-I0elw"
        />
         <VideoCard 
        title="Complete Java Collections Framework in 1 Video - Java Collections Framework"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwng_Js0arTyfnyCjHXpnvhQFB8AiaPQbDC2I86kA=s88-c-k-c0x00ffffff-no-rj"
        channel="Anuj Bhaiya"
        image="https://i.ytimg.com/an_webp/rzA7UJ-hQn4/mqdefault_6s.webp?du=3000&sqp=CODAk4YG&rs=AOn4CLA57QjXG5shFCE_0z0Z1Qoi8o307Q"
        />
        </div>
        </div>
    )
}

export default RecommendedVideos
