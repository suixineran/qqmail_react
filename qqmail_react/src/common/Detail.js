import React, { Component } from 'react'
// import  { Button } from 'antd'
import 'antd/dist/antd.css'
import './Detail.css'
import TodoApi from "../api/mail";

class Detail extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            mail: {},

        }
        // this.processData = this.processData.bind(this)
    }

    componentDidMount() {
        let a = this.props.location
        let id = a.pathname.split("/")[2]

        this.api.getone(id, (r) => {
            let mail = r
            console.log('detail',mail)
            this.setState({
                mail,
            })
        })
    }

    render() {
        let { addresser, mailSubject, mailcontent, time, sendingAddress } = this.state.mail

        return (
            <div>
                <div className={"detail-top"}>
                    <div> 发件人：{addresser} ,{sendingAddress}</div>
                    <div>主题：{mailSubject} </div>
                    <div> 时   间：{time}</div>
                    <div> 收件人：   随心而安 1027638598@qq.com</div>
                </div>
                <div>
                    <div>
                        {mailcontent}
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail
