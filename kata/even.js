const sum = (prev, curr) => prev + curr

function isEqualsBeforeAfterIndex(arr, index) {
  var arr1 = arr.slice(0, index)
  var arr2 = arr.slice(index + 1, arr.length)

  if (!arr1.length || !arr2.length) {
    return false
  }

  console.log('arr1 sum', arr1.reduce(sum))
  console.log('arr2 sum', arr2.reduce(sum))

  return arr1.reduce(sum) === arr2.reduce(sum)
}

function findEvenIndex(arr)
{
  // il faut au moins 3 éléments
  if (arr.length < 2) {
    return -1
  }

  for (var i = 1; i < arr.length; i++) {
    console.log('index ', i)
    if (isEqualsBeforeAfterIndex(arr, i)) return i;
  }
  return -1;
}

console.log('on trouve ', findEvenIndex([1,2,3,4,3,2,1]));

var jdd = [-5751,5439,7948,3222,5510,6366,7627,-4329,4686,-7649,9644,-4297,-9834,8547,-1077,6223,6832,1430,-2380,6122,7916,-769,-4898,5754,-6090,-9437,-9288,8889,6807,-4503,-6756,7596,5768,5669,-5428,4893,4065,966,-7308,5048,3008,-5090,5346,-7241,3776,8159,-3034,-4587,-1336,3545,-3554,-5628,-123,-6601,8530,-4677,-4015,-7623,-5247,5694,3921,178,9363,7579,-7329,8332,-8409,-7862,6442,-2980,465,-9105,49,1986,5366,-6730,3402,-7713,4210,-966,1262,7477,-2901,-6924,-2246,7722,-8928,-9930,1135,-8766,4022,7353,-4034,7633,1005,4441,-5313,4735,4916,4425,-670,6605,5722,9887,2103,5404,-6102,-9323,7363,-1883,-1679,-6048,-579,9690,-6336,-4622,-4493,-7637,4844,-7958,-6974,-7792,1438,1859,260,4790,4926,8409,-7827,-7934,-4405,3424,7221,7056,-9530,-8646,9404,9837,7478,-8309,-7329,-4771,6905,-7070,-7423,8436,9740,9529,-4812,7520,1909,791,-7967,-2995,1290,-6119,523,1931,28,-9663,-6084,5482,-655,3742,2312,-4851,9641,4166,8145,8145,5377,-6220,-1737,4696,-910,4946,4393,5175,6787,6770,-50957]