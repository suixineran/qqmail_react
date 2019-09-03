import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./common/Home"
import Hello from "./page/Hello"
import Write from "./page/Write"
import AddressList from "./page/AddressList"
import Fajianxiang from "./page/Fajianxiang"
import Shoujianxiang from "./page/Shoujianxiang"
import Lajixiang from "./page/Lajixiang"
import Detail from "./common/Detail"
import AddressAdd from "./common/AddressAdd"
import Succe from "./common/Succe"
import AddressUpdate from "./common/AddressUpdate"


import Header1 from "./common/header/Header1"
// import NextLeft from "./common/header/NextLeft"
// // import Header1 from "./common/header/Header1"

class App extends Component {
    render() {
        return (
            <div>
                {/*<Header1 />*/}

                <div>
                    <div className={"App-next"}>

                        <div className={"App-next-right"}>
                            {/*下面的是注册路由的部分，显示什么内容 还需要看访问的具体路径*/}

                            <Router>
                                <div>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/hello" component={Hello} />
                                    <Route exact path="/sjx" component={Shoujianxiang} />
                                    <Route exact path="/write" component={Write} />
                                    <Route exact path="/fjx" component={Fajianxiang} />
                                    <Route exact path="/ljx" component={Lajixiang} />
                                    <Route exact path="/addresslist" component={AddressList} />

                                    <Route exact path="/addmail" component={Succe} />
                                    <Route path="/sjx/:id" component={Detail} />
                                    <Route path="/sjxdelete/:id" component={Detail} />
                                    <Route path="/delete/:id" component={Detail} />

                                    <Route exact path="/addresslist/add" component={AddressAdd} />
                                    <Route  path="/addresslist/updata/:id" component={AddressUpdate} />
                                    <Route  path="/addresslist/delete/:id" component={AddressAdd} />

                                    <Route exact path="/succe" component={Succe} />

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
