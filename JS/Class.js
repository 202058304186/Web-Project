function User(username, password, type="Normal") {
        this.name = username;
        this.password = password;
        this.type = type;
        this.Online = 0;
        this.Show = function () {
            return "账号:" + this.name + "    " + "密码:" + this.password +'\n';
        }
}
