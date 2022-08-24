var stateIndex = 0
window.onload = function() {
	document.getElementById('head').innerHTML = headHtml
	document.getElementById('bottom').innerHTML = bottomHtml
	

	var activeTitle = document.getElementsByClassName('productCenterTitleText')
	var activeContent = document.getElementsByClassName('productCenterContent')
	
	addCurClass(activeTitle,activeContent, GetQueryValue())// 获取到传值的下标
	for (var i = 0; i < activeTitle.length; i++) {
		activeTitle[i].onclick = (function(i) {
			return function() {
				addCurClass(activeTitle, activeContent, i);
			}
		})(i);
	}
}

function GetQueryValue() {
	var url = location.search;
	// 判断是否有参数
	if (url.indexOf("?") != -1) {
		// 从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		var str = url.substr(1);
		strs = str.split("=");
		return strs[1];
	}
	return 0
}

function moreBtnClick() {
	if (stateIndex > 0) {
		document.getElementsByClassName('contentCenter')[stateIndex].style.display = 'block'
		document.getElementsByClassName('contentMore')[stateIndex].style.display = 'none'
	} else {
		document.getElementsByClassName('contentCenter')[0].style.display = 'block'
		document.getElementsByClassName('contentMore')[0].style.display = 'none'
	}
}

function addCurClass(obj, objContent, index) {
	stateIndex = index;
	for (var i = 0; i < obj.length; i++) {
		obj[i].classList.remove('active');
		objContent[i].classList.remove('active')
	}
	obj[index].classList.add('active');
	let eleLeft = obj[index].getBoundingClientRect().left
	let parentEleScrollLeft = document.getElementsByClassName('productCenterTitleList')[0].scrollLeft
	document.getElementsByClassName('productCenterTitleList')[0].scrollTo(eleLeft+parentEleScrollLeft-20,0)
	objContent[index].classList.add('active')
	document.getElementsByClassName('contentCenter')[index].style.display = 'none'
	document.getElementsByClassName('contentMore')[index].style.display = 'flex'
}
// document.getElementsByClassName('productCenterTitleText')
