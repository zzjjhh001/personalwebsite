<template>
	<div class="c-four">
		<div class="bacground">
			<div class="head">留言板</div>
			<input class="name" type="text" placeholder="请输入您的昵称" />
			<textarea class="content" placeholder="请保持言论文明......"></textarea>
			<button class="btn">留言</button>
			<h3>大家在说</h3>
			<ul class="text">
				<li id="ll">
					<div class="message-head">
						<span class="photo">系统</span>
						<p class="time">2019-9-27 0:47:38</p>
					</div>
					<p class="liuyan">测试留言</p>
					<div class="reply">
						<p id="p1">测试回复</p>
					</div>
					<button class></button>
					<button class="answer">Answer</button>
				</li>
			</ul>
		</div>
		<div class="popup">
			<div class="pop-content">
				<div class="pop-head">回复板</div>
				<textarea class="pop-reply" placeholder="请保持言论文明......"></textarea>
				<button class="pop-btn">回复</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	computed: {
    },
	watch: {},
	methods: {
		init() {
			var btn = document.getElementsByClassName("btn")[0];
			var name = document.getElementsByClassName("name")[0];
			var content = document.getElementsByClassName("content")[0];
			var photo = document.getElementsByClassName("photo")[0];
			var time = document.getElementsByClassName("time")[0];
			var liuYan = document.getElementsByClassName("liuyan")[0];
			var text = document.getElementsByClassName("text")[0];
			// var dt = document.getElementsByClassName("")[0];
			var an = document.getElementsByClassName("answer")[0];
			var ll = document.getElementById("ll");
			var oPopup = document.querySelector(".popup");
			var oReply = document.querySelector(".pop-reply");
			var timer;
			var parent;

			btn.onclick = function () {
				var oLi = document.createElement("li");

				oLi.innerHTML = `
    <div class="message-head">
          <span class="photo">${document.querySelector(".name").value}</span>
          <p class="time">${formatTime(new Date())}</p>
        </div>
        <p class="liuyan">${document.querySelector(".content").value}</p>
        <div class="reply">
          <p>测试回复</p>
        </div>
        <button class=""></button>
        <button class="answer">Answer</button>
        `;

				document.querySelector(".text").appendChild(oLi);

				btn.disabled = true;
				var num = 10;
				timer = setInterval(function () {
					btn.innerText = num;
					num--;
					if (num <= 0) {
						clearInterval(timer);
						btn.disabled = false;
						btn.innerHTML = "留言";
					}
				}, 1000);
			};

			document.onclick = function (e) {
				var ev = event || e;
				var target = ev.target || ev.srcElement;

				if (target.className === "") {
					// 删除
					target.parentNode.remove();
				}

				if (target.className === "answer") {
					// 回复
					oPopup.style.display = "flex";

					parent = target.parentNode.querySelector(".reply");
				}

				if (target.className === "popup") {
					oPopup.style.display = "none";
				}

				if (target.className === "pop-btn") {
					var reply = oReply.value;
					createReply(reply);
				}
			};

			function formatTime(date) {
				var date = new Date();

				var year = date.getFullYear(); //年
				var month = date.getMonth() + 1; //月
				var day = date.getDate(); //天
				var week = date.getDay(); //星期
				var hours = date.getHours(); //小时
				var minutes = date.getMinutes(); //分
				var secondes = date.getSeconds(); //秒
				return (
					year +
					"-" +
					month +
					"-" +
					day +
					"-" +
					" " +
					hours +
					":" +
					minutes +
					":" +
					secondes
				);
			}

			function createReply(reply) {
				if (!reply) return;
				var oP = document.createElement("p");
				oP.innerText = reply;
				parent.appendChild(oP);
				oPopup.style.display = "none";
				oReply.value = "";
			}
		},
	},
	created() {
        this.init();
    },
	mounted() {
        this.init
    },
	beforeCreate() {},
	beforeMount() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
};
</script>
    <style lang='scss' scoped>
.c-four {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
* {
	padding: 0;
	margin: 0;
}
body {
	width: 100%;
	height: 100%;
	background: rgb(65, 65, 63);
}
.bacground {
	width: 700px;
	height: 100%;
	background: white;
	margin: auto;
	margin-top: 20px;
}
.head,
.pop-head {
	height: 50px;
	font-size: 20px;
	text-align: center;
	line-height: 50px;
}
.name {
	width: 640px;
	height: 40px;
	font-size: 20px;
	margin: 10px 28px;
	line-height: 50px;
	border-radius: 8px;
	border: 2px solid rgb(139, 137, 137);
	outline: none;
}
.content,
.pop-reply {
	width: 640px;
	height: 150px;
	font-size: 22px;
	margin: 10px 28px;
	border: 2px solid rgb(139, 137, 137);
	outline: none;
	border-radius: 8px;
	resize: none;
}
.btn,
.pop-btn {
	float: right;
	height: 30px;
	margin-right: 28px;
	border-radius: 6px;
	outline: none;
	font-size: 20px;
	padding: 0 20px;
	background: rgb(169, 238, 255);
}
h3 {
	font-size: 20px;
	color: rgb(102, 102, 102);
	background: rgb(205, 221, 248);
	margin-top: 50px;
	line-height: 50px;
	text-indent: 30px;
	font-weight: 545;
}
li {
	list-style: none;
	width: 640px;
	font-size: 22px;
	margin: 15px 30px;
}
.message-head {
	display: flex;
}
.message-head .photo {
	width: 70px;
	height: 70px;
	background: rgb(6, 109, 134);
	display: inline-block;
	border-radius: 50%;
	text-align: center;
	line-height: 70px;
	overflow: hidden;
}
.message-head .time {
	margin-left: 12px;
}
.liuyan,
.reply p {
	width: 560px;
	/* height:76px;
        */
	line-height: 50px;
	display: block;
	background: rgb(205, 221, 248);
	font-size: 20px;
	margin-left: 80px;
	border-radius: 8px;
	text-indent: 15px;
}
// . {
//     width:60px;
//     height:30px;
//     display:block;
//     line-height:30px;
//     margin-left:580px;
//     /* margin-bottom:0px;
//     */
//     border-radius:6px;
//     outline:none;
//     font-size:15px;
//     background:rgb(169,238,255);
// }
.answer {
	width: 60px;
	height: 30px;
	display: block;
	line-height: 30px;
	margin-top: -29px;
	margin-left: 515px;
	border-radius: 6px;
	outline: none;
	font-size: 15px;
	background: rgb(169, 238, 255);
}
.popup {
	width: 100vw;
	height: 100vh;
	position: fixed;
	background: rgba(0, 0, 0, 0.3);
	left: 0;
	top: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	display: none;
}
.pop-content {
	width: 700px;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	padding-bottom: 20px;
}
.reply p {
	margin-top: 10px;
	background: rgba(100, 100, 100, 0.1);
}
</style>