window.onload = function(){
	let clientHeight = document.documentElement.clientHeight
	let bottomHeight = document.getElementById('bottom').getBoundingClientRect().height
	
	document.getElementById('content').style.paddingBottom = bottomHeight + 'px'
	if(document.getElementById('big').getBoundingClientRect().height < clientHeight){
		document.getElementById('big').style.height = clientHeight + 'px'
	}
}

function goHistory(){
	window.history.back()
}

function goHome(){
	location.href = '../../index.html'
}

