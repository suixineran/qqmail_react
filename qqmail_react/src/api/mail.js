import Api from './api'

class MailApi extends Api {
    addAdd(data, callback) {
        // 使用 ajax 发送数据给服务器
        let path = '/addresslist/add'
        this.post(path, data, callback)
    }
    addMail(data, callback) {
        // 使用 ajax 发送数据给服务器
        let path = '/addmail'
        this.post(path, data, callback)
    }


    deletem(Id, callback) {
        let path = '/sjxdelete/' + Id
        this.get(path, callback)
    }

    update(Id, data, callback) {
        let path = '/update/' + Id
        this.post(path, data, callback)
    }

    sjx(callback) {
        let path = '/sjx'
        this.get(path, callback)
    }

    addresslist(callback) {
        let path = '/addresslist'
        this.get(path, callback)
    }


    getone(id, callback) {
        let path = '/sjx/' + id
        this.get(path, callback)
    }
}

export default MailApi
