window.onload = function(){
	document.getElementById('head').innerHTML = headHtml
	document.getElementById('bottom').innerHTML = bottomHtml
}

function moreBtnClick () {
	document.getElementsByClassName('contentCenter')[0].style.display = 'block'
	document.getElementsByClassName('contentMore')[0].style.display = 'none'
}