(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+dJt":function(s,n,a){"use strict";a.r(n),n.default='<h1 id="checkbox-group">Checkbox Group</h1>\n<h2 id="api-reference-for-material-extensions-checkboxgroup">API reference for Material Extensions CheckboxGroup</h2>\n<p><code>import { MtxCheckboxGroupModule } from &apos;@ng-matero/extensions/checkbox-group&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxcheckboxgroup"><code>MtxCheckboxGroup</code></h4>\n<p>Selector: <code>[mtx-checkbox-group]</code></p>\n<p>Exported as: <code>mtxCheckboxGroup</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>items: any[]</code></td>\n<td align="left">Items array.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>bindLabel: string</code></td>\n<td align="left">Object property to use for label. Defaulted to <strong><code>&apos;label&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>bindValue: string</code></td>\n<td align="left">Object property to use for selected model. By default binds to whole object. Defaulted to <strong><code>&apos;value&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>compareWith: (a: any, b: any) =&gt; boolean</code></td>\n<td align="left">A function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection(model). A boolean should be returned.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>showSelectAll: boolean</code></td>\n<td align="left">Whether show select all. Defaulted to <strong><code>true</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>selectAllLabel: string</code></td>\n<td align="left">The lable of select all. Defaulted to <strong><code>&apos;Select All&apos;</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Output() <code>change: EventEmitter&lt;{  model: MtxCheckboxGroupOption[];  index: number; }&gt;()</code></td>\n<td align="left">Event emitted when the selection changed.</td>\n</tr>\n</tbody></table>\n<h3 id="interfaces">Interfaces</h3>\n<h4 id="checkbox-group-option">Checkbox Group Option</h4>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> MtxCheckboxGroupOption {\n  ariaDescribedby?: <span class="hljs-built_in">string</span>;\n  ariaLabel?: <span class="hljs-built_in">string</span>;\n  ariaLabelledby?: <span class="hljs-built_in">string</span>;\n  label?: <span class="hljs-built_in">any</span>;\n  value?: <span class="hljs-built_in">any</span>;\n  color?: <span class="hljs-built_in">string</span>;\n  checked?: <span class="hljs-built_in">boolean</span>;\n  disabled?: <span class="hljs-built_in">boolean</span>;\n  disableRipple?: <span class="hljs-built_in">boolean</span>;\n  indeterminate?: <span class="hljs-built_in">boolean</span>;\n  labelPosition?: <span class="hljs-string">&apos;before&apos;</span> | <span class="hljs-string">&apos;after&apos;</span>;\n  id?: <span class="hljs-built_in">string</span>;\n  name?: <span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>;\n  required?: <span class="hljs-built_in">boolean</span>;\n  [k: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span>;\n}</pre>\n'},"+eUS":function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxCheckboxGroupOption } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'checkbox-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  foods: MtxCheckboxGroupOption[] = [\n    { label: 'Steak', value: 'steak', color: 'primary' },\n    { label: 'Pizza', value: 'pizza', color: 'accent' },\n    { label: 'Tacos', value: 'tacos', color: 'warn' },\n  ];\n  selectedFoods = ['steak', 'pizza', 'tacos'];\n\n  cars = ['Ford', 'Chevrolet', 'Dodge'];\n  selectedCars = ['Dodge'];\n}\n"},"///j":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-group-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  foods = [\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Steak&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;steak&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pizza&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pizza&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Tacos&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tacos&#x27;</span> },\n  ];\n  selectedFoods = [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pizza&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pizza&#x27;</span> }];\n  <span class="hljs-function"><span class="hljs-title">compareWith</span>(<span class="hljs-params">a: <span class="hljs-built_in">any</span>, b: <span class="hljs-built_in">any</span></span>)</span> {\n    <span class="hljs-keyword">return</span> a.value === b.value;\n  }\n\n  cars = [\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ford&#x27;</span> },\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Chevrolet&#x27;</span> },\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Dodge&#x27;</span> },\n  ];\n  selectedCars = [\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Chevrolet&#x27;</span> },\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Dodge&#x27;</span> },\n  ];\n  <span class="hljs-function"><span class="hljs-title">compareWith2</span>(<span class="hljs-params">a: <span class="hljs-built_in">any</span>, b: <span class="hljs-built_in">any</span></span>)</span> {\n    <span class="hljs-keyword">return</span> a.id === b.id;\n  }\n}\n'},"/QXi":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxCheckboxGroupOption } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-group-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-attr">foods</span>: MtxCheckboxGroupOption[] = [\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Steak&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;steak&#x27;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;primary&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pizza&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pizza&#x27;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;accent&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Tacos&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tacos&#x27;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;warn&#x27;</span> },\n  ];\n  selectedFoods = [<span class="hljs-string">&#x27;steak&#x27;</span>, <span class="hljs-string">&#x27;pizza&#x27;</span>, <span class="hljs-string">&#x27;tacos&#x27;</span>];\n\n  cars = [<span class="hljs-string">&#x27;Ford&#x27;</span>, <span class="hljs-string">&#x27;Chevrolet&#x27;</span>, <span class="hljs-string">&#x27;Dodge&#x27;</span>];\n  selectedCars = [<span class="hljs-string">&#x27;Dodge&#x27;</span>];\n}\n'},"04Fk":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-group-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  cars = [\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ford&#x27;</span> },\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Chevrolet&#x27;</span> },\n    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Dodge&#x27;</span> },\n  ];\n\n  selectedCars = [<span class="hljs-number">3</span>];\n}\n'},"0weT":function(s,n){s.exports='mat-divider {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},"20kl":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;cars&quot;</span>\n                    <span class="hljs-attr">bindLabel</span>=<span class="hljs-string">&quot;name&quot;</span>\n                    <span class="hljs-attr">bindValue</span>=<span class="hljs-string">&quot;id&quot;</span>\n                    [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedCars&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedCars|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},"3Osl":function(s,n,a){"use strict";a.r(n),n.default='{\n  "steak": "\u725b\u6392",\n  "pizza": "\u62ab\u8428",\n  "tacos": "\u7389\u7c73\u5377"\n}\n'},"8ACu":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span>\n                    [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFoods&quot;</span>\n                    [<span class="hljs-attr">compareWith</span>]=<span class="hljs-string">&quot;compareWith&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedFoods|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-divider</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;cars&quot;</span>\n                    <span class="hljs-attr">bindLabel</span>=<span class="hljs-string">&quot;name&quot;</span>\n                    [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedCars&quot;</span>\n                    [<span class="hljs-attr">compareWith</span>]=<span class="hljs-string">&quot;compareWith2&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedCars|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},"8HJq":function(s,n,a){"use strict";a.r(n),n.default="/** No CSS for this example */\n"},"Cf+p":function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxCheckboxGroupOption } from '@ng-matero/extensions';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'checkbox-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  foods: MtxCheckboxGroupOption[] = [\n    {\n      label: this.translate.stream('steak'),\n      value: 'steak',\n    },\n    {\n      label: this.translate.stream('pizza'),\n      value: 'pizza',\n    },\n    {\n      label: this.translate.stream('tacos'),\n      value: 'tacos',\n    },\n  ];\n  selectedFoods = ['steak'];\n\n  langs = [\n    { label: '\u4e2d\u6587\u7b80\u4f53', value: 'zh-CN' },\n    { label: 'English', value: 'en-US' },\n  ];\n  defaultlang = 'zh-CN';\n\n  constructor(public translate: TranslateService) {\n    translate.addLangs(this.langs.map(item => item.value));\n    translate.setDefaultLang(this.defaultlang);\n  }\n}\n"},DvGp:function(s,n,a){"use strict";a.r(n),n.default=".mat-radio-button {\n  margin: 0 1rem 1rem 0;\n}\n"},HWCP:function(s,n,a){"use strict";a.r(n),n.default='<mtx-checkbox-group [items]="foods"\n                    [(ngModel)]="selectedFoods"\n                    [compareWith]="compareWith">\n</mtx-checkbox-group>\n<p>{{selectedFoods|json}}</p>\n\n<mat-divider></mat-divider>\n\n<mtx-checkbox-group [items]="cars"\n                    bindLabel="name"\n                    [(ngModel)]="selectedCars"\n                    [compareWith]="compareWith2">\n</mtx-checkbox-group>\n<p>{{selectedCars|json}}</p>\n'},KFzR:function(s,n,a){"use strict";a.r(n),n.default="mat-divider {\n  margin: 1rem 0;\n}\n"},"KyK/":function(s,n){s.exports='{\n  <span class="hljs-attr">&quot;steak&quot;</span>: <span class="hljs-string">&quot;Steak&quot;</span>,\n  <span class="hljs-attr">&quot;pizza&quot;</span>: <span class="hljs-string">&quot;Pizza&quot;</span>,\n  <span class="hljs-attr">&quot;tacos&quot;</span>: <span class="hljs-string">&quot;Tacos&quot;</span>\n}\n'},Oh0k:function(s,n,a){"use strict";a.r(n),n.default="mat-divider {\n  margin: 1rem 0;\n}\n"},PctB:function(s,n,a){"use strict";a.r(n),n.default='<p>\n  <button mat-raised-button (click)="toggleOptionDisabled()">Toggle Option[1] Disabled</button>\n  <mat-checkbox [(ngModel)]="disabled">Disabled checkbox group</mat-checkbox>\n</p>\n\n<mtx-checkbox-group [items]="foods"\n                    [(ngModel)]="selectedFoods"\n                    [disabled]="disabled"\n                    [showSelectAll]="true"\n                    selectAllLabel="Select all foods"\n                    (change)="onOptionChange($event)">\n</mtx-checkbox-group>\n<p>{{selectedFoods|json}}</p>\n'},PeKc:function(s,n,a){"use strict";a.r(n),a.d(n,"TranslateHttpLoaderFactory",function(){return F}),a.d(n,"CheckboxGroupOverviewComponent",function(){return T}),a.d(n,"CheckboxGroupApiComponent",function(){return U}),a.d(n,"CheckboxGroupModule",function(){return O});var t=a("tyNb"),l=a("OlrJ"),e=a("mqiu"),p=a("tk/3"),o=a("sYmb"),c=a("fXoL"),r=a("Iyyr"),i=a("3Pt+"),h=a("f0Cb"),d=a("ofXK");const u={title:"Basic",component:(()=>{class s{constructor(){this.foods=[{label:"Steak",value:"steak",color:"primary"},{label:"Pizza",value:"pizza",color:"accent"},{label:"Tacos",value:"tacos",color:"warn"}],this.selectedFoods=["steak","pizza","tacos"],this.cars=["Ford","Chevrolet","Dodge"],this.selectedCars=["Dodge"]}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=c.Ib({type:s,selectors:[["checkbox-group-example"]],decls:9,vars:10,consts:[[3,"items","ngModel","ngModelChange"]],template:function(s,n){1&s&&(c.Ub(0,"mtx-checkbox-group",0),c.cc("ngModelChange",function(s){return n.selectedFoods=s}),c.Tb(),c.Ub(1,"p"),c.Lc(2),c.hc(3,"json"),c.Tb(),c.Pb(4,"mat-divider"),c.Ub(5,"mtx-checkbox-group",0),c.cc("ngModelChange",function(s){return n.selectedCars=s}),c.Tb(),c.Ub(6,"p"),c.Lc(7),c.hc(8,"json"),c.Tb()),2&s&&(c.oc("items",n.foods)("ngModel",n.selectedFoods),c.Cb(2),c.Mc(c.ic(3,6,n.selectedFoods)),c.Cb(3),c.oc("items",n.cars)("ngModel",n.selectedCars),c.Cb(2),c.Mc(c.ic(8,8,n.selectedCars)))},directives:[r.a,i.k,i.m,h.a],pipes:[d.i],styles:["mat-divider[_ngcontent-%COMP%]{margin:1rem 0}"]}),s})(),files:[{file:"app.component.html",content:a("RdMT"),filecontent:a("lfrA")},{file:"app.component.ts",content:a("/QXi"),filecontent:a("+eUS")},{file:"app.component.scss",content:a("RoLd"),filecontent:a("Oh0k")}]},g={title:"BindLabel & BindValue",component:(()=>{class s{constructor(){this.cars=[{id:1,name:"Ford"},{id:2,name:"Chevrolet"},{id:3,name:"Dodge"}],this.selectedCars=[3]}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=c.Ib({type:s,selectors:[["checkbox-group-example"]],decls:4,vars:5,consts:[["bindLabel","name","bindValue","id",3,"items","ngModel","ngModelChange"]],template:function(s,n){1&s&&(c.Ub(0,"mtx-checkbox-group",0),c.cc("ngModelChange",function(s){return n.selectedCars=s}),c.Tb(),c.Ub(1,"p"),c.Lc(2),c.hc(3,"json"),c.Tb()),2&s&&(c.oc("items",n.cars)("ngModel",n.selectedCars),c.Cb(2),c.Mc(c.ic(3,3,n.selectedCars)))},directives:[r.a,i.k,i.m],pipes:[d.i],styles:[""]}),s})(),files:[{file:"app.component.html",content:a("20kl"),filecontent:a("YP9g")},{file:"app.component.ts",content:a("04Fk"),filecontent:a("ebE4")},{file:"app.component.scss",content:a("rybZ"),filecontent:a("8HJq")}]},m={title:"CompareWith",component:(()=>{class s{constructor(){this.foods=[{label:"Steak",value:"steak"},{label:"Pizza",value:"pizza"},{label:"Tacos",value:"tacos"}],this.selectedFoods=[{label:"Pizza",value:"pizza"}],this.cars=[{id:1,name:"Ford"},{id:2,name:"Chevrolet"},{id:3,name:"Dodge"}],this.selectedCars=[{id:2,name:"Chevrolet"},{id:3,name:"Dodge"}]}compareWith(s,n){return s.value===n.value}compareWith2(s,n){return s.id===n.id}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=c.Ib({type:s,selectors:[["checkbox-group-example"]],decls:9,vars:12,consts:[[3,"items","ngModel","compareWith","ngModelChange"],["bindLabel","name",3,"items","ngModel","compareWith","ngModelChange"]],template:function(s,n){1&s&&(c.Ub(0,"mtx-checkbox-group",0),c.cc("ngModelChange",function(s){return n.selectedFoods=s}),c.Tb(),c.Ub(1,"p"),c.Lc(2),c.hc(3,"json"),c.Tb(),c.Pb(4,"mat-divider"),c.Ub(5,"mtx-checkbox-group",1),c.cc("ngModelChange",function(s){return n.selectedCars=s}),c.Tb(),c.Ub(6,"p"),c.Lc(7),c.hc(8,"json"),c.Tb()),2&s&&(c.oc("items",n.foods)("ngModel",n.selectedFoods)("compareWith",n.compareWith),c.Cb(2),c.Mc(c.ic(3,8,n.selectedFoods)),c.Cb(3),c.oc("items",n.cars)("ngModel",n.selectedCars)("compareWith",n.compareWith2),c.Cb(2),c.Mc(c.ic(8,10,n.selectedCars)))},directives:[r.a,i.k,i.m,h.a],pipes:[d.i],styles:["mat-divider[_ngcontent-%COMP%]{margin:1rem 0}"]}),s})(),files:[{file:"app.component.html",content:a("8ACu"),filecontent:a("HWCP")},{file:"app.component.ts",content:a("///j"),filecontent:a("Squt")},{file:"app.component.scss",content:a("0weT"),filecontent:a("KFzR")}]};var j=a("bTqV"),b=a("bSwM");const x={title:"SelectAll",component:(()=>{class s{constructor(){this.foods=[{label:"Steak",value:"steak"},{label:"Pizza",value:"pizza",disabled:!0},{label:"Tacos",value:"tacos"}],this.selectedFoods=["tacos"],this.disabled=!1}onOptionChange(s){console.log(s)}toggleOptionDisabled(){this.foods[1].disabled=!this.foods[1].disabled,this.foods=this.foods.filter(s=>!0)}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=c.Ib({type:s,selectors:[["checkbox-group-example"]],decls:9,vars:8,consts:[["mat-raised-button","",3,"click"],[3,"ngModel","ngModelChange"],["selectAllLabel","Select all foods",3,"items","ngModel","disabled","showSelectAll","ngModelChange","change"]],template:function(s,n){1&s&&(c.Ub(0,"p"),c.Ub(1,"button",0),c.cc("click",function(){return n.toggleOptionDisabled()}),c.Lc(2,"Toggle Option[1] Disabled"),c.Tb(),c.Ub(3,"mat-checkbox",1),c.cc("ngModelChange",function(s){return n.disabled=s}),c.Lc(4,"Disabled checkbox group"),c.Tb(),c.Tb(),c.Ub(5,"mtx-checkbox-group",2),c.cc("ngModelChange",function(s){return n.selectedFoods=s})("change",function(s){return n.onOptionChange(s)}),c.Tb(),c.Ub(6,"p"),c.Lc(7),c.hc(8,"json"),c.Tb()),2&s&&(c.Cb(3),c.oc("ngModel",n.disabled),c.Cb(2),c.oc("items",n.foods)("ngModel",n.selectedFoods)("disabled",n.disabled)("showSelectAll",!0),c.Cb(2),c.Mc(c.ic(8,6,n.selectedFoods)))},directives:[j.b,b.a,i.k,i.m,r.a],pipes:[d.i],styles:["mat-checkbox[_ngcontent-%COMP%]{margin:0 1rem}"]}),s})(),files:[{file:"app.component.html",content:a("XmIY"),filecontent:a("PctB")},{file:"app.component.ts",content:a("aDin"),filecontent:a("lzlw")},{file:"app.component.scss",content:a("XqQB"),filecontent:a("gpST")}]};var f=a("QibW");function k(s,n){if(1&s&&(c.Ub(0,"mat-radio-button",3),c.Lc(1),c.Tb()),2&s){const s=n.$implicit;c.oc("value",s.value),c.Cb(1),c.Nc(" ",s.label," ")}}const C={title:"I18n ngx-translate",component:(()=>{class s{constructor(s){this.translate=s,this.foods=[{label:this.translate.stream("steak"),value:"steak"},{label:this.translate.stream("pizza"),value:"pizza"},{label:this.translate.stream("tacos"),value:"tacos"}],this.selectedFoods=["steak"],this.langs=[{label:"\u4e2d\u6587\u7b80\u4f53",value:"zh-CN"},{label:"English",value:"en-US"}],this.defaultlang="zh-CN",s.addLangs(this.langs.map(s=>s.value)),s.setDefaultLang(this.defaultlang)}}return s.\u0275fac=function(n){return new(n||s)(c.Ob(o.c))},s.\u0275cmp=c.Ib({type:s,selectors:[["checkbox-group-example"]],decls:6,vars:7,consts:[[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"items","ngModel","ngModelChange"],[3,"value"]],template:function(s,n){1&s&&(c.Ub(0,"mat-radio-group",0),c.cc("ngModelChange",function(s){return n.defaultlang=s})("change",function(s){return n.translate.use(s.value)}),c.Jc(1,k,2,2,"mat-radio-button",1),c.Tb(),c.Ub(2,"mtx-checkbox-group",2),c.cc("ngModelChange",function(s){return n.selectedFoods=s}),c.Tb(),c.Ub(3,"p"),c.Lc(4),c.hc(5,"json"),c.Tb()),2&s&&(c.oc("ngModel",n.defaultlang),c.Cb(1),c.oc("ngForOf",n.langs),c.Cb(1),c.oc("items",n.foods)("ngModel",n.selectedFoods),c.Cb(2),c.Mc(c.ic(5,5,n.selectedFoods)))},directives:[f.b,i.k,i.m,d.n,r.a,f.a],pipes:[d.i],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:0 1rem 1rem 0}"]}),s})(),files:[{file:"app.component.html",content:a("hSbp"),filecontent:a("jqXm")},{file:"app.component.ts",content:a("w9xU"),filecontent:a("Cf+p")},{file:"app.component.scss",content:a("z1j0"),filecontent:a("DvGp")},{file:"assets/zh-CN.json",content:a("TddX"),filecontent:a("3Osl")},{file:"assets/en-US.json",content:a("KyK/"),filecontent:a("uhnQ")}]};var v=a("FAv5"),q=a("ZpCV"),y=a("Ejav");function z(s,n){if(1&s&&(c.Sb(0),c.Pb(1,"doc-heading",2),c.Pb(2,"example-viewer",3),c.Rb()),2&s){const s=n.$implicit;c.Cb(1),c.oc("text",s.title),c.Cb(1),c.oc("exampleData",s)}}function M(s,n){if(1&s&&(c.Sb(0),c.Jc(1,z,3,2,"ng-container",1),c.Rb()),2&s){const s=n.ngIf;c.Cb(1),c.oc("ngForOf",s.examples)}}function w(s,n){if(1&s&&(c.Sb(0),c.Pb(1,"doc-viewer",1),c.Rb()),2&s){const s=n.ngIf;c.Cb(1),c.oc("textContent",s.content.default)}}function F(s){return new e.a(s,"assets/i18n/checkbox-group/","_json")}let T=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(c.Ob(t.a))},s.\u0275cmp=c.Ib({type:s,selectors:[["app-checkbox-group-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"text"],[3,"exampleData"]],template:function(s,n){1&s&&(c.Jc(0,M,2,1,"ng-container",0),c.hc(1,"async")),2&s&&c.oc("ngIf",c.ic(1,1,n.route.data))},directives:[d.o,d.n,v.a,q.a],pipes:[d.b],encapsulation:2}),s})(),U=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(c.Ob(t.a))},s.\u0275cmp=c.Ib({type:s,selectors:[["app-checkbox-group-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,n){1&s&&(c.Jc(0,w,2,1,"ng-container",0),c.hc(1,"async")),2&s&&c.oc("ngIf",c.ic(1,1,n.route.data))},directives:[d.o,y.a],pipes:[d.b],encapsulation:2}),s})(),O=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=c.Mb({type:s}),s.\u0275inj=c.Lb({imports:[[l.c,o.b.forRoot({loader:{provide:o.a,useFactory:F,deps:[p.b]}}),t.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:T,data:{examples:[u,g,m,x,C]}},{path:"api",component:U,pathMatch:"full",data:{content:a("+dJt")}},{path:"**",redirectTo:"overview"}])]]}),s})()},RdMT:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFoods&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedFoods|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-divider</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;cars&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedCars&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedCars|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},RoLd:function(s,n){s.exports='mat-divider {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},Squt:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'checkbox-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  foods = [\n    { label: 'Steak', value: 'steak' },\n    { label: 'Pizza', value: 'pizza' },\n    { label: 'Tacos', value: 'tacos' },\n  ];\n  selectedFoods = [{ label: 'Pizza', value: 'pizza' }];\n  compareWith(a: any, b: any) {\n    return a.value === b.value;\n  }\n\n  cars = [\n    { id: 1, name: 'Ford' },\n    { id: 2, name: 'Chevrolet' },\n    { id: 3, name: 'Dodge' },\n  ];\n  selectedCars = [\n    { id: 2, name: 'Chevrolet' },\n    { id: 3, name: 'Dodge' },\n  ];\n  compareWith2(a: any, b: any) {\n    return a.id === b.id;\n  }\n}\n"},TddX:function(s,n){s.exports='{\n  <span class="hljs-attr">&quot;steak&quot;</span>: <span class="hljs-string">&quot;\u725b\u6392&quot;</span>,\n  <span class="hljs-attr">&quot;pizza&quot;</span>: <span class="hljs-string">&quot;\u62ab\u8428&quot;</span>,\n  <span class="hljs-attr">&quot;tacos&quot;</span>: <span class="hljs-string">&quot;\u7389\u7c73\u5377&quot;</span>\n}\n'},XmIY:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggleOptionDisabled()&quot;</span>&gt;</span>Toggle Option[1] Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>Disabled checkbox group<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span>\n                    [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFoods&quot;</span>\n                    [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>\n                    [<span class="hljs-attr">showSelectAll</span>]=<span class="hljs-string">&quot;true&quot;</span>\n                    <span class="hljs-attr">selectAllLabel</span>=<span class="hljs-string">&quot;Select all foods&quot;</span>\n                    (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;onOptionChange($event)&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedFoods|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},XqQB:function(s,n){s.exports='mat-checkbox {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">1rem</span>;\n}\n'},YP9g:function(s,n,a){"use strict";a.r(n),n.default='<mtx-checkbox-group [items]="cars"\n                    bindLabel="name"\n                    bindValue="id"\n                    [(ngModel)]="selectedCars">\n</mtx-checkbox-group>\n<p>{{selectedCars|json}}</p>\n'},aDin:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-group-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  foods = [\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Steak&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;steak&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pizza&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pizza&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Tacos&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tacos&#x27;</span> },\n  ];\n\n  selectedFoods = [<span class="hljs-string">&#x27;tacos&#x27;</span>];\n\n  disabled = <span class="hljs-literal">false</span>;\n\n  <span class="hljs-function"><span class="hljs-title">onOptionChange</span>(<span class="hljs-params">e: <span class="hljs-built_in">any</span></span>)</span> {\n    <span class="hljs-built_in">console</span>.log(e);\n  }\n\n  <span class="hljs-function"><span class="hljs-title">toggleOptionDisabled</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-built_in">this</span>.foods[<span class="hljs-number">1</span>].disabled = !<span class="hljs-built_in">this</span>.foods[<span class="hljs-number">1</span>].disabled;\n    <span class="hljs-built_in">this</span>.foods = <span class="hljs-built_in">this</span>.foods.filter(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> <span class="hljs-literal">true</span>);\n  }\n}\n'},ebE4:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'checkbox-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  cars = [\n    { id: 1, name: 'Ford' },\n    { id: 2, name: 'Chevrolet' },\n    { id: 3, name: 'Dodge' },\n  ];\n\n  selectedCars = [3];\n}\n"},gpST:function(s,n,a){"use strict";a.r(n),n.default="mat-checkbox {\n  margin: 0 1rem;\n}\n"},hSbp:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;defaultlang&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;translate.use($event.value)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let lang of langs&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;lang.value&quot;</span>&gt;</span>\n    {{lang.label}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-checkbox-group</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFoods&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-checkbox-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{selectedFoods|json}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n'},jqXm:function(s,n,a){"use strict";a.r(n),n.default='<mat-radio-group [(ngModel)]="defaultlang" (change)="translate.use($event.value)">\n  <mat-radio-button *ngFor="let lang of langs" [value]="lang.value">\n    {{lang.label}}\n  </mat-radio-button>\n</mat-radio-group>\n\n<mtx-checkbox-group [items]="foods" [(ngModel)]="selectedFoods"></mtx-checkbox-group>\n<p>{{selectedFoods|json}}</p>\n\n'},lfrA:function(s,n,a){"use strict";a.r(n),n.default='<mtx-checkbox-group [items]="foods" [(ngModel)]="selectedFoods"></mtx-checkbox-group>\n<p>{{selectedFoods|json}}</p>\n\n<mat-divider></mat-divider>\n\n<mtx-checkbox-group [items]="cars" [(ngModel)]="selectedCars"></mtx-checkbox-group>\n<p>{{selectedCars|json}}</p>\n'},lzlw:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'checkbox-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  foods = [\n    { label: 'Steak', value: 'steak' },\n    { label: 'Pizza', value: 'pizza', disabled: true },\n    { label: 'Tacos', value: 'tacos' },\n  ];\n\n  selectedFoods = ['tacos'];\n\n  disabled = false;\n\n  onOptionChange(e: any) {\n    console.log(e);\n  }\n\n  toggleOptionDisabled() {\n    this.foods[1].disabled = !this.foods[1].disabled;\n    this.foods = this.foods.filter(_ => true);\n  }\n}\n"},rybZ:function(s,n){s.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},uhnQ:function(s,n,a){"use strict";a.r(n),n.default='{\n  "steak": "Steak",\n  "pizza": "Pizza",\n  "tacos": "Tacos"\n}\n'},w9xU:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxCheckboxGroupOption } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ngx-translate/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;checkbox-group-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-attr">foods</span>: MtxCheckboxGroupOption[] = [\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;steak&#x27;</span>),\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;steak&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;pizza&#x27;</span>),\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pizza&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;tacos&#x27;</span>),\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tacos&#x27;</span>,\n    },\n  ];\n  selectedFoods = [<span class="hljs-string">&#x27;steak&#x27;</span>];\n\n  langs = [\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u4e2d\u6587\u7b80\u4f53&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;zh-CN&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;English&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;en-US&#x27;</span> },\n  ];\n  defaultlang = <span class="hljs-string">&#x27;zh-CN&#x27;</span>;\n\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> translate: TranslateService</span>)</span> {\n    translate.addLangs(<span class="hljs-built_in">this</span>.langs.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.value));\n    translate.setDefaultLang(<span class="hljs-built_in">this</span>.defaultlang);\n  }\n}\n'},z1j0:function(s,n){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'}}]);