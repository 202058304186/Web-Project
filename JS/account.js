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

//获取用户名输入框
let username = document.querySelector(".account_username");
//获取密码输入框
let password = document.querySelector   (".account_password");
//获取提交输入框
let submit = document.querySelector(".Submit");
//获取密码输入框前面的i标签
let eyes_label = document.querySelector(".account_password_before");

//用户列表
var Users = JSON.parse(localStorage.getItem("Users"));
//是否在线的状态
var Online = 0;
//登录的人的权限
let Type = "Normal";

//测试语句：用于测试用户列表有多少用户
console.log(JSON.parse(localStorage.getItem("Users")));

//设置占位符属性
username.setAttribute("placeholder", "用户名")
password.setAttribute("placeholder", "密码");

//独立出load函数
function load() {
    //点击提交后要将密码输入框类型改为‘password’
    password.type = "password";
    var flag = 0;//定义flag标签用以检测用户名有没有匹配上过
    for (var i = 0; i < Users.length; ++i) {
        if (username.value === Users[i].name) {
            flag = 1;//匹配上一次就给值为1
            //检测密码
            if (password.value === Users[i].password) {
                alert("登录成功！");
                Online = 1;
                Type = Users[i].type;
                break;
            }
            else {
                alert("密码错误！请检查！");
                password.value = "";
            }
        }
    }
    //如果一次没匹配到过就提示用户用户名错误
    if (!flag) {
        alert("未找到用户");
        Online = 0;
    }
    console.log(Online);
}



//登录按钮点击后事件
submit.onclick = function () {
    load();
}

//检测键盘是否按下回车，如果是则提交表单
document.onkeydown = function (ev) {
    var oEvent = ev || Event;
    if (oEvent.keyCode === 13) {
        load();
    }
}

//眼睛点击逻辑
eyes_label.onclick = function () {
    if (eyes_label.getAttribute("data-content-after") === "\ue6ba") {
        password.type = "text";
        eyes_label.setAttribute("data-content-after", "\ue761");
    }
    else {
        password.type = "password";
        eyes_label.setAttribute("data-content-after", "\ue6ba");
    }
}

