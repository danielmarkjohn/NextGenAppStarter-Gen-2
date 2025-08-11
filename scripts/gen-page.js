/**
 * Simple page generator for app/ dir:
 * node scripts/gen-page.js pageName
 */
const fs = require('fs')
const name = process.argv[2]
if (!name) { console.error('Provide a page name'); process.exit(1) }
const dir = `app/${name}`
fs.mkdirSync(dir, { recursive: true })
const content = `export default function Page(){ return <div>${name} page</div> }`
fs.writeFileSync(`${dir}/page.tsx`, content)
console.log('Generated', dir + '/page.tsx')
