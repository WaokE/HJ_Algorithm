function solution(skill, skill_trees) {
    let result = 0;
    const needSkillData = {};
    for (let i=0;i<skill.length;i++) {
        if (i > 0) needSkillData[skill[i]] = skill[i-1];
    }
    
    skill_trees.forEach((skill_tree) => {
        const learnedSkill = {};
        let isTreeOk = true;
        for (let i=0;i<skill_tree.length;i++) {
            const currentSkill = skill_tree[i];
            if (needSkillData[currentSkill] && !learnedSkill[needSkillData[currentSkill]]) {
                isTreeOk = false;
                break;
            }
            else {
                learnedSkill[currentSkill] = true;
            }
        }
        if (isTreeOk) result++;
    })
    return result;
}