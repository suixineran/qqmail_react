import Api from './api'

class MailApi extends Api {
    sjx(callback) {
        let path = '/sjx'
        this.get(path, callback)
    }

    addMail(data, callback) {
        // 使用 ajax 发送数据给服务器
        let path = '/addmail'
        this.post(path, data, callback)
    }

    fristDeleteMail(Id, callback) {
        let path = '/sjxdelete/' + Id
        this.get(path, callback)
    }
    secondDeleteMail(Id, callback) {
        let path = '/delete/' + Id
        this.get(path, callback)
    }



    addresslist(callback) {
        let path = '/addresslist'
        this.get(path, callback)
    }


    addAdd(data, callback) {
        let path = '/addresslist/add'
        this.post(path, data, callback)
    }

    updateAdd(Id, data, callback) {
        let path = '/addresslist/updata/' + Id
        this.post(path, data, callback)
    }

    deleteAdd(Id, callback) {
        let path = '/addresslist/delete/' + Id
        this.get(path, callback)
    }

    getone(id, callback) {
        let path = '/sjx/' + id
        this.get(path, callback)
    }
}

export default MailApi
