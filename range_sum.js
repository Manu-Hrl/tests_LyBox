function Calc(arr, n1, n2) {
    if (arr.length === 0) return 0;
  
    return arr.slice(n1, n2+1).reduce((acc, n) => acc + n, 0); /* reduce évite de faire une boucle "for" et additionne toutes les valeurs de n1 à n2 inclus*/
  }
  
  console.log(Calc([1,2,3,4,5], 0, 1));