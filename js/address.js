window.onload = function(){
	document.getElementById('head').innerHTML = headHtml;
}

function showList(obj) {
	if(obj.nextElementSibling.style.display == 'none' || obj.nextElementSibling.style.display == ''){
		obj.nextElementSibling.style.display = 'block';
		obj.getElementsByClassName('rightIcon')[0].src="../img/up.png";
	}else{
		obj.nextElementSibling.style.display = 'none';
		obj.getElementsByClassName('rightIcon')[0].src="../img/down.png";
	}
}