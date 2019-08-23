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
            ids:[]
        }
        this.processData = this.processData.bind(this)
        this.selectedmail = this.selectedmail.bind(this)

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

    selectedmail(record, selected) {
        let ids = this.state.ids
        console.log('record', record.id)
        console.log('selected', selected)
        if (selected) {
            ids.push(record.id)
            this.setState({
                ids
            })
        }
        if (!selected) {
            let index = ids.indexOf(record.id)
            ids.splice(index, 1)
            this.setState({
                ids
            })
        }
    }



    render() {

        let ids = this.state.ids
        console.log('idss', ids)

        var columns = [{
            title: '发件人',
            dataIndex: 'addresser',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <Link  to={{pathname: url,}}> {text} </Link>
                    </div>
                )
            }
        }, {
            title: '主题',
            dataIndex: 'mailSubject',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <Link  to={{pathname: url,}}> {text} </Link>
                    </div>
                )
            }
        }, {
            title: '时间',
            dataIndex: 'time',
            render: function(text, record, index ) {
                let id = record.id
                let url = `/sjx/${id}`
                return (
                    <div>
                        <Link  to={{pathname: url,}}> {text} </Link>
                    </div>
                )
            }
        }];


        return (
            <div>
                <div> 收件箱 </div>
                <Button ids={ids} />
                <List selectedmail={this.selectedmail}  columns ={columns}  data = {this.state.data} />
            </div>
        )
    }
}

export default Shoujianxiang
