function solution(bandage, health, attacks) {
    let second = 0;
    let bandageCount = 0;
    let currentHealth = health;
    const [bandageTime, bandageHealPerSec, bandageHealAdditional] = bandage;
    
    while (attacks.length > 0) {
        second++;
        if (attacks[0][0] === second) {
            const [attackTime, attackDamage] = attacks.shift();
            currentHealth -= attackDamage;
            bandageCount = 0;
            if (currentHealth <= 0) return -1;
        }
        else {
            currentHealth += bandageHealPerSec;
            bandageCount++;
            if (bandageCount === bandageTime) {
                currentHealth += bandageHealAdditional;
                bandageCount = 0;
            }            
            currentHealth > health ? currentHealth = health : null;
        }
    }
    return currentHealth;
}