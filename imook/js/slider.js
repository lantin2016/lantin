// JavaScript Document




window.onload = function(){
	
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');	
	var index = 1;
	var timer;
	
	function showButton(){
		for(var i = 0;i < buttons.length;i++){
			if(buttons[i].className	== 'on'){
				buttons[i].className = " ";
				break;
			}
		}
		buttons[index - 1].className = "on";	
	}
	
	function animate(offset){
		var new_left = parseInt(list.style.left) + offset;
		list.style.left = new_left + 'px';
		
		if(new_left < -3000){
			list.style.left = -1000 + 'px';	
		}
		if(new_left > -1000){
			list.style.left = -3000 + 'px';	
		}		
	}
	
	function play(){
		timer = setInterval(function(){
			next.onclick();	
		},1800);	
	}
	function stop(){
		clearInterval(timer);	
	}
	//点击箭头事件
	next.onclick = function(){
		animate(-1000);
		if(index == 3){
			index = 1;	
		}else{
			index += 1;
		}
		showButton();
	}
	prev.onclick = function(){
		animate(1000);
		if(index == 1){
			index = 3;	
		}else{
			index -= 1;
		}
		showButton();
	}
	
	for(var i = 0;i < buttons.length;i++){
		buttons[i].onclick = function(){
			var my_index = parseInt(this.getAttribute('index'));
			offset = -1000 * (my_index - index);
			animate(offset);
			index = my_index;	
			showButton();
		}	
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	play();
}
