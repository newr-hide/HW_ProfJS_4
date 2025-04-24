 export default function checkHealthStatus(character) {
    const { health } = character;
  
    if (health > 50) return 'healthy';
    if (health >= 15 && health <= 50) return 'wounded';
    return 'critical';
  }



 