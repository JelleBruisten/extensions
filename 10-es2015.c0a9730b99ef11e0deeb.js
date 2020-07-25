(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6dcp":function(s,n,a){"use strict";a.r(n),n.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n"},BDG4:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'alert-example\'</span>,\n  templateUrl: <span class="hljs-string">\'app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'app.component.scss\'</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">type</span> = <span class="hljs-string">\'info\'</span>;\n  dismissible = <span class="hljs-literal">false</span>;\n  elevation = <span class="hljs-number">3</span>;\n\n  onClosed(e: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-built_in">console</span>.log(e);\n  }\n}\n'},GXXi:function(s,n){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},"V/Fa":function(s,n,a){"use strict";a.r(n),n.default='<h2>Alert configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="dismissible" [labelPosition]="\'before\'">Dismissible</mat-checkbox>\n</section>\n\n<section>\n  <label>Elevation:</label>\n  <mat-slider min="0" max="24" thumbLabel [(ngModel)]="elevation"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-alert [type]="type" [elevation]="elevation" [dismissible]="dismissible"\n           (closed)="onClosed($event)">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</mtx-alert>\n'},fC30:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'alert-example',\n  templateUrl: 'app.component.html',\n  styleUrls: ['app.component.scss'],\n})\nexport class AppComponent {\n  type = 'info';\n  dismissible = false;\n  elevation = 3;\n\n  onClosed(e: any) {\n    console.log(e);\n  }\n}\n"},gbZZ:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Alert configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"type"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"dismissible"</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">"\'before\'"</span>&gt;</span>Dismissible<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Elevation:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"elevation"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-alert</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span> [<span class="hljs-attr">elevation</span>]=<span class="hljs-string">"elevation"</span> [<span class="hljs-attr">dismissible</span>]=<span class="hljs-string">"dismissible"</span>\n           (<span class="hljs-attr">closed</span>)=<span class="hljs-string">"onClosed($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> This alert needs your attention, but it\'s not super important.\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-alert</span>&gt;</span>\n'},lSoZ:function(s,n,a){"use strict";a.r(n),a.d(n,"AlertModule",(function(){return d}));var t=a("sEIs"),l=a("M0ag"),e=a("EM62"),p=a("2kYt"),o=a("Pg5x");function c(s,n){if(1&s&&(e.Ub(0),e.Rb(1,"example-viewer",2),e.Tb()),2&s){const s=n.$implicit;e.Cb(1),e.nc("exampleData",s)}}function i(s,n){if(1&s&&(e.Ub(0),e.Hc(1,c,2,1,"ng-container",1),e.Tb()),2&s){const s=n.ngIf;e.Cb(1),e.nc("ngForOf",s.examples)}}let r=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(e.Qb(t.a))},s.\u0275cmp=e.Kb({type:s,selectors:[["app-alert"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(e.Hc(0,i,2,1,"ng-container",0),e.jc(1,"async")),2&s&&e.nc("ngIf",e.kc(1,1,n.route.data))},directives:[p.t,p.s,o.a],pipes:[p.b],styles:[""]}),s})();var m=a("F1o0"),g=a("nIj0"),h=a("+Tre"),b=a("v9BS"),u=a("iUcT");const j={title:"Configurable alert",component:(()=>{class s{constructor(){this.type="info",this.dismissible=!1,this.elevation=3}onClosed(s){console.log(s)}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Kb({type:s,selectors:[["alert-example"]],decls:27,vars:7,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],[3,"ngModel","labelPosition","ngModelChange"],["min","0","max","24","thumbLabel","",3,"ngModel","ngModelChange"],[3,"type","elevation","dismissible","closed"]],template:function(s,n){1&s&&(e.Wb(0,"h2"),e.Jc(1,"Alert configuration"),e.Vb(),e.Wb(2,"section"),e.Wb(3,"label"),e.Jc(4,"Type:"),e.Vb(),e.Wb(5,"mat-radio-group",0),e.ec("ngModelChange",(function(s){return n.type=s})),e.Wb(6,"mat-radio-button",1),e.Jc(7,"Info"),e.Vb(),e.Wb(8,"mat-radio-button",2),e.Jc(9,"Success"),e.Vb(),e.Wb(10,"mat-radio-button",3),e.Jc(11,"Warning"),e.Vb(),e.Wb(12,"mat-radio-button",4),e.Jc(13,"Danger"),e.Vb(),e.Vb(),e.Vb(),e.Wb(14,"section"),e.Wb(15,"mat-checkbox",5),e.ec("ngModelChange",(function(s){return n.dismissible=s})),e.Jc(16,"Dismissible"),e.Vb(),e.Vb(),e.Wb(17,"section"),e.Wb(18,"label"),e.Jc(19,"Elevation:"),e.Vb(),e.Wb(20,"mat-slider",6),e.ec("ngModelChange",(function(s){return n.elevation=s})),e.Vb(),e.Vb(),e.Wb(21,"h2"),e.Jc(22,"Result"),e.Vb(),e.Wb(23,"mtx-alert",7),e.ec("closed",(function(s){return n.onClosed(s)})),e.Wb(24,"strong"),e.Jc(25,"Heads up!"),e.Vb(),e.Jc(26," This alert needs your attention, but it's not super important.\n"),e.Vb()),2&s&&(e.Cb(5),e.nc("ngModel",n.type),e.Cb(10),e.nc("ngModel",n.dismissible)("labelPosition","before"),e.Cb(5),e.nc("ngModel",n.elevation),e.Cb(3),e.nc("type",n.type)("elevation",n.elevation)("dismissible",n.dismissible))},directives:[m.b,g.l,g.o,m.a,h.a,b.a,u.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}"]}),s})(),files:[{file:"app.component.html",content:a("gbZZ"),filecontent:a("V/Fa")},{file:"app.component.ts",content:a("BDG4"),filecontent:a("fC30")},{file:"app.component.scss",content:a("GXXi"),filecontent:a("6dcp")}]};let d=(()=>{class s{}return s.\u0275mod=e.Ob({type:s}),s.\u0275inj=e.Nb({factory:function(n){return new(n||s)},imports:[[l.a,t.i.forChild([{path:"",component:r,data:{examples:[j]}}])]]}),s})()}}]);