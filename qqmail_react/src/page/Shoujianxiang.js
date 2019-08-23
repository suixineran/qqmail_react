import React, { Component } from 'react'
import TodoApi from "../api/mail";
import List from "../common/List"
import Button from "../common/Buttons";
import { Link } from 'react-router-dom'


class Shoujianxiang extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            mails: [],
            data: [],
        }
        this.processData = this.processData.bind(this)
    }

    componentDidMount() {
        this.api.sjx((r) => {
            let mails = r
            let data = this.processData(mails)
            this.setState({
                mails,
                data,
            })
        })
    }

    processData (a) {
        let d = []
        let state = a
        for (let i = 0; i < state.length; i++) {
            let se = state[i]
            let o = {}
            o.addresser = se.addresser
            o.mailSubject = se.mailSubject
            o.time = se.time
            o.key = i + 1
            o.id = se.id

            d.push(o)
        }
        return d

    }

    render() {
        let state = this.state
        console.log('state', state)
       // let { id, } = this.processData()
       //  console.log('data--',this.state.data)
        var columns = [{
            title: '发件人',
            dataIndex: 'addresser',
            render: function(text, record, index ) {
                console.log('record',record)
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                {/*<a href={url}>{text}   </a>*/}
                        <Link  to={{
                            pathname: url,
                        }}
                        >  {text}  </Link>
                    </div>
                )
            }
        }, {
            title: '主题',
            dataIndex: 'mailSubject',
            render: function(text) {
                return <a href="javascript:;">{text}</a>

            }
        }, {
            title: '时间',
            dataIndex: 'time',
            render: function(text) {
                return <a href="javascript:;">{text} </a>
            }
        }];


        return (
            <div>
                <div> 收件箱 </div>
                <Button/>
                <List  columns ={columns}  data = {this.state.data} />
            </div>
        )
    }
}

export default Shoujianxiang
