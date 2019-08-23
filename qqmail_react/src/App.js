import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./common/Home"


import Shouye from "./page/Shouye"
import Write from "./page/Write"
import AddressList from "./page/AddressList"
import Fajianxiang from "./page/Fajianxiang"
import Shoujianxiang from "./page/Shoujianxiang"
import Lajixiang from "./page/Lajixiang"

import Detail from "./common/Detail"
import AddressAdd from "./common/AddressAdd"
import Header1 from "./common/header/Header1"
// import NextLeft from "./common/header/NextLeft"
class App extends Component {
    render() {
        return (
            <div>
                <Header1 />

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

                            <Router>
                                <div>

                                    <Route exact path="/shouye" component={Shouye} />
                                    <Route exact path="/write" component={Write} />
                                    <Route exact path="/fjx" component={Fajianxiang} />
                                    <Route exact path="/sjx" component={Shoujianxiang} />
                                    <Route exact path="/ljx" component={Lajixiang} />
                                    <Route exact path="/addresslist" component={AddressList} />
                                    <Route path="/sjx/:id" component={Detail} />
                                    <Route exact path="/addresslist/add" component={AddressAdd} />

                                    <Route exact path="/" component={Home} />

                                </div>
                            </Router>
                            {/*<NextLeft/>*/}
                        </div>

                        </div>
                    </div>
                </div>

        )
    }
}

export default App
