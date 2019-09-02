import React, { Component } from 'react'
// import  { Button } from 'antd'
import 'antd/dist/antd.css'
import TodoApi from "../api/mail"
import { Link } from 'react-router-dom'
import MailMenu from "./MailMenu";


class TopButtons extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.deleteMail = this.deleteMail.bind(this)
        this.cleanMail = this.cleanMail.bind(this)
    }

    deleteMail() {
        // console.log('this.props delete')
        // console.log('ids-------button',this.props.ids)
        // console.log('this.props.ids', this.props.ids)
        let ids = this.props.ids
        console.log(' 删除组件中ids', ids)
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i]

            this.api.fristDeleteMail(id,(r) => {
                console.log('r', r)

                // let mail = r
                // let data = this.processData(mails)
                // this.setState({
                //     mails,
                //     data,
                // })

            })

        }
    }

    cleanMail() {
        // console.log('this.props delete')
        // console.log('ids-------button',this.props.ids)
        // console.log('this.props.ids', this.props.ids)
        let ids = this.props.ids
        console.log(' 删除组件中ids', ids)
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i]

            this.api.secondDeleteMail(id,(r) => {
                console.log('r', r)

                // let mail = r
                // let data = this.processData(mails)
                // this.setState({
                //     mails,
                //     data,
                // })

            })

        }
    }

    render() {
        // console.log('ids-------button',this.props.ids)
        let url = '/'
        let url1 = '/succe'
        return (
            <div>
                <Link  to={{pathname: url,} }>
                    <button className="ant-btn" role="button">返回</button>
                </Link>

                <Link  to={{pathname: url1,} }>
                    <button className="ant-btn" role="button" onClick={this.deleteMail}>删除 </button>
                </Link>

                <Link  to={{pathname: url1,} }>
                    <button className="ant-btn" role="button" onClick={this.cleanMail}>彻底删除 </button>
                </Link>


                <a href="javascript:;" className="ant-btn" role="button">转发</a>
                <a href="javascript:;" className="ant-btn" role="button">举报</a>
                <a href="javascript:;" className="ant-btn" role="button">全部标记为已读</a>
                <a href="javascript:;" className="ant-btn" role="button">标记...</a>
                <a href="javascript:;" className="ant-btn" role="button">移动到...</a>
            </div>
        )
    }
}

export default TopButtons
