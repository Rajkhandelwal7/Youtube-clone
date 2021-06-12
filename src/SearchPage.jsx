import React from 'react'
import './SearchPage.css'
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow  image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo" channel="Clever Programmer" verified subs="1M" noofVideos={500} 
                description="Hello this is Qazi with soonyy xdhbjsbfrjjvkjfjkfbfjbfd"
            />
            <hr />

            <VideoRow 
                views="1.4M"
                subs="657k"
                description="Great Video" 
                timestamp="15:34s" 
                channel="Clever Programmer" 
                title ="Let's Build a Yout Tube Clone"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CMbikoYG&rs=AOn4CLBgTpm6ReqUgrGABFEmH69GXyFxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="657k"
                description="Great Video" 
                timestamp="15:34s" 
                channel="Clever Programmer" 
                title ="Let's Build a Yout Tube Clone"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CMbikoYG&rs=AOn4CLBgTpm6ReqUgrGABFEmH69GXyFxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="657k"
                description="Great Video" 
                timestamp="15:34s" 
                channel="Clever Programmer" 
                title ="Let's Build a Yout Tube Clone"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CMbikoYG&rs=AOn4CLBgTpm6ReqUgrGABFEmH69GXyFxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="657k"
                description="Great Video" 
                timestamp="15:34s" 
                channel="Clever Programmer" 
                title ="Let's Build a Yout Tube Clone"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CMbikoYG&rs=AOn4CLBgTpm6ReqUgrGABFEmH69GXyFxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="657k"
                description="Great Video" 
                timestamp="15:34s" 
                channel="Clever Programmer" 
                title ="Let's Build a Yout Tube Clone"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CMbikoYG&rs=AOn4CLBgTpm6ReqUgrGABFEmH69GXyFxaw"
            />
        </div>

    )
}

export default SearchPage
