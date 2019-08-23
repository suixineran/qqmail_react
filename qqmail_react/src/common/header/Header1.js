import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Logo from './logo'
import './header.css'

class Menu extends Component {
    render() {

        return (
            <div>
                <div className={'App-header'}>
                    <div >
                        <div className={'App-float'}>
                            <Logo />
                        </div>
                        <div className={'App-float'}>
                            <div >
                                随心而安 1027638598@qq.com
                            </div>
                            <div >
                                邮箱首部  | 设置  换肤
                            </div>
                        </div>
                        <div className={'App-float-right'} >
                            <div>
                                反馈 | 帮助中心 | 退出
                            </div>
                            <div>
                                <input  placeholder="邮件全文搜索"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Menu
