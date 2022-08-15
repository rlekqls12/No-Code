export default {
  focus: 'viewport', // focused window
  mouse: [0, 0],

  init() {
    window.addEventListener('mousemove', (e) => {
      this.mouse = [e.clientX, e.clientY]
    })
  },
}
