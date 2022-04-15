import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { Preset } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'
import presetAttr from '@unocss/preset-attributify'
import presetWebFont from '@unocss/preset-web-fonts'
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
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetWind(),
        presetIcons({
          mode: 'mask',
        }),
        presetAttr(),
        presetWebFont({
          fonts: {
            sans: 'Fira Sans',
            mono: ['Fira Code', 'Fira Mono:400,700'],
          },
        }) as unknown as Preset<{}>,
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    })
  ]
})
