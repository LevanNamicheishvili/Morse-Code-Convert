const MORSE_CODE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": " ",
  };
  
  const ENGLISH_LETTERS = Object.keys(MORSE_CODE);
  
  const MORSE_CODE_VALUES = Object.values(MORSE_CODE);

  const convertToMorseBtn = document.getElementById("convert-to-morse-btn");
  const convertToTextBtn = document.getElementById("convert-to-text-btn");
  const inputField = document.getElementById("input");
  const outputField = document.getElementById("output");
  
  const convertToMorseCode = (text) => {
    const sanitizedText = text.toUpperCase().trim();
    let morseCode = "";
    for (let i = 0; i < sanitizedText.length; i++) {
      const letter = sanitizedText[i];
      morseCode += MORSE_CODE[letter] + " ";
    }
    return morseCode.trim();
  };
  
  const convertToEnglishText = (morseCode) => {
    const words = morseCode.split(" / ");
    let text = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const letters = word.split(" ");
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];
        const index = MORSE_CODE_VALUES.indexOf(letter);
        if (index !== -1) {
          text += ENGLISH_LETTERS[index];
        }
      }
      text += " ";
    }
    return text.trim();
  };
  
  convertToMorseBtn.addEventListener("click", () => {
    const inputText = inputField.value;
    const morseCode = convertToMorseCode(inputText);
    outputField.textContent = morseCode;
  });
  
  convertToTextBtn.addEventListener("click", () => {
    const inputText = inputField.value;
    const text = convertToEnglishText(inputText);
    outputField.textContent = text;
  });
  