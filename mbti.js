
const questions = [

/* E / I */
{text:"在社交场合中，你通常主动开启话题。",dimension:"E"},
{text:"长时间独处会让你恢复能量。",dimension:"I"},
{text:"你更喜欢团队协作而不是独立完成任务。",dimension:"E"},
{text:"比起热闹环境，你更享受安静空间。",dimension:"I"},
{text:"你习惯快速表达自己的想法。",dimension:"E"},
{text:"在做决定前你更倾向先独自思考。",dimension:"I"},
{text:"大型聚会让你感到兴奋。",dimension:"E"},
{text:"社交之后你需要独处恢复精力。",dimension:"I"},
{text:"你更喜欢当场讨论而不是线上沟通。",dimension:"E"},
{text:"你习惯把情绪放在心里消化。",dimension:"I"},
{text:"陌生环境中你能迅速融入。",dimension:"E"},
{text:"你更偏向深度一对一交流。",dimension:"I"},

/* S / N */
{text:"你更关注现实细节而不是抽象概念。",dimension:"S"},
{text:"你经常思考未来的可能性。",dimension:"N"},
{text:"你习惯依据实际经验做判断。",dimension:"S"},
{text:"你喜欢探讨理论与趋势。",dimension:"N"},
{text:"你更信任已经验证的方法。",dimension:"S"},
{text:"你容易被新想法激发灵感。",dimension:"N"},
{text:"你偏好具体可执行方案。",dimension:"S"},
{text:"你常常从多个角度设想未来。",dimension:"N"},
{text:"你注重事实和数据。",dimension:"S"},
{text:"你喜欢创新与突破常规。",dimension:"N"},
{text:"你做事讲究步骤与秩序。",dimension:"S"},
{text:"你经常构想尚未发生的事情。",dimension:"N"},

/* T / F */
{text:"做决定时你优先考虑逻辑。",dimension:"T"},
{text:"你很在意他人的感受。",dimension:"F"},
{text:"你更重视公平原则。",dimension:"T"},
{text:"你愿意为关系妥协。",dimension:"F"},
{text:"你表达观点时较为直接。",dimension:"T"},
{text:"你常常共情他人的处境。",dimension:"F"},
{text:"面对冲突你更理性分析。",dimension:"T"},
{text:"你更关注和谐氛围。",dimension:"F"},
{text:"批评时你更重事实。",dimension:"T"},
{text:"你对他人的情绪变化敏感。",dimension:"F"},
{text:"你倾向理性讨论问题。",dimension:"T"},
{text:"你容易被情感触动。",dimension:"F"},

/* J / P */
{text:"你喜欢提前规划。",dimension:"J"},
{text:"你喜欢保留选择空间。",dimension:"P"},
{text:"你习惯按计划执行任务。",dimension:"J"},
{text:"临时变化对你影响不大。",dimension:"P"},
{text:"你喜欢清晰时间表。",dimension:"J"},
{text:"你做事更随性灵活。",dimension:"P"},
{text:"完成任务比探索可能更重要。",dimension:"J"},
{text:"你常在最后期限前爆发效率。",dimension:"P"},
{text:"你喜欢确定的结构。",dimension:"J"},
{text:"你对变化适应力强。",dimension:"P"},
{text:"你不喜欢计划被打乱。",dimension:"J"},
{text:"你享受随机与自由。",dimension:"P"}

];

function calculateType(scores){
return (scores.E>=scores.I?"E":"I")+
(scores.S>=scores.N?"S":"N")+
(scores.T>=scores.F?"T":"F")+
(scores.J>=scores.P?"J":"P");
}

