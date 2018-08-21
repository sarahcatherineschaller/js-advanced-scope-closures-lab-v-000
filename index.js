function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let actualRange = parseInt(endBlock) - parseInt(startBlock)
    binding.pry
    let rangeDifference = actualRange - blockRange

    if (actualRange > blockRange) {
      return `${rangeDifference} blocks out of range`
    } else {
      return `within range by ${rangeDifference}`
    }
    }
  }
}
