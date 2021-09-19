// Puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, filterBy, condition) => {
  let aFilterData = []  
  switch (filterBy) {
    case 'Tipo':
      aFilterData = data.filter(element => element.type.includes(condition))
      break;
    case 'Huevo':
      aFilterData = data.filter(element => element.egg === condition)
      break;
    default:
      break;
  }
  return aFilterData
}


window.filterData = filterData

