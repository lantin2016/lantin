// JavaScript Document


window.onload = function(){
	
	var con_right = document.getElementById('con_right');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');	
	var index = 1;
	var timer;
	
	function showButton(){
		for(var i = 0;i < buttons.length;i++){
			if(buttons[i].className	== 'on'){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index - 1].className = "on";	
	}
	
	function animate(offset){
		var new_left = parseInt(list.style.left) + offset;
		list.style.left = new_left + 'px';
		
		if(new_left < -4800){
			list.style.left = -600 + 'px';	
		}
		if(new_left > -600){
			list.style.left = -4800 + 'px';	
		}		
	}
	
	function play(){
		timer = setInterval(function(){
			next.onclick();	
		},3000);	
	}
	function stop(){
		clearInterval(timer);	
	}
	//点击箭头事件
	next.onclick = function(){
		animate(-600);
		if(index == 8){
			index = 1;	
		}else{
			index += 1;
		}
		showButton();
	}
	prev.onclick = function(){
		animate(600);
		if(index == 1){
			index = 8;	
		}else{
			index -= 1;
		}
		showButton();
	}
	
	for(var i = 0;i < buttons.length;i++){
		buttons[i].onclick = function(){
			var my_index = parseInt(this.getAttribute('index'));
			offset = -600 * (my_index - index);
			animate(offset);
			index = my_index;	
			showButton();
		}	
	}
	con_right.onmouseover = stop;
	con_right.onmouseout = play;
	play();
}

