import React, {Component} from 'react'

import logo from './logo.png'


class Logo extends Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}

// export 之后就可以在其他组件 import
export default Logo
