var headHtml = '<div class="header"><div class="hander-left" onclick="goHome()"><img src="../img/logo_lan.svg" class="svgLogin" alt=""><div class="leftTitleName">EOTC</div></div><div class="rightIcon"><img src="../img/headRightBtn.png" class="rightBtn openBtn" alt="" onclick="openRightNav()"><img src="../img/closeNavPageBtn.png" class="rightBtn closeBtn" alt="" onclick="closeRightNav()"></div></div><div class="rightNavList"><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0101001)">EOTC简介</div><div><img src="../img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0101002)">产品介绍</div><div><img src="../img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle"><div class="rightNavItemTitleText" onclick="goUrl(0108001)">EOTC地址</div><div><img src="../img/rightTop.png" class="rightIcon"></div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">关于我们</div><div><img src="../img/down.png" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0103001)">团队介绍</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0103002)">投资机构</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">开发者</div><div><img src="../img/down.png" alt="" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText">github</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">帮助中心</div><div><img src="../img/down.png" alt="" class="rightIcon"></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText"  onclick="goUrl(0105001)">新手指引</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText" onclick="goUrl(0105002)">常见问题</div></div></div><div class="rightNavItem"><div class="rightNavItemTitle" onclick="itemClick()"><div class="rightNavItemTitleText">语言</div><div><div class="dspF"><div>CN</div> <div><img src="../img/down.png" alt="" class="rightIcon"></div></div></div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText">简体中文 — CN</div></div><div class="rightNavItemChild"><div class="rightNavItemTitleText">English — EN</div></div></div><div class="startDapp"><div style="padding: 100px 16px 30px"><a href="https://trx.eotc.im/"><button class="startDappBtn">启动dapp</button></a></div></div></div>'
var rightIconState = false

function openRightNav(){
	let clientHeight = document.documentElement.clientHeight
	console.log(clientHeight)
	document.getElementById('head').style.height = clientHeight+'px'
	document.getElementsByClassName('openBtn')[0].style.display = 'none'
	document.getElementsByClassName('closeBtn')[0].style.display = 'block'
	document.getElementsByClassName('rightNavList')[0].style.display = 'block'
	document.getElementsByClassName('rightNavList')[0].style.display = 'block'
	document.getElementById('bottom').style.display = 'none'
	document.getElementById('content').style.display = 'none'
}

function goHome(){
	location.href = '../index.html'
}

function closeRightNav(){
	document.getElementById('head').style.height = 'auto'
	document.getElementsByClassName('openBtn')[0].style.display = 'block'
	document.getElementsByClassName('closeBtn')[0].style.display = 'none'
	document.getElementsByClassName('rightNavList')[0].style.display = 'none'
	document.getElementById('bottom').style.display = 'block'
	document.getElementById('content').style.display = 'block'
}

function itemClick(num){
	let srcLength = event.currentTarget.querySelector('.rightIcon').src.length
	let childList = event.currentTarget.parentNode.querySelectorAll('.rightNavItemChild')
	if(event.currentTarget.querySelector('.rightIcon').src.substring(srcLength-6) == 'up.png'){
		rightIconState = false
		event.currentTarget.querySelector('.rightIcon').src = '../img/down.png'
		for (var i = 0; i < childList.length; i++) {
			childList[i].classList.remove('childListShow')
		}
	}else {
		rightIconState = true
		event.currentTarget.querySelector('.rightIcon').src = '../img/up.png'
		for (var i = 0; i < childList.length; i++) {
			childList[i].classList.add('childListShow')
		}
	}
}

/**
 * 前两位 01代表首页
 * 中间两位 05导航栏列表下标
 * 后三位 001导航栏列表下标的
 */
function goUrl(num){
	if(num == 0101001)
	location.href= 'intro.html'
	else if(num == 0101002) 
	location.href= 'product.html'
	else if(num == 0103001)
	location.href= 'team.html'
	else if(num == 0103002)
	location.href= 'investment.html'
	else if(num == 0105001)
	location.href= 'guide/guide.html'
	else if(num == 0105002)
	location.href= 'question/question.html'
	else if(num == 0108001)
	location.href= 'address.html'
}
