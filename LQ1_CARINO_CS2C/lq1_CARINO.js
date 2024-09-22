// persona 1
const p1Name = "Maria Delos Santos Las Marias"
const p1Age = 25
const p1Address = "Upper Session Road, Baguio City, Benguet"

// Persona 2
const p2Name = "Juan Gamoso Dela Cruz"
const p2Age = 28
const p2Address = "San Nicolas, Candon City, Ilocos Sur"

// Split an string into an array
const splitArray = p1Name.split(" ")
const SplitArray = p2Name.split(" ")

// output a value
console.log("name:",splitArray + p1Age + p1Address)
console.log("name:",SplitArray + p2Age + p2Address )


// length calculate how many words are in a string
const p1NameLength = p1Name.length
const p2NameLength = p2Name.length
const p1AddressLength = p1Address.length
const p2AddressLength = p2Address.length

// calculation
const  a = p1Age + p2Age + p1NameLength + p2NameLength + p1AddressLength + p2AddressLength
const  x = p1Age + p2Age
const  z = p1Age + p2Age - p1NameLength
const  b = (p1Age + p2Age - p1NameLength) * p2NameLength



// output
console.log(a)
console.log(x)
console.log(z)
console.log(b)
