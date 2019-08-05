<template>
	<v-container layout row>
		<h3 >Vue JS - Axios (Http and Api Calls)</h3>
		<div>
			<p>A simple to use library for making http calls<br/>
				<a href="https://github.com/mzabriskie/axios">https://github.com/mzabriskie/axios</a>
			</p>

			<p>
				As a script tag<br/> &lt;script type="text/javascript" src="https://unpkg.com/vue"&gt;&lt;/script&gt;
			</p>

			<h4>The basic resource</h4>

			<p>
				export const basicResource = axios.create({<br/>
				&nbsp;  baseURL: `${API_BASE}/api/`<br/>
				});<br/>
			</p>

			<p>
				The api base url should come from some resource or constants file that is updated during deployment or works from the sites current url. We wouldn't want dev and live calling the same api.
			</p>


			<h4>Consuming the resource</h4>
			<p>
				The below shows the basics of using an axios resource with View JS.
			</p>
			<p>
				import { basicResource } from 'file location';<br/>
				<br/>
				export default Vue.extend({<br/>
				&nbsp;  data(){<br/>
				&nbsp; &nbsp;    model: {}<br/>
				},<br/>
				methods: {<br/>
				&nbsp;    add(){<br/>
				&nbsp; &nbsp; &nbsp; basicResource.post('/', this.model)<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; .then((response) => {<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // what you want to do on a good api call.<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; }<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; .catch((errorResponse) =>{<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; // what you want to do on a bad call. plese use an interceptor if it is generic.<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; })<br/>
				&nbsp; &nbsp; &nbsp; }<br/>
				&nbsp; &nbsp; },<br/>
				&nbsp; get(){ <br/>
				&nbsp; &nbsp; basicResource.get(`${id}`)  // we can use the same call to 'get' to retrieve a list (without the id of course).<br/>
				&nbsp; &nbsp; &nbsp; .then((response) => {<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; this.model = response.data;<br/>
				&nbsp; &nbsp; &nbsp; .catch((errorResponse) => {<br/>
				&nbsp; &nbsp; &nbsp; &nbsp; // Handle error...<br/>
				&nbsp; &nbsp; &nbsp;}<br/>
				&nbsp; &nbsp; }, <br/>
				&nbsp; &nbsp; edit() {<br/>
				&nbsp; &nbsp; &nbsp; return basicResource.put(`${this.id}`, this.post)<br/>
				&nbsp; &nbsp; &nbsp; .then((response) => {<br/>
				&nbsp; &nbsp; &nbsp;  &nbsp; // on good result do this<br/>
				&nbsp; &nbsp; &nbsp; }<br/>
				&nbsp; &nbsp; &nbsp; .catch((errorResponse) => {<br/>
				&nbsp; &nbsp; &nbsp;  &nbsp; // on bad result do this<br/>
				&nbsp; &nbsp; &nbsp; }<br/>
				&nbsp; &nbsp; }, <br/>
				&nbsp;})<br/>
			</p>
		</div>
	</v-container>
</template>
<script>
export default {
	name: 'axios',
	head () {
		return {
			title: 'Axios',
			meta: [
				{ 
					hid: 'description', 
					name: 'description', 
					content: 'glennpacker.net vue axios' 
				}
			]
		}
	}
}
</script>