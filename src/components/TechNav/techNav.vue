<template>
	<div>
		<div class=" padding-top-lg">
			<div class="nav flex-column nav-pills">
				<a class="nav-link" :class="{ active: page == 'vue' }" @click="redirect('vue')">Vue</a>
				<a class="nav-link" v-bind:class="{ active: page == 'routing' }" @click="redirect('routing')">Routing</a>
				<a class="nav-link" v-bind:class="{ active: page == 'component' }" @click="redirect('component')">Component</a>
				<a class="nav-link" v-bind:class="{ active: page == 'simplecomponent' }" @click="redirect('simplecomponent')">Basic component</a>
				<a class="nav-link" v-bind:class="{ active: page == 'axios' }" @click="redirect('axios')">Axios</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      page: null
    };
  },
  methods: {
    redirect: function(path){
      this.$router.push(path);
    }
  },
  created: function(){
    this.page = this.$route.name;
  }
}
</script>
