/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 19 15:35
*/
KISSY.add("combobox/base",function(e,i,a,c,k,l,m){function f(b,j){var h=b.get("input");if(b.get("multiple")){var d=s(b),a=d.tokens,d=Math.max(0,d.tokenIndex),c=b.get("separator"),f=b.get("separatorType"),g=a[d];a[d]=g&&-1!=c.indexOf(g.charAt(0))?g.charAt(0):"";a[d]+=j;g=a[d+1];if(f==p&&(!g||-1==c.indexOf(g.charAt(0))))a[d]+=c.charAt(0);d=a.slice(0,d+1).join("").length;h.val(a.join(""));h.prop("selectionStart",d);h.prop("selectionEnd",d)}else h.val(j)}function g(b){var j=b.get("input").val();if(b.get("multiple")){var h=
s(b),j=h.tokens,h=h.tokenIndex,a=b.get("separator"),b=b.get("separatorType");return(j=j[h]||"")&&-1!=a.indexOf(j.charAt(0))?j.substring(1):b==p&&(0==h||-1==h)?j:m}return j}function t(){if(!this._stopNotify){var b=g(this);b===m?this.set("collapsed",!0):(this._savedInputValue=b,this.sendRequest(b))}}function q(b){var j,a,d,c=o(this,1);c.removeChildren(!0);if(b&&b.length){b=b.slice(0,this.get("maxItemCount"));a=this.get("format")?this.get("format").call(this,g(this),b):[];for(d=0;d<b.length;d++)j=b[d],
c.addChild(e.mix({xclass:"menuitem",content:j,textContent:j,value:j},a[d]));a:{d=this.get("menu");d._clearDismissTimer();r(this);this.set("collapsed",!1);b=d.get("children");j=g(this);for(a=0;a<b.length;a++)if(b[a].get("textContent")==j){d.set("highlightedItem",b[a]);break a}if(this.get("autoHighlightFirst"))for(a=0;a<b.length;a++)if(!b[a].get("disabled")){d.set("highlightedItem",b[a]);break}}}else this.set("collapsed",!0)}function o(b,j){var h=b.get("menu");if(h&&h.xclass)if(j)h=a.create(h,b),b.__set("menu",
h);else return null;return h}function r(b){if(b.get("multiple")&&b.get("alignWithCursor")){var a=s(b),h=a.tokens,d=b.get("menu"),c=a.cursorPosition,a=a.tokenIndex,b=b.get("input"),h=h.slice(0,a).join("").length;0<h&&++h;b.prop("selectionStart",h);b.prop("selectionEnd",h);h=b.prop("KsCursorOffset");b.prop("selectionStart",c);b.prop("selectionEnd",c);d.set("xy",[h.left,h.top])}else d=b.get("menu"),c=e.clone(d.get("align")),c.node=b.get("el"),e.mix(c,x,!1),d.set("align",c)}function u(){var b=this.get("input"),
a=o(this);a&&a.get("visible")?this.set("collapsed",!0):(b[0].focus(),this.sendRequest(""))}function v(b){b.preventDefault()}function s(b){for(var a=b.get("input"),c=a.val(),d=[],g=[],f=b.get("literal"),k=b.get("separator"),e=!1,b=b.get("whitespace"),a=a.prop("selectionStart"),l=-1,i=0;i<c.length;i++){var m=c.charAt(i);i==a&&(l=d.length);if(!e&&(!b&&/\s|\xa0/.test(m)&&(d.push(g.join("")),g=[]),-1!=k.indexOf(m)))d.push(g.join("")),g=[];f&&m==f&&(e=!e);g.push(m)}g.length&&d.push(g.join(""));-1==l&&(l=
d.length-1);return{tokens:d,cursorPosition:a,tokenIndex:l}}var w,p="suffix",n=i.KeyCodes,x={points:["bl","tl"],overflow:{adjustX:1,adjustY:1}};return w=a.Controller.extend({_savedInputValue:null,_stopNotify:0,bindUI:function(){this.get("input").on("valuechange",t,this)},_uiSetHasTrigger:function(b){var a=this.get("trigger");b?(a.on("click",u,this),a.on("mousedown",v)):(a.detach("click",u,this),a.detach("mousedown",v))},sendRequest:function(b){this.get("dataSource").fetchData(b,q,this)},_uiSetCollapsed:function(b){var a=
o(this);a&&(b?a.hide():(a.show(),this.get("matchElWidth")&&a.set("width",this.get("el").innerWidth()),this.get("view").setAriaOwns(a.get("el")[0].id)))},handleBlur:function(){w.superclass.handleBlur.apply(this,arguments);var a=o(this);a&&a._delayHide()},_onWindowResize:function(){r(this)},handleKeyEventInternal:function(a){this.get("input");var c=o(this);if(c){var h=this.get("updateInputOnDownUp");h&&(this._stopNotify=e.inArray(a.keyCode,[n.UP,n.DOWN,n.ESC])?1:0);var d;if(c.get("visible")){var k=
c.handleKeydown(a);h&&e.inArray(a.keyCode,[n.DOWN,n.UP])&&f(this,c.get("activeItem").get("textContent"));if(a.keyCode==n.ESC)return this.set("collapsed",!0),h&&f(this,this._savedInputValue),!0;if(a.keyCode==n.TAB&&(d=c.get("activeItem")))if(d.performActionInternal(),this.get("multiple"))return!0;return k}if(a.keyCode==n.DOWN||a.keyCode==n.UP)return this.sendRequest(g(this)),!0}},_selectItem:function(a){if(a){var c=a.get("textContent"),g=this.get("separatorType");f(this,c+(g==p?"":" "));this._savedInputValue=
c;this.fire("click",{target:a})}}},{ATTRS:{input:{view:1},trigger:{view:1},hasTrigger:{view:1},menu:{value:{xclass:"combobox-menu"},setter:function(a){a instanceof c&&a.__set("parent",this)}},collapsed:{view:1},dataSource:{setter:function(b){return a.create(b)}},maxItemCount:{value:99999},matchElWidth:{value:!0},format:{},multiple:{},separator:{value:",;"},separatorType:{value:p},whitespace:{valueFn:function(){return this.get("separatorType")==p}},updateInputOnDownUp:{value:!0},literal:{value:'"'},
alignWithCursor:{},autoHighlightFirst:{},xrender:{value:k}}},{xclass:"combobox",priority:10})},{requires:["event","component","./menu","./baseRender","input-selection"]});
KISSY.add("combobox/baseRender",function(e,i){return i.Render.extend({createDom:function(){var a,c;a=this.get("el");var k=this.get("trigger");this.get("srcNode")||(a.append('<div class="ks-combobox-input-wrap"></div>'),a=a.one(".ks-combobox-input-wrap"),c=this.get("input")||e.all('<input aria-haspopup="true" aria-combobox="list" aria-haspopup="true" role="combobox" combobox="off" class="ks-combobox-input" />'),a.append(c),this.__set("input",c));k||this.__set("trigger",e.all('<div class="ks-combobox-trigger"><div class="ks-combobox-trigger-inner">&#x25BC;</div></div>'));
this.get("trigger").unselectable()},setAriaOwns:function(a){this.get("input").attr("aria-owns",a)},getKeyEventTarget:function(){return this.get("input")},_uiSetCollapsed:function(a){this.get("input").attr("aria-expanded",a)},_uiSetHasTrigger:function(a){var c=this.get("trigger");a?this.get("el").prepend(c):c.remove()}},{ATTRS:{collapsed:{},hasTrigger:{value:!0},input:{},trigger:{}},HTML_PARSER:{input:function(a){return a.one(".ks-combobox-input")},trigger:function(a){return a.one(".ks-combobox-trigger")}}})},
{requires:["component"]});KISSY.add("combobox",function(e,i,a,c,k){a.Menu=i;a.LocalDataSource=c;a.RemoteDataSource=k;return a},{requires:["combobox/menu","combobox/base","combobox/LocalDataSource","combobox/RemoteDataSource"]});
KISSY.add("combobox/LocalDataSource",function(e,i){function a(){a.superclass.constructor.apply(this,arguments)}a.ATTRS={data:{value:[]},parse:{value:function(a,k){var l=[],i=0;if(!a)return k;e.each(k,function(f){-1!=f.indexOf(a)&&l.push(f);i++});return l}}};e.extend(a,e.Base,{fetchData:function(a,k,e){var i=this.get("parse"),f=this.get("data"),f=i(a,f);k.call(e,f)}});i.Manager.setConstructorByXClass("combobox-LocalDataSource",a);return a},{requires:["component"]});
KISSY.add("combobox/menu",function(e,i,a,c){function k(){this._dismissTimer&&(clearTimeout(this._dismissTimer),this._dismissTimer=null)}function l(){var a=this;a._dismissTimer=setTimeout(function(){a.get("parent").set("collapsed",!0)},30)}var m=e.Env.host,a=a.PopupMenu.extend({bindUI:function(){var a=this;a.on("click",function(c){var c=c.target,f=a.get("parent");f._stopNotify=1;f._selectItem(c);f.set("collapsed",!0);setTimeout(function(){f._stopNotify=0},50)});i.on(m,"resize",f,a);var c=a.get("el"),
e=a.get("contentEl");c.on("focusin",k,a);c.on("focusout",l,a);e.on("mouseover",function(){a.get("parent").get("input")[0].focus();k.call(a)})},_clearDismissTimer:k,_delayHide:l,destructor:function(){i.remove(m,"resize",f,this)}},{ATTRS:{head:{view:1},foot:{view:1},xrender:{value:c}}},{xclass:"combobox-menu",priority:40}),f=e.buffer(function(){this.get("visible")&&this.get("parent")._onWindowResize()},50);return a},{requires:["event","menu","./menuRender"]});
KISSY.add("combobox/menuRender",function(e,i){var a=e.all;return i.PopupMenu.Render.extend({createDom:function(){var c=this.get("el"),e=a("<div class='ks-combobox-menu-header'></div>"),i=a("<div class='ks-combobox-menu-footer'></div>");c.prepend(e);c.append(i);this.__set("head",e);this.__set("foot",i)}},{ATTRS:{head:{view:1},foot:{view:1}}})},{requires:["menu"]});
KISSY.add("combobox/RemoteDataSource",function(e,i,a){function c(){c.superclass.constructor.apply(this,arguments);this.io=null;this.caches={}}c.ATTRS={paramName:{},allowEmpty:{},cache:{},parse:{},xhrCfg:{value:{}}};e.extend(c,e.Base,{fetchData:function(a,c,e){var f=this,g,t=f.get("paramName"),q=f.get("parse"),o=f.get("cache"),r=f.get("allowEmpty");f.io&&(f.io.abort(),f.io=null);if(!a&&!0!==r)return c.call(e,[]);if(o&&(g=f.caches[a]))return c.call(e,g);g=f.get("xhrCfg");g.data=g.data||{};g.data[t]=
a;g.success=function(g){q&&(g=q(a,g));f.__set("data",g);o&&(f.caches[a]=g);c.call(e,g)};f.io=i(g)}});a.Manager.setConstructorByXClass("combobox-RemoteDataSource",c);return c},{requires:["ajax","component"]});