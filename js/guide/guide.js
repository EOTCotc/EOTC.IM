var stateIndex = 0;
window.onload = function () {
	let clientHeight = document.documentElement.clientHeight;
	let bottomHeight = document.getElementById('bottom').getBoundingClientRect().height;

	document.getElementById('content').style.paddingBottom = bottomHeight + 'px';
	if (document.getElementById('big').getBoundingClientRect().height < clientHeight) {
		document.getElementById('big').style.height = clientHeight + 'px';
	}

	var activeTitle = document.getElementsByClassName('productCenterTitleText');
	var activeContent = document.getElementsByClassName('productCenterContent');

	addCurClass(activeTitle, activeContent, GetQueryValue()); // 获取到传值的下标
	for (var i = 0; i < activeTitle.length; i++) {
		activeTitle[i].onclick = (function (i) {
			return function () {
				addCurClass(activeTitle, activeContent, i);
			};
		})(i);
	}
};

function goHistory() {
	window.history.back();
}

function goHome() {
	location.href = '../../index.html';
}

/***
 * num 值对应的页面
 * 1 =>  成为仲裁员
 */
function goDetail(num) {
	if (num == 1) location.href = 'aecomeArbitrator.html';
	else if (num == 2) location.href = 'getBank.html';
	else if (num == 3) location.href = 'getWechart.html';
	else if (num == 4) location.href = 'getAlipay.html';
	else if (num == 5) location.href = 'identityAuthentication.html';
	else if (num == 0101001) location.href = 'guide-login.html';
	else if (num == 0101002) location.href = 'guide-buysell.html';
	else if (num == 0101003) location.href = 'guide-processpurchase.html';
	else if (num == 0101004) location.href = 'guide-sellingprocess.html';
	else if (num == 0101005) location.href = 'identityAuthentication.html';
	else if (num == 0101006) location.href = 'guide-didcheck.html';
	else if (num == 0102001) location.href = 'guide-staking.html';
	else if (num == 0102002) location.href = 'guide-staking2.html';
	else if (num == 0102003) location.href = 'guide-staking3.html';
	else if (num == 0102004) location.href = 'guide-staking4.html';
}

function GetQueryValue() {
	var url = location.search;
	// 判断是否有参数
	if (url.indexOf('?') != -1) {
		// 从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		var str = url.substr(1);
		strs = str.split('=');
		return strs[1];
	}
	return 0;
}

function addCurClass(obj, objContent, index) {
	for (var i = 0; i < obj.length; i++) {
		obj[i].classList.remove('active');
		objContent[i].classList.remove('active');
	}
	obj[index].classList.add('active');
	objContent[index].classList.add('active');
}
