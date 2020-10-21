!function(){function t(t,n){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){u=!0,o=t},f:function(){try{s||null==a.return||a.return()}finally{if(u)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5S+f":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var a,i,r=n("EM62"),o=n("2kYt"),s=n("bFHC"),c=((i=function(){function t(e){u(this,t),this.platformLocation=e,this._text=""}return l(t,[{key:"ngOnInit",value:function(){this._text=this.example.toLowerCase().split(" ").filter((function(t){return"&"!==t})).join("-")}},{key:"getFragmentUrl",value:function(){return"".concat(this.platformLocation.pathname,"#").concat(this._text)}}]),t}()).\u0275fac=function(t){return new(t||i)(r.Nb(o.D))},i.\u0275cmp=r.Hb({type:i,selectors:[["header-link"]],inputs:{example:"example"},decls:3,vars:2,consts:[["aria-label","Link to this heading",1,"docs-markdown-a","header-link",3,"href"]],template:function(t,e){1&t&&(r.Tb(0,"a",0),r.Tb(1,"mat-icon"),r.Mc(2,"link"),r.Sb(),r.Sb()),2&t&&(r.mc("href",e.getFragmentUrl(),r.Bc),r.Cb("aria-describedby",e.example))},directives:[s.a],styles:["h1 .header-link,h2 .header-link,h3 .header-link,h4 .header-link,h5 .header-link,h6 .header-link{display:inline-flex;padding:2px 0;margin-left:-30px;color:#6e6e6e;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;vertical-align:middle}h1:hover .header-link,h2:hover .header-link,h3:hover .header-link,h4:hover .header-link,h5:hover .header-link,h6:hover .header-link{visibility:visible}h1 span,h2 span,h3 span,h4 span,h5 span,h6 span{vertical-align:middle}"],encapsulation:2}),i),f=((a=function(){function t(){u(this,t),this.text="",this.id=""}return l(t,[{key:"ngOnInit",value:function(){this.id=this.text.toLowerCase().split(" ").filter((function(t){return"&"!==t})).join("-")}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=r.Hb({type:a,selectors:[["doc-heading"]],inputs:{text:"text"},decls:4,vars:3,consts:[[3,"id"],[3,"example"]],template:function(t,e){1&t&&(r.Tb(0,"h3",0),r.Ob(1,"header-link",1),r.Tb(2,"span"),r.Mc(3),r.Sb(),r.Sb()),2&t&&(r.mc("id",e.id),r.Bb(1),r.mc("example",e.text),r.Bb(2),r.Oc(" ",e.text,""))},directives:[c],encapsulation:2}),a)},Pg5x:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var a=n("EM62"),i=n("W1gw"),r=n("cTZo"),o=n("PBFl"),s=n("Y2X+"),c=n("bFHC"),f=n("2kYt"),h=n("KZIX"),g=["demo"];function p(t,e){if(1&t){var n=a.Ub();a.Tb(0,"mat-tab",10),a.Tb(1,"div",11),a.Tb(2,"div",12),a.Tb(3,"button",13),a.ac("click",(function(){a.zc(n);var t=a.vc(8);return a.ec(2).copySource(t)})),a.Tb(4,"mat-icon"),a.Mc(5,"content_copy"),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",14),a.Ob(7,"pre",15,16),a.Sb(),a.Sb(),a.Sb()}if(2&t){var i=e.$implicit;a.mc("label",i.file),a.Bb(3),a.mc("matTooltip","Copy example source"),a.Bb(4),a.mc("innerHtml",i.content,a.Ac)}}function d(t,e){if(1&t&&(a.Tb(0,"div",8),a.Tb(1,"mat-tab-group"),a.Kc(2,p,9,3,"mat-tab",9),a.Sb(),a.Sb()),2&t){var n=a.ec();a.Bb(2),a.mc("ngForOf",n.exampleData.files)}}function v(t,e){if(1&t&&a.Ob(0,"div",17),2&t){var n=a.ec();a.mc("innerHtml",n.exampleData.description,a.Ac)}}function b(t,e){}var y=function(){var t=function(){function t(e,n,a){u(this,t),this.snackbar=e,this.copier=n,this.componentFactoryResolver=a,this.showSource=!1}return l(t,[{key:"ngOnInit",value:function(){var t=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(t)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(t){this.copier.copyText(t.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Nb(i.a),a.Nb(r.a),a.Nb(a.j))},t.\u0275cmp=a.Hb({type:t,selectors:[["example-viewer"]],viewQuery:function(t,e){var n;1&t&&a.Fc(g,!0,a.R),2&t&&a.uc(n=a.bc())&&(e.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"span"),a.Mc(3),a.Sb(),a.Ob(4,"div",2),a.Tb(5,"button",3),a.ac("click",(function(){return e.toggleSourceView()})),a.Tb(6,"mat-icon"),a.Mc(7,"code"),a.Sb(),a.Sb(),a.Sb(),a.Kc(8,d,3,1,"div",4),a.Tb(9,"div",5),a.Kc(10,v,1,1,"div",6),a.Kc(11,b,0,0,"ng-template",null,7,a.Lc),a.Sb(),a.Sb()),2&t&&(a.Bb(3),a.Nc(e.exampleData.title),a.Bb(2),a.mc("matTooltip","View source"),a.Bb(3),a.mc("ngIf",e.showSource),a.Bb(2),a.mc("ngIf",e.exampleData.description))},directives:[o.b,s.a,c.a,f.t,h.b,f.s,h.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),t}()},i8O3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/assets/i18n/",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".json";u(this,t),this.http=e,this.prefix=n,this.suffix=a}return l(t,[{key:"getTranslation",value:function(t){return this.http.get("".concat(this.prefix).concat(t).concat(this.suffix))}}]),t}()},s2Ay:function(e,i,o){"use strict";o.d(i,"a",(function(){return w})),o.d(i,"b",(function(){return X})),o.d(i,"c",(function(){return H}));var s=o("EM62"),c=o("ROBh"),f=o("9bRT"),h=o("P4Xx"),g=o("qZtG"),p=o("i9xl"),d=o("J+dc"),v=o("wqq/"),b=o("YtkY"),y=o("5uDM"),m=o("TLy2"),w=function t(){u(this,t)},k=function(){var t=function(t){a(n,t);var e=r(n);function n(){return u(this,n),e.apply(this,arguments)}return l(n,[{key:"getTranslation",value:function(t){return Object(c.a)({})}}]),n}(w);return t.\u0275fac=function(e){return L(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t}(),L=s.Vb(k),x=function t(){u(this,t)},O=function(){var t=function(){function t(){u(this,t)}return l(t,[{key:"handle",value:function(t){return t.key}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t}();function T(t){return null!=t}function C(t){return t&&"object"==typeof t&&!Array.isArray(t)}function j(t,e){var a=Object.assign({},t);return C(t)&&C(e)&&Object.keys(e).forEach((function(i){C(e[i])&&i in t?a[i]=j(t[i],e[i]):Object.assign(a,n({},i,e[i]))})),a}var _=function t(){u(this,t)},S=function(){var t=function(t){a(n,t);var e=r(n);function n(){var t;return u(this,n),(t=e.apply(this,arguments)).templateMatcher=/{{\s?([^{}\s]*)\s?}}/g,t}return l(n,[{key:"interpolate",value:function(t,e){return"string"==typeof t?this.interpolateString(t,e):"function"==typeof t?this.interpolateFunction(t,e):t}},{key:"getValue",value:function(t,e){var n="string"==typeof e?e.split("."):[e];e="";do{e+=n.shift(),!T(t)||!T(t[e])||"object"!=typeof t[e]&&n.length?n.length?e+=".":t=void 0:(t=t[e],e="")}while(n.length);return t}},{key:"interpolateFunction",value:function(t,e){return t(e)}},{key:"interpolateString",value:function(t,e){var n=this;return e?t.replace(this.templateMatcher,(function(t,a){var i=n.getValue(e,a);return T(i)?i:t})):t}}]),n}(_);return t.\u0275fac=function(e){return D(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t}(),D=s.Vb(S),P=function t(){u(this,t)},R=function(){var t=function(t){a(n,t);var e=r(n);function n(){return u(this,n),e.apply(this,arguments)}return l(n,[{key:"compile",value:function(t,e){return t}},{key:"compileTranslations",value:function(t,e){return t}}]),n}(P);return t.\u0275fac=function(e){return E(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t}(),E=s.Vb(R),M=function t(){u(this,t),this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new s.o,this.onLangChange=new s.o,this.onDefaultLangChange=new s.o},A=new s.s("USE_STORE"),V=new s.s("USE_DEFAULT_LANG"),F=new s.s("DEFAULT_LANGUAGE"),B=new s.s("USE_EXTEND"),H=function(){var e=function(){function e(t,n,a,i,r){var o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7],f=arguments.length>8?arguments[8]:void 0;u(this,e),this.store=t,this.currentLoader=n,this.compiler=a,this.parser=i,this.missingTranslationHandler=r,this.useDefaultLang=o,this.isolate=c,this.extend=l,this.pending=!1,this._onTranslationChange=new s.o,this._onLangChange=new s.o,this._onDefaultLangChange=new s.o,this._langs=[],this._translations={},this._translationRequests={},f&&this.setDefaultLang(f)}return l(e,[{key:"setDefaultLang",value:function(t){var e=this;if(t!==this.defaultLang){var n=this.retrieveTranslations(t);void 0!==n?(null==this.defaultLang&&(this.defaultLang=t),n.pipe(Object(d.a)(1)).subscribe((function(n){e.changeDefaultLang(t)}))):this.changeDefaultLang(t)}}},{key:"getDefaultLang",value:function(){return this.defaultLang}},{key:"use",value:function(t){var e=this;if(t===this.currentLang)return Object(c.a)(this.translations[t]);var n=this.retrieveTranslations(t);return void 0!==n?(this.currentLang||(this.currentLang=t),n.pipe(Object(d.a)(1)).subscribe((function(n){e.changeLang(t)})),n):(this.changeLang(t),Object(c.a)(this.translations[t]))}},{key:"retrieveTranslations",value:function(t){var e;return(void 0===this.translations[t]||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}},{key:"getTranslation",value:function(t){var e=this;this.pending=!0;var n=this.currentLoader.getTranslation(t).pipe(Object(v.a)(1),Object(d.a)(1));return this.loadingTranslations=n.pipe(Object(b.a)((function(n){return e.compiler.compileTranslations(n,t)})),Object(v.a)(1),Object(d.a)(1)),this.loadingTranslations.subscribe({next:function(n){e.translations[t]=e.extend&&e.translations[t]?Object.assign(Object.assign({},n),e.translations[t]):n,e.updateLangs(),e.pending=!1},error:function(t){e.pending=!1}}),n}},{key:"setTranslation",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e=this.compiler.compileTranslations(e,t),this.translations[t]=(n||this.extend)&&this.translations[t]?j(this.translations[t],e):e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}},{key:"getLangs",value:function(){return this.langs}},{key:"addLangs",value:function(t){var e=this;t.forEach((function(t){-1===e.langs.indexOf(t)&&e.langs.push(t)}))}},{key:"updateLangs",value:function(){this.addLangs(Object.keys(this.translations))}},{key:"getParsedResult",value:function(e,n,a){var i;if(n instanceof Array){var r,o={},s=!1,u=t(n);try{for(u.s();!(r=u.n()).done;){var l=r.value;o[l]=this.getParsedResult(e,l,a),Object(f.a)(o[l])&&(s=!0)}}catch(d){u.e(d)}finally{u.f()}if(s){var g=n.map((function(t){return Object(f.a)(o[t])?o[t]:Object(c.a)(o[t])}));return Object(h.a)(g).pipe(Object(b.a)((function(t){var e={};return t.forEach((function(t,a){e[n[a]]=t})),e})))}return o}if(e&&(i=this.parser.interpolate(this.parser.getValue(e,n),a)),void 0===i&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],n),a)),void 0===i){var p={key:n,translateService:this};void 0!==a&&(p.interpolateParams=a),i=this.missingTranslationHandler.handle(p)}return void 0!==i?i:n}},{key:"get",value:function(t,e){var n=this;if(!T(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(Object(y.a)((function(a){return a=n.getParsedResult(a,t,e),Object(f.a)(a)?a:Object(c.a)(a)})));var a=this.getParsedResult(this.translations[this.currentLang],t,e);return Object(f.a)(a)?a:Object(c.a)(a)}},{key:"getStreamOnTranslationChange",value:function(t,e){var n=this;if(!T(t)||!t.length)throw new Error('Parameter "key" required');return Object(g.a)(Object(p.a)((function(){return n.get(t,e)})),this.onTranslationChange.pipe(Object(m.a)((function(a){var i=n.getParsedResult(a.translations,t,e);return"function"==typeof i.subscribe?i:Object(c.a)(i)}))))}},{key:"stream",value:function(t,e){var n=this;if(!T(t)||!t.length)throw new Error('Parameter "key" required');return Object(g.a)(Object(p.a)((function(){return n.get(t,e)})),this.onLangChange.pipe(Object(m.a)((function(a){var i=n.getParsedResult(a.translations,t,e);return Object(f.a)(i)?i:Object(c.a)(i)}))))}},{key:"instant",value:function(t,e){if(!T(t)||!t.length)throw new Error('Parameter "key" required');var n=this.getParsedResult(this.translations[this.currentLang],t,e);if(Object(f.a)(n)){if(t instanceof Array){var a={};return t.forEach((function(e,n){a[t[n]]=t[n]})),a}return t}return n}},{key:"set",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.currentLang;this.translations[n][t]=this.compiler.compile(e,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}},{key:"changeLang",value:function(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),null==this.defaultLang&&this.changeDefaultLang(t)}},{key:"changeDefaultLang",value:function(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}},{key:"reloadLang",value:function(t){return this.resetLang(t),this.getTranslation(t)}},{key:"resetLang",value:function(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}},{key:"getBrowserLang",value:function(){if("undefined"!=typeof window&&void 0!==window.navigator){var t=window.navigator.languages?window.navigator.languages[0]:null;return void 0!==(t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage)?(-1!==t.indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),t):void 0}}},{key:"getBrowserCultureLang",value:function(){if("undefined"!=typeof window&&void 0!==window.navigator){var t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}}},{key:"onTranslationChange",get:function(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}},{key:"onLangChange",get:function(){return this.isolate?this._onLangChange:this.store.onLangChange}},{key:"onDefaultLangChange",get:function(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}},{key:"defaultLang",get:function(){return this.isolate?this._defaultLang:this.store.defaultLang},set:function(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}},{key:"currentLang",get:function(){return this.isolate?this._currentLang:this.store.currentLang},set:function(t){this.isolate?this._currentLang=t:this.store.currentLang=t}},{key:"langs",get:function(){return this.isolate?this._langs:this.store.langs},set:function(t){this.isolate?this._langs=t:this.store.langs=t}},{key:"translations",get:function(){return this.isolate?this._translations:this.store.translations},set:function(t){this.isolate?this._translations=t:this.store.translations=t}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Xb(M),s.Xb(w),s.Xb(P),s.Xb(_),s.Xb(x),s.Xb(V),s.Xb(A),s.Xb(B),s.Xb(F))},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac}),e}(),X=function(){var t=function(){function t(){u(this,t)}return l(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:t,providers:[e.loader||{provide:w,useClass:k},e.compiler||{provide:P,useClass:R},e.parser||{provide:_,useClass:S},e.missingTranslationHandler||{provide:x,useClass:O},M,{provide:A,useValue:e.isolate},{provide:V,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:F,useValue:e.defaultLanguage},H]}}},{key:"forChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:t,providers:[e.loader||{provide:w,useClass:k},e.compiler||{provide:P,useClass:R},e.parser||{provide:_,useClass:S},e.missingTranslationHandler||{provide:x,useClass:O},{provide:A,useValue:e.isolate},{provide:V,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:F,useValue:e.defaultLanguage},H]}}}]),t}();return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)}}),t}()}}])}();