function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let actualRange = parseInt(endBlock) - parseInt(startBlock);

    if (actualRange > blockRange) {
      let rangeDifference = actualRange - blockRange
      return `${rangeDifference} blocks out of range`
    } else {
      let rangeDifference = actualRange - blockRange
      return `within range by ${rangeDifference}`
    }
    }
  }
}
