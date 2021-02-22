const reviewInventory = product =>{
  return (product.inventory > 0) ? true : false
}

export {
  reviewInventory
}