import { CSSLoader, Plugins } from 'jspm-loader-css'
throw new Error('failed to load css.js')
import rucksack from 'rucksack-css' // you want to use this postcss plugin

console.log("__moduleName", __moduleName)

export default new CSSLoader([
  rucksack
], __moduleName)
