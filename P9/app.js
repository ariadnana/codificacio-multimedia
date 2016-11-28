/**
 * Created by Ariadna on 22/11/2016.
 */
var game = new Phaser.Game(384, 474, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('b1', 'imatges/b1.png',64,64);
    game.load.spritesheet('b2', 'imatges/b2.png',64,64);
    game.load.spritesheet('b3', 'imatges/b3.png',64,64);
    game.load.spritesheet('b4', 'imatges/b4.png',64,64);
    game.load.spritesheet('b5', 'imatges/b5.png',64,64);
    game.load.spritesheet('b6', 'imatges/b6.png',64,64);
    game.load.spritesheet('b7', 'imatges/b7.png',64,64);
    game.load.spritesheet('b8', 'imatges/b8.png',64,64);
    game.load.spritesheet('b9', 'imatges/b9.png',64,64);
    game.load.spritesheet('b0', 'imatges/b0.png',64,64);
    game.load.spritesheet('bs', 'imatges/bs.png',64,64);
    game.load.spritesheet('br', 'imatges/br.png',64,64);
    game.load.spritesheet('bm', 'imatges/bm.png',64,64);
    game.load.spritesheet('bd', 'imatges/bd.png',64,64);
    game.load.spritesheet('bi', 'imatges/bi.png',64,64);
    game.load.spritesheet('bb', 'imatges/bb.png',64,64);
}

var d="", n=0, op, text, r;

function create() {

    var style = {font: "70px Arial", fill: "#6E6E6E", align: "left"};
    text = game.add.text(10, 10, d, style);

    game.stage.backgroundColor = '#D8D8D8';
    b7 = game.add.button(10, 100, 'b7', actionOnClick, {keyname:7});
    b8 = game.add.button(110, 100, 'b8', actionOnClick, {keyname:8});
    b9 = game.add.button(210, 100, 'b9', actionOnClick, {keyname:9});
    b4 = game.add.button(10, 200, 'b4', actionOnClick, {keyname:4});
    b5 = game.add.button(110, 200, 'b5', actionOnClick, {keyname:5});
    b6 = game.add.button(210, 200, 'b6', actionOnClick, {keyname:6});
    b1 = game.add.button(10, 300, 'b1', actionOnClick, {keyname:1});
    b2 = game.add.button(110, 300, 'b2', actionOnClick,{keyname:2});
    b3 = game.add.button(210, 300, 'b3', actionOnClick, {keyname:3});
    b0 = game.add.button(110, 400, 'b0', actionOnClick, {keyname:0});
    bs = game.add.button(310, 100, 'bs', opera, {keyname:'+'});
    br = game.add.button(310, 200, 'br', opera, {keyname:'-'});
    bm = game.add.button(310, 300, 'bm', opera, {keyname:'*'});
    bd = game.add.button(310, 400, 'bd', opera, {keyname:'/'});
    bi = game.add.button(210, 400, 'bi', resol, this);
    bb = game.add.button(10, 400, 'bb', borra, this);
}

function actionOnClick () {
    text.destroy();
    d+=(this.keyname);
    create();
}

function opera(){
    if(n!=0){
        resol();
    }
    n = d;
    console.log(n);
    d = "";
    text.destroy();
    create();
    op=this.keyname;
    console.log(op);
}

function resol() {
    switch (op){
        case"+":
            r=parseInt(d)+parseInt(n);
            break;
        case"-":
            r=parseInt(n)-parseInt(d);
            break;
        case"*":
            r=parseInt(d)*parseInt(n);
            break;
        case"/":
            r=parseInt(n)/parseInt(d);
            break;
    }
    n=0;
    d=r.toString();
    console.log(d);
    text.destroy();
    create();
}

function borra() {
    n=0
    d="";
    text.destroy();
}