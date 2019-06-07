const store = {
  debug: true,
  state: {
    loading: false
  },
  setLoading(value){
    if (this.debug) console.log('setLoading triggered with', value)
    this.state.loading = value
  }
}

export default store