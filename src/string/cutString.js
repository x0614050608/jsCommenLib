/**
 * 
 * @desc   字符串长度截取
 * @param  {String} str 
 * @param  {Number} len 
 * @param  {String} endStr
 * @return {String}
 */
function cutString(str, len, endStr) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/,
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + endStr;
};

module.exports = cutString