var clientHeight = document.documentElement.clientHeight
var startlist = ['空投的多久到账', '由于手机停用被销号想重新认定身份', '修改提币地址', '提币', '如何释放EOTC', '这个邀请人释放怎么释放', '登录密码忘记了，什么找回',
	'EOTC在哪里交易呢', '填收款信息时收款钱包地址怎么填', '我们用绑定，pT钱包吗，用什么链的', '申请重新认证', '我重新登录后，怎么任何信息都不显示了', '为什么实名不通过',
	'EOTC1111113030订单没有收到', '邮箱收不到验证码', '为什么我的会员系统认证信息和收款信息都提交成功了，但交易所里面的只有认证信息，收款信息连姓名也没有，填写好再怎么提交都不行',
	'冲币未到账？', '上周我已在EOTC上成功交易了一次可是我的空投到现在还没有被释放？', '您好！请问邮箱可以更改吗？，我的邮箱显示在异地登入？', 'EOTC2.0几号上线？'
]

var questionObjList = [{
	title: '空投的多久到帐？',
	content: '<div>上交易所卖一次USDT，排队释放</div>'
}, {
	title: '由于手机停用被销号想重新认定身份？',
	content: '<div>可以重新驳回身份信息</div>'
}, {
	title: '修改提币地址？',
	content: '<div>可以重新驳回身份信息</div>'
}, {
	title: '提币？',
	content: '<div>尊敬的用户：您好！你已经提交提币地址，请把提币地址发到eotcotc@gmail.com 格式如下<br />姓名：<br />UID： <br />提币地址： <br />注意：请使用与UID相对应的邮箱发。   谢谢您的配合！</div>'
}, {
	title: '如何释放EOTC？',
	content: '<div>上交易所卖一次USDT，排队释放</div>'
}, {
	title: '这个邀请人释放怎么释放？',
	content: '<div>要让邀请人上交易所卖一次USDT，排队释放</div>'
}, {
	title: '登录密码忘记了，什么找回？',
	content: '<div>邮箱账号登入重新设置</div>'
}, {
	title: 'EOTC在哪里交易呢？',
	content: '<div>2.0交易所上线就可以交易</div>'
}, {
	title: '填收款信息时收款钱包地址怎么填？',
	content: '<div>填 自己的钱包（波场TRX通道）</div>'
}, {
	title: '我们用绑定，pT钱包吗，用什么链的？',
	content: '<div>波场TRX20</div>'
}, {
	title: '申请重新认证？',
	content: '<div>ID多少帮你驳回</div>'
}, {
	title: '我重新登录后，怎么任何信息都不显示了？',
	content: '<div>刷新一下，网络延迟</div>'
}, {
	title: '为什么实名不通过？',
	content: '<div>格式不正确，或不清晰</div>'
}, {
	title: '1111113030订单没有收到？',
	content: '<div>什么时候打的钱，24放币正常</div>'
}, {
	title: '邮箱收不到验证码？',
	content: '<div>一、首先检查你的邮箱是否有效，发个邮件确认有效邮箱<br />二、现在用QQ邮箱收验证码默认是到垃圾邮箱里面，所以请到垃圾邮箱里找，因为注册的人太多，系统发送频率太高，被识别为垃圾邮件了，进到垃圾邮箱，把发送方，设置为（这不是垃圾邮件）下一次就可以正常收到邮件提示了<br />三、只发一次，只点击一次，连续点击发送验证码多次属操作有误，间隔10分钟属正常操作<br />四、清空手机缓存，也许手机储存空间已经没有了<br />五、检查手机网络，也许手机根本没网络，保持手机网络畅通<br />六、系统问题，可能此时此刻该地区或区域已经被屏蔽，请联系客服邮箱：coin@eotc.me，或电报官方群反应情况，工作时间内客服两小时内给回复。</div>'
}, {
	title: '为什么我的会员系统认证信息和收款信息都提交成功了，但交易所里面的只有认证信息，收款信息连姓名也没有，填写好再怎么提交都不行？',
	content: '<div>刷新一下换一个VPN翻墙软件</div>'
}, {
	title: '冲币未到账？',
	content: '<div>哈希提交了没，充U截发过来</div>'
}, {
	title: '上周我已在EOTC上成功交易了一次可是我的空投到现在还没有被释放？',
	content: '<div>钱包增加代币波场EOTC代币合约地址</div>'
}, {
	title: '您好！请问邮箱可以更改吗？，我的邮箱显示在异地登入？',
	content: '<div>不可以</div>'
}, {
	title: 'EOTC2.0几号上线？',
	content: '<div>APP公告栏会通知</div>'
}, ]
var list = startlist
var state = 0 //0为问题  1为详情

var contentHeight = clientHeight - document.getElementById('head').getBoundingClientRect().height - document.getElementById('bottom').getBoundingClientRect().height
document.getElementsByClassName("content")[0].style.minHeight = contentHeight + 'px'

window.onload = function() {
	// bottomPosition()
}

// function bottomPosition() {
// 	clientHeight = document.documentElement.clientHeight
// 	if (document.getElementById('big').getBoundingClientRect().height <= clientHeight) {
// 		// document.getElementsByClassName("content")[0].style.height = clientHeight-document.getElementById('head').getBoundingClientRect().height-document.getElementById('bottom').getBoundingClientRect().height + 'px'
// 	} else {
// 		document.getElementById('bottom').style.position = 'static'
// 	}
// }

function goHome(){
	location.href = '../../index.html'
}

