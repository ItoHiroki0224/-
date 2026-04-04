import { Question, DinosaurProfile } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "休日の過ごし方は？",
    answers: [
      { text: "外でアクティブに動きたい！", scores: { "T-Rex": 2, "Velociraptor": 2, "Pteranodon": 1, "Zavacephale": 1 } },
      { text: "家でゆっくり読書や映画を楽しみたい", scores: { "Stegosaurus": 2, "Brachiosaurus": 1, "Pinacosaurus": 2 } },
      { text: "友達や家族と賑やかに過ごしたい", scores: { "Triceratops": 2, "Zavacephale": 2 } },
      { text: "趣味に没頭して自分磨きをしたい", scores: { "Velociraptor": 1, "Stegosaurus": 1, "Zavacephale": 1 } },
    ]
  },
  {
    id: 2,
    text: "グループの中でのあなたの立ち位置は？",
    answers: [
      { text: "グイグイ引っ張る「切り込み隊長」", scores: { "T-Rex": 3, "Velociraptor": 1 } },
      { text: "みんなを支える「縁の下の力持ち」", scores: { "Triceratops": 2, "Brachiosaurus": 2, "Pinacosaurus": 1 } },
      { text: "一歩引いて冷静に観察する「知恵袋」", scores: { "Stegosaurus": 2, "Pinacosaurus": 2 } },
      { text: "場をパッと明るくする「お祭り担当」", scores: { "Zavacephale": 3, "Pteranodon": 1 } },
    ]
  },
  {
    id: 3,
    text: "トラブルが起きた時、どう対処する？",
    answers: [
      { text: "正面から立ち向かって解決する", scores: { "T-Rex": 2, "Pinacosaurus": 2, "Zavacephale": 1 } },
      { text: "冷静に分析して効率的な方法を探す", scores: { "Velociraptor": 3, "Stegosaurus": 1 } },
      { text: "周りと協力して平和的に解決する", scores: { "Triceratops": 2, "Brachiosaurus": 1 } },
      { text: "とりあえず様子を見てから動く", scores: { "Brachiosaurus": 2, "Pteranodon": 1 } },
    ]
  },
  {
    id: 4,
    text: "好きな食べ物のタイプは？",
    answers: [
      { text: "やっぱりガッツリお肉！", scores: { "T-Rex": 3, "Velociraptor": 2 } },
      { text: "ヘルシーな野菜やフルーツ", scores: { "Brachiosaurus": 3, "Triceratops": 1, "Pinacosaurus": 1 } },
      { text: "甘いものやスイーツに目がない", scores: { "Zavacephale": 2, "Pteranodon": 1 } },
      { text: "こだわりはない、なんでも美味しい！", scores: { "Pinacosaurus": 1, "Stegosaurus": 1, "Triceratops": 1 } },
    ]
  },
  {
    id: 5,
    text: "新しいことに挑戦する時の気持ちは？",
    answers: [
      { text: "「面白そう！」と即座に飛びつく", scores: { "Pteranodon": 3, "T-Rex": 1 } },
      { text: "メリットがあるならやってみる", scores: { "Velociraptor": 3, "Zavacephale": 1 } },
      { text: "石橋を叩いて、納得してから進む", scores: { "Pinacosaurus": 3, "Triceratops": 1 } },
      { text: "今の心地よさを守るのが一番", scores: { "Brachiosaurus": 3, "Stegosaurus": 1 } },
    ]
  },
  {
    id: 6,
    text: "住むならどんな環境がいい？",
    answers: [
      { text: "刺激がいっぱいの賑やかな都会", scores: { "T-Rex": 2, "Velociraptor": 2 } },
      { text: "空気が美味しくて静かな田舎", scores: { "Brachiosaurus": 3, "Pinacosaurus": 1 } },
      { text: "海や山が見える開放的な場所", scores: { "Pteranodon": 3, "Triceratops": 1 } },
      { text: "自分だけのこだわりが詰まった隠れ家", scores: { "Stegosaurus": 3, "Zavacephale": 1 } },
    ]
  },
  {
    id: 7,
    text: "物事を決める時の決め手は？",
    answers: [
      { text: "自分の「ビビッ」ときた直感", scores: { "T-Rex": 2, "Pteranodon": 2, "Zavacephale": 1 } },
      { text: "データや事実に基づいた論理", scores: { "Velociraptor": 3, "Stegosaurus": 1 } },
      { text: "周りのみんながどう思うか", scores: { "Triceratops": 3, "Brachiosaurus": 1 } },
      { text: "これまでの経験と実績", scores: { "Pinacosaurus": 4 } },
    ]
  },
  {
    id: 8,
    text: "自分の性格をひと言でいうと？",
    answers: [
      { text: "一度決めたら曲げない「頑固者」", scores: { "T-Rex": 2, "Pinacosaurus": 2 } },
      { text: "好奇心旺盛な「自由人」", scores: { "Pteranodon": 3, "Zavacephale": 1 } },
      { text: "誰にでも優しい「お人好し」", scores: { "Brachiosaurus": 2, "Triceratops": 2 } },
      { text: "効率重視の「リアリスト」", scores: { "Velociraptor": 3, "Stegosaurus": 1 } },
    ]
  },
  {
    id: 9,
    text: "「これだけは譲れない！」というこだわりは？",
    answers: [
      { text: "挨拶や礼儀はきっちりしたい", scores: { "Triceratops": 2, "Pinacosaurus": 2, "Brachiosaurus": 1 } },
      { text: "時間は1分たりとも無駄にしたくない", scores: { "Velociraptor": 3, "T-Rex": 1 } },
      { text: "何よりも「自分らしさ」が最優先", scores: { "Zavacephale": 3, "Stegosaurus": 1 } },
      { text: "縛られずに自由に動いていたい", scores: { "Pteranodon": 3, "Velociraptor": 1 } },
    ]
  },
  {
    id: 10,
    text: "あなたの普段のテンションは？",
    answers: [
      { text: "朝から晩までハイテンション！", scores: { "T-Rex": 2, "Zavacephale": 2 } },
      { text: "基本的にはフラットで穏やか", scores: { "Brachiosaurus": 3, "Triceratops": 1 } },
      { text: "やる時はやる、抜く時は抜く", scores: { "Velociraptor": 2, "Pteranodon": 2 } },
      { text: "自分の世界に没頭して静か", scores: { "Stegosaurus": 3, "Pinacosaurus": 1 } },
    ]
  }
];

