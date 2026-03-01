const questions = [

  // ===== E / I (12题) =====
  { text: "在社交场合中，我通常主动与他人交谈。", dimension: "EI", direction: 1, weight: 1.1 },
  { text: "长时间独处会让我感到精力恢复。", dimension: "EI", direction: -1, weight: 1.0 },
  { text: "我更喜欢参与群体活动而非独自行动。", dimension: "EI", direction: 1, weight: 0.9 },
  { text: "与很多人互动后，我通常会感到疲惫。", dimension: "EI", direction: -1, weight: 1.1 },
  { text: "我倾向于边思考边表达。", dimension: "EI", direction: 1, weight: 1.0 },
  { text: "在做决定前，我更喜欢独自整理思路。", dimension: "EI", direction: -1, weight: 1.0 },
  { text: "我喜欢成为讨论中的核心人物。", dimension: "EI", direction: 1, weight: 1.0 },
  { text: "我更习惯通过写作表达想法。", dimension: "EI", direction: -1, weight: 0.9 },
  { text: "陌生环境会激发我的兴奋感。", dimension: "EI", direction: 1, weight: 1.0 },
  { text: "我需要大量私人空间。", dimension: "EI", direction: -1, weight: 1.1 },
  { text: "我喜欢频繁与人交流。", dimension: "EI", direction: 1, weight: 1.0 },
  { text: "我通常在独处时效率更高。", dimension: "EI", direction: -1, weight: 1.0 },

  // ===== S / N (12题) =====
  { text: "我更关注现实发生的事实而非可能性。", dimension: "SN", direction: -1, weight: 1.1 },
  { text: "我经常思考未来的各种可能发展。", dimension: "SN", direction: 1, weight: 1.1 },
  { text: "我倾向于按照已有经验处理问题。", dimension: "SN", direction: -1, weight: 0.9 },
  { text: "抽象理论和隐喻对我很有吸引力。", dimension: "SN", direction: 1, weight: 1.0 },
  { text: "我更信任具体数据而不是直觉判断。", dimension: "SN", direction: -1, weight: 1.0 },
  { text: "我容易从细节中联想到整体趋势。", dimension: "SN", direction: 1, weight: 1.0 },
  { text: "我更关注当下的实际情况。", dimension: "SN", direction: -1, weight: 1.0 },
  { text: "我常常进行头脑风暴式思考。", dimension: "SN", direction: 1, weight: 1.0 },
  { text: "我依赖经验而非想象。", dimension: "SN", direction: -1, weight: 1.1 },
  { text: "我喜欢探索概念背后的意义。", dimension: "SN", direction: 1, weight: 1.0 },
  { text: "我重视事实证据。", dimension: "SN", direction: -1, weight: 1.0 },
  { text: "我喜欢设想未来蓝图。", dimension: "SN", direction: 1, weight: 1.1 },

  // ===== T / F (12题) =====
  { text: "做决定时，我更重视逻辑一致性。", dimension: "TF", direction: 1, weight: 1.1 },
  { text: "我会优先考虑他人的感受。", dimension: "TF", direction: -1, weight: 1.1 },
  { text: "在争论中，我更关注事实是否正确。", dimension: "TF", direction: 1, weight: 1.0 },
  { text: "维护关系和谐比赢得辩论更重要。", dimension: "TF", direction: -1, weight: 1.0 },
  { text: "我习惯用分析方式拆解问题。", dimension: "TF", direction: 1, weight: 1.0 },
  { text: "情绪氛围会明显影响我的判断。", dimension: "TF", direction: -1, weight: 1.0 },
  { text: "我在决策中保持客观。", dimension: "TF", direction: 1, weight: 1.0 },
  { text: "我对他人的情绪变化非常敏感。", dimension: "TF", direction: -1, weight: 1.0 },
  { text: "我更倾向批判性思维。", dimension: "TF", direction: 1, weight: 1.1 },
  { text: "我会为了关系而妥协。", dimension: "TF", direction: -1, weight: 1.0 },
  { text: "我偏好理性讨论。", dimension: "TF", direction: 1, weight: 1.0 },
  { text: "我很在意他人的评价。", dimension: "TF", direction: -1, weight: 1.0 },

  // ===== J / P (12题) =====
  { text: "我喜欢提前规划好日程。", dimension: "JP", direction: 1, weight: 1.1 },
  { text: "我更喜欢保持选择的开放性。", dimension: "JP", direction: -1, weight: 1.0 },
  { text: "临时变化会让我不安。", dimension: "JP", direction: 1, weight: 1.0 },
  { text: "我习惯在最后期限前冲刺完成任务。", dimension: "JP", direction: -1, weight: 1.1 },
  { text: "我喜欢明确的结构和规则。", dimension: "JP", direction: 1, weight: 1.0 },
  { text: "我更享受灵活和即兴发挥。", dimension: "JP", direction: -1, weight: 1.0 },
  { text: "我喜欢制定详细计划。", dimension: "JP", direction: 1, weight: 1.0 },
  { text: "我常常拖延决定。", dimension: "JP", direction: -1, weight: 1.0 },
  { text: "我重视秩序感。", dimension: "JP", direction: 1, weight: 1.1 },
  { text: "我喜欢随机应变。", dimension: "JP", direction: -1, weight: 1.0 },
  { text: "我偏好提前完成任务。", dimension: "JP", direction: 1, weight: 1.0 },
  { text: "我更随性而非计划型。", dimension: "JP", direction: -1, weight: 1.0 }

];
