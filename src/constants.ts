import { Question, DinosaurProfile } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "休日の過ごし方は？",
    answers: [
      { text: "外でアクティブに動きたい！", scores: { "T-Rex": 2, "Megalosaurus": 2, "Zavacephale": 1 } },
      { text: "家でゆっくり過ごしたい", scores: { "Stegosaurus": 2, "Pinacosaurus": 2, "Ankylosaurus": 1 } },
      { text: "友達や家族と賑やかに過ごしたい", scores: { "Iguanodon": 2, "Zavacephale": 2, "T-Rex": 1 } },
      { text: "趣味に没頭して自分磨きをしたい", scores: { "Megalosaurus": 1, "Stegosaurus": 1, "Zavacephale": 1, "Ankylosaurus": 1 } },
    ]
  },
  {
    id: 2,
    text: "グループの中でのあなたの立ち位置は？",
    answers: [
      { text: "グイグイ引っ張るリーダー的存在", scores: { "T-Rex": 3, "Megalosaurus": 2 } },
      { text: "みんなを支える縁の下の力持ち", scores: { "Iguanodon": 2, "Ankylosaurus": 2, "Pinacosaurus": 1 } },
      { text: "一歩引いて周囲を冷静に観察するのが得意", scores: { "Stegosaurus": 2, "Pinacosaurus": 2 } },
      { text: "場をパッと明るくするムードメーカー", scores: { "Zavacephale": 3, "Iguanodon": 1 } },
    ]
  },
  {
    id: 3,
    text: "トラブルが起きた時、どう対処する？",
    answers: [
      { text: "正面から立ち向かって解決する", scores: { "T-Rex": 2, "Ankylosaurus": 2, "Megalosaurus": 2 } },
      { text: "冷静に分析して効率的な方法を探す", scores: { "Megalosaurus": 1, "Stegosaurus": 1, "Pinacosaurus": 2 } },
      { text: "周りと協力して平和的に解決する", scores: { "Iguanodon": 2 } },
      { text: "とりあえず様子を見てから動く", scores: { "Ankylosaurus": 1, "Stegosaurus": 1 } },
    ]
  },
  {
    id: 4,
    text: "好きな食べ物のタイプは？",
    answers: [
      { text: "やっぱりガッツリお肉！", scores: { "T-Rex": 3, "Megalosaurus": 3 } },
      { text: "ヘルシーな野菜やフルーツ", scores: { "Iguanodon": 2, "Ankylosaurus": 1, "Pinacosaurus": 1, "Stegosaurus": 1 } },
      { text: "甘いお菓子やかわいいスイーツ", scores: { "Zavacephale": 2 } },
      { text: "こだわりはない、なんでも美味しい", scores: { "Pinacosaurus": 1, "Ankylosaurus": 1, "Iguanodon": 1 } },
    ]
  },
  {
    id: 5,
    text: "新しいことに挑戦する時の気持ちは？",
    answers: [
      { text: "「面白そう！」と勢いで挑戦", scores: { "Megalosaurus": 3, "T-Rex": 1, "Zavacephale": 1 } },
      { text: "メリットがあるならやってみる", scores: { "T-Rex": 2, "Iguanodon": 2 } },
      { text: "石橋を叩いて、慎重に進む", scores: { "Pinacosaurus": 3, "Ankylosaurus": 2, "Stegosaurus": 1 } },
      { text: "挑戦は苦手。現状維持がいい", scores: { "Ankylosaurus": 1, "Pinacosaurus": 1 } },
    ]
  },
  {
    id: 6,
    text: "住むならどんな環境がいい？",
    answers: [
      { text: "刺激がいっぱいの賑やかな都会", scores: { "T-Rex": 2, "Megalosaurus": 2, "Zavacephale": 1 } },
      { text: "空気が美味しくて静かな田舎", scores: { "Pinacosaurus": 2, "Ankylosaurus": 2, "Iguanodon": 1 } },
      { text: "海や山が見える開放的な場所", scores: { "Iguanodon": 1 } },
      { text: "自分だけのこだわりが詰まった隠れ家", scores: { "Stegosaurus": 3, "Zavacephale": 1 } },
    ]
  },
  {
    id: 7,
    text: "物事を決める時の決め手は？",
    answers: [
      { text: "「ビビッ」ときた直感", scores: { "T-Rex": 2, "Zavacephale": 2 } },
      { text: "データや事実に基づいた論理", scores: { "Megalosaurus": 2, "Stegosaurus": 1, "Pinacosaurus": 1 } },
      { text: "周りのみんながどう思うか", scores: { "Iguanodon": 3, "Ankylosaurus": 1 } },
      { text: "これまでの経験と実績", scores: { "Pinacosaurus": 3, "Ankylosaurus": 1 } },
    ]
  },
  {
    id: 8,
    text: "自分の性格をひと言でいうと？",
    answers: [
      { text: "一度決めたら曲げない「頑固者」", scores: { "T-Rex": 2, "Ankylosaurus": 2, "Pinacosaurus": 1 } },
      { text: "好奇心旺盛な「自由人」", scores: { "Megalosaurus": 2, "Zavacephale": 1 } },
      { text: "誰にでも優しい「お人好し」", scores: { "Iguanodon": 3 } },
      { text: "効率重視の「リアリスト」", scores: { "Megalosaurus": 1, "Stegosaurus": 1, "Pinacosaurus": 1 } },
    ]
  },
  {
    id: 9,
    text: "「これだけは譲れない！」というこだわりは？",
    answers: [
      { text: "挨拶や礼儀はきっちりしたい", scores: { "Iguanodon": 2, "Pinacosaurus": 2, "Ankylosaurus": 1 } },
      { text: "時間は1分たりとも無駄にしたくない", scores: { "T-Rex": 2, "Megalosaurus": 2 } },
      { text: "何よりも「自分らしさ」が最優先", scores: { "Zavacephale": 3, "Stegosaurus": 2 } },
      { text: "縛られずに自由に動いていたい", scores: { "Megalosaurus": 1, "Zavacephale": 1 } },
    ]
  },
  {
    id: 10,
    text: "あなたの普段のテンションは？",
    answers: [
      { text: "朝から晩までハイテンション！", scores: { "T-Rex": 2, "Zavacephale": 2, "Megalosaurus": 1 } },
      { text: "基本的にはフラットで穏やか", scores: { "Iguanodon": 1, "Ankylosaurus": 1 } },
      { text: "やる時はやる、抜く時は抜く", scores: { "Megalosaurus": 2, "Iguanodon": 1 } },
      { text: "自分の世界に没頭して静か", scores: { "Stegosaurus": 3, "Pinacosaurus": 1 } },
    ]
  }
];

