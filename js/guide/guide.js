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
	else if (num == 0101007) location.href = 'guide-bankCard.html';
	else if (num == 0101008) location.href = 'guide-WeChat.html';
	else if (num == 0101009) location.href = 'guide-Alipay.html';
	else if (num == 0102001) location.href = 'guide-staking.html';
	else if (num == 0102002) location.href = 'guide-staking2.html';
	else if (num == 0102003) location.href = 'guide-staking3.html';
	else if (num == 0102004) location.href = 'guide-staking4.html';
	else if (num == 0103001) location.href = 'guide-did1.html';
	else if (num == 0103002) location.href = 'guide-did2.html';
	else if (num == 0103003) location.href = 'guide-did3.html';
	else if (num == 0103004) location.href = 'guide-did4.html';
	else if (num == 0103005) location.href = 'guide-did5.html';
	else if (num == 0103006) location.href = 'guide-did6.html';
	else if (num == 0103007) location.href = 'guide-did7.html';
	else if (num == 0103008) location.href = 'guide-did8.html';
	else if (num == 0103009) location.href = 'guide-did9.html';
	else if (num == 0103010) location.href = 'guide-did10.html';
	else if (num == 0103011) location.href = 'guide-did11.html';
	else if (num == 0103012) location.href = 'guide-did12.html';
	else if (num == 0103013) location.href = 'guide-did13.html';
	else if (num == 0104001) location.href = 'guide-dao1.html';
	else if (num == 0104002) location.href = 'guide-dao2.html';
	else if (num == 0104003) location.href = 'guide-dao3.html';
	else if (num == 0104004) location.href = 'guide-dao4.html';
	else if (num == 0104005) location.href = 'guide-dao5.html';
	else if (num == 0104006) location.href = 'guide-dao6.html';
	else if (num == 0104007) location.href = 'guide-dao7.html';
	else if (num == 0104008) location.href = 'guide-dao8.html';
	else if (num == 0104009) location.href = 'guide-dao9.html';
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
	let eleLeft = obj[index].getBoundingClientRect().left;
	let parentEleScrollLeft = document.getElementsByClassName('productCenterTitleList')[0].scrollLeft;
	document.getElementsByClassName('productCenterTitleList')[0].scrollTo(eleLeft + parentEleScrollLeft - 100, 0);
	objContent[index].classList.add('active');
}
