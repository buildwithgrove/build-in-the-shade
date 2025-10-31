// Script to center the endpoints grid when there are fewer than 4 items
document.addEventListener('DOMContentLoaded', function() {
  const allGrids = document.querySelectorAll('.endpoints-grid');
  
  allGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.endpoint-card');
    const cardCount = cards.length;
    
    if (cardCount < 4) {
      grid.classList.add(`items-${cardCount}`);
    }
  });
});
