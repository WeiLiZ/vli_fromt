Vue.component("topnav", {
    template:
        `
        <header class="navbar-wrapper">
			<div class="navbar navbar-fixed-top">
				<div class="container cl">
					<a class="navbar-logo hidden-xs" href="index.html">
						<img class="logo" src="img/logo.png" alt="vli博客" />
					</a>
					<a class="logo navbar-logo-m visible-xs" href="index.html">vli博客</a>
					<a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" href="javascript:void(0);"
						onclick="showSide();">&#xe667;</a>
					<nav class="nav navbar-nav nav-collapse w_menu" role="navigation">
						<ul class="cl">
							<li class="active" v-for="item in menus" :key="item.id"> <a :href="item.url"
									:data-hover="item.name">{{item.name}}</a> </li>
						</ul>
					</nav>
					<nav class="navbar-nav navbar-userbar hidden-xs hidden-sm " style="top: 0;">
						<ul class="cl">
							<li class="userInfo dropDown dropDown_hover" v-show="status==true">
								<a href="login.html"
									onclick="layer.msg('正在跳转登陆页面...', {icon:16, shade: 0.1, time:0})">登陆注册</a>
								<!-- <img
										class="avatar size-S" src="img/qq.jpg" title="登陆注册"> -->
                            </li>
                            <li class="userInfo dropDown dropDown_hover" v-show="status==false">
                            <a href="javascript:;" ><img class="avatar radius" :src="user.healPortrait" :alt="user.userName"></a>
                               <a href="#" @click.prevert="logout">退出</a>
                            </li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    `,
    data: function () {
        return {
            menus: [{
                id: "",
                name: "",
                url: ""
            }],
            user: {
                id: 9,
                createTime: "",
                deleteStatus: false,
                userName: "",
                phone: "",
                sex: "",
                age: 0,
                roleId: 0,
                healPortrait: "",
                updateTime: "",
            },
            status: true
        }
    },
    methods: {
        //查询导航栏菜单
        findmenu: function () {
            var _this = this;
            findmenu().then(res => {
                if (res.data.code == 1) {
                    _this.menus = res.data.data;
                }
            });
        },
        // 查询localStorage是否有user对象；
        checkLogin: function () {
            if (JSON.parse(sessionStorage.getItem("user")) != null) {
                this.status = false;
                this.user = JSON.parse(sessionStorage.getItem("user"));
            };

        },
        //退出
        logout: function () {
            this.status = true;
            sessionStorage.removeItem("user")
            sessionStorage.removeItem("token");
        }
    },
    // 页面加载
    created: function () {
        var _this = this;
        _this.findmenu();
        _this.checkLogin();
    },
});