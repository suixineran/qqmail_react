import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MailMenu extends Component {
    render() {
        let menus = [
            {
                text: '欢迎界面',
                url: '/shouye',
            },
            {
                text: '写信',
                url: '/write',
            },
            ,
            {
                text: '发件箱',
                url: '/fjx',
            }
            ,
            {
                text: '收件箱',
                url: '/sjx',
            }
            ,
            {
                text: '垃圾箱',
                url: '/ljx',
            }
            ,
            {
                text: '通讯录',
                url: '/addresslist',
            }
        ]
        return (
            <div>
            <nav>
                {
                    menus.map((e, index) =>
                        <a><Link to={e.url} key={index}>{e.text}</Link> <span/><span/></a>

                    )
                }

            </nav>


            </div>
        )
    }
}

export default MailMenu
