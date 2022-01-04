(function(t){function n(n){for(var o,c,s=n[0],a=n[1],u=n[2],b=0,p=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(n);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,s=1;s<e.length;s++){var a=e[s];0!==i[a]&&(o=!1)}o&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},i={app:0},r=[];function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/mars-rover-mission/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=a;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"1c12":function(t,n,e){"use strict";e("7fe4")},"48e0":function(t,n,e){"use strict";e("f674")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("7a23"),i=Object(o["g"])("header",null,[Object(o["g"])("h1",{class:"title"},"Mars Rover Mission"),Object(o["g"])("p",{class:"subtitle"},"An epic journey to the red planet"),Object(o["g"])("div",{class:"planet"})],-1),r={id:"command-center"},c={id:"mars-rover"},s={key:0,id:"mission-map"};function a(t,n,e,a,u,l){var b=Object(o["q"])("CommandCenter"),p=Object(o["q"])("MarsRover"),d=Object(o["q"])("MissionMap");return Object(o["j"])(),Object(o["f"])(o["a"],null,[i,Object(o["g"])("section",r,[Object(o["i"])(b,{position:a.position,"onUpdate:position":n[0]||(n[0]=function(t){return a.position=t}),orientation:a.orientation,"onUpdate:orientation":n[1]||(n[1]=function(t){return a.orientation=t}),instruction:a.instruction,"onUpdate:instruction":n[2]||(n[2]=function(t){return a.instruction=t}),"instructions-count":a.instructionsCount,"onUpdate:instructions-count":n[3]||(n[3]=function(t){return a.instructionsCount=t}),"mission-started":a.missionStarted,"onUpdate:mission-started":n[4]||(n[4]=function(t){return a.missionStarted=t})},null,8,["position","orientation","instruction","instructions-count","mission-started"])]),Object(o["g"])("section",c,[Object(o["i"])(p,{position:a.position,"onUpdate:position":n[5]||(n[5]=function(t){return a.position=t}),instruction:a.instruction,"instructions-count":a.instructionsCount,obstacles:a.obstacles},null,8,["position","instruction","instructions-count","obstacles"])]),a.missionStarted?(Object(o["j"])(),Object(o["f"])("section",s,[Object(o["i"])(d,{obstacles:a.obstacles,"onUpdate:obstacles":n[6]||(n[6]=function(t){return a.obstacles=t}),position:a.position,orientation:a.orientation},null,8,["obstacles","position","orientation"])])):Object(o["e"])("",!0)],64)}var u=function(t){return Object(o["l"])("data-v-f2186e36"),t=t(),Object(o["k"])(),t},l={key:0,class:"step-one-wrapper"},b={class:"coordinates-container"},p=u((function(){return Object(o["g"])("label",{for:"x-axis"},"X: ",-1)})),d=u((function(){return Object(o["g"])("label",{for:"y-axis"},"Y: ",-1)})),f={class:"directions-container"},j=["for"],O=["id","value"],m=u((function(){return Object(o["g"])("button",{class:"start-btn"},"Start mission",-1)})),v={key:1,class:"step-two-wrapper"},g={class:"instructions-container"},y=["onClick"];function h(t,n,e,i,r,c){return Object(o["j"])(),Object(o["f"])(o["a"],null,[i.isStep1?(Object(o["j"])(),Object(o["f"])("div",l,[Object(o["g"])("form",{class:"form-container",onSubmit:n[3]||(n[3]=Object(o["x"])((function(t){return i.startMission(),i.updateStep()}),["prevent"]))},[Object(o["g"])("div",b,[Object(o["g"])("div",null,[p,Object(o["w"])(Object(o["g"])("input",{"onUpdate:modelValue":n[0]||(n[0]=function(t){return e.position.x=t}),type:"number",min:"0",max:"19",id:"x-axis",name:"x-axis",placeholder:"0-19",required:""},null,512),[[o["t"],e.position.x]])]),Object(o["g"])("div",null,[d,Object(o["w"])(Object(o["g"])("input",{"onUpdate:modelValue":n[1]||(n[1]=function(t){return e.position.y=t}),type:"number",min:"0",max:"19",id:"y-axis",name:"y-axis",placeholder:"0-19",required:""},null,512),[[o["t"],e.position.y]])])]),Object(o["g"])("div",f,[(Object(o["j"])(!0),Object(o["f"])(o["a"],null,Object(o["o"])(i.directions,(function(t){return Object(o["j"])(),Object(o["f"])("div",{key:t.command},[Object(o["g"])("label",{for:t.command},Object(o["r"])(t.face),9,j),Object(o["w"])(Object(o["g"])("input",{"onUpdate:modelValue":n[2]||(n[2]=function(t){return e.orientation=t}),type:"radio",name:"orientation",id:t.face,value:t.command,required:""},null,8,O),[[o["s"],e.orientation]])])})),128))]),m],32)])):Object(o["e"])("",!0),i.isStep2?(Object(o["j"])(),Object(o["f"])("div",v,[Object(o["g"])("div",g,[(Object(o["j"])(!0),Object(o["f"])(o["a"],null,Object(o["o"])(i.instructions,(function(t){return Object(o["j"])(),Object(o["f"])("div",{key:t.command},[Object(o["g"])("button",{class:"instruction-btn",onClick:function(n){return i.sendInstructions(t.command)}},Object(o["r"])(t.move),9,y)])})),128))])])):Object(o["e"])("",!0)],64)}e("a9e3");var x=e("a1e9"),w={props:{position:Object,orientation:String,instruction:String,instructionsCount:Number,missionStarted:Boolean},emits:["update:position","update:orientation","update:instruction","update:instructionsCount","update:missionStarted"],setup:function(t,n){var e=n.emit,o=Object(x["l"])(!0),i=Object(x["l"])(!1),r=[{face:"North",command:"N"},{face:"East",command:"E"},{face:"South",command:"S"},{face:"West",command:"W"}],c=[{move:"Left",command:"L"},{move:"Front",command:"F"},{move:"Back",command:"B"},{move:"Right",command:"R"}],s=function(){e("update:position",t.position),e("update:orientation",t.orientation),e("update:missionStarted",!0)},a=function(n){e("update:instruction",n),e("update:instructionsCount",t.instructionsCount+=1)},u=function(){o.value=!1,i.value=!0};return{isStep1:o,isStep2:i,directions:r,instructions:c,startMission:s,sendInstructions:a,updateStep:u}}},S=(e("b4be"),e("6b0d")),k=e.n(S);const M=k()(w,[["render",h],["__scopeId","data-v-f2186e36"]]);var C=M,A=Object(o["g"])("span",null,"Rover: ",-1);function U(t,n,e,i,r,c){var s=Object(o["q"])("AlertMessage");return Object(o["j"])(),Object(o["d"])(o["b"],{name:"fade"},{default:Object(o["v"])((function(){return[Object(o["w"])(Object(o["g"])("div",null,[Object(o["i"])(s,null,{default:Object(o["v"])((function(){return[Object(o["g"])("p",null,[A,Object(o["h"])(Object(o["r"])(i.alertMessage),1)])]})),_:1})],512),[[o["u"],i.showAlert]])]})),_:1})}var _=e("5c40"),R={class:"alert-container"},P={class:"alert-message"};function q(t,n,e,i,r,c){return Object(o["j"])(),Object(o["f"])("div",R,[Object(o["g"])("div",P,[Object(o["p"])(t.$slots,"default")])])}var F={};e("78b8");const L=k()(F,[["render",q]]);var B=L,V=function(t,n){var e;switch(n){case"F":t.y--,e="y--";break;case"B":t.y++,e="y++";break;case"R":t.x++,e="x++";break;case"L":t.x--,e="x--";break}return{lastCommand:e}},N=V,W=function(t){var n=!0;return(t.x<0||t.y<0||t.x>19||t.y>19)&&(n=!1),{isValid:n}},I=W,E=function(t,n){switch(n){case"y--":t.y++;break;case"y++":t.y--;break;case"x++":t.x--;break;case"x--":t.x++;break}},J=E,K=function(t,n,e){var o=!1,i=!0;switch(e){case"F":t.y<=19&&(o=!0);break;case"B":t.y>=0&&(o=!0);break;case"R":t.x<=19&&(o=!0);break;case"L":t.x>=0&&(o=!0);break}return o&&2===n[t.x][t.y]&&(i=!1),{isClear:i}},T=K,z={props:{position:Object,instruction:String,instructionsCount:Number,obstacles:Array},emits:["update:position"],components:{AlertMessage:B},setup:function(t,n){var e=n.emit,o=Object(x["l"])(!1),i=Object(x["l"])(""),r=Object(x["k"])({mapLimit:"'Well, it seems Mars is flat after all...'",obstacleFound:"'Can you stop pushing me to obstacles??? Geez...'"});return Object(_["K"])((function(){return t.instructionsCount}),(function(){o.value=!1;var n=N(t.position,t.instruction),c=n.lastCommand,s=I(t.position),a=s.isValid,u=T(t.position,t.obstacles,t.instruction),l=u.isClear;a&&l||(J(t.position,c),o.value=!0,i.value=a?r.obstacleFound:r.mapLimit),a&&e("update:position",t.position)})),{showAlert:o,alertMessage:i}}};e("48e0");const D=k()(z,[["render",U]]);var G=D,H={class:"orientation-container"},X={class:"orientation"},Y=Object(o["g"])("span",{class:"arrow-up"},null,-1),$={ref:"map",width:"500",height:"500"};function Q(t,n,e,i,r,c){return Object(o["j"])(),Object(o["f"])("div",null,[Object(o["g"])("div",H,[Object(o["g"])("div",X,Object(o["r"])(e.orientation),1),Y]),Object(o["g"])("canvas",$,null,512)])}var Z=e("2ef0"),tt=e.n(Z),nt=(e("cb29"),function(t,n){for(var e=new Array(t).fill(0),o=0;o<e.length;o++)e[o]=new Array(n).fill(0);return{matrix:e}}),et=nt,ot={props:{position:Object,orientation:String,obstacles:Array},emits:["update:obstacles"],setup:function(t,n){var e=n.emit,o=et(20,20),i=o.matrix,r=Object(x["l"])(null),c=function(){var t=.55*window.innerHeight,n=t/20;r.value.width=t,r.value.height=t;for(var e=r.value.getContext("2d"),o=20,c=20,s=0;s<o;s++)for(var a=0;a<c;a++){var u=s*n,l=a*n,b="rgb(226, 140, 90)";1===i[s][a]&&(b="rgb(128, 51, 16)"),2===i[s][a]&&(b="rgb(230, 210, 165)"),e.beginPath(),e.lineWidth="1",e.strokeStyle="white",e.fillStyle=b,e.fillRect(u,l,n,n),e.rect(u,l,n,n),e.stroke()}},s=function(t,n){for(var e=0;e<10;e++){var o=Math.floor(Math.random()*(n-t))+t,r=Math.floor(Math.random()*(n-t))+t;1!==i[o][r]&&(i[o][r]=2)}};return Object(_["t"])((function(){i[t.position.x][t.position.y]=1,s(1,19),e("update:obstacles",i)})),Object(_["u"])((function(){c()})),Object(_["K"])((function(){return tt.a.cloneDeep(t.position)}),(function(t,n){i[n.x][n.y]=0,i[t.x][t.y]=1,c()}),{deep:!0}),{matrix:i,map:r}}};e("1c12");const it=k()(ot,[["render",Q]]);var rt=it,ct={name:"App",components:{CommandCenter:C,MarsRover:G,MissionMap:rt},setup:function(){var t=Object(o["m"])({}),n=Object(o["n"])(""),e=Object(o["n"])(""),i=Object(o["n"])(0),r=Object(o["m"])([]),c=!1;return{position:t,orientation:n,instruction:e,instructionsCount:i,obstacles:r,missionStarted:c}}};e("eae0");const st=k()(ct,[["render",a]]);var at=st;Object(o["c"])(at).mount("#app")},"65d4":function(t,n,e){},"78b8":function(t,n,e){"use strict";e("993d")},"7fe4":function(t,n,e){},8247:function(t,n,e){},"993d":function(t,n,e){},b4be:function(t,n,e){"use strict";e("65d4")},eae0:function(t,n,e){"use strict";e("8247")},f674:function(t,n,e){}});
//# sourceMappingURL=app.92a30ad1.js.map