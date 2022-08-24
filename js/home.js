var headHtml =
	'<div class="header"><div class="hander-left"><img src="img/logo_lan.svg" class="svgLogin" alt=""><div class="leftTitleName">EOTC</div></div><div class="rightIcon"><img src="img/headRightBtn.png" class="rightBtn openBtn" alt="" onclick="openRightNav()"><img src="img/closeNavPageBtn.png" class="rightBtn closeBtn" alt="" onclick="closeRightNav()"></div></div><div class="rightNavList"><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0101001)">EOTC简介</div><div><img src="img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0101002)">产品介绍</div><div><img src="img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0108001)">EOTC地址</div><div><img src="img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">关于我们</div><div><img src="img/down.png" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0103001)">团队介绍</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0103002)">投资机构</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">开发者</div><div><img src="img/down.png" alt="" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText"  onclick="goUrl(103011)">github</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">帮助中心</div><div><img src="img/down.png" alt="" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText"  onclick="goUrl(0105001)">新手指引</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0105002)">常见问题</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">语言</div><div><div class="dspF"><div>CN</div> <div><img src="img/down.png" alt="" class="rightIcon"></div></div></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText">简体中文 — CN</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText">English — EN</div></div></div><div class="startDapp"><div style="padding: 100px 16px 30px"><a href="https://trx.eotc.im/"><button class="startDappBtn">启动dapp</button></a></div></div></div>';
var bottomHtml =
	'<div class="bottomContent"><div class="bottomContentTop"><div class="bottomContentTopText"><div>EOTC 安全第一</div><div>通往虚拟世界的信任桥梁</div></div><div class="bottomContentTopIcon"><div><a href="https://t.me/EOTOTC"><img src="img/icon-telegram.png"></a></div><div><a href="https://twitter.com/EOTC9"><img src="img/icon-twitter.png"></a></div><div><img src="img/icon-email.png"></div></div></div><div class="bottomContentCenter"><div class="bottomContentCenterColumn"><div class="bottomCenterTitle">关于我们</div><a href="html/team.html"><div class="bottomCenterMsg">团队介绍</div></a><a href="html/investment.html"><div class="bottomCenterMsg">投资机构</div></a></div><div class="bottomContentCenterColumn"><div class="bottomCenterTitle">开发者</div><div class="bottomCenterMsg"><a href="https://github.com/EOTCOTC/">GitHub</a></div><div class="bottomCenterMsg">审计报告</div></div><div class="bottomContentCenterColumn"><div class="bottomCenterTitle">帮助中心</div><a href="html/guide/guide.html"><div class="bottomCenterMsg">新手指引</div></a><a href="html/question/question.html"><div class="bottomCenterMsg">常见问题</div></a>	</div></div><div class="bottomContentCopy"><div class="bottomCopyIcon">©</div><div class="bottomCopyText">2022年EOTC版权所有。</div></div></div>';
var rightIconState = false;

window.onload = function () {
	document.getElementById('head').innerHTML = headHtml;
	document.getElementById('bottom').innerHTML = bottomHtml;
	/**
	 * 控制首页的高度
	 */
	// let homeTop = document.documentElement.clientHeight - document.getElementById('head').getBoundingClientRect().height
	// document.getElementsByClassName('homeTop')[0].style.height = homeTop +'px'
};

function openRightNav() {
	let clientHeight = document.documentElement.clientHeight;
	console.log(clientHeight);
	document.getElementById('head').style.height = clientHeight + 'px';
	document.getElementsByClassName('openBtn')[0].style.display = 'none';
	document.getElementsByClassName('closeBtn')[0].style.display = 'block';
	document.getElementsByClassName('rightNavList')[0].style.display = 'block';
	document.getElementsByClassName('rightNavList')[0].style.display = 'block';
	document.getElementById('bottom').style.display = 'none';
	document.getElementById('content').style.display = 'none';
}

function closeRightNav() {
	document.getElementById('head').style.height = 'auto';
	document.getElementsByClassName('openBtn')[0].style.display = 'block';
	document.getElementsByClassName('closeBtn')[0].style.display = 'none';
	document.getElementsByClassName('rightNavList')[0].style.display = 'none';
	document.getElementById('bottom').style.display = 'block';
	document.getElementById('content').style.display = 'block';
}

function itemClick(num) {
	let srcLength = event.currentTarget.querySelector('.rightIcon').src.length;
	let childList = event.currentTarget.parentNode.querySelectorAll('.rightNavItemChild');
	if (event.currentTarget.querySelector('.rightIcon').src.substring(srcLength - 6) == 'up.png') {
		rightIconState = false;
		event.currentTarget.querySelector('.rightIcon').src = 'img/down.png';
		for (var i = 0; i < childList.length; i++) {
			childList[i].classList.remove('childListShow');
		}
	} else {
		rightIconState = true;
		event.currentTarget.querySelector('.rightIcon').src = 'img/up.png';
		for (var i = 0; i < childList.length; i++) {
			childList[i].classList.add('childListShow');
		}
	}
}

/**
 * 前两位 01代表首页
 * 中间两位 05导航栏列表下标
 * 后三位 001导航栏列表下标的
 */
function goUrl(num) {
	if (num == 0101001) location.href = 'html/intro.html';
	else if (num == 0101002) location.href = 'html/product.html';
	else if (num == 0108001) location.href = 'html/address.html';
	else if (num == 0103001) location.href = 'html/team.html';
	else if (num == 0103002) location.href = 'html/investment.html';
	else if (num == 0105001) location.href = 'html/guide/guide.html';
	else if (num == 0105002) location.href = 'html/question/question.html';
	else if ((num = 103011)) location.href = 'https://github.com/EOTCOTC/';
}

function goProduct(num) {
	location.href = 'html/product.html?index=' + num;
}
