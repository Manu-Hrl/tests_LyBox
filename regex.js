function ExtractRent(content) {
    if (!content) return;
  
    const reg = new RegExp(
      /(\d+,\d+|\d+)\s?(€|euros|EUR)\s?(\/|par)?\s?(mois|an)?/i
    );
    const matches = content.match(reg);
  
    const rent = matches[1]; // Le 1er match (groupe 1) est forcément un nombre (loyer)
    const period = matches[4]; // Correspond à la période, soit mois soit an
    const isMonthly = period !== "an";
  
    if (isNaN(Number(rent))) return -1; // Si le 1e match n'est pas un nombre on retourne -1
  
    const rentValue = Number(rent);
    const yearlyRent = isMonthly ? rentValue * 12 : rentValue; // Si en mois on multiplie le loyer par 12 sinon on laisse tel quel 
  
    console.log(content, matches, rent, period, isMonthly, yearlyRent);
  
    return yearlyRent.toFixed(2);
  }
  