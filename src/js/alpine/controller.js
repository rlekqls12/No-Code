export default function () {
  return {
    layer: {
      width: '300px',
      height: '500px',
      left: '0px',
      top: '0px',
    },
    type: 'floating', // 윈도우 상태 [floating, fixed:[left, right, top, bottom]]
    onFocus() {
      this.$store.global.focus = 'controller'
    },

    /** ######### Drag Header ######### */
    dragging: false,
    onDragStart(mouseEvent) {
      // 드래깅 상태 값 true
      this.dragging = true

      // 초기 값 설정
      const controlBox = this.$refs.controller
      const offsetX = mouseEvent.clientX - controlBox.offsetLeft
      const offsetY = mouseEvent.clientY - controlBox.offsetTop

      // 프레임마다 마우스 위치에 맞춰 박스가 이동하도록 실행
      const handler = this.onDragMove.bind(this, offsetX, offsetY)
      requestAnimationFrame(handler)

      // 마우스 클릭 해제시 드래깅 중단
      window.addEventListener('mouseup', () => (this.dragging = false), { once: true })
    },
    onDragMove(offsetX, offsetY) {
      // 드래깅 상태 값이 false면 종료
      if (this.dragging === false) return

      // 윈도우, 박스 크기 세팅
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const controlBox = this.$refs.controller
      const boxWidth = controlBox.offsetWidth
      const boxHeight = controlBox.offsetHeight

      // 현재 박스 위치 설정
      const mouse = this.$store.global.mouse
      let left = mouse[0] - offsetX
      let top = mouse[1] - offsetY

      // 박스의 X좌표가 화면을 벗어나면 조절
      if (left < 0) left = 0
      if (left + boxWidth > windowWidth) left = windowWidth - boxWidth

      // 박스의 Y좌표가 화면을 벗어나면 조절
      if (top < 0) top = 0
      if (top + boxHeight > windowHeight) top = windowHeight - boxHeight

      this.layer.left = `${left}px`
      this.layer.top = `${top}px`

      const handler = this.onDragMove.bind(this, offsetX, offsetY)
      requestAnimationFrame(handler)
    },
    /** ######### Drag Header ######### */

    /** ######### Collapse Control Box ######### */
    collapse: false,
    onCollapseToggle() {
      this.collapse = !this.collapse
    },
    /** ######### Collapse Control Box ######### */
  }
}
