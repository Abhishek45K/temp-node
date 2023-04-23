const path = require('path')

console.log(path.sep)
const filePath=path.join('/conent','subfolder','test.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base);

const absoult=path.resolve(__dirname,'content','subfloder','test.txt')
console.log(absoult);