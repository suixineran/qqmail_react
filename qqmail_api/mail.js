const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const log = console.log.bind(console)

//配置
const app = express()
app.use(express.static('static'))
app.use(cors())
app.use(bodyParser.json())


const sendHtml = (path, response) => {
    let options = {
        encoding: 'utf-8',
    }
    fs.readFile(path, options, (error, data) => {
        log(`读取的 html 文件 ${path} 内容是`, typeof data)
        response.send(data)
    })
}

const sendJSON = (data, response) => {
    let r = JSON.stringify(data, null, 2)
    response.send(r)
}


//联系人相关
const loadAddress = () => {
    let data = fs.readFileSync('address.json')
    let address = JSON.parse(data)
    return address
}
const address = loadAddress()

const mailFetch = (id) => {
    id = Number(id)
    let mail = mails.find(e => e.id === id)
    if (mail === undefined) {
        return {}
    } else {
        return mail
    }
}

const saveaddress = (address) => {
    let s = JSON.stringify(address, null, 2)
    fs.writeFileSync('address.json', s)
}

const addressAdd = (form) => {
    if (address.length === 0) {
        form.id = 1
    } else {
        let tail = address[address.length - 1]
        form.id = tail.id + 1
    }
    form.done = false
    address.push(form)
    saveaddress(address)
    return form
}
const addressDelete = (id) => {
    id = Number(id)
    let index = address.findIndex(e => e.id === id)
    if (index > -1) {
        let t = address.splice(index, 1)[0]
        saveaddress(address)
        return t
    } else {
        return {}
    }
}

const addUpdate = (id, form) => {
    id = Number(id)
    let addre = address.find(e => e.id === id)
    if (addre === undefined) {
        return {}
    } else {
        addre.updatedTime = Date.now()
        Object.entries(form).forEach(entry => {
            let [k, v] = entry
            addre[k] = v
        })
        saveaddress(address)
        return addre
    }
}


//邮件信息
const loadMail = () => {
    let data = fs.readFileSync('mails.json')
    let mails = JSON.parse(data)
    return mails
}
const mails = loadMail()

const fristMailDelete = (id) => {
    id = Number(id)
    let index = mails.findIndex(e => e.id === id)
    if (index > -1) {
        // let t = mails.splice(index, 1)[0]
        mails[index].type = "shanchu"
        let m = mails[index]
        savemail(mails)
        return m
    } else {
        return {}
    }
}

const secondMailDelete = (id) => {
    id = Number(id)
    let index = mails.findIndex(e => e.id === id)
    if (index > -1) {
        let t = mails.splice(index, 1)[0]
        savemail(mails)
        return t
    } else {
        return {}
    }
}

const savemail = (mail) => {
    let s = JSON.stringify(mail, null, 2)
    fs.writeFileSync('mails.json', s)
}
const mailAdd = (form) => {
    mails.push(form)
    savemail(mails)
    return form
}



//注册路由
// 邮件管理
app.get('/', (request, response) => {
    // console.log('debug 111')
    let path = 'index.html'
    sendHtml(path, response)
})

app.get('/api/mail/sjx', (request, response) => {
    log('邮件信息',mails)
    sendJSON(mails, response)
})


app.post('/api/mail/addmail', (request, response) => {
    let form = request.body
    console.log('form in add', form)
    let mail = mailAdd(form)
    sendJSON(mail, response)
})

app.get('/api/mail/sjx/:id', (request, response) => {
    // log('id')
    let id = request.params.id
    // log('ididid', id )
    let mail = mailFetch(id)
    // log('idmail', mail)
    sendJSON(mail, response)
})


app.get('/api/mail/sjxdelete/:id', (request, response) => {
    let id = request.params.id
    let mail = fristMailDelete(id)
    console.log('一次删除',mail)
    sendJSON(mail, response)
})

app.get('/api/mail/delete/:id', (request, response) => {
    let id = request.params.id
    let mail = secondMailDelete(id)
    console.log('二次删除',mail)
    sendJSON(mail, response)
})




// 联系人的管理
app.get('/api/mail/addresslist', (request, response) => {
    // log('address api', address)
    sendJSON(address, response)

})

app.post('/api/mail/addresslist/add', (request, response) => {
    let form = request.body
    console.log('form in add', form)
    let mail = addressAdd(form)
    sendJSON(mail, response)
})

app.get('/api/mail/addresslist/delete/:id', (request, response) => {
    let id = request.params.id
    let mail = addressDelete(id)
    console.log('二次删除',mail)
    sendJSON(mail, response)
})

app.post('/api/mail/addresslist/updata/:id', (request, response) => {
    let id = request.params.id
    let form = request.body
    let mail = addUpdate(id, form)
    console.log('二次删除',mail)
    sendJSON(mail, response)
})









const main = () => {
    let server = app.listen(8000, () => {
        let host = server.address().address
        let port = server.address().port

        log(`应用实例，访问地址为 http://${host}:${port}`)
    })
}

if (require.main === module) {
    main()
}
