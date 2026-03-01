
/* ========= 48题 ========= */

const questions = [];

const pairs = [
["在社交场合中你通常主动发言。","E"],
["长时间独处会让你恢复精力。","I"],
["你更关注现实细节。","S"],
["你常思考未来可能性。","N"],
["做决定时你优先考虑逻辑。","T"],
["你更在意他人感受。","F"],
["你喜欢计划清晰。","J"],
["你更愿意随机应变。","P"]
];

for(let i=0;i<6;i++){
pairs.forEach(p=>{
questions.push({text:p[0],dimension:p[1]});
});
}

function calculateType(scores){
return (scores.E>=scores.I?'E':'I')+
       (scores.S>=scores.N?'S':'N')+
       (scores.T>=scores.F?'T':'F')+
       (scores.J>=scores.P?'J':'P');
}

/* ========= 16类型完整专属文案 ========= */

const database = {

INTJ:{praise:"你拥有战略级思维与远见能力。你善于在复杂中建立系统，在混乱中找到秩序。你并不依赖情绪驱动，而是通过理性推演掌控局面。你的存在本身就是稳定与深度的象征。",strength:"战略规划与系统整合能力",decision:"长期逻辑推演决策",blind:"可能忽略他人情绪",career:"科技、战略、投资"},

INTP:{praise:"你是天生的思想探索者。你热衷拆解世界的逻辑结构，追问本质。你的思维深邃且独立，常常站在认知前沿。你不随波逐流，而是创造自己的认知体系。",strength:"抽象思维与逻辑创新",decision:"概念验证后判断",blind:"执行力波动",career:"科研、技术、理论领域"},

ENTJ:{praise:"你具备天然领导气场与执行决断力。你目标清晰，行动果断，擅长组织资源推进结果。你的魄力与战略能力，使你成为团队核心。",strength:"领导力与资源整合",decision:"高效目标导向",blind:"可能忽略细节感受",career:"管理、创业、高层决策"},

ENTP:{praise:"你拥有创新突破的天赋。你善于挑战规则、提出新想法，让世界更具活力。你的表达与思维都极具张力。",strength:"创意表达与多维思考",decision:"多路径尝试",blind:"持续性不足",career:"产品、创业、营销"},

INFJ:{praise:"你洞察人心，富有理想与深度。你关注意义与价值，愿意为信念坚持。你安静却有力量。",strength:"共情与远见",decision:"价值导向",blind:"自我消耗",career:"心理、教育、创意"},

INFP:{praise:"你内心真诚而温柔，拥有独特审美与理想主义色彩。你重视真实与情感表达。",strength:"情感深度与创意表达",decision:"内心价值驱动",blind:"现实执行波动",career:"艺术、内容、创作"},

ENFJ:{praise:"你天生具备感染力与组织协调能力。你能激励他人，也愿意承担责任。",strength:"团队协调与激励",decision:"群体价值导向",blind:"过度付出",career:"教育、管理、公关"},

ENFP:{praise:"你热情洋溢、充满灵感。你让环境充满活力与创意。",strength:"创造力与人际连接",decision:"可能性探索",blind:"专注力波动",career:"创意、媒体、创新领域"},

ISTJ:{praise:"你稳重可靠，责任感强。你重视规则与执行。",strength:"执行力与纪律性",decision:"基于事实",blind:"变化适应慢",career:"法律、财务"},

ISFJ:{praise:"你温和体贴，善于照顾他人。",strength:"细节关怀",decision:"关系稳定优先",blind:"自我忽略",career:"医疗、教育"},

ESTJ:{praise:"你务实高效，组织能力强。",strength:"管理执行",decision:"效率优先",blind:"情绪敏感度低",career:"管理、运营"},

ESFJ:{praise:"你重视关系与团队氛围。",strength:"协调沟通",decision:"群体和谐优先",blind:"压力敏感",career:"服务、公共领域"},

ISTP:{praise:"你冷静理性，擅长解决实际问题。",strength:"问题拆解",decision:"逻辑分析",blind:"表达克制",career:"工程、技术"},

ISFP:{praise:"你安静而真实，拥有独特审美。",strength:"审美与真实表达",decision:"情绪直觉",blind:"计划性不足",career:"艺术、设计"},

ESTP:{praise:"你行动果断，适应力强。",strength:"快速反应",decision:"当下效率",blind:"长期规划弱",career:"销售、商业"},

ESFP:{praise:"你充满活力与感染力。",strength:"现场感染力",decision:"情境导向",blind:"深度规划弱",career:"娱乐、公关"}

};

