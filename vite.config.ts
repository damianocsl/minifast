import type { UserConfig } from 'vite'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  plugins: [
    one({
      web: {
        defaultRenderMode: 'spa',
      },

      app: {
        // set to the key of your native app
        // will call AppRegistry.registerComponent(app.key)
        key: 'minifast',
      },
    }),

    tamaguiPlugin({
      optimize: true,
      components: ['tamagui'],
      config: './config/tamagui/tamagui.config.ts',
      outputCSS: './app/tamagui.css',
    }),
  ],
} satisfies UserConfig
