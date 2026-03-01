
/* =========================
   48题真实结构（专业结构版）
========================= */

const questions = [

/* E / I */
{ text:"在社交场合中，你通常主动开启话题。", dimension:"E" },
{ text:"长时间独处会让你恢复能量。", dimension:"I" },
{ text:"你喜欢成为活动的中心人物。", dimension:"E" },
{ text:"你更倾向于小范围深度交流。", dimension:"I" },
{ text:"你在陌生人面前也能自然表达。", dimension:"E" },
{ text:"社交后你常常需要安静时间恢复。", dimension:"I" },
{ text:"你喜欢参与多人互动活动。", dimension:"E" },
{ text:"你更享受独立思考时间。", dimension:"I" },
{ text:"你表达想法通常直接而外向。", dimension:"E" },
{ text:"你倾向在内心消化情绪。", dimension:"I" },
{ text:"你在人群中精力更旺盛。", dimension:"E" },
{ text:"独处让你更清晰地整理思路。", dimension:"I" },

/* S / N */
{ text:"你更关注现实细节而非抽象概念。", dimension:"S" },
{ text:"你常思考未来可能性。", dimension:"N" },
{ text:"你重视具体经验。", dimension:"S" },
{ text:"你喜欢探索潜在趋势。", dimension:"N" },
{ text:"你更信赖事实数据。", dimension:"S" },
{ text:"你经常产生灵感式联想。", dimension:"N" },
{ text:"你注重当下现实。", dimension:"S" },
{ text:"你喜欢讨论理论框架。", dimension:"N" },
{ text:"你依赖过往经验做判断。", dimension:"S" },
{ text:"你容易看到隐藏模式。", dimension:"N" },
{ text:"你偏好具体步骤说明。", dimension:"S" },
{ text:"你习惯跳跃式思考。", dimension:"N" },

/* T / F */
{ text:"做决定时你优先考虑逻辑。", dimension:"T" },
{ text:"你更在意他人感受。", dimension:"F" },
{ text:"你认为客观正确比情感重要。", dimension:"T" },
{ text:"你愿意为了关系妥协。", dimension:"F" },
{ text:"你擅长理性分析问题。", dimension:"T" },
{ text:"你对情绪变化很敏感。", dimension:"F" },
{ text:"你更强调效率。", dimension:"T" },
{ text:"你更重视和谐。", dimension:"F" },
{ text:"你会直接指出问题。", dimension:"T" },
{ text:"你避免伤害他人感受。", dimension:"F" },
{ text:"你在压力下保持理性。", dimension:"T" },
{ text:"你在压力下更关注关系。", dimension:"F" },

/* J / P */
{ text:"你喜欢计划清晰。", dimension:"J" },
{ text:"你偏好灵活安排。", dimension:"P" },
{ text:"你喜欢提前做决定。", dimension:"J" },
{ text:"你更愿意随机应变。", dimension:"P" },
{ text:"你习惯制定时间表。", dimension:"J" },
{ text:"你讨厌被固定规则束缚。", dimension:"P" },
{ text:"你偏好有序环境。", dimension:"J" },
{ text:"你喜欢探索不同可能。", dimension:"P" },
{ text:"你做事追求确定结果。", dimension:"J" },
{ text:"你常临时改变计划。", dimension:"P" },
{ text:"你重视责任与完成度。", dimension:"J" },
{ text:"你享受过程而非终点。", dimension:"P" }

];

let scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

function calculateType(){
return (scores.E>=scores.I?'E':'I')+
       (scores.S>=scores.N?'S':'N')+
       (scores.T>=scores.F?'T':'F')+
       (scores.J>=scores.P?'J':'P');
}

/* =========================
   16类型完整专业数据库
========================= */

const database = {

INTJ:{
praise:"你拥有战略级远见与深度理性。你不被情绪左右，而是用冷静和结构化思维布局未来。你在混乱中看到秩序，在复杂中建立系统。你并不张扬，但你每一步都经过思考与推演。你的成长路径，是不断精进自我并掌控人生方向的过程。",
strength:"战略思维、系统整合能力",
decision:"基于逻辑与长期回报评估",
blind:"可能忽略情绪互动",
career:"科技、投资、战略规划"
},

INFJ:{
praise:"你拥有温柔却坚定的洞察力。你理解人性深层动机，也拥有改变世界的理想。你并不浮夸，却在关键时刻给予他人真正的理解与支持。你的价值不在喧哗，而在深度。你注定在影响他人生命的过程中，成就自己。",
strength:"洞察人心与愿景构建",
decision:"价值导向决策",
blind:"容易自我消耗",
career:"心理、教育、创意领域"
},

ENTP:{
praise:"你拥有突破边界的创造力。你喜欢挑战常规，善于在对话中迸发新想法。你的大脑像永不停歇的引擎，连接信息、重组结构。你为环境注入活力与可能性。你的优势，是让世界变得更有趣。",
strength:"创新与辩证思维",
decision:"多路径博弈选择",
blind:"持续力波动",
career:"创业、产品、市场"
},

ISTJ:{
praise:"你稳重可靠，是秩序与责任的象征。你用执行力与纪律建立安全感。别人可以依赖你，因为你始终如一。你并不追求舞台，而是追求结果。你的价值，在长期稳定中体现。",
strength:"执行与结构管理",
decision:"基于事实与规则",
blind:"对变化适应较慢",
career:"法律、财务、系统管理"
}

};

