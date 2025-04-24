import checkHealthStatus from '../Domain/health-status.js'
import sortHealth from '../Domain/sort-health.js'
describe('checkHealthStatus', () => {
    it('returns "healthy" when health 50', () => {
      expect(checkHealthStatus({ health: 80 })).toEqual('healthy');
    });
  
    it('returns "wounded" when health 15 and 50', () => {
      expect(checkHealthStatus({ health: 30 })).toEqual('wounded');
    });
  
    it('returns "critical" when health 15', () => {
      expect(checkHealthStatus({ health: 10 })).toEqual('critical');
    });
  });

  describe('sortHealth', () => {
    it('sort heroes', () => {
      const inputTest = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ];
  
      const expectedTestOutput = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ];
  
      expect(sortHealth(inputTest)).toEqual(expectedTestOutput);
    });
    it('handles equal health values', () => {
        const inputTest = [
          { name: 'рыцарь', health: 60 },
          { name: 'воин', health: 60 },
        ];
        const expectedTestOutput = [
            { name: 'рыцарь', health: 60 },
            { name: 'воин', health: 60 },
          ]; 
      
          expect(sortHealth(inputTest)).toEqual(expectedTestOutput);
});
  });