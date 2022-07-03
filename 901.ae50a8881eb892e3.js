(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[901],{84901:(i,o,s)=>{"use strict";s.r(o),s.d(o,{LoaderApiComponent:()=>E,LoaderModule:()=>D,LoaderOverviewComponent:()=>q});var n=s(62510),v=s(277),a=s(94650),u=s(24006),g=s(56709),j=s(71948),b=s(21281),h=s(36895),y=s(51572),C=s(73162);function _(e,l){1&e&&a._UZ(0,"div",2)}function T(e,l){if(1&e&&a._UZ(0,"mat-spinner",6),2&e){const t=a.oxw(2);a.Q6J("color",t.color)("strokeWidth",t.strokeWidth)("diameter",t.diameter)("mode",t.mode)("value",t.value)}}function M(e,l){if(1&e&&a._UZ(0,"mat-progress-bar",7),2&e){const t=a.oxw(2);a.Q6J("color",t.color)("mode",t.mode)("value",t.value)("bufferValue",t.bufferValue)}}function w(e,l){if(1&e&&(a.TgZ(0,"div",3),a.YNc(1,T,1,5,"mat-spinner",4),a.YNc(2,M,1,4,"mat-progress-bar",5),a.qZA()),2&e){const t=a.oxw();a.xp6(1),a.Q6J("ngIf","spinner"===t.type),a.xp6(1),a.Q6J("ngIf","progressbar"===t.type)}}const c=["*"];let d=(()=>{class e{constructor(t){this._changeDetectorRef=t,this.type="spinner",this.color="primary",this.mode="indeterminate",this.strokeWidth=4,this.diameter=48,this.bufferValue=0,this.value=0,this._loading=!0,this._hasBackdrop=!0}get loading(){return this._loading}set loading(t){this._loading=(0,b.Ig)(t)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(t){this._hasBackdrop=(0,b.Ig)(t)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.sBO))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mtx-loader"]],hostAttrs:[1,"mtx-loader"],hostVars:2,hostBindings:function(t,r){2&t&&a.ekj("mtx-loader-loading",r.loading)},inputs:{type:"type",color:"color",mode:"mode",strokeWidth:"strokeWidth",diameter:"diameter",bufferValue:"bufferValue",value:"value",loading:"loading",hasBackdrop:"hasBackdrop"},exportAs:["mtxLoader"],ngContentSelectors:c,decls:3,vars:2,consts:[["class","mtx-loader-backdrop",4,"ngIf"],["class","mtx-loader-main",4,"ngIf"],[1,"mtx-loader-backdrop"],[1,"mtx-loader-main"],[3,"color","strokeWidth","diameter","mode","value",4,"ngIf"],[3,"color","mode","value","bufferValue",4,"ngIf"],[3,"color","strokeWidth","diameter","mode","value"],[3,"color","mode","value","bufferValue"]],template:function(t,r){1&t&&(a.F$t(),a.YNc(0,_,1,0,"div",0),a.YNc(1,w,3,2,"div",1),a.Hsn(2)),2&t&&(a.Q6J("ngIf",r.loading&&r.hasBackdrop),a.xp6(1),a.Q6J("ngIf",r.loading))},dependencies:[h.O5,y.Ou,C.pW],styles:['.mtx-loader{position:relative;display:block;width:100%;height:100%}.mtx-loader-main{position:absolute;top:0;left:0;z-index:2;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.mtx-loader-main .mat-spinner{position:relative}.mtx-loader-main .mat-progress-bar{position:absolute;top:0;left:0;width:100%}.mtx-loader-backdrop{display:block;position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;content:""}\n'],encapsulation:2,changeDetection:0}),e})();const m={title:"Configurable loader",component:(()=>{class e{constructor(){this.loading=!0,this.hasBackdrop=!0,this.type="spinner",this.color="primary"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["loader-example"]],decls:31,vars:8,consts:[[3,"ngModel","ngModelChange"],["value","spinner"],["value","progressbar"],["value","primary"],["value","accent"],["value","warn"],[3,"loading","type","color","hasBackdrop"],[1,"loader-demo"]],template:function(t,r){1&t&&(a.TgZ(0,"h2"),a._uU(1,"Loader configuration"),a.qZA(),a.TgZ(2,"section")(3,"label"),a._uU(4,"Type:"),a.qZA(),a.TgZ(5,"mat-radio-group",0),a.NdJ("ngModelChange",function(f){return r.type=f}),a.TgZ(6,"mat-radio-button",1),a._uU(7,"spinner"),a.qZA(),a.TgZ(8,"mat-radio-button",2),a._uU(9,"progressbar"),a.qZA()()(),a.TgZ(10,"section")(11,"label"),a._uU(12,"Color:"),a.qZA(),a.TgZ(13,"mat-radio-group",0),a.NdJ("ngModelChange",function(f){return r.color=f}),a.TgZ(14,"mat-radio-button",3),a._uU(15,"primary"),a.qZA(),a.TgZ(16,"mat-radio-button",4),a._uU(17,"accent"),a.qZA(),a.TgZ(18,"mat-radio-button",5),a._uU(19,"warn"),a.qZA()()(),a.TgZ(20,"section")(21,"mat-checkbox",0),a.NdJ("ngModelChange",function(f){return r.hasBackdrop=f}),a._uU(22,"hasBackdrop"),a.qZA()(),a.TgZ(23,"section")(24,"mat-checkbox",0),a.NdJ("ngModelChange",function(f){return r.loading=f}),a._uU(25,"loading"),a.qZA()(),a.TgZ(26,"h2"),a._uU(27,"Result"),a.qZA(),a.TgZ(28,"mtx-loader",6)(29,"div",7),a._uU(30," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "),a.qZA()()),2&t&&(a.xp6(5),a.Q6J("ngModel",r.type),a.xp6(8),a.Q6J("ngModel",r.color),a.xp6(8),a.Q6J("ngModel",r.hasBackdrop),a.xp6(3),a.Q6J("ngModel",r.loading),a.xp6(4),a.Q6J("loading",r.loading)("type",r.type)("color",r.color)("hasBackdrop",r.hasBackdrop))},dependencies:[u.JJ,u.On,g.oG,j.VQ,j.U0,d],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}.loader-demo[_ngcontent-%COMP%]{padding:16px;margin:16px 0;border:1px solid}"]}),e})(),files:[{file:"app.component.html",content:s(41957),filecontent:s(15143)},{file:"app.component.ts",content:s(58426),filecontent:s(40217)},{file:"app.component.scss",content:s(68174),filecontent:s(78505)}]},A={title:"Simple loader",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["loader-example"]],decls:2,vars:0,consts:[[1,"loader-demo"]],template:function(t,r){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"mtx-loader"),a.qZA())},dependencies:[d],styles:[".loader-demo[_ngcontent-%COMP%]{height:200px;padding:0 16px;margin:16px 0;border:1px solid}"]}),e})(),files:[{file:"app.component.html",content:s(42320),filecontent:s(77326)},{file:"app.component.ts",content:s(57791),filecontent:s(65621)},{file:"app.component.scss",content:s(15415),filecontent:s(80463)}]};var O=s(22281),L=s(29241);function P(e,l){if(1&e&&(a.ynx(0),a._UZ(1,"example-viewer",2),a.BQk()),2&e){const t=l.$implicit;a.xp6(1),a.Q6J("exampleData",t)}}function Z(e,l){if(1&e&&(a.ynx(0),a.YNc(1,P,2,1,"ng-container",1),a.BQk()),2&e){const t=l.ngIf;a.xp6(1),a.Q6J("ngForOf",t.examples)}}function B(e,l){if(1&e&&(a.ynx(0),a._UZ(1,"doc-viewer",1),a.BQk()),2&e){const t=l.ngIf;a.xp6(1),a.Q6J("textContent",t.content.default)}}let q=(()=>{class e{constructor(t){this.route=t}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(n.gz))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-loader-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(t,r){1&t&&(a.YNc(0,Z,2,1,"ng-container",0),a.ALo(1,"async")),2&t&&a.Q6J("ngIf",a.lcZ(1,1,r.route.data))},dependencies:[h.sg,h.O5,O.B,h.Ov],encapsulation:2}),e})(),E=(()=>{class e{constructor(t){this.route=t}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(n.gz))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-loader-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(t,r){1&t&&(a.YNc(0,B,2,1,"ng-container",0),a.ALo(1,"async")),2&t&&a.Q6J("ngIf",a.lcZ(1,1,r.route.data))},dependencies:[h.O5,L.z,h.Ov],encapsulation:2}),e})(),D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[v.m8,n.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:q,pathMatch:"full",data:{examples:[m,A]}},{path:"api",component:E,pathMatch:"full",data:{content:s(48307)}},{path:"**",redirectTo:"overview"}])]}),e})()},29241:(i,o,s)=>{"use strict";s.d(o,{z:()=>v});var n=s(94650);let v=(()=>{class a{constructor(){this.textContent=""}ngOnDestroy(){}}return a.\u0275fac=function(g){return new(g||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(g,j){1&g&&n._UZ(0,"div",0),2&g&&n.Q6J("innerHTML",j.textContent,n.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),a})()},22281:(i,o,s)=>{"use strict";s.d(o,{B:()=>w});var n=s(94650),v=s(17009),a=s(27163),u=s(36895),g=s(4859),j=s(97392),b=s(3848),h=s(10266);const y=["demo"];function C(c,d){if(1&c){const p=n.EpF();n.TgZ(0,"mat-tab",10)(1,"div",11)(2,"div",12)(3,"button",13),n.NdJ("click",function(){n.CHM(p);const x=n.MAs(8),A=n.oxw(2);return n.KtG(A.copySource(x))}),n.TgZ(4,"mat-icon"),n._uU(5,"content_copy"),n.qZA()()(),n.TgZ(6,"div",14),n._UZ(7,"pre",15,16),n.qZA()()()}if(2&c){const p=d.$implicit;n.Q6J("label",p.file),n.xp6(3),n.Q6J("matTooltip","Copy example source"),n.xp6(4),n.Q6J("innerHtml",p.content,n.oJD)}}function _(c,d){if(1&c&&(n.TgZ(0,"div",8)(1,"mat-tab-group"),n.YNc(2,C,9,3,"mat-tab",9),n.qZA()()),2&c){const p=n.oxw();n.xp6(2),n.Q6J("ngForOf",p.exampleData.files)}}function T(c,d){if(1&c&&n._UZ(0,"div",17),2&c){const p=n.oxw();n.Q6J("innerHtml",p.exampleData.description,n.oJD)}}function M(c,d){}let w=(()=>{class c{constructor(p,m,x){this.snackbar=p,this.copier=m,this.componentFactoryResolver=x,this.showSource=!1}ngOnInit(){const p=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(p)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(p){this.copier.copyText(p.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return c.\u0275fac=function(p){return new(p||c)(n.Y36(v.ux),n.Y36(a.u),n.Y36(n._Vd))},c.\u0275cmp=n.Xpm({type:c,selectors:[["example-viewer"]],viewQuery:function(p,m){if(1&p&&n.Gf(y,7,n.s_b),2&p){let x;n.iGM(x=n.CRH())&&(m.demoRef=x.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(p,m){1&p&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span"),n._uU(3),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"button",3),n.NdJ("click",function(){return m.toggleSourceView()}),n.TgZ(6,"mat-icon"),n._uU(7,"code"),n.qZA()()(),n.YNc(8,_,3,1,"div",4),n.TgZ(9,"div",5),n.YNc(10,T,1,1,"div",6),n.YNc(11,M,0,0,"ng-template",null,7,n.W1O),n.qZA()()),2&p&&(n.xp6(3),n.Oqu(m.exampleData.title),n.xp6(2),n.Q6J("matTooltip","View source"),n.xp6(3),n.Q6J("ngIf",m.showSource),n.xp6(2),n.Q6J("ngIf",m.exampleData.description))},dependencies:[u.sg,u.O5,g.lW,j.Hw,b.SP,b.uX,h.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),c})()},41957:i=>{i.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Loader configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;spinner&quot;</span>&gt;</span>spinner<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;progressbar&quot;</span>&gt;</span>progressbar<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;hasBackdrop&quot;</span>&gt;</span>hasBackdrop<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>loading<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-loader</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span> [<span class="hljs-attr">hasBackdrop</span>]=<span class="hljs-string">&quot;hasBackdrop&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loader-demo&quot;</span>&gt;</span>\n    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam\n    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n    consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed\n    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil\n    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-loader</span>&gt;</span>\n'},42320:i=>{i.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loader-demo&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-loader</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-loader</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},68174:i=>{i.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-button-base</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5rem</span>;\n}\n\n<span class="hljs-selector-class">.loader-demo</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid;\n}\n'},15415:i=>{i.exports='<span class="hljs-selector-class">.loader-demo</span> {\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid;\n}\n'},58426:i=>{i.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemePalette</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxLoaderType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/loader&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  loading = <span class="hljs-literal">true</span>;\n  hasBackdrop = <span class="hljs-literal">true</span>;\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxLoaderType</span> = <span class="hljs-string">&#x27;spinner&#x27;</span>;\n  <span class="hljs-attr">color</span>: <span class="hljs-title class_">ThemePalette</span> = <span class="hljs-string">&#x27;primary&#x27;</span>;\n}\n'},57791:i=>{i.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n\n}\n'},48307:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n='<h1 id="loader">Loader</h1>\n<h2 id="api-reference-for-material-extensions-loader">API reference for Material Extensions Loader</h2>\n<p><code>import { MtxLoaderModule } from &apos;@ng-matero/extensions/loader&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxloader"><code>MtxLoader</code></h4>\n<p>Selector: <code>[mtx-loader]</code></p>\n<p>Exported as: <code>mtxLoader</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;spinner&apos; | &apos;progressbar&apos;</code></td>\n<td align="left">The loader type. Defaulted to <strong><code>&apos;spinner&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>loading: boolean</code></td>\n<td align="left">The loading status.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>color: ThemePalette</code></td>\n<td align="left">Theme color palette for the component.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>mode&#xFF1A;ProgressSpinnerMode | ProgressBarMode</code></td>\n<td align="left">Mode of the progress.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>value: number</code></td>\n<td align="left">Value of the progress circle or progress bar.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>strokeWidth: number</code></td>\n<td align="left">Stroke width of the progress spinner. Defaulted to <strong><code>4</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>diameter: number</code></td>\n<td align="left">The diameter of the progress spinner (will set width and height of svg). Defaulted to <strong><code>48</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>bufferValue: number</code></td>\n<td align="left">Buffer value of the progress bar. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>hasBackdrop: boolean</code></td>\n<td align="left">Whether show loader backdrop. Defaulted to <strong><code>true</code></strong>.</td>\n</tr>\n</tbody></table>\n'},15143:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n='<h2>Loader configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="spinner">spinner</mat-radio-button>\n    <mat-radio-button value="progressbar">progressbar</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="primary">primary</mat-radio-button>\n    <mat-radio-button value="accent">accent</mat-radio-button>\n    <mat-radio-button value="warn">warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="hasBackdrop">hasBackdrop</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="loading">loading</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mtx-loader [loading]="loading" [type]="type" [color]="color" [hasBackdrop]="hasBackdrop">\n  <div class="loader-demo">\n    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam\n    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n    consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed\n    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil\n    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n  </div>\n</mtx-loader>\n'},78505:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-button-base {\n  margin: 0 .5rem;\n}\n\n.loader-demo {\n  padding: 16px;\n  margin: 16px 0;\n  border: 1px solid;\n}\n"},40217:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n="import { Component } from '@angular/core';\nimport { ThemePalette } from '@angular/material/core';\nimport { MtxLoaderType } from '@ng-matero/extensions/loader';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  loading = true;\n  hasBackdrop = true;\n  type: MtxLoaderType = 'spinner';\n  color: ThemePalette = 'primary';\n}\n"},77326:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n='<div class="loader-demo">\n  <mtx-loader></mtx-loader>\n</div>\n'},80463:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n=".loader-demo {\n  height: 200px;\n  padding: 0 16px;\n  margin: 16px 0;\n  border: 1px solid;\n}\n"},65621:(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});const n="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n\n}\n"}}]);