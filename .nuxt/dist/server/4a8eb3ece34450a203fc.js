exports.ids=[3],exports.modules={105:function(e,t,n){"use strict";n(28);var r=n(29);t.a=Object(r.a)("flex")},106:function(e,t,n){var content=n(107);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),n(5).default("30e4e32a",content,!0)},107:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s;width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{transform:translateX(-8px)}}@keyframes stream{to{transform:translateX(-8px)}}",""])},108:function(e,t,n){"use strict";var r=n(1),o=n.n(r),l=(n(106),n(31)),c=n(6),d=n(16),h=n(30),v=n(7),m=n(0),k=n(2);var f=Object(k.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.e)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.e)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),width:Object(m.e)(this.normalizedBuffer,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?l.b:l.c},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.e)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const slot=Object(m.l)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize:e=>e<0?0:e>100?100:parseFloat(e)},render(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.e)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},119:function(e,t,n){var content=n(126);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(5).default;e.exports.__inject__=function(e){r("c6ea47fa",content,!0,e)}},123:function(e,t,n){var content=n(124);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),n(5).default("2b1dc368",content,!0)},124:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__text{color:rgba(0,0,0,.54)}.theme--light.v-card.v-card--outlined{border:1px solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:1px solid hsla(0,0%,100%,.12)}.v-card{max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem;padding:16px 16px 8px}.v-card__title+.v-card__text{padding-top:0}.v-card__text{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em;padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn.v-size--default{padding:0 8px}.v-card__actions .v-btn.v-size--default+.v-btn{margin-left:8px}.v-application--is-rtl .v-card__actions .v-btn.v-size--default+.v-btn{margin-left:0;margin-right:8px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""])},125:function(e,t,n){"use strict";n.r(t);var r=n(119),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},126:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"ul[data-v-51313d00]{padding:16px 16px 16px 30px}dt[data-v-51313d00]{font-weight:600}",""])},127:function(e,t,n){"use strict";n(28);var r=n(29);t.a=Object(r.a)("layout")},137:function(e,t,n){"use strict";n.r(t);var r={props:{color:{type:String,required:!0},minHeight:{type:String,default:"100"}},data:()=>({show:!1}),computed:{cardMinHeight:function(){return this.minHeight+"px"}}},o=n(12),l=n(15),c=n.n(l),d=(n(123),n(33)),h=n(108),v=n(11),m=n(2),k=Object(m.a)(h.a,v.a,d.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...v.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...d.a.options.computed.classes.call(this)}},styles(){const style={...d.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const e=h.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render(e){const{tag:t,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),f=n(105),x=n(25),_=n(102),B=n(9),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{sm4:"","pl-2":"","pr-2":""}},[n("v-toolbar",{attrs:{color:e.color},on:{click:function(t){e.show=!e.show}}},[e._t("header"),e._v(" "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{dark:""}},[e._v("mdi-menu")])],2),e._v(" "),n("v-card",{staticClass:"pa-3 mb-3",attrs:{"min-height":e.minHeight}},[e._t("main"),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._t("additional")],2)],2)],1)},[],!1,null,null,"94d46702"),E=component.exports;c()(component,{VCard:k,VFlex:f.a,VIcon:x.a,VSpacer:_.a,VToolbar:B.a});var y={components:{panel:E},head:()=>({title:"GlennPacker.net Clients",meta:[{hid:"description",name:"description",content:"glennpacker.net clients"}]}),data:()=>({panelColors:["#ff711e","#ffe11e","#c71eff","#ffe11e","#c71eff","#ff711e","#c71eff","#ff711e","#ffe11e"],vs:{showC1:!1,showC2:!1,other:{showC1:!1,showC2:!1,showC4:!1,showC5:!1,showC6:!1,showC7:!1,showC8:!1,showC9:!1}},clients:[{name:"Hastings Direct",jobTitle:"Full Stack Developer",when:"May 2019 - Present",summary:"Application development for the insurance industry.",projectStyle:"Agile",testTech:["Jest"],technologies:[{text:"Angular",isBackEnd:!1,link:"//angular.glennpacker.net"},{isBackEnd:!1,text:"JSON"}]},{name:"Branthill Computing",jobTitle:"Front End Developer",when:"Apr 2018 - Apr 2019",summary:"Green field application development for inventory Management, forecasting, demand planning and inventory control",projectStyle:"Agile",testTech:["Jest"],technologies:[{text:"Vue Js",isBackEnd:!1,link:"vuejs.glennpacker.net"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!0,text:"SQL"}]},{name:"Airops Software",jobTitle:"Full Stack Developer",when:"Aug 2017 - Mar 2018",summary:"Green field application development for aviation management",projectStyle:"Agile",testTech:["Jest","Nunit","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"Web API"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"Entity Framework"},{isBackEnd:!0,text:"Dapper"},{isBackEnd:!0,text:".Net Core"},{isBackEnd:!1,text:"Angular 5",link:"http://angular.glennpacker.net/"},{isBackEnd:!1,text:"Vue Js",link:"//vuejs.glennpacker.net/"},{isBackEnd:!1,text:"Vuetify"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Material Design"},{isBackEnd:!1,text:"Bootstrap"},{isBackEnd:!1,text:"JavaScript"}]},{name:"Movement Statgies/Telephonica",jobTitle:"Full Stack Developer",when:"Jun - Aug 2017",projectStyle:"Agile",summary:"Make a single tenant application (Movement Strategies) suitable for multiple clients with a variety of client specific options",testTech:["NUnit","Moq","Jasmine"],technologies:[{isBackEnd:!1,text:"Angular Js",link:"//angular.glennpacker.net/"},{isBackEnd:!1,text:"JSON"},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"Dynamo DB"},{isBackEnd:!0,text:"AWS"},{isBackEnd:!1,text:"JavaScript"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Bootstrap"},{isBackEnd:!1,text:"HTML 5"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"Fluent Validations"},{isBackEnd:!0,text:"Express Mapper"},{isBackEnd:!0,text:"NLog"},{text:"MOQ"},{text:"NUnit"}]},{name:"Great Night Out",jobTitle:"Full Stack Developer",when:"Jun 2013 - Jan 2018",summary:"Green field application development for event planning",projectStyle:"Agile",testTech:["NUnit","Fake It Easy"],technologies:[{text:"Angular Js",isBackEnd:!1,link:"//angular.glennpacker.net/"},{text:"JSON",isBackEnd:!1},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!1,text:"JavaScript"},{isBackEnd:!1,text:"CSS"},{isBackEnd:!1,text:"Bootstrap"},{text:"HTML 5",isBackEnd:!1},{isBackEnd:!0,text:"Unity"},{text:"Fake It Easy"},{text:"NUnit"}]},{name:"Lumesse",jobTitle:"Front end developer",projectStyle:"Agile",when:"April - May 2017",summary:"Front end development for the Sony, Panasonic and Ey Learning portals",technologies:[{text:"Vue Js",link:"//vuejs.glennpacker.net",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JSON",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"HTML 5",isBackEnd:!1},{text:"jQuery",isBackEnd:!1}]},{name:"Airbus Space and Defence",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Feb – April 2017",summary:"Full stack development on satelite measurement and recording",testTech:["MS Test","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"ASP.net MVC"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Web Api"},{isBackEnd:!0,text:"Dapper"},{text:"XML",isBackEnd:!1},{isBackEnd:!0,text:"Master Data Services"},{isBackEnd:!0,text:"Entity Framework"},{text:"Razor",isBackEnd:!0},{text:"TypeScript",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JQuery",isBackEnd:!1},{text:"Bootstrap",isBackEnd:!1}]},{name:"Saga",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Mar 2016 – Jan 2017",summary:"Full stack development for insurance renewals, holiday insurance and data viewer",testTech:["NUnit","MoQ","Jasmine"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"ASP.net MVC"},{isBackEnd:!0,text:"Oracle"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Dapper"},{isBackEnd:!0,text:"Ninject"},{text:"Angular Js",link:"//angular.glennpacker.net",isBackEnd:!1},{isBackEnd:!0,text:"Web API"},{text:"HTML 5",isBackEnd:!1},{text:"Bootstrap",isBackEnd:!1},{text:"Razor",isBackEnd:!1},{text:"LESS",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"jQuery",isBackEnd:!1}]},{name:"Access Group",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Nov 2015 – Mar 2016",summary:"Adding new features into a scheduling system for the care industry (Mail Merge, APIs and data exports)",technologies:[{isBackEnd:!0,text:"VB.net"},{isBackEnd:!0,text:"Asp.net Web Forms"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!1,text:"Angular Js",link:"//angular.glennpacker.net"}]},{name:"BeValued",jobTitle:"Full Stack Developer",projectStyle:"Agile",when:"Apr 2014 – Nov 2015",summary:"Design and development of a fitting centre portal for the insurance claims industry.",testTech:["NUnit","FakeItEasy"],technologies:[{isBackEnd:!0,text:"C#"},{isBackEnd:!0,text:"Web Api 2"},{isBackEnd:!0,text:"MVC4"},{text:"Angular Js",link:"//angular.glennpacker.net/",isBackEnd:!1},{isBackEnd:!0,text:"Entity Framework"},{isBackEnd:!0,text:"nHibernate"},{isBackEnd:!0,text:"StructureMap"},{isBackEnd:!0,text:"Ninject"},{isBackEnd:!0,text:"Autofac"},{isBackEnd:!0,text:"NServicebus"},{isBackEnd:!0,text:"SQL Server"},{isBackEnd:!0,text:"Log4net"},{isBackEnd:!0,text:"NLog"},{text:"HTML 5",isBackEnd:!1},{text:"JavaScript",isBackEnd:!1},{text:"JQuery",isBackEnd:!1},{text:"CSS",isBackEnd:!1},{text:"Underscore Js",isBackEnd:!1},{isBackEnd:!1,text:"Razor"},{text:"Bootstrap",isBackEnd:!1},{text:"NuGet",isBackEnd:!0},{text:"JSON",isBackEnd:!1},{isBackEnd:!0,text:"Classic Asp"}]}]}),computed:{vueClients(){return this.clients.filter(e=>e.technologies.some(e=>e.text.toLowerCase().includes("vue")))}},methods:{backEndItems:e=>e.technologies.filter(e=>e.isBackEnd&&!e.link).map(e=>e.text).join(", "),backEndLinks:e=>e.technologies.filter(e=>e.isBackEnd&&e.link),frontEndItems:e=>e.technologies.filter(e=>!e.isBackEnd&&!e.link).map(e=>e.text).join(", "),frontEndLinks:e=>e.technologies.filter(e=>!e.isBackEnd&&e.link),hasBackEnd:e=>e.technologies.some(e=>e.isBackEnd),hasFrontEnd:e=>e.technologies.some(e=>!e.isBackEnd)}},S=n(104),w=n(127);var C=Object(o.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h3",{staticStyle:{"padding-bottom":"25px"}},[e._v("Clients using Vue JS")]),e._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.vueClients,function(t,r){return n("panel",{key:r,attrs:{color:e.panelColors[8-r%9]}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.name))]),e._v(" "),n("div",{attrs:{slot:"main"},slot:"main"},[e._v(e._s(t.summary))]),e._v(" "),n("div",{attrs:{slot:"additional"},slot:"additional"},[n("ul",[n("dt",[e._v("Agile")]),e._v(" "),e.hasBackEnd(t)?[n("dt",[e._v("Back End Technologies")]),e._v(" "),n("dd",[e._l(e.backEndLinks(t),function(t){return n("span",{key:t.text},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.text))]),e._v(",\n              ")])}),e._v(" "),e.backEndItems(t)?[e._v(e._s(e.backEndItems(t)))]:e._e()],2)]:e._e(),e._v(" "),e.hasFrontEnd(t)?[n("dt",[e._v("Front End Technologies")]),e._v(" "),n("dd",[e._l(e.frontEndLinks(t),function(t){return n("span",{key:t.text},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.text))]),e._v(",\n              ")])}),e._v(" "),e.frontEndItems(t)?[e._v(e._s(e.frontEndItems(t)))]:e._e()],2)]:e._e(),e._v(" "),t.testTech?[n("dt",[e._v("TDD / Test")]),e._v(" "),n("dd",[e._v(e._s(t.testTech.join(", ")))])]:e._e()],2),e._v(" "),n("p",[e._v(e._s(t.when))])])])}),1),e._v(" "),n("h3",{staticStyle:{padding:"25px 0"}},[e._v("All Recent Clients")]),e._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.clients,function(t,r){return n("panel",{key:r,attrs:{color:e.panelColors[r%9]}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.name))]),e._v(" "),n("div",{attrs:{slot:"main"},slot:"main"},[e._v(e._s(t.summary))]),e._v(" "),n("div",{attrs:{slot:"additional"},slot:"additional"},[n("ul",[n("dt",[e._v("Agile")]),e._v(" "),e.hasBackEnd(t)?[n("dt",[e._v("Back End Technologies")]),e._v(" "),n("dd",[e._l(e.backEndLinks(t),function(t){return n("span",{key:t.text},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.text))]),e._v(",\n              ")])}),e._v(" "),e.backEndItems(t)?[e._v(e._s(e.backEndItems(t)))]:e._e()],2)]:e._e(),e._v(" "),e.hasFrontEnd(t)?[n("dt",[e._v("Front End Technologies")]),e._v(" "),n("dd",[e._l(e.frontEndLinks(t),function(t){return n("span",{key:t.text},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.text))]),e._v(",\n              ")])}),e._v(" "),e.frontEndItems(t)?[e._v(e._s(e.frontEndItems(t)))]:e._e()],2)]:e._e(),e._v(" "),t.testTech?[n("dt",[e._v("TDD / Test")]),e._v(" "),n("dd",[e._v(e._s(t.testTech.join(", ")))])]:e._e()],2),e._v(" "),n("p",[e._v(e._s(t.when))])])])}),1)],1)},[],!1,function(e){var t=n(125);t.__inject__&&t.__inject__(e)},"51313d00","662d3ba4");t.default=C.exports;c()(C,{VContainer:S.a,VLayout:w.a})}};
//# sourceMappingURL=4a8eb3ece34450a203fc.js.map