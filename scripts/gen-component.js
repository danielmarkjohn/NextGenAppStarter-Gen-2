/**
 * Simple component generator:
 * node scripts/gen-component.js ComponentName
 */
const fs = require('fs')
const name = process.argv[2]
if (!name) { console.error('Provide a component name'); process.exit(1) }
const path = `components/${name}.tsx`
const content = `export default function ${name}(){ return <div>${name} component</div> }`
fs.writeFileSync(path, content)
console.log('Generated', path)
