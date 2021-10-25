import React, { Component  } from 'react'
class Ad extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-5642121119628809"
                data-ad-slot = "5642121119628809"></ins>
        </div>)
    }
}

export default Ad