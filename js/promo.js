// Código para contar quantas vezes a página de promoções foi visitada
let visitCount = localStorage.getItem('promoVisitCount') || 0;
visitCount++;
localStorage.setItem('promoVisitCount', visitCount);