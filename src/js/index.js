import Alpine from 'alpinejs'
import alpineInitGlobal from '@/js/alpine/global.js'
import alpineInitViewport from '@/js/alpine/viewport.js'
import alpineInitController from '@/js/alpine/controller.js'
import '@/css/index.scss'

Alpine.store('global', alpineInitGlobal)
Alpine.data('viewport', alpineInitViewport)
Alpine.data('controller', alpineInitController)

Alpine.start()
