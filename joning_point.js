function sumDigits(num) { // Somme les nombres (pour 471 on somme 4+7+1 par exemple)
    return num
      .toString()
      .split("")
      .reduce((acc, n) => acc + Number(n), 0);
  }
  
  function ComputeJoinPoint(s1, s2) {
    const MAX = 20_000_000; // 
  
    if (!(s1 < MAX) || !(s2 < MAX)) {
      console.error("s1 et/ou s2 sont > 20 000 00, ce qui est interdit !");
  
      return -1;
    }
  
    if (s1 === s2) return s1; // Condition d'arrêt de la récursivité
  
    const next1 = s1 + sumDigits(s1); // Somme sur s1
    const next2 = s2 + sumDigits(s2); // Somme sur s2
  
    return ComputeJoinPoint(next1, next2);
  }
  