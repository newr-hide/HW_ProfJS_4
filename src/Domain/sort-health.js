export default function sortHealth(characters) {
    return [...characters].sort((a, b) => b.health - a.health);
  }