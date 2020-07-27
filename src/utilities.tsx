

export function createComponentNameFromString(nameString: string): string {
  const noOddCharacters = nameString.replace(/[^a-zA-Z\s]/g, "");

  const words: string[] = noOddCharacters.split(" ");
  
  const capitalizedUnspacedWords = words.map(word => word[0].toUpperCase() + word.slice(1)).join("");

  return capitalizedUnspacedWords;
}