(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/tDZ":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},"1b8U":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;striped&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Animate\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;foreground&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;foreground=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;background&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;background=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n              [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n              [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n              [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n              [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n  {{height&gt;=14 ? value + &#x27;%&#x27; : &#x27;&#x27;}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},AqOX:function(s,n,a){"use strict";a.r(n),a.d(n,"ProgressOverviewComponent",function(){return C}),a.d(n,"ProgressApiComponent",function(){return U}),a.d(n,"ProgressModule",function(){return V});var t=a("tyNb"),e=a("OlrJ"),l=a("fXoL"),o=a("QibW"),p=a("3Pt+"),c=a("5RNC"),r=a("bSwM"),i=a("ofXK"),g=a("kmnG"),h=a("LcMN"),u=a("gQh1"),m=a("bTqV"),d=a("NFeN");function b(s,n){if(1&s){const s=l.Wb();l.Vb(0,"mat-checkbox",6),l.dc("ngModelChange",function(n){return l.Bc(s),l.hc().animate=n}),l.Mc(1,"Animate "),l.Ub()}if(2&s){const s=l.hc();l.pc("ngModel",s.animate)("labelPosition","before")}}function f(s,n){if(1&s){const s=l.Wb();l.Vb(0,"button",11),l.dc("click",function(){return l.Bc(s),l.hc().foreground=""}),l.Vb(1,"mat-icon"),l.Mc(2,"close"),l.Ub(),l.Ub()}}function j(s,n){if(1&s){const s=l.Wb();l.Vb(0,"button",11),l.dc("click",function(){return l.Bc(s),l.hc().background=""}),l.Vb(1,"mat-icon"),l.Mc(2,"close"),l.Ub(),l.Ub()}}const x={title:"Configurable progress",component:(()=>{class s{constructor(){this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=l.Jb({type:s,selectors:[["progress-example"]],decls:41,vars:18,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","thumbLabel","",3,"ngModel","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange",4,"ngIf"],["min","1","max","16","thumbLabel","",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"type","value","striped","animate","height","foreground","background"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(s,n){1&s&&(l.Vb(0,"h2"),l.Mc(1,"Progress configuration"),l.Ub(),l.Vb(2,"section"),l.Vb(3,"label"),l.Mc(4,"Type:"),l.Ub(),l.Vb(5,"mat-radio-group",0),l.dc("ngModelChange",function(s){return n.type=s}),l.Vb(6,"mat-radio-button",1),l.Mc(7,"Info"),l.Ub(),l.Vb(8,"mat-radio-button",2),l.Mc(9,"Success"),l.Ub(),l.Vb(10,"mat-radio-button",3),l.Mc(11,"Warning"),l.Ub(),l.Vb(12,"mat-radio-button",4),l.Mc(13,"Danger"),l.Ub(),l.Ub(),l.Ub(),l.Vb(14,"section"),l.Vb(15,"label"),l.Mc(16,"Progress:"),l.Ub(),l.Vb(17,"mat-slider",5),l.dc("ngModelChange",function(s){return n.value=s}),l.Ub(),l.Ub(),l.Vb(18,"section"),l.Vb(19,"mat-checkbox",6),l.dc("ngModelChange",function(s){return n.striped=s}),l.Mc(20,"Striped"),l.Ub(),l.Kc(21,b,2,2,"mat-checkbox",7),l.Ub(),l.Vb(22,"section"),l.Vb(23,"label"),l.Mc(24,"Height:"),l.Ub(),l.Vb(25,"mat-slider",8),l.dc("ngModelChange",function(s){return n.height=s}),l.Ub(),l.Ub(),l.Vb(26,"section"),l.Vb(27,"mat-form-field"),l.Vb(28,"mat-label"),l.Mc(29,"Foreground color"),l.Ub(),l.Vb(30,"mtx-color-picker",0),l.dc("ngModelChange",function(s){return n.foreground=s}),l.Ub(),l.Kc(31,f,3,0,"button",9),l.Ub(),l.Vb(32,"mat-form-field"),l.Vb(33,"mat-label"),l.Mc(34,"Background color"),l.Ub(),l.Vb(35,"mtx-color-picker",0),l.dc("ngModelChange",function(s){return n.background=s}),l.Ub(),l.Kc(36,j,3,0,"button",9),l.Ub(),l.Ub(),l.Vb(37,"h2"),l.Mc(38,"Result"),l.Ub(),l.Vb(39,"mtx-progress",10),l.Mc(40),l.Ub()),2&s&&(l.Db(5),l.pc("ngModel",n.type),l.Db(12),l.pc("ngModel",n.value),l.Db(2),l.pc("ngModel",n.striped)("labelPosition","before"),l.Db(2),l.pc("ngIf",n.striped),l.Db(4),l.pc("ngModel",n.height),l.Db(5),l.pc("ngModel",n.foreground),l.Db(1),l.pc("ngIf",n.foreground),l.Db(4),l.pc("ngModel",n.background),l.Db(1),l.pc("ngIf",n.background),l.Db(3),l.pc("type",n.type)("value",n.value)("striped",n.striped)("animate",n.animate)("height",n.height+"px")("foreground",n.foreground)("background",n.background),l.Db(1),l.Oc(" ",n.height>=14?n.value+"%":"","\n"))},directives:[o.b,p.k,p.m,o.a,c.a,r.a,i.o,g.c,g.g,h.a,u.a,m.b,g.h,d.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}"]}),s})(),files:[{file:"app.component.html",content:a("1b8U"),filecontent:a("WTX7")},{file:"app.component.ts",content:a("o2Wv"),filecontent:a("psCB")},{file:"app.component.scss",content:a("kfhD"),filecontent:a("qXUP")}]},k={title:"Custom Color",component:(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=l.Jb({type:s,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(s,n){1&s&&(l.Vb(0,"mtx-progress",0),l.Mc(1,"40%"),l.Ub(),l.Vb(2,"mtx-progress",1),l.Mc(3,"70%"),l.Ub(),l.Vb(4,"mtx-progress",2),l.Mc(5,"60%\n"),l.Ub()),2&s&&(l.pc("value",40),l.Db(2),l.pc("value",70)("striped",!0),l.Db(2),l.pc("value",60)("striped",!0))},directives:[u.a],styles:[""]}),s})(),files:[{file:"app.component.html",content:a("/tDZ"),filecontent:a("ubAb")},{file:"app.component.ts",content:a("e67g"),filecontent:a("iU0d")},{file:"app.component.scss",content:a("Jbqy"),filecontent:a("hzHw")}]};var v=a("ZpCV"),y=a("Ejav");function M(s,n){if(1&s&&(l.Tb(0),l.Qb(1,"example-viewer",2),l.Sb()),2&s){const s=n.$implicit;l.Db(1),l.pc("exampleData",s)}}function q(s,n){if(1&s&&(l.Tb(0),l.Kc(1,M,2,1,"ng-container",1),l.Sb()),2&s){const s=n.ngIf;l.Db(1),l.pc("ngForOf",s.examples)}}function w(s,n){if(1&s&&(l.Tb(0),l.Qb(1,"doc-viewer",1),l.Sb()),2&s){const s=n.ngIf;l.Db(1),l.pc("textContent",s.content.default)}}let C=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(l.Pb(t.a))},s.\u0275cmp=l.Jb({type:s,selectors:[["app-progress-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(l.Kc(0,q,2,1,"ng-container",0),l.ic(1,"async")),2&s&&l.pc("ngIf",l.jc(1,1,n.route.data))},directives:[i.o,i.n,v.a],pipes:[i.b],encapsulation:2}),s})(),U=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(l.Pb(t.a))},s.\u0275cmp=l.Jb({type:s,selectors:[["app-progress-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,n){1&s&&(l.Kc(0,w,2,1,"ng-container",0),l.ic(1,"async")),2&s&&l.pc("ngIf",l.jc(1,1,n.route.data))},directives:[i.o,y.a],pipes:[i.b],encapsulation:2}),s})(),V=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=l.Nb({type:s}),s.\u0275inj=l.Mb({imports:[[e.c,t.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:C,pathMatch:"full",data:{examples:[x,k]}},{path:"api",component:U,pathMatch:"full",data:{content:a("hVFn")}},{path:"**",redirectTo:"overview"}])]]}),s})()},Ejav:function(s,n,a){"use strict";a.d(n,"a",function(){return e});var t=a("fXoL");let e=(()=>{class s{constructor(){this.textContent=""}ngOnDestroy(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Jb({type:s,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(s,n){1&s&&t.Qb(0,"div",0),2&s&&t.pc("innerHTML",n.textContent,t.Cc)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.03);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}"],encapsulation:2}),s})()},Jbqy:function(s,n){s.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},WTX7:function(s,n,a){"use strict";a.r(n),n.default='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" thumbLabel [(ngModel)]="value"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped" [labelPosition]="\'before\'">Striped</mat-checkbox>\n  <mat-checkbox *ngIf="striped" [(ngModel)]="animate" [labelPosition]="\'before\'">Animate\n  </mat-checkbox>\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" thumbLabel [(ngModel)]="height"></mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <mtx-color-picker [(ngModel)]="foreground">\n    </mtx-color-picker>\n    <button mat-button *ngIf="foreground" matSuffix mat-icon-button aria-label="Clear"\n            (click)="foreground=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <mtx-color-picker [(ngModel)]="background">\n    </mtx-color-picker>\n    <button mat-button *ngIf="background" matSuffix mat-icon-button aria-label="Clear"\n            (click)="background=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n              [value]="value"\n              [striped]="striped" [animate]="animate"\n              [height]="height + \'px\'"\n              [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},ZpCV:function(s,n,a){"use strict";a.d(n,"a",function(){return b});var t=a("fXoL"),e=a("dNgK"),l=a("yeTJ"),o=a("bTqV"),p=a("Qu3c"),c=a("NFeN"),r=a("ofXK"),i=a("wZkO");const g=["demo"];function h(s,n){if(1&s){const s=t.Wb();t.Vb(0,"mat-tab",10),t.Vb(1,"div",11),t.Vb(2,"div",12),t.Vb(3,"button",13),t.dc("click",function(){t.Bc(s);const n=t.yc(8);return t.hc(2).copySource(n)}),t.Vb(4,"mat-icon"),t.Mc(5,"content_copy"),t.Ub(),t.Ub(),t.Ub(),t.Vb(6,"div",14),t.Qb(7,"pre",15,16),t.Ub(),t.Ub(),t.Ub()}if(2&s){const s=n.$implicit;t.pc("label",s.file),t.Db(3),t.pc("matTooltip","Copy example source"),t.Db(4),t.pc("innerHtml",s.content,t.Cc)}}function u(s,n){if(1&s&&(t.Vb(0,"div",8),t.Vb(1,"mat-tab-group"),t.Kc(2,h,9,3,"mat-tab",9),t.Ub(),t.Ub()),2&s){const s=t.hc();t.Db(2),t.pc("ngForOf",s.exampleData.files)}}function m(s,n){if(1&s&&t.Qb(0,"div",17),2&s){const s=t.hc();t.pc("innerHtml",s.exampleData.description,t.Cc)}}function d(s,n){}let b=(()=>{class s{constructor(s,n,a){this.snackbar=s,this.copier=n,this.componentFactoryResolver=a,this.showSource=!1}ngOnInit(){const s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return s.\u0275fac=function(n){return new(n||s)(t.Pb(e.a),t.Pb(l.a),t.Pb(t.j))},s.\u0275cmp=t.Jb({type:s,selectors:[["example-viewer"]],viewQuery:function(s,n){if(1&s&&t.Pc(g,3,t.R),2&s){let s;t.xc(s=t.ec())&&(n.demoRef=s.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,n){1&s&&(t.Vb(0,"div",0),t.Vb(1,"div",1),t.Vb(2,"span"),t.Mc(3),t.Ub(),t.Qb(4,"div",2),t.Vb(5,"button",3),t.dc("click",function(){return n.toggleSourceView()}),t.Vb(6,"mat-icon"),t.Mc(7,"code"),t.Ub(),t.Ub(),t.Ub(),t.Kc(8,u,3,1,"div",4),t.Vb(9,"div",5),t.Kc(10,m,1,1,"div",6),t.Kc(11,d,0,0,"ng-template",null,7,t.Lc),t.Ub(),t.Ub()),2&s&&(t.Db(3),t.Nc(n.exampleData.title),t.Db(2),t.pc("matTooltip","View source"),t.Db(3),t.pc("ngIf",n.showSource),t.Db(2),t.pc("ngIf",n.exampleData.description))},directives:[o.b,p.a,c.a,r.o,i.b,r.n,i.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),s})()},e67g:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n'},hVFn:function(s,n,a){"use strict";a.r(n),n.default='<h1 id="progress">Progress</h1>\n<h2 id="api-reference-for-material-extensions-progress">API reference for Material Extensions Progress</h2>\n<p><code>import { MtxProgressModule } from &apos;@ng-matero/extensions/progress&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxprogress"><code>MtxProgress</code></h4>\n<p>Selector: <code>[mtx-progress]</code></p>\n<p>Exported as: <code>mtxProgress</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left"><strong>Name</strong></th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;default&apos; | &apos;info&apos; | &apos;success&apos; | &apos;warning&apos; | &apos;danger&apos;</code></td>\n<td align="left">The progress types. Defaulted to <strong><code>&apos;info&apos;</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>value: number</code></td>\n<td align="left">The progress value. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>height: number</code></td>\n<td align="left">The progress height.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>color: string</code></td>\n<td align="left">The progress text color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>foreground: string</code></td>\n<td align="left">The progress bar color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>background: string</code></td>\n<td align="left">The progress track color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>striped: boolean</code></td>\n<td align="left">Whether applies striped class.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>animate: boolean</code></td>\n<td align="left">Whether applies animated class.</td>\n</tr>\n</tbody></table>\n'},hzHw:function(s,n,a){"use strict";a.r(n),n.default="/** No CSS for this example */\n"},iU0d:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {}\n"},kfhD:function(s,n){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n'},o2Wv:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxProgressType } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-attr">type</span>: MtxProgressType = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},psCB:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxProgressType } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxProgressType = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},qXUP:function(s,n,a){"use strict";a.r(n),n.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-form-field {\n  margin-right: 1rem;\n}\n"},ubAb:function(s,n,a){"use strict";a.r(n),n.default='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'}}]);