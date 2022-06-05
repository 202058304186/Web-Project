/*
* account.js文件是控制用户注册的事件逻辑
* 该js文件调用了公共工具包Tools.js、以及我们的用户类包Class.js
* designed by: 202058304186陈凡
*/

/*
* 动态生成并添加JS文件
* */
new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","../JS/Tools.js");
document.body.appendChild(new_element);
new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","../JS/Class.js");
document.body.appendChild(new_element);

//获取用户名input对象
let username = document.querySelector(".account_username");
//获取密码input，和确认密码对象
let passwords = document.querySelectorAll(".account_password");
//获取注册按钮对象
let submit = document.querySelectorAll(".Submit");
//获取存储在localStorage中的用户缓存数据
let Users = JSON.parse(localStorage.getItem("Users"));
console.log(JSON.parse(localStorage.getItem("Users")));
if (Users == null) {
    Users = [];
}
//获取眼睛控件
let eyes_label = document.querySelectorAll(".account_password_before");


//设置占位符属性
username.setAttribute("placeholder", "用户名")
passwords[0].setAttribute("placeholder", "密码");
passwords[1].setAttribute("placeholder", "确认密码");

//定义定时跳转函数
function timeOut(time, htmlPath) {
    if (time > 0) {
        time--;
    }
    else {
        window.location = htmlPath;
    }

}

/*
注册逻辑：
CheckInfo函数采用了正则的方式，用以检测用户名和密码。
当点击提交按钮，脚本会检测是否两次输入密码相同，
然后进入合法检测逻辑，
最后再检测是否用户已经存在，
如果都通过就添加到localStorage中。
* */
function register() {
    //修改密码输入框类型为'password'
    passwords[0].type = "password";
    passwords[1].type = "password";
    //两次密码输入相同检测
    if (passwords[0].value === passwords[1].value) {
        for (var j = 0; j < Users.length; ++j) {
            if (Users[j].name === username.value) {
                alert("用户已经存在");
                username.value = "";
                return false;
            }
        }
        //合法性检测
        if (CheckInfo(username.value, passwords[0].value)) {
            Users.push({"name":username.value, "password":passwords[0].value, "type":"Normal", "Online":0, "userNumber":Users + 1});
        }
        else {
            return false;
        }
    }
    else {
        alert("两次输入不一致!");
        passwords[0].value = passwords[1].value = "";
        return false;
    }
    localStorage.setItem("Users", JSON.stringify(Users));
    //注册成功，调用定时跳转函数
    htmlPath = "account.html";
    alert("注册完成,点击确定后" + time + "秒后回跳转到登录界面,或者您可以手动点击跳转.");
    timeOut();
}

//点击注册按钮执行注册操作
for (var i = 0; i < submit.length; ++i) {
    submit[i].onclick = function () {
        register();
    }
}

//检测键盘是否按下回车，如果是则提交表单
document.onkeydown = function (ev) {
    var oEvent = ev || Event;
    if (oEvent.keyCode === 13) {
        register();
    }
}

//眼睛密码逻辑
for (var i = 0; i < eyes_label.length; ++i) {
    eyes_label[i].setAttribute("index", i);
    eyes_label[i].onclick = function () {
        if (this.getAttribute("data-content-after") === "\ue6ba") {
            passwords[this.getAttribute("index")].type = "text";
            this.setAttribute("data-content-after", "\ue761");
        }
        else {
            passwords[this.getAttribute("index")].type = "password";
            this.setAttribute("data-content-after", "\ue6ba");
        }
    }
}
function toUpdate() {

}

