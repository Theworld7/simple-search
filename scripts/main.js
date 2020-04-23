const app = new Vue({
  el: '#app',
  name: 'App',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    search () {
      const input = this.$refs.searchInput
      this.openUrl(input.innerText)
      input.innerText = ''
    },
    openUrl (val) {
      window.open(`https://www.google.com/search?q=${val}`)
    }
  }
})