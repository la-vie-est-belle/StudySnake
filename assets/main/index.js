System.register("chunks:///_virtual/Config.ts",["cc"],(function(c){"use strict";var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"053c9odbpVCuKYBnaxCGG6x","Config",void 0);c("config",{rows:16,cols:30});t._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Snake.ts","./Word.ts","./Config.ts"],(function(t){"use strict";var e,i,n,o,r,s,a,l,h,u,c,d,p,f,g,b,y,m,w,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Label,l=t.Prefab,h=t.Node,u=t.AudioClip,c=t.UITransform,d=t.tween,p=t.Vec3,f=t.director,g=t.instantiate,b=t.AudioSource,y=t.Component},function(t){m=t.Snake},function(t){w=t.word},function(t){v=t.config}],execute:function(){var C,W,A,k,S,B,P,z,L,M,O,x,R,I,F,H,G,_,D,T,Y,j,N,U,V,q,E,J,K,Q,X;r._RF.push({},"94d87tb+A5Bha7CYx+Hlo5a","Game",void 0);var Z=s.ccclass,$=s.property;t("Game",(C=Z("Game"),W=$({type:a}),A=$({type:l}),k=$({type:l}),S=$({type:h}),B=$({type:h}),P=$({type:h}),z=$({type:h}),L=$({type:a}),M=$({type:h}),O=$({type:u}),x=$({type:u}),R=$({type:u}),I=$({type:u}),F=$({type:u}),C((_=e((G=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,n(e,"meaning",_,o(e)),n(e,"letterPrefab",D,o(e)),n(e,"foodPrefab",T,o(e)),n(e,"gameOver",Y,o(e)),n(e,"replayBtn",j,o(e)),n(e,"pauseBtn",N,o(e)),n(e,"resumeBtn",U,o(e)),n(e,"tip",V,o(e)),n(e,"infoBoard",q,o(e)),n(e,"btnClickAudio",E,o(e)),n(e,"loseAudio",J,o(e)),n(e,"eatAudio",K,o(e)),n(e,"winAudio",Q,o(e)),n(e,"cutAudio",X,o(e)),e.speed=.2,e.isLost=!1,e.isPaused=!1,e.letterArray=[],e.currentWord=[],e.curentFood=null,e.wordCopy=[],e.level=0,e.audioSource=new b,e.rows=v.rows,e.cols=v.cols,e.canvasWidth=0,e.canvasHeight=0,e.blockWidth=0,e}i(e,t);var r=e.prototype;return r.start=function(){this.canvasWidth=this.getComponent(c).width,this.canvasHeight=this.getComponent(c).height,this.blockWidth=this.canvasWidth/this.cols,this.makeCopy(),this.getRandomWord(),this.spawnFood()},r.setSpeed=function(){this.level>=2&&this.level<5?this.speed=.15:this.level>=5&&this.level<10?this.speed:this.level>=10&&this.level<20?this.speed=.08:this.level>=20&&(this.speed=.07)},r.makeCopy=function(){for(var t=0;t<w.length;t++)this.wordCopy.push(w[t])},r.getRandomWord=function(){var t=this.wordCopy.length,e=Math.floor(Math.random()*t);this.currentWord=this.wordCopy[e],this.wordCopy.splice(e,1),this.showMeaning(this.currentWord[1]),this.spreadLetters(this.currentWord[0]),this.level+=1,this.setSpeed(),this.getComponent(m).showAllLetters()},r.showMeaning=function(t){this.meaning.string=t},r.spreadLetters=function(t){for(var e=0;e<t.length;e++)this.spawnLetter(t[e])},r.checkCorrection=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.currentWord[0][e])return console.log("游戏失败"),void this.lose("Wrong letter!\n"+(this.level-1)+" word(s) finished.");t.length==this.currentWord[0].length&&(0==this.wordCopy.length?(console.log("游戏胜利"),this.win("Congratulations!\n\nYou finished all words!")):(console.log("显示下一个单词"),this.letterArray=[],this.getRandomWord(),this.getComponent(m).lettersCollected=""))},r.lose=function(t){void 0===t&&(t=""),this.audioSource.playOneShot(this.loseAudio),this.tip.string=t,this.tip.node.setSiblingIndex(1e3),this.gameOver.setSiblingIndex(1e3),this.replayBtn.setSiblingIndex(1e3),d(this.gameOver).to(.3,{position:new p(0,120,0)},{easing:"sineOut"}).start(),d(this.replayBtn).to(.3,{position:new p(0,-120,0)},{easing:"sineOut"}).start(),this.showMeaning("答案："+this.currentWord[0]),this.isLost=!0,this.enabled=!1},r.win=function(t){void 0===t&&(t=""),this.audioSource.playOneShot(this.winAudio),this.tip.string=t,this.tip.node.setPosition(0,0,0),this.tip.node.setSiblingIndex(1e3),this.isPaused=!0,this.enabled=!1},r.pause=function(){this.enabled&&(this.isPaused=!0,this.pauseBtn.active=!1,this.resumeBtn.active=!0,this.audioSource.playOneShot(this.btnClickAudio),this.infoBoard.active=!0,this.infoBoard.setSiblingIndex(1e3))},r.resume=function(){this.enabled&&(this.isPaused=!1,this.infoBoard.active=!1,this.pauseBtn.active=!0,this.resumeBtn.active=!1,this.audioSource.playOneShot(this.btnClickAudio))},r.replay=function(){f.loadScene("game")},r.spawnLetter=function(t){var e=g(this.letterPrefab);e.getComponent(a).string=t,e.getComponent(a).fontSize=this.blockWidth-5;var i=this.getRandomPos();e.setPosition(i[0],i[1],0),this.letterArray.push(e),this.node.addChild(e)},r.spawnFood=function(){var t=g(this.foodPrefab),e=this.getRandomPos();t.setPosition(e[0],e[1],0),t.getComponent(c).width=this.blockWidth,t.getComponent(c).height=this.blockWidth,t.children[0].getComponent(c).width=this.blockWidth-2,t.children[0].getComponent(c).height=this.blockWidth-2,this.curentFood=t,this.node.addChild(t)},r.getRandomPos=function(){for(;;){for(var t=Math.floor(Math.random()*(this.cols-2))+1,e=Math.floor(Math.random()*(this.rows-1))+1,i=t*this.blockWidth-this.canvasWidth/2+this.blockWidth/2,n=e*this.blockWidth-this.canvasHeight/2+this.blockWidth/2,o=!1,r=this.getComponent(m).posArray,s=0;s<r.length;s++)if(i==r[s][0]&&n==r[s][1]){o=!0;break}if(!o)for(var a=0;a<this.letterArray.length;a++)if(i==this.letterArray[a].position.x&&n==this.letterArray[a].position.y){o=!0;break}if(!o)return[i,n]}},e}(y)).prototype,"meaning",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(G.prototype,"letterPrefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(G.prototype,"foodPrefab",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(G.prototype,"gameOver",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=e(G.prototype,"replayBtn",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(G.prototype,"pauseBtn",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=e(G.prototype,"resumeBtn",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(G.prototype,"tip",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=e(G.prototype,"infoBoard",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(G.prototype,"btnClickAudio",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=e(G.prototype,"loseAudio",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(G.prototype,"eatAudio",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(G.prototype,"winAudio",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=e(G.prototype,"cutAudio",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=G))||H));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Config.ts","./Game.ts","./Snake.ts","./Ui.ts","./Word.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Snake.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Config.ts","./Game.ts"],(function(t){"use strict";var i,e,o,s,h,r,a,n,c,l,d,k,p,g,m,u,f;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){h=t.cclegacy,r=t._decorator,a=t.Prefab,n=t.UITransform,c=t.input,l=t.Input,d=t.KeyCode,k=t.instantiate,p=t.Label,g=t.NodePool,m=t.Component},function(t){u=t.config},function(t){f=t.Game}],execute:function(){var b,y,v,W,w;h._RF.push({},"1a2f6P2oJFG9YCSG0J7wnPs","Snake",void 0);var A=r.ccclass,C=r.property;t("Snake",(b=A("Snake"),y=C({type:a}),b((w=i((W=function(t){function i(){for(var i,e=arguments.length,h=new Array(e),r=0;r<e;r++)h[r]=arguments[r];return i=t.call.apply(t,[this].concat(h))||this,o(i,"blockPrefab",w,s(i)),i.cols=u.cols,i.rows=u.rows,i.blockWidth=0,i.canvasWidth=0,i.canvasHeight=0,i.dir=null,i.dirTemp=null,i.posArray=[],i.game=new f,i.blockPool=new g,i.fixedDT=0,i.lettersCollected="",i}e(i,t);var h=i.prototype;return h.start=function(){this.game=this.getComponent(f),this.canvasWidth=this.getComponent(n).width,this.canvasHeight=this.getComponent(n).height,this.blockWidth=this.canvasWidth/this.cols,this.initKeyBoardEvdents(),this.initSnake()},h.initKeyBoardEvdents=function(){c.on(l.EventType.KEY_DOWN,this.onKeyDown,this)},h.onKeyDown=function(t){this.game.isLost||this.game.isPaused||(t.keyCode==d.KEY_A&&"右"!=this.dir||t.keyCode==d.ARROW_LEFT&&"右"!=this.dir?this.dirTemp="左":t.keyCode==d.KEY_W&&"下"!=this.dir||t.keyCode==d.ARROW_UP&&"下"!=this.dir?this.dirTemp="上":t.keyCode==d.KEY_D&&"左"!=this.dir||t.keyCode==d.ARROW_RIGHT&&"左"!=this.dir?this.dirTemp="右":t.keyCode==d.KEY_S&&"上"!=this.dir||t.keyCode==d.ARROW_DOWN&&"上"!=this.dir?this.dirTemp="下":t.keyCode==d.SPACE&&this.posArray.length>3&&(this.recycleBlock(this.posArray.pop()),this.game.audioSource.playOneShot(this.game.cutAudio)))},h.initSnake=function(){this.posArray=[];for(var t=this.setHeadPos();;){var i=Math.floor(4*Math.random());if(0==i){var e=t[0]-this.blockWidth,o=t[1],s=t[0]-2*this.blockWidth,h=t[1];this.drawBlock(e,o),this.drawBlock(s,h),this.dirTemp="右";break}if(1==i){var r=t[0]+this.blockWidth,a=t[1],n=t[0]+2*this.blockWidth,c=t[1];this.drawBlock(r,a),this.drawBlock(n,c),this.dirTemp="左";break}if(2==i){var l=t[0],d=t[1]+this.blockWidth,k=t[0],p=t[1]+2*this.blockWidth;this.drawBlock(l,d),this.drawBlock(k,p),this.dirTemp="下";break}if(3==i){var g=t[0],m=t[1]-this.blockWidth,u=t[0],f=t[1]-2*this.blockWidth;this.drawBlock(g,m),this.drawBlock(u,f),this.dirTemp="上";break}}},h.showAllLetters=function(){for(var t=[],i=0;i<this.node.children.length;i++)"Letter"==this.node.children[i].name&&t.push(this.node.children[i]);console.log(t)},h.drawBlock=function(t,i,e){void 0===e&&(e=!1);var o=this.spawnBlock();o.getComponent(n).width=this.blockWidth,o.getComponent(n).height=this.blockWidth,o.children[0].getComponent(n).width=this.blockWidth-2,o.children[0].getComponent(n).height=this.blockWidth-2,this.node.addChild(o),o.setPosition(t,i,0),e?this.posArray.unshift([t,i,o]):this.posArray.push([t,i,o])},h.setHeadPos=function(){var t=Math.floor(Math.random()*(this.cols-6))+3,i=Math.floor(Math.random()*(this.rows-6))+3,e=t*this.blockWidth-this.canvasWidth/2+this.blockWidth/2,o=i*this.blockWidth-this.canvasHeight/2+this.blockWidth/2;return this.drawBlock(e,o),[e,o]},h.spawnBlock=function(){return this.blockPool.size()>0?this.blockPool.get():k(this.blockPrefab)},h.move=function(){var t=this.posArray[0],i=[];switch(this.dir){case"左":i=[t[0]-this.blockWidth,t[1]];break;case"右":i=[t[0]+this.blockWidth,t[1]];break;case"上":i=[t[0],t[1]+this.blockWidth];break;case"下":i=[t[0],t[1]-this.blockWidth]}this.checkCollision(i),this.checkLetterAndFood(i)},h.checkLetterAndFood=function(t){if(!this.game.isPaused&&!this.game.isLost){this.drawBlock(t[0],t[1],!0);for(var i=0;i<this.game.letterArray.length;i++)if(t[0]==this.game.letterArray[i].position.x&&t[1]==this.game.letterArray[i].position.y){if(!this.game.letterArray[i].active)continue;if(console.log("吃到字母"),this.lettersCollected+=this.game.letterArray[i].getComponent(p).string,this.game.audioSource.playOneShot(this.game.eatAudio),this.posArray.length<=this.lettersCollected.length)return console.log("吃撑啦"),void this.game.lose("The snake can't eat anymore! \n"+(this.game.level-1)+" word(s) finished.");this.game.letterArray[i].active=!1,this.game.letterArray[i].removeFromParent(),this.game.checkCorrection(this.lettersCollected);break}t[0]==this.game.curentFood.position.x&&t[1]==this.game.curentFood.position.y?(this.game.audioSource.playOneShot(this.game.eatAudio),this.game.curentFood.removeFromParent(),this.game.spawnFood()):this.recycleBlock(this.posArray.pop())}},h.recycleBlock=function(t){this.blockPool.put(t[2])},h.checkCollision=function(t){for(var i=0;i<this.posArray.length;i++)if(0!=i&&t[0]==this.posArray[i][0]&&t[1]==this.posArray[i][1])return console.log("失败"),void this.game.lose("The snake just hit itself...\n"+(this.game.level-1)+" word(s) finished.");(t[0]<this.blockWidth-this.canvasWidth/2+this.blockWidth/2||t[0]>(this.cols-2)*this.blockWidth-this.canvasWidth/2+this.blockWidth/2||t[1]<this.blockWidth-this.canvasHeight/2+this.blockWidth/2||t[1]>(this.rows-1)*this.blockWidth-this.canvasHeight/2+this.blockWidth/2)&&(console.log("失败"),this.game.lose("Can't go outside.\n"+(this.game.level-1)+" word(s) finished."))},h.update=function(t){this.game.isPaused||this.game.isLost||(this.fixedDT+=t,this.fixedDT>=this.game.speed&&(this.dir=this.dirTemp,this.move(),this.fixedDT=0))},i}(m)).prototype,"blockPrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=W))||v));h._RF.pop()}}}));

System.register("chunks:///_virtual/Ui.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Config.ts","./Game.ts"],(function(t){"use strict";var e,i,n,o,r,a,s,c,l,u,h,p,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Prefab,c=t.Label,l=t.UITransform,u=t.instantiate,h=t.Component},function(t){p=t.config},function(t){f=t.Game}],execute:function(){var m,g,d,b,v,w,C;r._RF.push({},"d9999j2BPNJP791Bol/dCBE","Ui",void 0);var y=a.ccclass,P=a.property;t("Ui",(m=y("Ui"),g=P({type:s}),d=P({type:c}),m((w=e((v=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,n(e,"blockPrefab",w,o(e)),n(e,"timeLabel",C,o(e)),e.timeCount=0,e.rows=p.rows,e.cols=p.cols,e.game=new f,e}i(e,t);var r=e.prototype;return r.start=function(){this.game=this.getComponent(f),this.drawMovingArea(),this.startTime()},r.drawMovingArea=function(){for(var t=this.getComponent(l).width,e=this.getComponent(l).height,i=t/this.cols,n=1;n<this.cols-1;n++)for(var o=1;o<this.rows;o++){var r=n*i-t/2+i/2,a=o*i-e/2+i/2;this.drawBlock(i,r,a)}},r.drawBlock=function(t,e,i){var n=u(this.blockPrefab);n.getComponent(l).width=t,n.getComponent(l).height=t,n.children[0].getComponent(l).width=t-2,n.children[0].getComponent(l).height=t-2,this.node.addChild(n),n.setPosition(e,i,0)},r.startTime=function(){var t=this;this.schedule((function(){t.game.isPaused||t.game.isLost||(t.timeCount+=.01,t.timeLabel.string=t.timeCount.toFixed(2))}),.01)},r.update=function(t){},e}(h)).prototype,"blockPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(v.prototype,"timeLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=v))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/Word.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"cd63dLWfu1Cbov0ceDSwxEc","Word",void 0);e("word",[["python","python"],["integer","整型"],["float","浮点型"],["break","退出循环"],["continue","继续"],["if","如果"],["return","返回"],["class","类"],["else","否则"],["true","真"],["false","假"],["lambda","匿名函数"],["while","当...时候"],["None","空值"],["file","文件"],["directory","目录"],["deprecate","弃用"],["dimension","维度"],["function","函数"],["boolean","布尔型"],["type","类型"],["constant","常量"]]);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});