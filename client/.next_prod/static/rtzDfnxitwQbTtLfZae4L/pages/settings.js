(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/QEs":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("1C+D"),o=n("CO7Q"),s=n("hfKm"),l=n.n(s),c=n("2Eek"),u=n.n(c),d=n("XoMD"),p=n.n(d),f=n("Jo+v"),m=n.n(f),g=n("4mXO"),h=n.n(g),v=n("pLtp"),x=n.n(v),E=n("vYYK"),y=n("0gaE"),b=n("Bxtj"),C=n("Gswr"),w=n("w2+A"),N=n("Et9M"),O=n("JxIq"),_=Object(O.a)(),j=n("ZbLY");r.a.createElement;function I(e,t){var n=x()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return m()(e,t).enumerable})),n.push.apply(n,a)}return n}var k=function(){var e=Object(y.c)(),t=e.user,n=e.setUser;if(!t)return null;var i=Object(a.useState)(t.name),o=i[0],s=i[1],c=Object(a.useCallback)(function(){return(e=o,_.post("/api/user/change-name",{name:e}).then(function(e){return e.data}).catch(function(e){throw new Error(e.response.data.message)})).then(function(e){var a=e.message;Object(j.b)("\u0423\u0441\u043f\u0435\u0448\u043d\u043e",a),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):p.a?u()(e,p()(n)):I(n).forEach(function(t){l()(e,t,m()(n,t))})}return e}({},t,{name:o}))}).catch(function(e){var t=e.message;return Object(j.a)("\u041e\u0448\u0438\u0431\u043a\u0430",t)});var e},[o]),d=Object(a.useCallback)(function(e){e.target.value.length<=15&&s(e.target.value)},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.b,{size:N.a.lg},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement(b.d,null,r.a.createElement(b.c,{inline:!0},"Email:"),r.a.createElement(b.e,null,t.email)),r.a.createElement(b.d,{margin:30},r.a.createElement(b.c,{inline:!0},"\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c:"),r.a.createElement(b.e,null,r.a.createElement(b.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",onChange:d,value:o}),r.a.createElement(b.b,null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 15"))),r.a.createElement(w.a,{onClick:c},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};r.a.createElement,t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(k,null),r.a.createElement(o.a,null))}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var a=n("Y7ZC"),r=n("uplh"),i=n("NsO/"),o=n("vwuL"),s=n("IP1Z");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,a=i(e),l=o.f,c=r(a),u={},d=0;c.length>d;)void 0!==(n=l(a,t=c[d++]))&&s(u,t,n);return u}})},Bxtj:function(e,t,n){"use strict";var a=n("kOwS"),r=n("q1tI"),i=n.n(r),o=n("vOnD"),s=o.default.input.withConfig({displayName:"styled__InputHost",componentId:"lhgui9-0"})(["width:100%;padding:8px;box-sizing:border-box;font-size:20px;font-family:'Nunito',sans-serif;max-width:400px;"]),l=o.default.div.withConfig({displayName:"styled__InputRowHost",componentId:"lhgui9-1"})(["margin-bottom:","px;display:flex;align-items:center;"],function(e){return e.margin||12}),c=o.default.div.withConfig({displayName:"styled__InputLabelHost",componentId:"lhgui9-2"})(["margin-bottom:4px;margin-right:20px;"]),u=o.default.label.withConfig({displayName:"styled__InputInlineLabel",componentId:"lhgui9-3"})(["flex:0 0 20%;"]),d=o.default.div.withConfig({displayName:"styled__InputHelp",componentId:"lhgui9-4"})(["padding-top:8px;font-size:16px;color:silver;"]),p=o.default.div.withConfig({displayName:"styled__InputValue",componentId:"lhgui9-5"})(["flex:1 1 auto;"]);n.d(t,"a",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return p});i.a.createElement;var f=function(e){return i.a.createElement(s,e)},m=(Object(r.forwardRef)(function(e,t){return i.a.createElement(s,Object(a.a)({},e,{ref:t}))}),function(e){var t=e.children,n=e.margin;return i.a.createElement(l,{margin:n},t)}),g=function(e){var t=e.children;return e.inline?i.a.createElement(u,null,t):i.a.createElement(c,null,t)}},CO7Q:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("FkUK"),o=n("vOnD"),s=n("C/iq");var l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c=n("OXR1"),u=a.forwardRef(function(e,t){return a.createElement(c.a,l({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 50 50"},e,{ref:t}),a.createElement("path",{d:"M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z",key:"k0"}),a.createElement("path",{d:"M32.283 16.302l1.414 1.415-15.98 15.98-1.414-1.414z",key:"k1"}),a.createElement("path",{d:"M17.717 16.302l15.98 15.98-1.414 1.415-15.98-15.98z",key:"k2"}))});u.displayName="CloseO";var d=o.default.div.withConfig({displayName:"styled__ChatContainer",componentId:"sc-28n2x1-0"})(["position:fixed;bottom:110px;right:0;@media ","{bottom:66px;}"],s.b.mobile),p=o.default.div.withConfig({displayName:"styled__ChatHeader",componentId:"sc-28n2x1-1"})(["width:80px;height:80px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:",";padding:10px;font-family:'Neucha',cursive;position:relative;cursor:pointer;"," transition:background-color 0.3s ease-in-out;&:hover{background-color:#005e7d;}"],s.c.primary,s.e.simple),f=o.default.div.withConfig({displayName:"styled__ChatHeaderInner",componentId:"sc-28n2x1-2"})(["width:85%;height:85%;border-radius:50%;background-color:silver;transition:all 0.3s ease-in-out;&:hover{width:98%;height:98%;}"]),m=o.default.div.withConfig({displayName:"styled__ChatInner",componentId:"sc-28n2x1-3"})(["border:1px solid silver;border-radius:2px;"," ",""],s.e.small,s.a.fade),g=o.default.div.withConfig({displayName:"styled__ChatToolBar",componentId:"sc-28n2x1-4"})(["border-top:1px solid silver;flex:0 0 40px;display:flex;align-items:center;background-color:white;"]),h=o.default.input.withConfig({displayName:"styled__ChatInput",componentId:"sc-28n2x1-5"})(["font-size:18px;padding:10px;padding-right:24px;margin:10px;border:solid 1px ",";::placeholder{color:",";}"],s.c.primary,s.c.plaseholder),v=o.default.div.withConfig({displayName:"styled__ChatInputWrapper",componentId:"sc-28n2x1-6"})(["flex:1 1 auto;"]),x=o.default.div.withConfig({displayName:"styled__ChatAction",componentId:"sc-28n2x1-7"})(["flex:0 0 auto;padding:5px 12px;color:",";cursor:pointer;"],s.c.primary),E=Object(o.default)(u).withConfig({displayName:"styled__CloseIcon",componentId:"sc-28n2x1-8"})(["color:",";width:32px;position:absolute;left:-37px;cursor:pointer;background-color:white;"],s.c.primary),y=o.default.div.withConfig({displayName:"styled__MessagesContainer",componentId:"sc-28n2x1-9"})(["display:flex;flex-direction:column;justify-content:flex-end;padding:12px;background-color:#e2e2e2;height:100%;"]),b=o.default.div.withConfig({displayName:"styled__ContentWrapper",componentId:"sc-28n2x1-10"})(["height:400px;flex:1 1 auto;overflow-y:scroll;"]),C=o.default.div.withConfig({displayName:"styled__ChatMessage",componentId:"sc-28n2x1-11"})(["display:flex;margin-bottom:8px;"]),w=o.default.div.withConfig({displayName:"styled__MessageInfo",componentId:"sc-28n2x1-12"})(["flex-basis:30%;"]),N=o.default.div.withConfig({displayName:"styled__MessageDate",componentId:"sc-28n2x1-13"})(["font-size:8px;"]),O=o.default.div.withConfig({displayName:"styled__MessageAuthor",componentId:"sc-28n2x1-14"})(["",""],function(e){return e.isMine&&Object(o.css)(["color:",";"],s.c.secondary)}),_=o.default.div.withConfig({displayName:"styled__MessageContent",componentId:"sc-28n2x1-15"})(["flex-basis:70%;"]),j=n("UIRo"),I=n("0gaE"),k=n("wx14"),M=n("zLVn"),z=n("dI71");n("17x9");function A(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var L=n("dRu9"),S=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=A(n.className,a):n.setAttribute("class",A(n.className&&n.className.baseVal||"",a)));var n,a})},B=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,r=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:a?r+"-active":n[e+"Active"],doneClassName:a?r+"-done":n[e+"Done"]}},t}Object(z.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach(function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a})}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},a&&S(e,a),r&&S(e,r),i&&S(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(M.a)(e,["classNames"]));return r.a.createElement(L.a,Object(k.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.a.Component);B.defaultProps={classNames:""},B.propTypes={};var U=B,V=n("69X/"),X=a.forwardRef(function(e,t){return a.createElement(c.a,Object(V.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{d:"M21.426 11.095l-17-8A.999.999 0 003.03 4.242L4.969 12 3.03 19.758a.998.998 0 001.396 1.147l17-8a1 1 0 000-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z",key:"k0"}))});X.displayName="Send";var D=n("UyvM"),P=o.default.div.withConfig({displayName:"styled__UsersBadgeHost",componentId:"sc-1u16bjo-0"})(["height:100%;display:flex;justify-content:center;align-items:center;"]),R=o.default.div.withConfig({displayName:"styled__UsersBadgeContent",componentId:"sc-1u16bjo-1"})(["display:flex;border-radius:8px;padding:0 8px;color:",";align-items:center;"],s.c.primary),H=o.default.div.withConfig({displayName:"styled__UsersBadgeAmount",componentId:"sc-1u16bjo-2"})(["height:12px;font-size:16px;padding-left:4px;"]),T=n("YZXH"),Y=a.forwardRef(function(e,t){return a.createElement(c.a,Object(T.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z",key:"k0"}),a.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))});Y.displayName="SupervisedUserCircle";r.a.createElement;var q=function(e){var t=e.amount;return r.a.createElement(P,null,r.a.createElement(R,null,r.a.createElement(Y,{width:36,height:36,fill:s.c.primary}),r.a.createElement(H,null,t)))},Z=n("dfwq"),F=n("JxIq"),J=Object(F.a)(),K=function(e,t){var n=Object(a.useState)(!0),r=n[0],i=n[1],o=Object(a.useState)(null),s=o[0],l=o[1],c=Object(a.useState)([]),u=c[0],d=c[1],p=Object(a.useState)(0),f=p[0],m=p[1];return Object(a.useEffect)(function(){J.get("/api/common-chat-messages").then(function(e){return e.data}).then(function(t){var n=t.messages.map(function(t){return t.isMine=t.author.email===e,t});m(t.activeUsers),d(n)}).catch(function(e){return l(e)}).finally(function(){return i(!1)});var n=function(e){return m(e)};return t.on(D.c,n),function(){t.off(D.c,n)}},[]),Object(a.useEffect)(function(){var n=function(t){t.isMine=t.author.email===e,d([].concat(Object(Z.a)(u),[t]))};return t.on(D.j,n),function(){t.off(D.j,n)}},[u]),{loading:r,messages:u,error:s,activeUsers:f}},Q=n("xBBY");n.d(t,"a",function(){return W});r.a.createElement;var W=function(){var e=Object(I.b)();if(!j.b||!e)return null;var t=Object(i.b)(),n=Object(a.useState)(!1),o=n[0],s=n[1],l=Object(a.useState)(""),c=l[0],u=l[1],k=K(e.email,t),M=k.messages,z=k.activeUsers,A=Object(a.useRef)(null),L=Object(a.useCallback)(function(){o||A&&A.current&&(setTimeout(function(){return A.current&&A.current.scrollIntoView({behavior:"smooth"})},500),s(!0))},[o]),S=Object(a.useCallback)(function(){c&&(t.emit(D.m,{author:e,content:c}),u(""))},[t,c]);return r.a.createElement(d,null,!o&&r.a.createElement(p,{onClick:L},r.a.createElement(f,null,r.a.createElement(q,{amount:z}))),r.a.createElement(U,{in:o,timeout:500},r.a.createElement(m,null,r.a.createElement(b,null,r.a.createElement(E,{onClick:function(){return s(!1)}}),r.a.createElement(y,null,M.map(function(e){return r.a.createElement(C,{key:e.id},r.a.createElement(w,null,r.a.createElement(O,{isMine:e.isMine},e.author.name,":"),r.a.createElement(N,null,Object(Q.a)(e.date))),r.a.createElement(_,null,e.content))}),r.a.createElement("div",{ref:A}))),r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(h,{value:c,placeholder:"\u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(e){return function(e){return u(e.currentTarget.value)}(e)}})),r.a.createElement(x,{onClick:S},r.a.createElement(X,{width:24}))))))}},XoMD:function(e,t,n){e.exports=n("hYAz")},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},kOwS:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("UXZV"),r=n.n(a);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},rrX4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n("/QEs")}])},uplh:function(e,t,n){var a=n("ar/p"),r=n("mqlF"),i=n("5K7Z"),o=n("5T2Y").Reflect;e.exports=o&&o.ownKeys||function(e){var t=a.f(i(e)),n=r.f;return n?t.concat(n(e)):t}},xBBY:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1," ").concat(t.getHours(),":").concat(function(e){var t=e.getMinutes();return t<10?"0".concat(t):t}(t))}}},[["rrX4",0,1]]]);