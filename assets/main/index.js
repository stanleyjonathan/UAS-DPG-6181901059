System.register("chunks:///_virtual/background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,a,o,n,s,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,n=e._decorator,s=e.Prefab,c=e.instantiate,p=e.Component}],execute:function(){var u,b,d,l,h;o._RF.push({},"b1399C4pKxPpbby46Wpydcj","background",void 0);var f=n.ccclass,y=n.property;e("background",(u=f("background"),b=y({type:s}),u((h=t((l=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return t=e.call.apply(e,[this].concat(o))||this,r(t,"prefabBase",h,a(t)),t.baseNode=void 0,t}i(t,e);var o=t.prototype;return o.start=function(){this.baseNode=this.node.parent.getChildByName("5"),this.baseNode=c(this.prefabBase),this.baseNode.setParent(this.node.parent)},o.update=function(e){var t=this.baseNode.getPosition();t.x-=240*e,this.baseNode.setPosition(t),t.x<=-1280&&(t.x+=1280),this.baseNode.setPosition(t)},t}(p)).prototype,"prefabBase",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=l))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/cactus.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,s,c,o,r,a,n,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,c=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,a=t.Prefab,n=t.instantiate,u=t.Component}],execute:function(){var h,l,p,d,f,N,P;o._RF.push({},"dea1210bjRK0ZyNcRv8Wf4p","cactus",void 0);var b=r.ccclass,m=r.property;t("cactus",(h=b("cactus"),l=m({type:a}),p=m({type:a}),h((N=e((f=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,s(e,"prefabCactus",N,c(e)),s(e,"prefabBase",P,c(e)),e.cactusNode=void 0,e.baseNode=void 0,e.currentTime=0,e}i(e,t);var o=e.prototype;return o.start=function(){this.schedule(this.updateTime,1),this.cactusNode=n(this.prefabCactus),this.cactusNode.setParent(this.node.parent)},o.updateTime=function(){this.currentTime+=1},o.update=function(t){if(console.log(this.currentTime),this.currentTime<=10){var e=this.cactusNode.getPosition();e.x-=240*t,this.cactusNode.setPosition(e),e.x<=-1800&&(e.x+=2200),this.cactusNode.setPosition(e)}else if(this.currentTime>=11&&this.currentTime<=20){var i=this.cactusNode.getPosition();i.x-=260*t,this.cactusNode.setPosition(i),i.x<=-1800&&(i.x+=2200),this.cactusNode.setPosition(i)}else if(this.currentTime>=21&&this.currentTime<=30){var s=this.cactusNode.getPosition();s.x-=300*t,this.cactusNode.setPosition(s),s.x<=-1800&&(s.x+=2200),this.cactusNode.setPosition(s)}else if(this.currentTime>=31){var c=this.cactusNode.getPosition();c.x-=340*t,this.cactusNode.setPosition(c),c.x<=-1800&&(c.x+=2200),this.cactusNode.setPosition(c)}},e}(u)).prototype,"prefabCactus",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(f.prototype,"prefabBase",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/gameOver.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,a,i,n,o,r,s,d;return{setters:[function(e){t=e.inheritsLoose},function(e){a=e.cclegacy,i=e._decorator,n=e.Node,o=e.Collider2D,r=e.Contact2DType,s=e.director,d=e.Component}],execute:function(){var h;a._RF.push({},"ff7d8hVr+RH8Z4Ip+RHYevK","gameOver",void 0);var c=i.ccclass;i.property,e("gameover",c("gameover")(h=function(e){function a(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).pause=void 0,t.body=void 0,t.gameOver=!1,t.nodeGameOver=void 0,t.medal=!1,t.nodeMedal=void 0,t.restart=void 0,t}t(a,e);var i=a.prototype;return i.start=function(){this.nodeGameOver=this.node.parent.getChildByName("1").getChildByName("gameover"),this.nodeGameOver.active=!1,this.nodeMedal=this.node.parent.getChildByName("1").getChildByName("medal"),this.nodeMedal.active=!1,this.restart=this.node.parent.getChildByName("1").getChildByName("restart"),this.restart.on(n.EventType.TOUCH_END,this.onrestartClicked,this),this.restart.active=!1,this.pause=this.node.parent.getChildByName("1").getChildByName("ButtonPause").getChildByName("pause"),this.body=this.node.parent.getChildByName("1").getChildByName("body"),this.body.getComponent(o).on(r.BEGIN_CONTACT,this.onBeginContact,this)},i.onBeginContact=function(e,t,a){t.name.includes("5")||(0==this.gameOver&&(this.gameOver=!0,this.nodeGameOver.active=!0,this.medal=!0,this.nodeMedal.active=!0,s.pause(),this.pause.active=!1),this.restart&&(this.restart.active=!0))},i.onCollide=function(){},i.onrestartClicked=function(){s.resume(),s.loadScene(s.getScene().name)},i.update=function(e){},a}(d))||h);a._RF.pop()}}}));

System.register("chunks:///_virtual/GantiBG.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,a,o;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t._decorator,a=t.Node,o=t.Component}],execute:function(){var h;i._RF.push({},"d7ddcRweNhBLp0DESn/Rx5T","GantiBG",void 0);var d=n.ccclass;n.property,t("NewComponent",d("NewComponent")(h=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).bg1=void 0,e.bg2=void 0,e.button=void 0,e.head=void 0,e.head2=void 0,e.buttonC=void 0,e}e(i,t);var n=i.prototype;return n.start=function(){this.bg1=this.node.parent.getChildByName("1").getChildByName("background1"),this.bg2=this.node.parent.getChildByName("1").getChildByName("background2"),this.bg2.active=!1,this.button=this.node.parent.getChildByName("1").getChildByName("backgroundbutton"),this.button.on(a.EventType.TOUCH_END,this.onClickButtonBG,this),this.head=this.node.parent.getChildByName("1").getChildByName("body").getChildByName("Head"),this.head2=this.node.parent.getChildByName("1").getChildByName("body").getChildByName("Head2"),this.head2.active=!1,this.buttonC=this.node.parent.getChildByName("1").getChildByName("gantiChar"),this.buttonC.on(a.EventType.TOUCH_END,this.onClickButtonC,this)},n.onClickButtonBG=function(){1==this.bg1.active?(this.bg2.active=!0,this.bg1.active=!1):(this.bg1.active=!0,this.bg2.active=!1)},n.onClickButtonC=function(){1==this.head.active?(this.head2.active=!0,this.head.active=!1):(this.head.active=!0,this.head2.active=!1)},n.update=function(t){},i}(o))||h);i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GantiBG.ts","./Mobil.ts","./Pause.ts","./Waktu.ts","./background.ts","./cactus.ts","./gameOver.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Mobil.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,i,o,e,r,c,s,u,l,p;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,o=t._decorator,e=t.input,r=t.Input,c=t.Collider2D,s=t.Contact2DType,u=t.RigidBody2D,l=t.Vec2,p=t.Component}],execute:function(){var a;i._RF.push({},"43506mzv01HX5UH0bWFUZ2y","Mobil",void 0);var d=o.ccclass;o.property,t("Mobil",d("Mobil")(a=function(t){function i(){for(var n,i=arguments.length,o=new Array(i),e=0;e<i;e++)o[e]=arguments[e];return(n=t.call.apply(t,[this].concat(o))||this).speedTurun=0,n.rigid=void 0,n.isJump=!1,n}n(i,t);var o=i.prototype;return o.start=function(){e.on(r.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(c).on(s.BEGIN_CONTACT,this.onCollide,this),this.rigid=this.node.getComponent(u)},o.onCollide=function(){},o.onInputReceived=function(){this.rigid.linearVelocity=new l(0,15),this.isJump=!0},o.update=function(t){},i}(p))||a);i._RF.pop()}}}));

System.register("chunks:///_virtual/Pause.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,s,u,i,a,n;return{setters:[function(e){t=e.inheritsLoose},function(e){s=e.cclegacy,u=e._decorator,i=e.Node,a=e.director,n=e.Component}],execute:function(){var o;s._RF.push({},"4523eEJx1lMooxtzzvOhwYK","Pause",void 0);var r=u.ccclass;u.property,e("Pause",r("Pause")(o=function(e){function s(){for(var t,s=arguments.length,u=new Array(s),i=0;i<s;i++)u[i]=arguments[i];return(t=e.call.apply(e,[this].concat(u))||this).pause=void 0,t.resume=void 0,t.gamePause=!1,t}t(s,e);var u=s.prototype;return u.start=function(){this.pause=this.node.parent.getChildByName("1").getChildByName("ButtonPause").getChildByName("pause"),this.pause.on(i.EventType.TOUCH_END,this.onPauseButtonClicked,this),this.resume=this.node.parent.getChildByName("1").getChildByName("ButtonResume").getChildByName("resume"),this.resume.active=!1,this.resume.on(i.EventType.TOUCH_END,this.onResumeButtonClicked,this)},u.onResumeButtonClicked=function(){1==this.gamePause&&(a.resume(),this.resume.active=!1,this.gamePause=!1)},u.onPauseButtonClicked=function(){0==this.gamePause&&(a.pause(),this.resume.active=!0,this.gamePause=!0)},u.update=function(e){},s}(n))||o);s._RF.pop()}}}));

System.register("chunks:///_virtual/Waktu.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,n,a,o,u,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,u=t.Label,c=t.Component}],execute:function(){var l,s,p,h,m;a._RF.push({},"c3e5d5ZvmVExompH3a+XRwq","Waktu",void 0);var f=o.ccclass,d=o.property;t("Waktu",(l=f("Waktu"),s=d({type:u}),l((m=e((h=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,r(e,"timeLabel",m,n(e)),e.currentTime=0,e}i(e,t);var a=e.prototype;return a.start=function(){this.schedule(this.updateTime,1)},a.update=function(t){},a.updateTime=function(){this.currentTime+=1,this.updateTimeLabel()},a.updateTimeLabel=function(){if(this.timeLabel){var t=Math.floor(this.currentTime/60),e=this.currentTime%60,i=(t<10?"0"+t:t.toString())+":"+(e<10?"0"+e:e.toString());this.timeLabel.string=i}},e}(c)).prototype,"timeLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=h))||p));a._RF.pop()}}}));

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