function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let actualRange = parseInt(endBlock) - parseInt(startBlock)

    if (actualRange > blockRange) {
      return `${rangeDifference} blocks out of range`
    } else {
      return `within range by ${rangeDifference}`
    }
    }
  }
}
