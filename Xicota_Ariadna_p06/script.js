$(document).ready(function(){
	var pos=0;

	var timer =60;

	var interval=setInterval(function(){
		timer--;
		$('.timer').text(timer);
		if(timer==0)clearInterval(interval);
	},1000);

	var Pala= function(x_start){
		this.color_pala="#336699";
		this.size={w:3, h:30};
		this.position={x:x_start,y:0};
		this.y_end=y_end;
	}

	Pala.prototype.render=function(ctx){
		ctx.fillStyle=this.color_pala;
		ctx.fillRect(	this.position.x,
				this.position.y,
				this.size.w,
				this.size.h);
	}

	Pala.prototype.goUp=function(){
		if(this.position.y>=0)this.position.y--;
	}

	Pala.prototype.goDown=function(){
		if(this.position.y-this.size.h<=this.position)this.position.y--;
	}


	Pala.prototype.setKeys(keyUp, keyDown){
		var_this=this;
		$(window).keyDown(function(event){
			console.log("Key pressed is: " +event.wich);
			if(event.which==13){
				_this.goUp();
			}else if{
				_this.goDown();
			}
		});
	}

	var Bola = function(start_pos){
		this.position={x:start_pos.x, y:start_pos.y};
		this.color:bola="#FF0000";
		this.size={w:5,h:5};
	}

	var canvas= document.getElementById("myCanvas");
	var ctx=canvas.getContext("2d");
	var palaL=new Pala(10);
	var palaR=new Pala(canvas.width-20);
	vas bola=new Bola({

	function renderCamp(ctx){
		
	}

	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
		var d = new Date();
		document.getElementById("timer").innerHTML = d.toLocaleTimeString();
	}

	function render(){
		ctx.clearRect(0,0, canvas.width, canvas.height);
		renderCamp(ctx);
		palaL.render(ctx);
		palaR.render(ctx);
	};
	setInterval(render,100);
});

