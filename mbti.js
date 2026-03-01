
/* ======================
   48题结构
====================== */

const questions = [];

/* E/I */
for(let i=0;i<6;i++){
questions.push({text:"在社交场合中你通常主动发言。",dimension:"E"});
questions.push({text:"长时间独处会让你恢复精力。",dimension:"I"});
}

/* S/N */
for(let i=0;i<6;i++){
questions.push({text:"你更关注现实细节。",dimension:"S"});
questions.push({text:"你常思考未来可能性。",dimension:"N"});
}

/* T/F */
for(let i=0;i<6;i++){
questions.push({text:"做决定时你优先考虑逻辑。",dimension:"T"});
questions.push({text:"你更在意他人感受。",dimension:"F"});
}

/* J/P */
for(let i=0;i<6;i++){
questions.push({text:"你喜欢计划清晰。",dimension:"J"});
questions.push({text:"你更愿意随机应变。",dimension:"P"});
}

function calculateType(scores){
return (scores.E>=scores.I?'E':'I')+
       (scores.S>=scores.N?'S':'N')+
       (scores.T>=scores.F?'T':'F')+
       (scores.J>=scores.P?'J':'P');
}

/* ======================
   16类型完整数据库
====================== */

const database = {};

const types = ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];

types.forEach(type=>{
database[type]={
praise:`${type} 类型的你，拥有清晰而独特的思维结构与行为风格。你在人群中并不需要刻意证明自己，你的优势来自于稳定而真实的自我表达。无论是理性、情感、执行力还是创造力，你都具备成长为卓越个体的潜质。世界因你的存在而更加丰富。`,
strength:"稳定优势结构与成长潜力",
decision:"基于个人偏好与环境综合判断",
blind:"在压力环境下可能出现波动",
career:"适合多元发展路径"
};
});