function goHistory() {
	if(state == 1){
		goQuestion()
	}else{
		window.history.back()
	}
}

function goQuestion(){
	document.getElementsByClassName("searchInput")[0].value = '';
	searchInput(document.getElementsByClassName("searchInput")[0])
	document.getElementsByClassName("address")[0].style.display = 'none';
	document.getElementsByClassName("question")[0].style.display = 'block';
	document.getElementsByClassName("questiondetails")[0].style.display = 'none';
}

function searchInput(obj) {
	console.log(obj.value);
	let timeout;
	list = startlist
	if (obj.value == '') {
		document.getElementsByClassName("headCloseIcon")[0].style.display = 'none';
		document.getElementsByClassName("address")[0].style.display = 'none';
		document.getElementsByClassName("searchResult")[0].style.display = 'none';
	} else {
		document.getElementsByClassName("headCloseIcon")[0].style.display = 'block';
		document.getElementsByClassName("address")[0].style.display = 'flex';
		document.getElementsByClassName("searchResult")[0].style.display = 'block';
		var searchList = []
		for (var i = 0; i < list.length; i++) {
			if (list[i].indexOf(obj.value) != -1) {
				searchList.push(list[i])
			} else {

			}
		}
		list = searchList
	}
	timeout = setTimeout(function() {
		addAddress('搜索结果')
		addSearchResult(obj.value, list.length)
		goPage(1, 10);
		state = 1;
		clearTimeout(timeout)
	}, 1000)
}

function addSearchResult(str, num) {
	var searchResultMsg = "“" + str + "”的搜索结果: " + num + "条"
	document.getElementsByClassName("searchResultMsg")[0].innerText = searchResultMsg
}

function addAddress(str) {
	document.getElementsByClassName("addressName")[0].innerText = str;
}

function closeSearchValue() {
	document.getElementsByClassName("searchInput")[0].value = '';
	document.getElementsByClassName("headCloseIcon")[0].style.display = 'none'
	searchInput(document.getElementsByClassName("searchInput")[0])
}

function detailShow(num, str) {
	state = 1;
	console.log(num, str);
	document.getElementsByClassName("address")[0].style.display = 'flex';
	document.getElementsByClassName("question")[0].style.display = 'none';
	document.getElementsByClassName("questiondetails")[0].style.display = 'block';
	addAddress(str)
	document.getElementsByClassName("detailItemTitle")[0].innerText = questionObjList[num].title
	document.getElementsByClassName("detailItemContent")[0].innerHTML = questionObjList[num].content
	// this.style.display = 'block'
}

goPage(1, 10);

function goPage(pno, psize) {

	var num = list.length; //表格所有行数(所有记录数)
	var totalPage = 0; //总页数
	var pageSize = psize; //每页显示行数
	//总共分几页
	if (num / pageSize > parseInt(num / pageSize)) {
		totalPage = parseInt(num / pageSize) + 1;
	} else {
		totalPage = parseInt(num / pageSize);
	}
	var currentPage = pno; //当前页数

	var tempStr = "";
	var contentStr = "";
	var currentIndex = (currentPage - 1) * psize; //当前显示内容第一条的下标
	//查询 有数据
	if (num > 0) {
		if (num > 1) {
			if (currentIndex + 10 < num) {
				for (var index = currentIndex; index < currentIndex + 10; index++) {
					contentStr += "<div class='item' onclick='detailShow(" + index + ",\" " + list[index] + " \" )'>" + list[index] + "</div>";
				}
			} else {
				for (var index = currentIndex; index < num; index++) {
					contentStr += "<div class='item' onclick='detailShow(" + index + ",\" " + list[index] + " \" )'>" + list[index] + "</div>";
				}
			}

			if (currentPage > 1) {
				tempStr += "<div class=\"preBtn\"><a href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize +
					")\"><img src=\"../../img/leftPageIcon.png\" /></a></div>"
				for (var j = 1; j <= totalPage; j++) {
					tempStr += "<div class=\"numBtn\"><a href=\"#\" onClick=\"goPage(" + j + "," + psize + ")\">" + j +
						"</a></div>"
				}
			} else {
				tempStr += "<div class=\"preBtn\"><img src=\"../../img/leftPageIcon.png\" /></div>";
				for (var j = 1; j <= totalPage; j++) {
					tempStr += "<div class=\"numBtn\"><a href=\"#\" onClick=\"goPage(" + j + "," + psize + ")\">" + j +
						"</a></div>"
				}
			}
			if (currentPage < totalPage) {
				tempStr += "<div class=\"nextBtn\"><a href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize +
					")\"><img src=\"../../img/rightPageIcon.png\" /></a></div>";
				for (var j = 1; j <= totalPage; j++) {}
			} else {
				tempStr += "<div class=\"nextBtn\"><img src=\"../../img/rightPageIcon.png\" /></div>";
				for (var j = 1; j <= totalPage; j++) {}
			}
			document.getElementsByClassName("itemList")[0].innerHTML = contentStr;
			document.getElementsByClassName("paging")[0].innerHTML = tempStr;
		} else { //有一条数据
			contentStr += "<div class='item'>" + list[0] + "</div>";
			document.getElementsByClassName("itemList")[0].innerHTML = contentStr;
			document.getElementsByClassName("paging")[0].innerHTML = "";
		}
	} else { //查询无数据
		document.getElementsByClassName("itemList")[0].innerHTML = "";
		document.getElementsByClassName("paging")[0].innerHTML = "";

	}


	// bottomPosition()
}
