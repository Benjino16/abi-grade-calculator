function checkAbiCriteria() {
    const errors = [];
  
    const schriftlich = [0, 1, 2, 3]; // LK1, LK2, GK1, GK2
    const muendlich = [4, 5, 6, 7];  // MGK1, MGK2, AN1, AN2
  
    const getNote = (i) => state[i] ?? 0;
  
    // 1. Kein Fach mit 0 Punkten
    if (state.some(n => n === 0)) {
      errors.push("Ein Kurs hat 0 Punkte.");
    }
  
    // 2. Min. zwei schriftliche mit ≥5 Punkten, darunter ein LK
    const schriftlichMitMind5 = schriftlich.filter(i => getNote(i) >= 5);
    const lkMitMind5 = [0, 1].some(i => getNote(i) >= 5);
  
    if (schriftlichMitMind5.length < 2 || !lkMitMind5) {
      errors.push("Mindestens zwei schriftliche Kurse (darunter ein LK) müssen ≥ 5 Punkte haben.");
    }
  
    // 3. Min. zwei mündliche mit ≥5 Punkten
    const muendlichMitMind5 = muendlich.filter(i => getNote(i) >= 5);
    if (muendlichMitMind5.length < 2) {
      errors.push("Mindestens zwei mündliche Kurse müssen ≥ 5 Punkte haben.");
    }
  
    // 4. Schriftliche Punkte insgesamt ≥220
    const schriftSumme = schriftlich.reduce((sum, i) => sum + getNote(i) * courses[i].factor, 0);
    if (schriftSumme < 220) {
      errors.push(`In den schriftlichen Prüfungen müssen mindestens 220 Punkte erreicht werden (aktuell: ${schriftSumme}).`);
    }
  
    // 5. Mündliche Punkte insgesamt ≥80
    const muendlichSumme = muendlich.reduce((sum, i) => sum + getNote(i) * courses[i].factor, 0);
    if (muendlichSumme < 80) {
      errors.push(`In den mündlichen Prüfungen müssen mindestens 80 Punkte erreicht werden (aktuell: ${muendlichSumme}).`);
    }
  
    return errors;
  }
  