function swapCase(str) {
    const swapped = ''; 
    for (let i = 0; i < str.length; i++) { 
      const char = str.charAt(i); 
      if (char === char.toUpperCase()) { 
        swapped += char.toLowerCase(); 
      } else {
        swapped += char.toUpperCase(); 
      }
    }
    return swapped; 
  }
  const input = "The Quick Brown Fox";
  const output = swapCase(input);
  console.log(output);