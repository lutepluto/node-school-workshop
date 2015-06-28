var result = process.argv.slice(2).reduce(function(previous, current, index){
    return Number(previous) + Number(current) 
})

console.log(result)
