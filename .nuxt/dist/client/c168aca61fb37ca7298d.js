(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{288:function(t,e,n){"use strict";n(112);var r=n(113);e.a=Object(r.a)("flex")},289:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("30e4e32a",content,!0,{sourceMap:!1})},290:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s;width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{transform:translateX(-8px)}}@keyframes stream{to{transform:translateX(-8px)}}",""])},291:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("c6ea47fa",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(18);var r=n(1),o=(n(10),n(6),n(5),n(4),n(7),n(69),n(2)),c=(n(289),n(115)),l=n(16),d=n(70),h=n(114),v=n(21),f=n(0),m=n(8);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var x=Object(m.a)(l.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.e)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.e)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),width:Object(f.e)(this.normalizedBuffer,"%")}},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.e)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.l)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.e)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=r.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(x,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},305:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2b1dc368",content,!0,{sourceMap:!1})},306:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__text{color:rgba(0,0,0,.54)}.theme--light.v-card.v-card--outlined{border:1px solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:1px solid hsla(0,0%,100%,.12)}.v-card{max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem;padding:16px 16px 8px}.v-card__title+.v-card__text{padding-top:0}.v-card__text{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em;padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn.v-size--default{padding:0 8px}.v-card__actions .v-btn.v-size--default+.v-btn{margin-left:8px}.v-application--is-rtl .v-card__actions .v-btn.v-size--default+.v-btn{margin-left:0;margin-right:8px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""])},307:function(t,e,n){"use strict";var r=n(291);n.n(r).a},308:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,"ul[data-v-51313d00]{padding:16px 16px 16px 30px}dt[data-v-51313d00]{font-weight:600}",""])},309:function(t,e,n){"use strict";n(112);var r=n(113);e.a=Object(r.a)("layout")},320:function(t,e,n){"use strict";n.r(e);n(161),n(33),n(34);var r={props:{color:{type:String,required:!0},minHeight:{type:String,default:"100"}},data:function(){return{show:!1}},computed:{cardMinHeight:function(){return this.minHeight+"px"}}},o=n(51),c=n(68),l=n.n(c),d=(n(10),n(6),n(5),n(4),n(7),n(2)),h=(n(18),n(305),n(142)),v=n(293),f=n(49),m=n(8);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(source,!0).forEach(function(e){Object(d.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var _=Object(m.a)(v.a,f.a,h.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes:function(){return x({"v-card":!0},f.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised},h.a.options.computed.classes.call(this))},styles:function(){var style=x({},h.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=v.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),E=n(288),B=n(106),y=n(282),w=n(27),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm4:"","pl-2":"","pr-2":""}},[n("v-toolbar",{attrs:{color:t.color},on:{click:function(e){t.show=!t.show}}},[t._t("header"),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{dark:""}},[t._v("mdi-menu")])],2),t._v(" "),n("v-card",{staticClass:"pa-3 mb-3",attrs:{"min-height":t.minHeight}},[t._t("main"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._t("additional")],2)],2)],1)},[],!1,null,null,null),S=component.exports;l()(component,{VCard:_,VFlex:E.a,VIcon:B.a,VSpacer:y.a,VToolbar:w.a});var j={components:{panel:S},head:function(){return{title:"GlennPacker.net Clients",meta:[{hid:"description",name:"description",content:"glennpacker.net clients"}]}},data:function(){return{panelColors:["#ff711e","#ffe11e","#c71eff","#ffe11e","#c71eff","#ff711e","#c71eff","#ff711e","#ffe11e"],vs:{showC1:!1,showC2:!1,other:{showC1:!1,showC2:!1,showC4:!1,showC5:!1,showC6:!1,showC7:!1,showC8:!1,showC9:!1}},clients:[{name:"Hastings Direct",jobTitle:"Full Stack Developer",when:"May 2019 - Present",summary:"Application development for the insurance industry.",projectStyle:"Agile",testTech:["Jest"],technologies:[{text:"Angular",isBackEnd:!1,link:"//angular.glennpacker.net"},{isBackEnd:!1,text:"JSON"}]},{name:"Branthill Computing",jobTitle:"Front End Developer",when:"Apr 2018 - Apr 2019",summary:"Green field application development for inventory Management, forecasting, demand planning and inventory control",projectStyle:"Agile",testTech:["Jest"],technologies:[{text:"Vue Js",isBackEnd:!1,link:"vuejs.glennpacker.net"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!0,text:"SQL"}]},{name:"Airops Software",jobTitle:"Full Stack Developer",when:"Aug 2017 - Mar 2018",summary:"Green field application development for aviation management",projectStyle:"Agile",testTech:["Jest","Nunit","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"Web API"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"Entity Framework"},{isBackEnd:!0,text:"Dapper"},{isBackEnd:!0,text:".Net Core"},{isBackEnd:!1,text:"Angular 5",link:"http://angular.glennpacker.net/"},{isBackEnd:!1,text:"Vue Js",link:"//vuejs.glennpacker.net/"},{isBackEnd:!1,text:"Vuetify"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Material Design"},{isBackEnd:!1,text:"Bootstrap"},{isBackEnd:!1,text:"JavaScript"}]},{name:"Movement Statgies/Telephonica",jobTitle:"Full Stack Developer",when:"Jun - Aug 2017",projectStyle:"Agile",summary:"Make a single tenant application (Movement Strategies) suitable for multiple clients with a variety of client specific options",testTech:["NUnit","Moq","Jasmine"],technologies:[{isBackEnd:!1,text:"Angular Js",link:"//angular.glennpacker.net/"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"Dynamo DB"},{isBackEnd:!0,text:"AWS"},{isBackEnd:!1,text:"JavaScript"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Bootstrap"},{isBackEnd:!1,text:"HTML 5"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"Fluent Validations"},{isBackEnd:!0,text:"Express Mapper"},{isBackEnd:!0,text:"NLog"},{text:"MOQ"},{text:"NUnit"}]},{name:"Great Night Out",jobTitle:"Full Stack Developer",when:"Jun 2013 - Jan 2018",summary:"Green field application development for event planning",projectStyle:"Agile",testTech:["NUnit","Fake It Easy"],technologies:[{text:"Angular Js",isBackEnd:!1,link:"//angular.glennpacker.net/"},{text:"JSON",isBackEnd:!1},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!1,text:"JavaScript"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Bootstrap"},{text:"HTML 5",isBackEnd:!1},{isBackEnd:!0,text:"Unity"},{text:"Fake It Easy"},{text:"NUnit"}]},{name:"Lumesse",jobTitle:"Front end developer",projectStyle:"Agile",when:"April - May 2017",summary:"Front end development for the Sony, Panasonic and Ey Learning portals",technologies:[{text:"Vue Js",link:"//vuejs.glennpacker.net",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JSON",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"HTML 5",isBackEnd:!1},{text:"jQuery",isBackEnd:!1}]},{name:"Airbus Space and Defence",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Feb – April 2017",summary:"Full stack development on satelite measurement and recording",testTech:["MS Test","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"ASP.net MVC"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Web Api"},{isBackEnd:!0,text:"Dapper"},{text:"XML",isBackEnd:!1},{isBackEnd:!0,text:"Master Data Services"},{isBackEnd:!0,text:"Entity Framework"},{text:"Razor",isBackEnd:!0},{text:"TypeScript",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JQuery",isBackEnd:!1},{text:"Bootstrap",isBackEnd:!1}]},{name:"Saga",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Mar 2016 – Jan 2017",summary:"Full stack development for insurance renewals, holiday insurance and data viewer",testTech:["NUnit","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"ASP.net MVC"},{isBackEnd:!0,text:"Oracle"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Dapper"},{isBackEnd:!0,text:"Ninject"},{text:"Angular Js",link:"//angular.glennpacker.net",isBackEnd:!1},{isBackEnd:!0,text:"Web API"},{text:"HTML 5",isBackEnd:!1},{text:"Bootstrap",isBackEnd:!1},{text:"Razor",isBackEnd:!1},{text:"LESS",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"jQuery",isBackEnd:!1}]},{name:"Access Group",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Nov 2015 – Mar 2016",summary:"Adding new features into a scheduling system for the care industry (Mail Merge, APIs and data exports)",technologies:[{isBackEnd:!0,text:"VB.net"},{isBackEnd:!0,text:"Asp.net Web Forms"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!1,text:"Angular Js",link:"//angular.glennpacker.net"}]},{name:"BeValued",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Apr 2014 – Nov 2015",summary:"Design and development of a fitting centre portal for the insurance claims industry.",testTech:["NUnit","FakeItEasy"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"MVC4"},{text:"Angular Js",link:"//angular.glennpacker.net/",isBackEnd:!1},{isBackEnd:!0,text:"Entity Framework"},{isBackEnd:!0,text:"nHibernate"},{isBackEnd:!0,text:"StructureMap"},{isBackEnd:!0,text:"Ninject"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"NServicebus"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Log4net"},{isBackEnd:!0,text:"NLog"},{text:"HTML 5",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JQuery",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"Underscore Js",isBackEnd:!1},{isBackEnd:!1,text:"Razor"},{text:"Bootstrap",isBackEnd:!1},{text:"NuGet",isBackEnd:!0},{text:"JSON",isBackEnd:!1},{isBackEnd:!0,text:"Classic Asp"}]}]}},computed:{vueClients:function(){return this.clients.filter(function(t){return t.technologies.some(function(t){return t.text.toLowerCase().includes("vue")})})}},methods:{backEndItems:function(t){return t.technologies.filter(function(t){return t.isBackEnd&&!t.link}).map(function(t){return t.text}).join(", ")},backEndLinks:function(t){return t.technologies.filter(function(t){return t.isBackEnd&&t.link})},frontEndItems:function(t){return t.technologies.filter(function(t){return!t.isBackEnd&&!t.link}).map(function(t){return t.text}).join(", ")},frontEndLinks:function(t){return t.technologies.filter(function(t){return!t.isBackEnd&&t.link})},hasBackEnd:function(t){return t.technologies.some(function(t){return t.isBackEnd})},hasFrontEnd:function(t){return t.technologies.some(function(t){return!t.isBackEnd})}}},C=(n(307),n(287)),O=n(309),A=Object(o.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h3",{staticStyle:{"padding-bottom":"25px"}},[t._v("Clients using Vue JS")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.vueClients,function(e,r){return n("panel",{key:r,attrs:{color:t.panelColors[8-r%9]}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.name))]),t._v(" "),n("div",{attrs:{slot:"main"},slot:"main"},[t._v(t._s(e.summary))]),t._v(" "),n("div",{attrs:{slot:"additional"},slot:"additional"},[n("ul",[n("dt",[t._v("Agile")]),t._v(" "),t.hasBackEnd(e)?[n("dt",[t._v("Back End Technologies")]),t._v(" "),n("dd",[t._l(t.backEndLinks(e),function(e){return n("span",{key:e.text},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.text))]),t._v(",\n              ")])}),t._v(" "),t.backEndItems(e)?[t._v(t._s(t.backEndItems(e)))]:t._e()],2)]:t._e(),t._v(" "),t.hasFrontEnd(e)?[n("dt",[t._v("Front End Technologies")]),t._v(" "),n("dd",[t._l(t.frontEndLinks(e),function(e){return n("span",{key:e.text},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.text))]),t._v(",\n              ")])}),t._v(" "),t.frontEndItems(e)?[t._v(t._s(t.frontEndItems(e)))]:t._e()],2)]:t._e(),t._v(" "),e.testTech?[n("dt",[t._v("TDD / Test")]),t._v(" "),n("dd",[t._v(t._s(e.testTech.join(", ")))])]:t._e()],2),t._v(" "),n("p",[t._v(t._s(e.when))])])])}),1),t._v(" "),n("h3",{staticStyle:{padding:"25px 0"}},[t._v("All Recent Clients")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.clients,function(e,r){return n("panel",{key:r,attrs:{color:t.panelColors[r%9]}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.name))]),t._v(" "),n("div",{attrs:{slot:"main"},slot:"main"},[t._v(t._s(e.summary))]),t._v(" "),n("div",{attrs:{slot:"additional"},slot:"additional"},[n("ul",[n("dt",[t._v("Agile")]),t._v(" "),t.hasBackEnd(e)?[n("dt",[t._v("Back End Technologies")]),t._v(" "),n("dd",[t._l(t.backEndLinks(e),function(e){return n("span",{key:e.text},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.text))]),t._v(",\n              ")])}),t._v(" "),t.backEndItems(e)?[t._v(t._s(t.backEndItems(e)))]:t._e()],2)]:t._e(),t._v(" "),t.hasFrontEnd(e)?[n("dt",[t._v("Front End Technologies")]),t._v(" "),n("dd",[t._l(t.frontEndLinks(e),function(e){return n("span",{key:e.text},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.text))]),t._v(",\n              ")])}),t._v(" "),t.frontEndItems(e)?[t._v(t._s(t.frontEndItems(e)))]:t._e()],2)]:t._e(),t._v(" "),e.testTech?[n("dt",[t._v("TDD / Test")]),t._v(" "),n("dd",[t._v(t._s(e.testTech.join(", ")))])]:t._e()],2),t._v(" "),n("p",[t._v(t._s(e.when))])])])}),1)],1)},[],!1,null,"51313d00",null);e.default=A.exports;l()(A,{VContainer:C.a,VLayout:O.a})}}]);