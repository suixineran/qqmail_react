import React, { Component } from 'react'
// import  { Button } from 'antd'
import 'antd/dist/antd.css'
import TodoApi from "../api/mail";


class Buttons extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.deletemail = this.deletemail.bind(this)
    }

    deletemail() {
        // console.log('this.props delete')
        // console.log('ids-------button',this.props.ids)
        // console.log('this.props.ids', this.props.ids)
        let ids = this.props.ids
        // console.log('this.props.ids', ids)
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i]
            this.api.deletem(id,(r) => {
                console.log('r', r)
                let mail = r
                // let data = this.processData(mails)
                // this.setState({
                //     mails,
                //     data,
                // })
            })

        }
    }

    render() {
        console.log('ids-------button',this.props.ids)

        return (
            <div>
                <a href="/shouye" className="ant-btn" role="button">返回</a>
                <a href="javascript:;" className="ant-btn" role="button"  onClick={this.deletemail }>删除</a>
                <a href="javascript:;" className="ant-btn" role="button">转发</a>
                <a href="javascript:;" className="ant-btn" role="button">举报</a>
                <a href="javascript:;" className="ant-btn" role="button">全部标记为已读</a>
                <a href="javascript:;" className="ant-btn" role="button">标记...</a>
                <a href="javascript:;" className="ant-btn" role="button">移动到...</a>
            </div>
        )
    }
}

export default Buttons
