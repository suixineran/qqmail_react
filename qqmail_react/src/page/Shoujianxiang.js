import React, { Component } from 'react'
import TodoApi from "../api/mail";
import List from "../common/List"
import TopButton from "../common/TopButtons";
import { Link } from 'react-router-dom'
import MailMenu from "../common/MailMenu";
const log = console.log.bind(console)


class Shoujianxiang extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            mails: [],
            data: [],
            ids:[]
        }
        this.selectedmail = this.selectedmail.bind(this)

    }

    componentDidMount() {
        this.api.sjx((r) => {
            let mails = r
            // log('后台数据',mails)
            this.setState({
                mails,
            })
        })
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
        let mails = this.state.mails
        var columns = [
            {
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
            },
            {
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
            },
            {
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
            }
        ];

        return (
            <div>
                <MailMenu />

                <div> 收件箱 </div>
                <TopButton ids={this.state.ids} />

                <List selectedmail={this.selectedmail}  columns={columns}
                      data={mails.filter(e => e.type === "shoujianxiang")}
                />
            </div>
        )
    }
}

export default Shoujianxiang
