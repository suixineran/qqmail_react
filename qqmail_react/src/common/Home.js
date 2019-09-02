import React, { Component } from 'react'
import MailMenu from './MailMenu'

class Home extends Component {
    render() {
        return (
            <div>
                <MailMenu />
                <h1>react实现的邮箱功能</h1>
                <h2>点击上面链接查看效果</h2>
            </div>
        )
    }
}

export default Home
