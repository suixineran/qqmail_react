import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MailMenu extends Component {
    render() {
        let menus = [
            {
                text: '欢迎界面',
                url: '/hello',
            },
            {
                text: '收件箱',
                url: '/sjx',
            },

            {
                text: '写信',
                url: '/write',
            },
            {
                text: '发件箱',
                url: '/fjx',
            },

            {
                text: '垃圾箱',
                url: '/ljx',
            },
            {
                text: '通讯录',
                url: '/addresslist',
            },
            {
                text: '返回',
                url: '/',
            },
        ]
        return (
            <div>

            <nav>
                {
                    menus.map((e) =>
                       <Link to={e.url} key={e.url}>{e.text}    </Link>
                    )
                }
            </nav>


            </div>
        )
    }
}

export default MailMenu
