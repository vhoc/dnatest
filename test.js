const validateEntry = (dnaArray) => {
  const pattern = /[^ATGC]+/g
  let plainString = dnaArray.join().replaceAll(',', '')

  const check = pattern.test(plainString)

  return check ? false : true
}

const result = validateEntry([
  'ATCCGA',
  'GAATGC',
  'AGCTGT',
  'AGTAGG',
  'CCCCTA',
  'TCACTT',
])

console.log(result)
