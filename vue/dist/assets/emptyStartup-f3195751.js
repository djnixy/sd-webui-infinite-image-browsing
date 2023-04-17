import{P as S,t as me,d as J,s as ue,bQ as _e,r as te,bR as ye,ah as be,u as ve,G as ae,c as G,_ as m,a as v,h as L,bS as Ce,a6 as ge,aa as ke,bT as we,b as oe,a8 as xe,i as Ie,ae as Ae,H as Pe,a3 as Oe,f as $e,T as Se,v as De,D as fe,F as Ne,aP as K,K as u,L as h,V as d,U as A,Q as E,M as g,bm as F,a$ as Ke,W as R,X as z,N as ee,R as Be,O as ie,aT as je,b0 as se,ba as qe,bb as Me,a0 as Ee}from"./index-1e01706b.js";import{B as Fe}from"./button-0e64deba.js";var Re=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:S.object,expandIconPosition:S.oneOf(me("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},pe=function(){return{openAnimation:S.object,prefixCls:String,header:S.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:S.any,panelKey:S.oneOfType([S.string,S.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function re(a){var e=a;if(!Array.isArray(e)){var t=ge(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(n){return String(n)})}const T=J({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:ue(Re(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:_e("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var n=t.attrs,r=t.slots,_=t.emit,k=te(re(ye([e.activeKey,e.defaultActiveKey])));be(function(){return e.activeKey},function(){k.value=re(e.activeKey)},{deep:!0});var P=ve("collapse",e),f=P.prefixCls,l=P.direction,y=ae(function(){var s=e.expandIconPosition;return s!==void 0?s:l.value==="rtl"?"right":"left"}),w=function(i){var c=e.expandIcon,C=c===void 0?r.expandIcon:c,p=C?C(i):v(xe,{rotate:i.isActive?90:void 0},null);return v("div",null,[Ie(Array.isArray(C)?p[0]:p)?oe(p,{class:"".concat(f.value,"-arrow")},!1):p])},x=function(i){e.activeKey===void 0&&(k.value=i);var c=e.accordion?i[0]:i;_("update:activeKey",c),_("change",c)},b=function(i){var c=k.value;if(e.accordion)c=c[0]===i?[]:[i];else{c=Ae(c);var C=c.indexOf(i),p=C>-1;p?c.splice(C,1):c.push(i)}x(c)},O=function(i,c){var C,p,B;if(!we(i)){var V=k.value,j=e.accordion,H=e.destroyInactivePanel,U=e.collapsible,W=e.openAnimation,$=String((C=i.key)!==null&&C!==void 0?C:c),D=i.props||{},I=D.header,Y=I===void 0?(p=i.children)===null||p===void 0||(B=p.header)===null||B===void 0?void 0:B.call(p):I,Z=D.headerClass,N=D.collapsible,Q=D.disabled,q=!1;j?q=V[0]===$:q=V.indexOf($)>-1;var M=N??U;(Q||Q==="")&&(M="disabled");var he={key:$,panelKey:$,header:Y,headerClass:Z,isActive:q,prefixCls:f.value,destroyInactivePanel:H,openAnimation:W,accordion:j,onItemClick:M==="disabled"?null:b,expandIcon:w,collapsible:M};return oe(i,he)}},o=function(){var i;return ke((i=r.default)===null||i===void 0?void 0:i.call(r)).map(O)};return function(){var s,i=e.accordion,c=e.bordered,C=e.ghost,p=G((s={},m(s,f.value,!0),m(s,"".concat(f.value,"-borderless"),!c),m(s,"".concat(f.value,"-icon-position-").concat(y.value),!0),m(s,"".concat(f.value,"-rtl"),l.value==="rtl"),m(s,"".concat(f.value,"-ghost"),!!C),m(s,n.class,!!n.class),s));return v("div",L(L({class:p},Ce(n)),{},{style:n.style,role:i?"tablist":null}),[o()])}}}),ze=J({compatConfig:{MODE:3},name:"PanelContent",props:pe(),setup:function(e,t){var n=t.slots,r=te(!1);return Pe(function(){(e.isActive||e.forceRender)&&(r.value=!0)}),function(){var _,k;if(!r.value)return null;var P=e.prefixCls,f=e.isActive,l=e.role;return v("div",{ref:te,class:G("".concat(P,"-content"),(_={},m(_,"".concat(P,"-content-active"),f),m(_,"".concat(P,"-content-inactive"),!f),_)),role:l},[v("div",{class:"".concat(P,"-content-box")},[(k=n.default)===null||k===void 0?void 0:k.call(n)])])}}}),X=J({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:ue(pe(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var n=t.slots,r=t.emit,_=t.attrs;Oe(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var k=ve("collapse",e),P=k.prefixCls,f=function(){r("itemClick",e.panelKey)},l=function(w){(w.key==="Enter"||w.keyCode===13||w.which===13)&&f()};return function(){var y,w,x,b,O=e.header,o=O===void 0?(y=n.header)===null||y===void 0?void 0:y.call(n):O,s=e.headerClass,i=e.isActive,c=e.showArrow,C=e.destroyInactivePanel,p=e.accordion,B=e.forceRender,V=e.openAnimation,j=e.expandIcon,H=j===void 0?n.expandIcon:j,U=e.extra,W=U===void 0?(w=n.extra)===null||w===void 0?void 0:w.call(n):U,$=e.collapsible,D=$==="disabled",I=P.value,Y=G("".concat(I,"-header"),(x={},m(x,s,s),m(x,"".concat(I,"-header-collapsible-only"),$==="header"),x)),Z=G((b={},m(b,"".concat(I,"-item"),!0),m(b,"".concat(I,"-item-active"),i),m(b,"".concat(I,"-item-disabled"),D),m(b,"".concat(I,"-no-arrow"),!c),m(b,"".concat(_.class),!!_.class),b)),N=v("i",{class:"arrow"},null);c&&typeof H=="function"&&(N=H(e));var Q=$e(v(ze,{prefixCls:I,isActive:i,forceRender:B,role:p?"tabpanel":null},{default:n.default}),[[De,i]]),q=L({appear:!1,css:!1},V);return v("div",L(L({},_),{},{class:Z}),[v("div",{class:Y,onClick:function(){return $!=="header"&&f()},role:p?"tab":"button",tabindex:D?-1:0,"aria-expanded":i,onKeypress:l},[c&&N,$==="header"?v("span",{onClick:f,class:"".concat(I,"-header-text")},[o]):o,W&&v("div",{class:"".concat(I,"-extra")},[W])]),v(Se,q,{default:function(){return[!C||i?Q:null]}})])}}});T.Panel=X;T.install=function(a){return a.component(T.name,T),a.component(X.name,X),a};var Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};const Te=Le;function ce(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(r){Ve(a,r,t[r])})}return a}function Ve(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var ne=function(e,t){var n=ce({},e,t.attrs);return v(fe,ce({},n,{icon:Te}),null)};ne.displayName="CloudDownloadOutlined";ne.inheritAttrs=!1;const He=ne;var Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const We=Ue;function de(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(r){Qe(a,r,t[r])})}return a}function Qe(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var le=function(e,t){var n=de({},e,t.attrs);return v(fe,de({},n,{icon:We}),null)};le.displayName="FileDoneOutlined";le.inheritAttrs=!1;const Ge=le;const Xe=a=>(qe("data-v-e6e54882"),a=a(),Me(),a),Je={class:"container"},Ye={class:"header"},Ze=Xe(()=>d("div",{"flex-placeholder":""},null,-1)),et={class:"last-record"},tt={class:"content"},at={key:0,class:"quick-start"},nt={key:1,class:"quick-start"},lt=["onClick"],ot={class:"quick-start__text line-clamp-1"},it={class:"quick-start"},st=["onClick"],rt={class:"quick-start__text line-clamp-1"},ct=["onClick"],dt={class:"quick-start__text line-clamp-1"},ut={key:2,class:"quick-start"},vt=["onClick"],ft={class:"quick-start__text line-clamp-1"},pt=J({__name:"emptyStartup",props:{tabIdx:null,paneIdx:null},setup(a){const e=a,t=Ne(),n={local:K("local"),"global-setting":K("globalSettings"),netdisk:K("baiduCloud"),"task-record":K("taskRecord"),"auto-upload":K("autoUpload")},r=(l,y,w=!1)=>{let x;if(l==="task-record"&&t.tabList.map(O=>O.panes).flat().find(O=>O.type==="task-record"))return je.error(K("onlyOneTaskRecordAllowed"));switch(l){case"auto-upload":case"task-record":case"log-detail":case"global-setting":case"empty":x={type:l,name:n[l],key:Date.now()+se()};break;case"local":case"netdisk":x={type:l,name:n[l],key:Date.now()+se(),target:l,path:y,walkMode:w}}const b=t.tabList[e.tabIdx];b.panes.splice(e.paneIdx,1,x),b.key=x.key},_=ae(()=>{var l;return(l=t.lastTabListRecord)==null?void 0:l[1]}),k=ae(()=>t.autoCompletedDirList.filter(({key:l})=>l==="outdir_txt2img_samples"||l==="outdir_img2img_samples"||l==="outdir_extras_samples"||l==="outdir_save"||l==="outdir_samples")),P=window.parent!==window,f=()=>window.parent.open("/baidu_netdisk");return(l,y)=>{var O;const w=Fe,x=X,b=T;return u(),h("div",Je,[d("div",Ye,[d("h1",null,A(l.$t("welcome")),1),Ze,P?(u(),h("div",{key:0,class:"last-record",onClick:f},[d("a",null,A(l.$t("openInNewWindow")),1)])):E("",!0),d("div",et,[(O=g(_))!=null&&O.tabs.length?(u(),h("a",{key:0,onClick:y[0]||(y[0]=F(o=>g(t).tabList=g(_).tabs.map(s=>g(Ke)(s,!0)),["prevent"]))},A(l.$t("restoreLastRecord")),1)):E("",!0)])]),d("div",tt,[g(k).length?(u(),h("div",at,[d("h2",null,A(l.$t("walkMode")),1),d("ul",null,[(u(!0),h(R,null,z(g(k),o=>(u(),h("li",{key:o.dir,class:"quick-start__item"},[v(w,{onClick:s=>r("local",o.dir,!0),ghost:"",type:"primary",block:""},{default:ee(()=>[Be(A(o.zh),1)]),_:2},1032,["onClick"])]))),128))])])):E("",!0),g(t).autoCompletedDirList.length?(u(),h("div",nt,[d("h2",null,A(l.$t("launchFromQuickMove")),1),d("ul",null,[(u(!0),h(R,null,z(g(t).autoCompletedDirList,o=>(u(),h("li",{key:o.key,class:"quick-start__item",onClick:F(s=>r("local",o.dir),["prevent"])},[d("span",ot,A(o.zh),1)],8,lt))),128))])])):E("",!0),d("div",it,[d("h2",null,A(l.$t("launch")),1),d("ul",null,[(u(!0),h(R,null,z(Object.keys(n).slice(0,2),o=>(u(),h("li",{key:o,class:"quick-start__item",onClick:F(s=>r(o),["prevent"])},[d("span",rt,A(n[o]),1)],8,st))),128)),v(b,{style:{"margin-top":"32px"},activeKey:g(t).baiduNetdiskPageOpened,"onUpdate:activeKey":y[1]||(y[1]=o=>g(t).baiduNetdiskPageOpened=o),bordered:!1},{default:ee(()=>[v(x,{key:"true",header:l.$t("baiduNetdiskCollapseTitle")},{default:ee(()=>[(u(!0),h(R,null,z(Object.keys(n).slice(2),o=>(u(),h("li",{key:o,class:"quick-start__item",onClick:F(s=>r(o),["prevent"])},[d("span",dt,A(n[o]),1)],8,ct))),128))]),_:1},8,["header"])]),_:1},8,["activeKey"])])]),g(t).recent.length?(u(),h("div",ut,[d("h2",null,A(l.$t("recent")),1),d("ul",null,[(u(!0),h(R,null,z(g(t).recent,o=>(u(),h("li",{key:o.key,class:"quick-start__item",onClick:F(s=>r(o.target,o.path),["prevent"])},[o.target!=="local"?(u(),ie(g(He),{key:0,class:"quick-start__icon"})):(u(),ie(g(Ge),{key:1,class:"quick-start__icon"})),d("span",ft,A(o.path),1)],8,vt))),128))])])):E("",!0)])])}}});const _t=Ee(pt,[["__scopeId","data-v-e6e54882"]]);export{_t as default};
