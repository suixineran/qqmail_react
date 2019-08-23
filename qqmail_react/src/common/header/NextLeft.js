import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Logo from './logo'
import './header.css'

class NextLeft extends Component {
    render() {

        return (
            <div>

                <div className={"App-next"}>
                    <div className={"App-next-left"}>
                        <div className={"App-next-left-up"}>
                            <ul className={'App-next-left-up-ul'}>
                                <li>写信</li>
                                <li>收信</li>
                                <li>通讯录</li>
                            </ul>

                        </div>
                        <div className={"App-next-left-down" }>

                            <ul className={'App-next-left-down-ul'}>
                                <li>收件箱</li>
                                <li>已发邮件</li>
                                <li>垃圾箱</li>
                                <li>群邮件</li>
                                <li>星级邮件</li>
                            </ul>

                        </div>

                    </div>
                    <div className={"App-next-right"}>

                    </div>
                </div>
            </div>
        )
    }
}

export default NextLeft
