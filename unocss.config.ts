import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  //transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 !outline-none',
    ],
    [
      'icon-btn',
      'text-[1.5em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
    [
      'icon-preview',
      'text-9xl inline-block mt-20 cursor-pointer hover:text-cyan-600 inline-block ',
    ],
    [
      'icon-bottom-btn',
      'px-6 py-1 rounded bg-cyan-800 text-white cursor-pointer hover:bg-cyan-600 !outline-none',
    ],
  ],
  presets: [presetUno(), presetAttributify(), presetIcons(), presetWebFonts()],
  transformers: [
    // transformerDirectives(),
    // transformerVariantGroup(),
  ],
})
