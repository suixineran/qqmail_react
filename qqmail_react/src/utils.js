
const log = console.log.bind(console)





// export {
//
//     log
// }

var formatDate = function(d) {
    var now = new Date(d);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}
log(formatDate(new Date))
