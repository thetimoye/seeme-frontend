import React, { Component } from 'react'
import "../styles/main.scss"


class IndexPage extends Component{
    state = {
        hi: ""
    }

    render() {
        return (
            <div>
                <p className="example">Say hi to the index page</p>
            </div>
        )
    }
}

export default IndexPage