export default function () {
  return {
    onFocus() {
      this.$store.global.focus = 'viewport'
    },
  }
}
