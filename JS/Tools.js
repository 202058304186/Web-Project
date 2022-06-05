/*
采用正则检测用户名和密码是否合法
* */
function CheckInfo(Username, Password) {
    var U = new RegExp('[0-9a-zA-Z]{6,}$');
    var StrongPassword = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$');
    if (!U.test(Username)) {
        alert("用户名不能含有特殊字符!且长度大于等于6");
        username.value = ""
        return false;
    }
    if (!StrongPassword.test(Password)) {
        alert("强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度大于等于 8 )");
        passwords[0].value = "";
        return false;
    }
    return Username !== "" && Password !== "";
}

var time = 5;
var htmlPath = "";
//定义定时跳转函数
function timeOut() {
    if (time > 0) {
        time--;
    }
    else {
        window.location = htmlPath;
    }
    setTimeout("timeOut()", 1000);
}

function AddAUser(Username, password) {

}

//
function SaveToLocal() {

}