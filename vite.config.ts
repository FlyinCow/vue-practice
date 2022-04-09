import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'
import presetAttr from '@unocss/preset-attributify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetWind(),
        presetIcons({
          mode: 'background-img'
        }),
        presetAttr(),
      ]
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core'
      ],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    })
  ]
})
