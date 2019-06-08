const store = {
  debug: true,
  state: {
    loading: false,
    isShowCourse: false
  },
  setLoading(value){
    if (this.debug) console.log('setLoading triggered with', value)
    this.state.loading = value
  },
  showCourse(value){    
    if (this.debug) console.log('showCourse triggered with', value)
    this.state.isShowCourse = value
  }
}

export default store