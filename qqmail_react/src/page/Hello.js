import React, { Component } from 'react'
import MailMenu from "../common/MailMenu";
// const log = console.log.bind(console)


class Hello extends Component {
    render() {
        return (
            <div>
                <MailMenu />
                <div>HELLO,随心而安。欢迎回来！</div>
                <div>注册英文邮箱帐号 (如：chen@foxmail.com)</div>
                <div>收件箱(364)群邮件(18)订阅中心(25)</div>
            </div>
        )
    }
}

export default Hello
