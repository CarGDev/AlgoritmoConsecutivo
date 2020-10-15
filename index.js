const arrayFunction = (number, i, arrayValue) => {
  if (i === number - 1) return arrayValue
  const valor =  arrayValue[i - 1] % 10
  let valorActual
  switch (valor) {
    case 0:
      valorActual = Math.imul(10, arrayValue[i - 1]) + 1
      break
    default:
      valorActual = Math.imul(10, arrayValue[i - 1])
      break
  }
  return arrayFunction (number, ++i, arrayValue.concat(valorActual))
}

const arrayResultante = (number, i, arrayResult, arrayValue) => {
  if (i === number) return arrayResult
  let valor = arrayResult[i - 1] + arrayValue[i - 1]
  arrayResult = arrayResult.concat(valor)
  return arrayResultante(number, ++i, arrayResult, arrayValue)
}

const arrayToSum = (number, arraySum, i) => {
  if (number === i) return arraySum
  switch (i % 2) {
    case 0:
      arraySum = arraySum.concat(arraySum[i - 1] + 1)
      break
    default:
      arraySum = arraySum.concat(arraySum[i - 1])
      break
  }
  return arrayToSum(number, arraySum, ++i)
}


const printAlgoritmo = () => (number) => {
  let arrayValue = [1]
  let arrayResult = [0]
  arrayValue = arrayFunction(number, arrayValue[0], arrayValue)
  arrayResult = arrayResultante(number, arrayValue[0], arrayResult, arrayValue)
  arrayResult = arrayResult.map(x => x * 11)
  let arraySum = [1]
  arraySum = arrayToSum(number, arraySum, arraySum[0])
  arrayResult = arrayResult.map((x, i) => x += arraySum[i])
  return arrayResult.reverse()
}

const algoritmo = (number) => {
  return printAlgoritmo()(number)
}

const result = algoritmo(9)
result.map(x => console.log(x))