export const DINOSAUR_PROFILES: DinosaurProfile[] = [
  {
    type: "T-Rex",
    name: "ティラノサウルス",
    scientificName: "Tyrannosaurus rex",
    description: "あなたは圧倒的な存在感とリーダーシップを持つ最強の恐竜タイプ。目標に向かって突き進む力強さは、周囲を惹きつけ、自然と中心的な存在になります。困難な状況でも決して屈せず、自らの力で道を切り拓いていくその姿は、まさに百獣の王そのものです。",
    traits: ["リーダーシップ", "情熱的", "自信家", "勇敢"],
    imageUrl: "T-Rex.jpg",
    color: "#ef4444",
    compatibleType: "Iguanodon",
    compatibilityMessage: "あなたの力強さを柔軟にサポートしてくれる、最高のパートナーです。"
  },
  {
    type: "Megalosaurus",
    name: "メガロサウルス",
    scientificName: "Megalosaurus",
    description: "あなたは世界で最初に名付けられた恐竜のように、開拓者精神にあふれたタイプ。未知の領域にも果敢に挑む勇気と、新しい価値観を創り出す創造性を持っています。誰も歩んだことのない道を一歩ずつ確実に進んでいく姿勢は、多くの人に勇気を与えます。",
    traits: ["開拓者", "勇敢", "伝統を重んじる", "行動派"],
    imageUrl: "Megalosaurus.jpg",
    color: "#b91c1c",
    compatibleType: "Iguanodon",
    compatibilityMessage: "あなたの冒険心を優しく見守り、実務的な面で支えてくれる頼もしい存在です。"
  },
  {
    type: "Ankylosaurus",
    name: "アンキロサウルス",
    scientificName: "Ankylosaurus",
    description: "あなたは最強の防御力を誇る鎧竜のように、大切なものを守り抜く強さを持つタイプ。どっしりとした安定感と誠実な人柄で、周囲に絶大な安心感を与えます。派手さはありませんが、一度決めたことを最後までやり遂げる責任感の強さは誰にも負けません。",
    traits: ["守護者", "安定感", "粘り強い", "誠実"],
    imageUrl: "Ankylosaurus.jpg",
    color: "#4b5563",
    compatibleType: "Pinacosaurus",
    compatibilityMessage: "お互いに堅実で慎重なため、深い信頼関係を築ける組み合わせです。"
  },
  {
    type: "Pinacosaurus",
    name: "ピナコサウルス",
    scientificName: "Pinacosaurus",
    description: "あなたは堅実で慎重な性格。派手なパフォーマンスよりも、地道な努力と確実な成果を重んじる努力家です。リスクを冷静に分析し、着実に一歩ずつ成果を積み上げていくその姿勢は、組織やチームにおいて非常に信頼される貴重な存在となります。",
    traits: ["堅実", "慎重", "努力家", "忍耐強い"],
    imageUrl: "Pinacosaurus.jpg",
    color: "#6b7280",
    compatibleType: "Ankylosaurus",
    compatibilityMessage: "あなたの地道な努力を正当に評価し、守ってくれる頼もしい相手です。"
  },
  {
    type: "Stegosaurus",
    name: "ステゴサウルス",
    scientificName: "Stegosaurus",
    description: "あなたは独自の感性とこだわりを持つ、マイペースなタイプ。一見静かですが、自分の中に強い芯とアーティスティックな一面を秘めています。流行に左右されず、自分の「好き」を追求する姿勢は、周囲に独特の魅力とインスピレーションを与えます。",
    traits: ["個性的", "芸術的", "マイペース", "こだわり派"],
    imageUrl: "Stegosaurus.jpg",
    color: "#10b981",
    compatibleType: "Zavacephale",
    compatibilityMessage: "お互いの独特な世界観を尊重し合える、唯一無二の親友になれます。"
  },
  {
    type: "Zavacephale",
    name: "ザヴァケファレ",
    scientificName: "Zavacephale",
    description: "あなたは強い意志とユニークな感性を持つ個性派。直感を信じて行動し、周囲に流されない唯一無二の存在感を放ちます。常識にとらわれない自由な発想は、停滞した状況を打破する力を持っており、新しい風を吹き込む存在として重宝されるでしょう。",
    traits: ["意志が強い", "直感的", "ユニーク", "情熱的"],
    imageUrl: "Zavacephale.jpg",
    color: "#f97316",
    compatibleType: "Stegosaurus",
    compatibilityMessage: "あなたの強い個性を面白がり、一緒に楽しんでくれる最高の理解者です。"
  },
  {
    type: "Iguanodon",
    name: "イグアノドン",
    scientificName: "Iguanodon",
    description: "あなたは多才で器用、そして誠実なタイプ。状況に合わせて柔軟に対応でき、仲間からの信頼も厚い頼れる存在です。どんな環境でも自分の役割を見つけ出し、着実に貢献する能力は非常に高く、あらゆる場面でその実力を発揮することができるでしょう。",
    traits: ["多才", "柔軟", "誠実", "頼りがい"],
    imageUrl: "iguanodon.jpg",
    color: "#f59e0b",
    compatibleType: "T-Rex",
    compatibilityMessage: "相手の強力なリーダーシップを、あなたの器用さで完璧に補佐できます。"
  }
];