export const DINOSAUR_PROFILES: DinosaurProfile[] = [
  {
    type: "T-Rex",
    name: "ティラノサウルス",
    scientificName: "Tyrannosaurus rex",
    description: "あなたは圧倒的な存在感とリーダーシップを持つ最強の恐竜タイプ。目標に向かって突き進む力強さは、周囲を惹きつけます。",
    traits: ["リーダーシップ", "情熱的", "自信家", "勇敢"],
    imageUrl: "https://images.unsplash.com/photo-1560148221-50927845763a?q=80&w=800&auto=format&fit=crop",
    color: "#ef4444"
  },
  {
    type: "Pinacosaurus",
    name: "ピナコサウルス",
    scientificName: "Pinacosaurus",
    description: "あなたは堅実で守りに強い、慎重派な恐竜タイプ。派手さはありませんが、地道な努力で着実に成果を積み上げます。",
    traits: ["堅実", "慎重", "努力家", "忍耐強い"],
    imageUrl: "https://images.unsplash.com/photo-1525869811904-f73bb217d122?q=80&w=800&auto=format&fit=crop",
    color: "#6b7280"
  },
  {
    type: "Zavacephale",
    name: "ザヴァケファレ",
    scientificName: "Zavacephale",
    description: "あなたは独自の感性と強い意志を持つ、個性派な恐竜タイプ。自分の信じた道を突き進む姿は、周囲に強い印象を与えます。",
    traits: ["個性的", "意志が強い", "直感的", "ユニーク"],
    imageUrl: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=800&auto=format&fit=crop",
    color: "#f97316"
  },
  {
    type: "Triceratops",
    name: "トリケラトプス",
    scientificName: "Triceratops",
    description: "あなたは誠実で頼りがいのある、仲間思いな恐竜タイプ。守るべきもののために戦う強さと、穏やかな心を併せ持っています。",
    traits: ["誠実", "忍耐強い", "仲間思い", "堅実"],
    imageUrl: "https://images.unsplash.com/photo-1517922193564-639a83bb96ca?q=80&w=800&auto=format&fit=crop",
    color: "#f59e0b"
  },
  {
    type: "Stegosaurus",
    name: "ステゴサウルス",
    scientificName: "Stegosaurus",
    description: "あなたは独自の感性とこだわりを持つ、アーティスティックな恐竜タイプ。一見静かですが、自分の中に強い芯を持っています。",
    traits: ["個性的", "芸術的", "マイペース", "内向的"],
    imageUrl: "https://images.unsplash.com/photo-1525869916826-97288b181444?q=80&w=800&auto=format&fit=crop",
    color: "#10b981"
  },
  {
    type: "Brachiosaurus",
    name: "ブラキオサウルス",
    scientificName: "Brachiosaurus",
    description: "あなたは広い視野と穏やかな心を持つ、平和主義な恐竜タイプ。小さなことにこだわらず、大きな目標を見据えて行動します。",
    traits: ["穏やか", "包容力", "先見の明", "平和主義"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    color: "#3b82f6"
  },
  {
    type: "Velociraptor",
    name: "ヴェロキラプトル",
    scientificName: "Velociraptor",
    description: "あなたは知性的で機転が利く、戦略家な恐竜タイプ。状況判断が早く、効率的に物事を進めるのが得意です。",
    traits: ["知的", "機敏", "戦略的", "社交的"],
    imageUrl: "https://images.unsplash.com/photo-1559963110-71b394e7494d?q=80&w=800&auto=format&fit=crop",
    color: "#8b5cf6"
  },
  {
    type: "Pteranodon",
    name: "プテラノドン",
    scientificName: "Pteranodon",
    description: "あなたは自由を愛し、新しい世界へ飛び出す冒険家な恐竜タイプ。高い視点から物事を見ることができ、変化を楽しみます。",
    traits: ["自由奔放", "冒険心", "楽観的", "行動派"],
    imageUrl: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=800&auto=format&fit=crop",
    color: "#ec4899"
  }
];
