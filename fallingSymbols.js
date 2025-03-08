const symbols = ["❤️", "🌸"]; // List of symbols

const createSymbol = () => {
  const symbol = document.createElement("div");
  symbol.className = "symbol";

  // Randomly select a symbol from the list
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  // Position the symbol at the top, randomly across the width
  symbol.style.left = Math.random() * (window.innerWidth - 50) + "px";
  symbol.style.top = "-50px"; // Start from a little above the screen

  symbol.style.fontSize = Math.random() * 20 + 20 + "px"; // Random sizes
  symbol.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random falling durations (3-6 seconds)

  document.body.appendChild(symbol);

  // Extend symbol lifespan to 12 seconds
  setTimeout(() => {
    symbol.remove();
  }, 10000);
};

// Increase symbol frequency
setInterval(createSymbol, 400); // Creates a new symbol every 100ms
