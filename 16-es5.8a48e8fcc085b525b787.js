!function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function a(n,a,t){return a&&s(n.prototype,a),t&&s(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0/KM":function(n,s){n.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-button-base</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5em</span> <span class="hljs-number">5em</span>;\n}\n\n<span class="hljs-selector-class">.mat-card</span> {\n  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">300px</span>;\n}\n'},"7ciM":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  xPosition = <span class="hljs-string">&#x27;after&#x27;</span>;\n  yPosition = <span class="hljs-string">&#x27;below&#x27;</span>;\n  enterDelay = <span class="hljs-number">200</span>;\n  leaveDelay = <span class="hljs-number">200</span>;\n  xOffset = <span class="hljs-number">0</span>;\n  yOffset = <span class="hljs-number">0</span>;\n  overlapTrigger = <span class="hljs-literal">false</span>;\n  closeOnPanelClick = <span class="hljs-literal">false</span>;\n}\n'},Ejav:function(s,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("fXoL"),l=function(){var s=function(){function s(){n(this,s),this.textContent=""}return a(s,[{key:"ngOnDestroy",value:function(){}}]),s}();return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=o.Ib({type:s,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(n,s){1&n&&o.Pb(0,"div",0),2&n&&o.oc("innerHTML",s.textContent,o.Bc)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}"],encapsulation:2}),s}()},IFXQ:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Popover configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>xPosition:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;xPosition&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;before&quot;</span>&gt;</span>before<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;after&quot;</span>&gt;</span>after<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>yPosition:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;yPosition&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;above&quot;</span>&gt;</span>above<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;below&quot;</span>&gt;</span>below<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>xOffset<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;xOffset&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>yOffset<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;yOffset&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>enterDelay<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;enterDelay&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>leaveDelay<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;leaveDelay&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>&gt;</span>overlapTrigger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>&gt;</span>closeOnPanelClick<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span>\n        #<span class="hljs-attr">popoverTrigger</span>=<span class="hljs-string">&quot;mtxPopoverTrigger&quot;</span>\n        [<span class="hljs-attr">mtxPopoverTriggerFor</span>]=<span class="hljs-string">&quot;popover&quot;</span>\n        <span class="hljs-attr">mtxPopoverTriggerOn</span>=<span class="hljs-string">&quot;hover&quot;</span>&gt;</span>\n  Show Popover With Hover\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-popover</span> #<span class="hljs-attr">popover</span>=<span class="hljs-string">&quot;mtxPopover&quot;</span>\n             [<span class="hljs-attr">xPosition</span>]=<span class="hljs-string">&quot;xPosition&quot;</span>\n             [<span class="hljs-attr">yPosition</span>]=<span class="hljs-string">&quot;yPosition&quot;</span>\n             [<span class="hljs-attr">enterDelay</span>]=<span class="hljs-string">&quot;enterDelay&quot;</span>\n             [<span class="hljs-attr">leaveDelay</span>]=<span class="hljs-string">&quot;leaveDelay&quot;</span>\n             [<span class="hljs-attr">xOffset</span>]=<span class="hljs-string">&quot;xOffset&quot;</span>\n             [<span class="hljs-attr">yOffset</span>]=<span class="hljs-string">&quot;yOffset&quot;</span>\n             [<span class="hljs-attr">overlapTrigger</span>]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>\n             [<span class="hljs-attr">closeOnPanelClick</span>]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>\n             [<span class="hljs-attr">closeOnBackdropClick</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-card-content</span>&gt;</span>\n      A material design popover component created using Angular with the Angular CDK.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-popover</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>\n        #<span class="hljs-attr">popoverTrigger2</span>=<span class="hljs-string">&quot;mtxPopoverTrigger&quot;</span>\n        [<span class="hljs-attr">mtxPopoverTriggerFor</span>]=<span class="hljs-string">&quot;popover2&quot;</span>\n        <span class="hljs-attr">mtxPopoverTriggerOn</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>\n  Show Popover With Click\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-popover</span> #<span class="hljs-attr">popover2</span>=<span class="hljs-string">&quot;mtxPopover&quot;</span>\n             [<span class="hljs-attr">xPosition</span>]=<span class="hljs-string">&quot;xPosition&quot;</span>\n             [<span class="hljs-attr">yPosition</span>]=<span class="hljs-string">&quot;yPosition&quot;</span>\n             [<span class="hljs-attr">xOffset</span>]=<span class="hljs-string">&quot;xOffset&quot;</span>\n             [<span class="hljs-attr">yOffset</span>]=<span class="hljs-string">&quot;yOffset&quot;</span>\n             [<span class="hljs-attr">overlapTrigger</span>]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>\n             [<span class="hljs-attr">closeOnPanelClick</span>]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>\n             [<span class="hljs-attr">closeOnBackdropClick</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-card-content</span>&gt;</span>\n      A material design popover component created using Angular with the Angular CDK.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-popover</span>&gt;</span>\n'},VAcm:function(s,a,t){"use strict";t.r(a),t.d(a,"PopoverOverviewComponent",function(){return w}),t.d(a,"PopoverApiComponent",function(){return q}),t.d(a,"PopoverModule",function(){return D});var e,o=t("tyNb"),l=t("OlrJ"),p=t("fXoL"),r=t("QibW"),c=t("3Pt+"),i=t("kmnG"),g=t("qFsG"),m=t("bSwM"),h=t("bTqV"),d=t("z8zN"),u=t("bler"),b=t("Wp6s"),f={title:"Configurable popover",component:(e=function s(){n(this,s),this.xPosition="after",this.yPosition="below",this.enterDelay=200,this.leaveDelay=200,this.xOffset=0,this.yOffset=0,this.overlapTrigger=!1,this.closeOnPanelClick=!1},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p.Ib({type:e,selectors:[["loader-example"]],decls:62,vars:26,consts:[[3,"ngModel","ngModelChange"],["value","before"],["value","center"],["value","after"],["value","above"],["value","below"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary","mtxPopoverTriggerOn","hover",3,"mtxPopoverTriggerFor"],["popoverTrigger","mtxPopoverTrigger"],[3,"xPosition","yPosition","enterDelay","leaveDelay","xOffset","yOffset","overlapTrigger","closeOnPanelClick","closeOnBackdropClick"],["popover","mtxPopover"],["mat-raised-button","","color","accent","mtxPopoverTriggerOn","click",3,"mtxPopoverTriggerFor"],["popoverTrigger2","mtxPopoverTrigger"],[3,"xPosition","yPosition","xOffset","yOffset","overlapTrigger","closeOnPanelClick","closeOnBackdropClick"],["popover2","mtxPopover"]],template:function(n,s){if(1&n&&(p.Ub(0,"h2"),p.Lc(1,"Popover configuration"),p.Tb(),p.Ub(2,"section"),p.Ub(3,"label"),p.Lc(4,"xPosition:"),p.Tb(),p.Ub(5,"mat-radio-group",0),p.cc("ngModelChange",function(n){return s.xPosition=n}),p.Ub(6,"mat-radio-button",1),p.Lc(7,"before"),p.Tb(),p.Ub(8,"mat-radio-button",2),p.Lc(9,"center"),p.Tb(),p.Ub(10,"mat-radio-button",3),p.Lc(11,"after"),p.Tb(),p.Tb(),p.Tb(),p.Ub(12,"section"),p.Ub(13,"label"),p.Lc(14,"yPosition:"),p.Tb(),p.Ub(15,"mat-radio-group",0),p.cc("ngModelChange",function(n){return s.yPosition=n}),p.Ub(16,"mat-radio-button",4),p.Lc(17,"above"),p.Tb(),p.Ub(18,"mat-radio-button",5),p.Lc(19,"below"),p.Tb(),p.Tb(),p.Tb(),p.Ub(20,"section"),p.Ub(21,"mat-form-field"),p.Ub(22,"mat-label"),p.Lc(23,"xOffset"),p.Tb(),p.Ub(24,"input",6),p.cc("ngModelChange",function(n){return s.xOffset=n}),p.Tb(),p.Tb(),p.Ub(25,"mat-form-field"),p.Ub(26,"mat-label"),p.Lc(27,"yOffset"),p.Tb(),p.Ub(28,"input",6),p.cc("ngModelChange",function(n){return s.yOffset=n}),p.Tb(),p.Tb(),p.Tb(),p.Ub(29,"section"),p.Ub(30,"mat-form-field"),p.Ub(31,"mat-label"),p.Lc(32,"enterDelay"),p.Tb(),p.Ub(33,"input",6),p.cc("ngModelChange",function(n){return s.enterDelay=n}),p.Tb(),p.Tb(),p.Ub(34,"mat-form-field"),p.Ub(35,"mat-label"),p.Lc(36,"leaveDelay"),p.Tb(),p.Ub(37,"input",6),p.cc("ngModelChange",function(n){return s.leaveDelay=n}),p.Tb(),p.Tb(),p.Tb(),p.Ub(38,"section"),p.Ub(39,"mat-checkbox",0),p.cc("ngModelChange",function(n){return s.overlapTrigger=n}),p.Lc(40,"overlapTrigger"),p.Tb(),p.Tb(),p.Ub(41,"section"),p.Ub(42,"mat-checkbox",0),p.cc("ngModelChange",function(n){return s.closeOnPanelClick=n}),p.Lc(43,"closeOnPanelClick"),p.Tb(),p.Tb(),p.Ub(44,"h2"),p.Lc(45,"Result"),p.Tb(),p.Ub(46,"button",7,8),p.Lc(48," Show Popover With Hover\n"),p.Tb(),p.Ub(49,"mtx-popover",9,10),p.Ub(51,"mat-card"),p.Ub(52,"mat-card-content"),p.Lc(53," A material design popover component created using Angular with the Angular CDK. "),p.Tb(),p.Tb(),p.Tb(),p.Ub(54,"button",11,12),p.Lc(56," Show Popover With Click\n"),p.Tb(),p.Ub(57,"mtx-popover",13,14),p.Ub(59,"mat-card"),p.Ub(60,"mat-card-content"),p.Lc(61," A material design popover component created using Angular with the Angular CDK. "),p.Tb(),p.Tb(),p.Tb()),2&n){var a=p.xc(50),t=p.xc(58);p.Cb(5),p.oc("ngModel",s.xPosition),p.Cb(10),p.oc("ngModel",s.yPosition),p.Cb(9),p.oc("ngModel",s.xOffset),p.Cb(4),p.oc("ngModel",s.yOffset),p.Cb(5),p.oc("ngModel",s.enterDelay),p.Cb(4),p.oc("ngModel",s.leaveDelay),p.Cb(2),p.oc("ngModel",s.overlapTrigger),p.Cb(3),p.oc("ngModel",s.closeOnPanelClick),p.Cb(4),p.oc("mtxPopoverTriggerFor",a),p.Cb(3),p.oc("xPosition",s.xPosition)("yPosition",s.yPosition)("enterDelay",s.enterDelay)("leaveDelay",s.leaveDelay)("xOffset",s.xOffset)("yOffset",s.yOffset)("overlapTrigger",s.overlapTrigger)("closeOnPanelClick",s.closeOnPanelClick)("closeOnBackdropClick",!0),p.Cb(5),p.oc("mtxPopoverTriggerFor",t),p.Cb(3),p.oc("xPosition",s.xPosition)("yPosition",s.yPosition)("xOffset",s.xOffset)("yOffset",s.yOffset)("overlapTrigger",s.overlapTrigger)("closeOnPanelClick",s.closeOnPanelClick)("closeOnBackdropClick",!0)}},directives:[r.b,c.k,c.m,r.a,i.c,i.g,g.b,c.n,c.c,m.a,h.b,d.a,u.a,b.a,b.c],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5em 5em}.mat-card[_ngcontent-%COMP%]{max-width:300px}"]}),e),files:[{file:"app.component.html",content:t("IFXQ"),filecontent:t("sKfp")},{file:"app.component.ts",content:t("7ciM"),filecontent:t("i0QU")},{file:"app.component.scss",content:t("0/KM"),filecontent:t("Xyvn")}]},j=t("ofXK"),v=t("ZpCV"),x=t("Ejav");function y(n,s){if(1&n&&(p.Sb(0),p.Pb(1,"example-viewer",2),p.Rb()),2&n){var a=s.$implicit;p.Cb(1),p.oc("exampleData",a)}}function P(n,s){if(1&n&&(p.Sb(0),p.Jc(1,y,2,1,"ng-container",1),p.Rb()),2&n){var a=s.ngIf;p.Cb(1),p.oc("ngForOf",a.examples)}}function T(n,s){if(1&n&&(p.Sb(0),p.Pb(1,"doc-viewer",1),p.Rb()),2&n){var a=s.ngIf;p.Cb(1),p.oc("textContent",a.content.default)}}var O,C,k,w=((k=function s(a){n(this,s),this.route=a}).\u0275fac=function(n){return new(n||k)(p.Ob(o.a))},k.\u0275cmp=p.Ib({type:k,selectors:[["app-popover-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,s){1&n&&(p.Jc(0,P,2,1,"ng-container",0),p.hc(1,"async")),2&n&&p.oc("ngIf",p.ic(1,1,s.route.data))},directives:[j.o,j.n,v.a],pipes:[j.b],encapsulation:2}),k),q=((C=function s(a){n(this,s),this.route=a}).\u0275fac=function(n){return new(n||C)(p.Ob(o.a))},C.\u0275cmp=p.Ib({type:C,selectors:[["app-popover-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(n,s){1&n&&(p.Jc(0,T,2,1,"ng-container",0),p.hc(1,"async")),2&n&&p.oc("ngIf",p.ic(1,1,s.route.data))},directives:[j.o,x.a],pipes:[j.b],encapsulation:2}),C),D=((O=function s(){n(this,s)}).\u0275fac=function(n){return new(n||O)},O.\u0275mod=p.Mb({type:O}),O.\u0275inj=p.Lb({imports:[[l.c,o.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:w,pathMatch:"full",data:{examples:[f]}},{path:"api",component:q,pathMatch:"full",data:{content:t("f5hD")}},{path:"**",redirectTo:"overview"}])]]}),O)},Xyvn:function(n,s,a){"use strict";a.r(s),s.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-button-base {\n  margin: 0 .5em 5em;\n}\n\n.mat-card {\n  max-width: 300px;\n}\n"},ZpCV:function(s,t,e){"use strict";e.d(t,"a",function(){return j});var o=e("fXoL"),l=e("dNgK"),p=e("yeTJ"),r=e("bTqV"),c=e("Qu3c"),i=e("NFeN"),g=e("ofXK"),m=e("wZkO"),h=["demo"];function d(n,s){if(1&n){var a=o.Vb();o.Ub(0,"mat-tab",10),o.Ub(1,"div",11),o.Ub(2,"div",12),o.Ub(3,"button",13),o.cc("click",function(){o.Ac(a);var n=o.xc(8);return o.gc(2).copySource(n)}),o.Ub(4,"mat-icon"),o.Lc(5,"content_copy"),o.Tb(),o.Tb(),o.Tb(),o.Ub(6,"div",14),o.Pb(7,"pre",15,16),o.Tb(),o.Tb(),o.Tb()}if(2&n){var t=s.$implicit;o.oc("label",t.file),o.Cb(3),o.oc("matTooltip","Copy example source"),o.Cb(4),o.oc("innerHtml",t.content,o.Bc)}}function u(n,s){if(1&n&&(o.Ub(0,"div",8),o.Ub(1,"mat-tab-group"),o.Jc(2,d,9,3,"mat-tab",9),o.Tb(),o.Tb()),2&n){var a=o.gc();o.Cb(2),o.oc("ngForOf",a.exampleData.files)}}function b(n,s){if(1&n&&o.Pb(0,"div",17),2&n){var a=o.gc();o.oc("innerHtml",a.exampleData.description,o.Bc)}}function f(n,s){}var j=function(){var s=function(){function s(a,t,e){n(this,s),this.snackbar=a,this.copier=t,this.componentFactoryResolver=e,this.showSource=!1}return a(s,[{key:"ngOnInit",value:function(){var n=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(n)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(n){this.copier.copyText(n.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),s}();return s.\u0275fac=function(n){return new(n||s)(o.Ob(l.a),o.Ob(p.a),o.Ob(o.j))},s.\u0275cmp=o.Ib({type:s,selectors:[["example-viewer"]],viewQuery:function(n,s){var a;(1&n&&o.Oc(h,3,o.R),2&n)&&(o.wc(a=o.dc())&&(s.demoRef=a.first))},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(n,s){1&n&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"span"),o.Lc(3),o.Tb(),o.Pb(4,"div",2),o.Ub(5,"button",3),o.cc("click",function(){return s.toggleSourceView()}),o.Ub(6,"mat-icon"),o.Lc(7,"code"),o.Tb(),o.Tb(),o.Tb(),o.Jc(8,u,3,1,"div",4),o.Ub(9,"div",5),o.Jc(10,b,1,1,"div",6),o.Jc(11,f,0,0,"ng-template",null,7,o.Kc),o.Tb(),o.Tb()),2&n&&(o.Cb(3),o.Mc(s.exampleData.title),o.Cb(2),o.oc("matTooltip","View source"),o.Cb(3),o.oc("ngIf",s.showSource),o.Cb(2),o.oc("ngIf",s.exampleData.description))},directives:[r.b,c.a,i.a,g.o,m.b,g.n,m.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),s}()},f5hD:function(n,s,a){"use strict";a.r(s),s.default='<h1 id="popover">popover</h1>\n<h2 id="api-reference-for-material-extensions-popover">API reference for Material Extensions Popover</h2>\n<p><code>import { MtxPopoverModule } from &apos;@ng-matero/extensions/popover&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxpopover"><code>MtxPopover</code></h4>\n<p>Selector: <code>[mtx-popover]</code></p>\n<p>Exported as: <code>mtxPopover</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>xPosition: &apos;after&apos; | &apos;before&apos; | &apos;center&apos;</code></td>\n<td align="left">Position of the popover in the X axis. Defaults to <strong><code>&apos;after&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>yPosition: &apos;top&apos; | &apos;below&apos;</code></td>\n<td align="left">Position of the popover in the Y axis. Defaults to <strong><code>&apos;below&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>enterDelay: number</code></td>\n<td align="left">Popover enter delay. Only support hover event. Defaults to <strong><code>100</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>leaveDelay: number</code></td>\n<td align="left">Popover enter delay. Only support hover event. Defaults to <strong><code>100</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>xOffset: number</code></td>\n<td align="left">Popover target offset X. Defaults to <strong><code>0</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>yOffset: number</code></td>\n<td align="left">Popover target offset Y. Defaults to <strong><code>0</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>overlapTrigger: boolean</code></td>\n<td align="left">Whether overlap trigger. Defaults to <strong><code>false</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>closeOnPanelClick: boolean</code></td>\n<td align="left">Whether close popover when click the panel. Defaults to <strong><code>false</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>closeOnBackdropClick: boolean</code></td>\n<td align="left">Whether close popover when click the backdrop. Defaults to <strong><code>true</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>focusTrapEnabled: boolean</code></td>\n<td align="left">Whether the popover should focus trap. Defaults to <strong><code>true</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>focusTrapAutoCaptureEnabled: boolean</code></td>\n<td align="left">Whether the popover should focus trap auto capture focus. Defaults to <strong><code>true</code></strong></td>\n</tr>\n</tbody></table>\n<h4 id="mtxpopovertrigger">MtxPopoverTrigger</h4>\n<p>Selector: <code>[mtxPopoverTriggerFor]</code></p>\n<p>Exported as: <code>mtxPopoverTrigger</code></p>\n<h5 id="properties-1">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>mtxPopoverTriggerFor: MtxPopoverPanel</code></td>\n<td align="left">References the popover instance that the trigger is associated with.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>mtxPopoverTriggerOn: MtxPopoverTriggerEvent</code></td>\n<td align="left">Event for triggering popover click, hover and none. Defaults to <strong><code>&apos;hover&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>mtxPopoverTargetAt: MtxTarget</code></td>\n<td align="left">References the popover target instance that the popover positioning is associated with.</td>\n</tr>\n</tbody></table>\n'},i0QU:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  xPosition = 'after';\n  yPosition = 'below';\n  enterDelay = 200;\n  leaveDelay = 200;\n  xOffset = 0;\n  yOffset = 0;\n  overlapTrigger = false;\n  closeOnPanelClick = false;\n}\n"},sKfp:function(n,s,a){"use strict";a.r(s),s.default='<h2>Popover configuration</h2>\n\n<section>\n  <label>xPosition:</label>\n  <mat-radio-group [(ngModel)]="xPosition">\n    <mat-radio-button value="before">before</mat-radio-button>\n    <mat-radio-button value="center">center</mat-radio-button>\n    <mat-radio-button value="after">after</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>yPosition:</label>\n  <mat-radio-group [(ngModel)]="yPosition">\n    <mat-radio-button value="above">above</mat-radio-button>\n    <mat-radio-button value="below">below</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>xOffset</mat-label>\n    <input matInput type="number" [(ngModel)]="xOffset">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>yOffset</mat-label>\n    <input matInput type="number" [(ngModel)]="yOffset">\n  </mat-form-field>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>enterDelay</mat-label>\n    <input matInput type="number" [(ngModel)]="enterDelay">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>leaveDelay</mat-label>\n    <input matInput type="number" [(ngModel)]="leaveDelay">\n  </mat-form-field>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="overlapTrigger">overlapTrigger</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="closeOnPanelClick">closeOnPanelClick</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<button mat-raised-button color="primary"\n        #popoverTrigger="mtxPopoverTrigger"\n        [mtxPopoverTriggerFor]="popover"\n        mtxPopoverTriggerOn="hover">\n  Show Popover With Hover\n</button>\n\n<mtx-popover #popover="mtxPopover"\n             [xPosition]="xPosition"\n             [yPosition]="yPosition"\n             [enterDelay]="enterDelay"\n             [leaveDelay]="leaveDelay"\n             [xOffset]="xOffset"\n             [yOffset]="yOffset"\n             [overlapTrigger]="overlapTrigger"\n             [closeOnPanelClick]="closeOnPanelClick"\n             [closeOnBackdropClick]="true">\n  <mat-card>\n    <mat-card-content>\n      A material design popover component created using Angular with the Angular CDK.\n    </mat-card-content>\n  </mat-card>\n</mtx-popover>\n\n<button mat-raised-button color="accent"\n        #popoverTrigger2="mtxPopoverTrigger"\n        [mtxPopoverTriggerFor]="popover2"\n        mtxPopoverTriggerOn="click">\n  Show Popover With Click\n</button>\n\n<mtx-popover #popover2="mtxPopover"\n             [xPosition]="xPosition"\n             [yPosition]="yPosition"\n             [xOffset]="xOffset"\n             [yOffset]="yOffset"\n             [overlapTrigger]="overlapTrigger"\n             [closeOnPanelClick]="closeOnPanelClick"\n             [closeOnBackdropClick]="true">\n  <mat-card>\n    <mat-card-content>\n      A material design popover component created using Angular with the Angular CDK.\n    </mat-card-content>\n  </mat-card>\n</mtx-popover>\n'}}])}();