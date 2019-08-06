<template>
	<v-container layout row>
		<h3 >Vue JS - Axios (Http and Api Calls)</h3>
		<div>
			<p>A simple to use library for making http calls
				<a href="https://github.com/mzabriskie/axios">https://github.com/mzabriskie/axios</a>
			</p>
			
			As a script tag <br />
			<code>&lt;script type="text/javascript" src="https://unpkg.com/vue"&gt;&lt;/script&gt;</code>
			

			<h4>The basic resource</h4>

	<code>
		export const basicResource = axios.create({
		&nbsp;  baseURL: `${API_BASE}/api/`
		});
	</code>

			<p>
				The api base url should come from some resource or constants file that is updated during deployment or works from the sites current url. We wouldn't want dev and live calling the same api.
			</p>


			<h4>Consuming the resource</h4>
			<p>
				The below shows the basics of using an axios resource with View JS.
			</p>
			<code>
				import { basicResource } from 'file location';
				
				export default Vue.extend({
				&nbsp;  data(){
				&nbsp; &nbsp;    model: {}
				&nbsp; },
				&nbsp; methods: {
				&nbsp; &nbsp; add(){
				&nbsp; &nbsp; &nbsp; basicResource.post('/', this.model)
				&nbsp; &nbsp; &nbsp; &nbsp; .then((response) => {
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // what you want to do on a good api call.
				&nbsp; &nbsp; &nbsp; &nbsp; }
				&nbsp; &nbsp; &nbsp; &nbsp; .catch((errorResponse) =>{
				&nbsp; &nbsp; &nbsp; &nbsp; // what you want to do on a bad call. plese use an interceptor if it is generic.
				&nbsp; &nbsp; &nbsp; &nbsp; })
				&nbsp; &nbsp; &nbsp; }
				&nbsp; &nbsp; },
				&nbsp; get(){ 
				&nbsp; &nbsp; basicResource.get(`${id}`)  // we can use the same call to 'get' to retrieve a list (without the id of course).
				&nbsp; &nbsp; &nbsp; .then((response) => {
				&nbsp; &nbsp; &nbsp; &nbsp; this.model = response.data;
				&nbsp; &nbsp; &nbsp; .catch((errorResponse) => {
				&nbsp; &nbsp; &nbsp; &nbsp; // Handle error...
				&nbsp; &nbsp; &nbsp;}
				&nbsp; &nbsp; }, 
				&nbsp; &nbsp; edit() {
				&nbsp; &nbsp; &nbsp; return basicResource.put(`${this.id}`, this.post)
				&nbsp; &nbsp; &nbsp; .then((response) => {
				&nbsp; &nbsp; &nbsp;  &nbsp; // on good result do this
				&nbsp; &nbsp; &nbsp; }
				&nbsp; &nbsp; &nbsp; .catch((errorResponse) => {
				&nbsp; &nbsp; &nbsp;  &nbsp; // on bad result do this
				&nbsp; &nbsp; &nbsp; }
				&nbsp; &nbsp; }, 
				&nbsp;})
			</code>
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