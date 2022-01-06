const Dna = require('../models/Dna')

/**
 * Returns the number of times an acid base repeats at least 4 times.
 *
 * @param {string} string Input string to validate.
 * @returns {number} Repetition count.
 */
const hasRepetition = (string) => {
  let count = 0
  const patterns = ['AAAA', 'TTTT', 'GGGG', 'CCCC']

  patterns.forEach((element) => {
    if (string.includes(element) === true) {
      count++
    }
  })

  return count
}

/**
 * Returns the number of times a repetition was found
 * checking diagonally.
 *
 * @param {Array} dnaArray
 * @param {Function} bottomToTop
 * @returns {number} Repetition count.
 */
const repeatedDiagonal = (dnaArray, bottomToTop) => {
  var Ylength = dnaArray.length
  var Xlength = dnaArray[0].length
  var maxLength = Math.max(Xlength, Ylength)
  var temp
  var returnArray = []
  for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
    temp = []
    for (var y = Ylength - 1; y >= 0; --y) {
      var x = k - (bottomToTop ? Ylength - y : y)
      if (x >= 0 && x < Xlength) {
        temp.push(dnaArray[y][x])
      }
    }
    if (temp.length > 0) {
      returnArray.push(temp.join(''))
    }
  }

  let repeatedCount = 0

  returnArray.forEach((element) => {
    if (hasRepetition(element) === true) {
      repeatedCount++
    }
  })

  return repeatedCount
}

/**
 * Returns the number of times a repetition was found
 * checking horizontally.
 *
 * @param {Array} dnaArray
 * @returns {number} Repetiton count.
 */
const repeatedHorizontal = (dnaArray) => {
  let repeatedCount = 0

  // Get rows
  dnaArray.forEach((element) => {
    if (hasRepetition(element) == true) {
      repeatedCount++
    }
  })

  return repeatedCount
}

/**
 * Returns the number of times a repetition was found
 * checking vertically.
 * @param {Array} dnaArray
 * @returns {number} Repetition count.
 */
const repeatedVertical = (dnaArray) => {
  let repeatedCount = 0
  let transposed = []
  let joined = []

  // Transposing the matrix (rows for columns and viceversa).
  for (let i = 0; i < dnaArray.length; i++) {
    transposed.push([])
    for (let j = 0; j < dnaArray.length; j++) {
      transposed[i].push(dnaArray[j][i])
    }
  }

  transposed.forEach((element) => {
    joined.push(element.join(''))
  })

  joined.forEach((element) => {
    if (hasRepetition(element) == true) {
      repeatedCount++
    }
  })

  return repeatedCount
}

/**
 * Returns true or false if the input has valid acid base letters
 *
 * @param {Array} dnaArray
 * @returns {boolean} Validation status
 */
const validateEntry = async (dnaArray) => {
  const pattern = /[^ATGC]+/g
  let plainString = dnaArray.join()
  let cleanedUp = plainString.replace(/\,/g, '')
  const check = pattern.test(cleanedUp)
  return check ? false : true
}

/**
 * Returns true or false if the input sequence
 * triggers 2 or more mutations checks.
 *
 * @param {Array} dnaArray
 * @returns {boolean} Mutation status.
 */
const hasMutation = async (dnaArray) => {
  let mutationBool = false

  // Run all the validations.
  const repetitions =
    repeatedHorizontal(dnaArray) +
    repeatedVertical(dnaArray) +
    repeatedDiagonal(dnaArray)

  mutationBool = repetitions >= 2 ? true : false

  return mutationBool
}

/**
 * Stores the dna sequence record into the database
 * whether it has a mutation or not.
 *
 * @param {array} dnaArray
 * @param {number} mutation status: 1 or 0.
 */
const storeDna = async (dnaArray, mutation) => {
  const dna = new Dna({
    sequence: dnaArray.toString(),
    mutation: mutation,
  })

  try {
    const newDna = await dna.save()
  } catch (err) {
    console.error(err.message)
  }
}

exports.hasMutation = hasMutation
exports.validateEntry = validateEntry
exports.storeDna = storeDna
