<template>
  <div class="container">
    <h3>{{ items }}</h3> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.getRepos()
  },
  computed: {
    ...mapGetters({
      repos: 'repos/GET_REPOS'
    }),
    items() {
      return this.repos
    }
  },
  methods: {
    async getRepos() {
      try {
        this.loading = false
        await this.$store.dispatch('repos/GET_REPOS')
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e.response)
      }
    }
  }
}
</script>

