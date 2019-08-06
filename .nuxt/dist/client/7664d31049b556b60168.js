(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,e,n){"use strict";n.r(e);var o={name:"axios",head:function(){return{title:"Axios",meta:[{hid:"description",name:"description",content:"glennpacker.net vue axios"}]}}},r=n(51),c=n(68),l=n.n(c),d=n(287),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{layout:"",row:""}},[n("h3",[t._v("Vue JS - Axios (Http and Api Calls)")]),t._v(" "),n("div",[n("p",[t._v("A simple to use library for making http calls\n\t\t\t"),n("a",{attrs:{href:"https://github.com/mzabriskie/axios"}},[t._v("https://github.com/mzabriskie/axios")])]),t._v("\n\t\t\n\t\tAs a script tag "),n("br"),t._v(" "),n("code",[t._v('<script type="text/javascript" src="https://unpkg.com/vue"><\/script>')]),t._v(" "),n("h4",[t._v("The basic resource")]),t._v(" "),n("code",[t._v("\n\texport const basicResource = axios.create({\n\t   baseURL: `${API_BASE}/api/`\n\t});\n")]),t._v(" "),n("p",[t._v("\n\t\t\tThe api base url should come from some resource or constants file that is updated during deployment or works from the sites current url. We wouldn't want dev and live calling the same api.\n\t\t")]),t._v(" "),n("h4",[t._v("Consuming the resource")]),t._v(" "),n("p",[t._v("\n\t\t\tThe below shows the basics of using an axios resource with View JS.\n\t\t")]),t._v(" "),n("code",[t._v("\n\t\t\timport { basicResource } from 'file location';\n\t\t\t\n\t\t\texport default Vue.extend({\n\t\t\t   data(){\n\t\t\t       model: {}\n\t\t\t  },\n\t\t\t  methods: {\n\t\t\t    add(){\n\t\t\t      basicResource.post('/', this.model)\n\t\t\t        .then((response) => {\n\t\t\t          // what you want to do on a good api call.\n\t\t\t        }\n\t\t\t        .catch((errorResponse) =>{\n\t\t\t        // what you want to do on a bad call. plese use an interceptor if it is generic.\n\t\t\t        })\n\t\t\t      }\n\t\t\t    },\n\t\t\t  get(){ \n\t\t\t    basicResource.get(`${id}`)  // we can use the same call to 'get' to retrieve a list (without the id of course).\n\t\t\t      .then((response) => {\n\t\t\t        this.model = response.data;\n\t\t\t      .catch((errorResponse) => {\n\t\t\t        // Handle error...\n\t\t\t     }\n\t\t\t    }, \n\t\t\t    edit() {\n\t\t\t      return basicResource.put(`${this.id}`, this.post)\n\t\t\t      .then((response) => {\n\t\t\t         // on good result do this\n\t\t\t      }\n\t\t\t      .catch((errorResponse) => {\n\t\t\t         // on bad result do this\n\t\t\t      }\n\t\t\t    }, \n\t\t\t })\n\t\t")])])])},[],!1,null,null,null);e.default=component.exports;l()(component,{VContainer:d.a})}}]);