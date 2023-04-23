//npm - global commond,comes with node
//npm --version
//local dependancy - use it only in this particular project
//npm i <packagename>

//global dependency - use it in any project
// npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores impotant info about project/package)
// manual approach (create package.json int the root , create properties etc)
// npm init (step by step,press enter to skip)
// npm init -y (everything default)

const _=require('lodash')

const item=[1,[2, [3, [4]]]]
const newItems= _.flattenDeep(item)
console.log(newItems )