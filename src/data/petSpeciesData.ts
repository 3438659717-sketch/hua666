import { PetDefinition, PixelPetType } from "./petData";

export const REALISTIC_PET_SPRITES: Record<PixelPetType, PetDefinition> = {
  // =========================================================================
  // 1. 🐱 CAT (暹罗/美短虎斑猫)
  // Characteristic features:
  // - Pointed pink-inner cat ears with sharp tips
  // - Whiskers extending from cheeks, cute pink nose, white whisker pads
  // - Expressive emerald almond eyes with dark pupils
  // - Slender graceful cat body with white chest bib & front white socks
  // - Distinctive S-curved arched cat tail pointing up on the right!
  // =========================================================================
  cat: {
    name: "元气橘白猫 (Mochi)",
    emoji: "🐱",
    species: "猫咪",
    color: "#f97316",
    intro: "毛茸茸的治愈系橘白萌猫，灵巧活泼，尾巴随心情轻轻摇曳",
    buff: "爆款完播率与吸睛指数 +18%",
    palette: {
      " ": "transparent",
      "K": "#1e1b4b", // Dark outline/pupil
      "O": "#ea580c", // Deep orange tabby stripe
      "G": "#f97316", // Vibrant ginger ginger fur
      "L": "#fed7aa", // Light ginger fur highlight
      "W": "#ffffff", // Pure white bib & muzzle & socks
      "P": "#f472b6", // Pink inner ear & nose & paw pads
      "E": "#10b981", // Emerald green cat eye iris
      "Y": "#facc15", // Golden bell
      "R": "#ef4444", // Red collar
    },
    frames: {
      idle1: [
        "   K   K        ", // 0 Ear tips
        "  KPK KPK       ", // 1 Pink inner ears
        " KOGK KOGK      ", // 2 Ear base & orange fur
        " KGGGGGGGKK   K ", // 3 Cat head top & tail tip
        "KGLGGGLGGGK  KOK", // 4 Forehead tabby markings & tail curve
        "KGKWKGKWKGK KGGK", // 5 Emerald cat eyes
        "KGKKGGKKGGKKGGK ", // 6 Whiskers & dark pupils & tail
        "KKWWPWWKKKGGGK  ", // 7 Pink nose & white whisker muzzle
        " KKRRRYRRKKKK   ", // 8 Red collar & golden bell
        "  KWWWWWWK      ", // 9 Fluffy white chest bib
        " KOGGGGGGK      ", // 10 Tabby body torso
        " KGGGGGGGK      ", // 11 Body & hip
        " KWWKKKWWK      ", // 12 White front & back paws
        " KWWK KWWK      ", // 13 White paws
        "  KK   KK       ", // 14 Paws on floor
        "                ", // 15
      ],
      idle2: [
        "   K   K        ", // 0 Ear tips
        "  KPK KPK       ", // 1 Pink inner ears
        " KOGK KOGK      ", // 2 Ear base
        " KGGGGGGGKK  K  ", // 3 Cat head top & tail tip twitch
        "KGLGGGLGGGK KOK ", // 4 Forehead & tail
        "KGKKGGKKGGKKGGK ", // 5 Blink eyes (closed slit)
        "KGKKGGKKGGKGGK  ", // 6 Closed eyes & whiskers
        "KKWWPWWKKKKKK   ", // 7 Pink nose & white muzzle
        " KKRRRYRRKK     ", // 8 Red collar & golden bell
        "  KWWWWWWK      ", // 9 Fluffy white chest bib
        " KOGGGGGGK      ", // 10 Tabby body torso
        " KGGGGGGGK      ", // 11 Body
        " KWWKKKWWK      ", // 12 White paws
        " KWWK KWWK      ", // 13 White paws
        "  KK   KK       ", // 14
        "                ", // 15
      ],
      walk1: [
        "   K   K        ",
        "  KPK KPK       ",
        " KOGK KOGK      ",
        " KGGGGGGGKK   K ",
        "KGLGGGLGGGK  KOK",
        "KGKWKGKWKGK KGGK",
        "KGKKGGKKGGKKGGK ",
        "KKWWPWWKKKGGGK  ",
        " KKRRRYRRKKKK   ",
        "  KWWWWWWK      ",
        " KOGGGGGGK      ",
        " KGGGGGGGK      ",
        "  KWKK  KWKK    ", // Stepping forward left
        "  KWWK  KWWK    ",
        "   KK    KK     ",
        "                ",
      ],
      walk2: [
        "   K   K        ",
        "  KPK KPK       ",
        " KOGK KOGK      ",
        " KGGGGGGGKK K   ",
        "KGLGGGLGGGK KOK ",
        "KGKWKGKWKGK KGGK",
        "KGKKGGKKGGKKGGK ",
        "KKWWPWWKKKGGGK  ",
        " KKRRRYRRKKKK   ",
        "  KWWWWWWK      ",
        " KOGGGGGGK      ",
        " KGGGGGGGK      ",
        "   KWKK  KWKK   ", // Stepping forward right
        "   KWWK  KWWK   ",
        "    KK    KK    ",
        "                ",
      ],
      jump: [
        "   K   K        ",
        "  KPK KPK    K  ",
        " KOGK KOGK  KOK ", // Tail straight back
        " KGGGGGGGKKKGGK ",
        "KGLGGGLGGGKGGK  ",
        "KGKWKGKWKGKKK   ",
        "KGKKGGKKGGK     ",
        "KKWWPWWKKKK     ",
        " KKRRRYRRKK     ",
        "  KWWWWWWK      ",
        " KOGGGGGGK      ",
        " KKWWKKWWKK     ", // Paws outstretched
        "  KWWKKWWK      ",
        "   KK  KK       ",
        "                ",
        "                ",
      ],
      happy: [
        "   K   K     P  ", // Pink heart spark
        "  KPK KPK   PPP ",
        " KOGK KOGK   P  ",
        " KGGGGGGGKK   K ",
        "KGLGGGLGGGK  KOK",
        "KGKKGGKKGGK KGGK", // Smiling curved eyes
        "KGKKGGKKGGKKGGK ",
        "KKWWPWWKKKGGGK  ", // Happy blushing smile
        "PKRRRYRRKKKKP   ",
        " KWWWWWWKK      ",
        " KOGGGGGGK      ",
        " KGGGGGGGK      ",
        " KWWKKKWWK      ",
        " KWWK KWWK      ",
        "  KK   KK       ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "                ",
        "   K   K        ",
        "  KPK KPK       ",
        " KOGKKKOGK      ",
        " KGGGGGGGK      ",
        "KGKKGGKKGGK   K ",
        "KKWWPWWKKKK  KOK", // Cat curled in loaf with tail around
        "KWWWWWWGGGGKKGGK",
        "KOGGGGGGGGGGGGK ",
        " KGGGGGGGGGGGK  ",
        "  KKKKKKKKKKK   ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "   K   K        ",
        "  KPK KPK       ",
        " KOGK KOGK      ",
        " KGGGGGGGK      ",
        "KGLGGGLGGGK   K ",
        "KGKWKGKWKGK  KOK",
        "KGKKGGKKGGK KGGK",
        "KKWWPWWKKKK KGGK",
        " KKRRRYRRKK KGGK",
        "  KWWWWWWK KGGK ",
        " KOGGGGGGK KGGK ",
        " KGGGGGGGK KGGK ",
        " KWWWWWWKKKKGK  ", // Tail wrapped around sitting paws
        " KWWWWWWK KKK   ",
        "  KKKKKK        ",
        "                ",
      ],
    },
    quotes: [
      "喵~ 橘白猫向你递来一条爆款灵感小鱼干！",
      "前置 3 秒钩子越抓人，完播率就像猫爪抓逗猫棒一样稳！",
      "FOSMET 矩阵文案已就绪，一键复制立即引流！",
      "咕噜咕噜~ 摸摸我的小耳朵，今天视频播放量必破 10W+！",
      "你可以拖拽我到屏幕任何位置，我是你的贴心工作台萌宠！",
    ],
  },

  // =========================================================================
  // 2. 🐕 SHIBA INU (赤柴犬 / 柴柴)
  // Characteristic features:
  // - Japanese Shiba Inu Urajiro (白颊、白下巴、白胸脯)
  // - Two distinct white eyebrow dots (白豆豆眉)
  // - Thick triangular prick ears
  // - Black button truffle nose with open pink tongue smile
  // - Tightly curled donut tail (柴犬经典卷尾) on the hip!
  // - Japanese green arabesque collar with bell
  // =========================================================================
  shiba: {
    name: "纯血赤柴犬 (Hachi)",
    emoji: "🐕",
    species: "柴犬",
    color: "#d97706",
    intro: "标志性白眉毛与卷尾巴的元气赤柴，忠诚热血，笑口常开",
    buff: "硬核痛点共鸣与互动加成 +20%",
    palette: {
      " ": "transparent",
      "K": "#1c1917", // Dark outline/nose
      "T": "#92400e", // Deep toasted sesame tan
      "D": "#d97706", // Rich ginger gold fur
      "L": "#fbbf24", // Golden fur highlight
      "W": "#ffffff", // Pure white urajiro & eyebrows
      "P": "#fb7185", // Pink tongue & happy mouth
      "G": "#16a34a", // Japanese green collar
      "Y": "#fde047", // Golden bell
    },
    frames: {
      idle1: [
        "  KK     KK     ", // 0 Prick ears
        " KTDK   KTDK    ", // 1 Ears with dark backs
        " KDDDKKKKDDDK   ", // 2 Forehead
        " KDDWWDDWWDDDKK ", // 3 Distinct white dot eyebrows & curled tail
        " KDDDDDDDDDDDKDK", // 4 Head & curled tail tip
        "KDWKDDDDDKWKDKDK", // 5 Black shiny eyes & tail loop
        "KDKWDDDDDWKDKKK ", // 6 White cheek start (Urajiro)
        " KKWWKKKKWWKK   ", // 7 Black truffle nose
        "  KKWWPWWWKK    ", // 8 Open smiling mouth & pink tongue
        "  KKGGGYGGGKK   ", // 9 Green Japanese collar & bell
        "  KWWWWWWWWK    ", // 10 Fluffy white chest (Urajiro)
        " KDDWWWWWWDDDK  ", // 11 Ginger body with white center
        " KDDDWWWDDDDDK  ", // 12 Sturdy canine legs
        " KWWWKKKKWWWK   ", // 13 White paws
        "  KKK    KKK    ", // 14 Grounded paws
        "                ", // 15
      ],
      idle2: [
        "  KK     KK     ", // 0
        " KTDK   KTDK    ", // 1
        " KDDDKKKKDDDK   ", // 2
        " KDDWWDDWWDDDKK ", // 3 White eyebrows & curled tail
        " KDDDDDDDDDDDKDK", // 4
        "KDKKDDDDDKKKDKDK", // 5 Winking happy eyes
        "KDKWDDDDDWKDKKK ", // 6
        " KKWWKKKKWWKK   ", // 7
        "  KKWWWWWWKK    ", // 8 Mouth closed happy smile
        "  KKGGGYGGGKK   ", // 9
        "  KWWWWWWWWK    ", // 10
        " KDDWWWWWWDDDK  ", // 11
        " KDDDWWWDDDDDK  ", // 12
        " KWWWKKKKWWWK   ", // 13
        "  KKK    KKK    ", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK     KK     ",
        " KTDK   KTDK    ",
        " KDDDKKKKDDDK   ",
        " KDDWWDDWWDDDKK ",
        " KDDDDDDDDDDDKDK",
        "KDWKDDDDDKWKDKDK",
        "KDKWDDDDDWKDKKK ",
        " KKWWKKKKWWKK   ",
        "  KKWWPWWWKK    ",
        "  KKGGGYGGGKK   ",
        "  KWWWWWWWWK    ",
        " KDDWWWWWWDDDK  ",
        "  KWWKK  KWWKK  ", // Left step
        "  KWWWK  KWWWK  ",
        "   KKK    KKK   ",
        "                ",
      ],
      walk2: [
        "  KK     KK     ",
        " KTDK   KTDK    ",
        " KDDDKKKKDDDK   ",
        " KDDWWDDWWDDDKK ",
        " KDDDDDDDDDDDKDK",
        "KDWKDDDDDKWKDKDK",
        "KDKWDDDDDWKDKKK ",
        " KKWWKKKKWWKK   ",
        "  KKWWPWWWKK    ",
        "  KKGGGYGGGKK   ",
        "  KWWWWWWWWK    ",
        " KDDWWWWWWDDDK  ",
        "   KWWKK  KWWKK ", // Right step
        "   KWWWK  KWWWK ",
        "    KKK    KKK  ",
        "                ",
      ],
      jump: [
        "  KK     KK   K ", // Tail flying high
        " KTDK   KTDK KDK",
        " KDDDKKKKDDDKDK ",
        " KDDWWDDWWDDDDK ",
        " KDDDDDDDDDDDDK ",
        "KDWKDDDDDKWKDK  ",
        "KDKWDDDDDWKDKK  ",
        " KKWWKKKKWWKK   ",
        "  KKWWPWWWKK    ",
        "  KKGGGYGGGKK   ",
        "  KWWWWWWWWK    ",
        " KKDDWWWWDDDKK  ",
        "  KWWWKKKWWWK   ", // Paws jumping forward
        "   KKK   KKK    ",
        "                ",
        "                ",
      ],
      happy: [
        " KKTDK KTDDK    ", // Airplane ears (飞机耳)
        "  KDDDKKDDDK    ",
        "  KDDWWDDWWDDDKK",
        "  KDDDDDDDDDDDKD",
        " KDKKDDDDDKKKDKD", // Curved squint grin
        " KDKWDDDDDWKDKKK",
        "  KKWWKKKKWWKK  ",
        " PKWWPPPPPWWKP  ", // Big happy open tongue laugh
        "  KKGGGYGGGKK   ",
        "  KWWWWWWWWK    ",
        " KDDWWWWWWDDDK  ",
        " KDDDWWWDDDDDK  ",
        " KWWWKKKKWWWK   ",
        "  KKK    KKK    ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "  KK     KK     ",
        " KTDK   KTDK    ",
        " KDDDKKKKDDDK   ",
        " KDDWWDDWWDDDKK ",
        "KDKKDDDDDKKKDKDK", // Sleeping curled like a bagel
        "KKWWKKKKWWKKDKDK",
        " KWWWWWWWWKKKKK ",
        "KDDWWWWWWDDDDDK ",
        " KDDDDDDDDDDDK  ",
        "  KKKKKKKKKKK   ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK     KK     ",
        " KTDK   KTDK    ",
        " KDDDKKKKDDDK   ",
        " KDDWWDDWWDDDKK ",
        " KDDDDDDDDDDDKDK",
        "KDWKDDDDDKWKDKDK",
        "KDKWDDDDDWKDKKK ",
        " KKWWKKKKWWKK   ",
        "  KKWWPWWWKK    ",
        "  KKGGGYGGGKK   ",
        "  KWWWWWWWWK    ",
        " KDDWWWWWWDDDK  ",
        " KWWWWWWWWWWWK  ", // Sits obediently with tail curled by side
        " KWWWWKKKWWWWK  ",
        "  KKKK   KKKK   ",
        "                ",
      ],
    },
    quotes: [
      "汪汪！纯血赤柴摇着卷尾巴为你巡逻爆款流量！",
      "柴柴闻到了好文案的香气！KT80 霸气续航直击用户心智！",
      "摸摸柴犬的白豆豆眉，今天出海订单必翻倍！",
      "主人辛苦啦！点击我为你展示柴柴招牌飞机耳笑容！",
      "选对痛点分类，TikTok 爆款视频完播率蹭蹭涨！",
    ],
  },

  // =========================================================================
  // 3. 🦊 FOX (赤狐 / 灵狐)
  // Characteristic features:
  // - Enormous bushy flame-red brush tail with snow-white tip
  // - Tall black-backed ears with white inner fluff
  // - Sharp pointed slender muzzle with black nose & white lower jaw
  // - Slanted golden/amber eyes with black eyeliner
  // - Distinctive black "gloves & socks" on legs
  // =========================================================================
  fox: {
    name: "极光赤灵狐 (Kitsune)",
    emoji: "🦊",
    species: "灵狐",
    color: "#f97316",
    intro: "拥有标志性火红蓬松大尾巴与雪白尾尖的灵狐，聪慧狡黠",
    buff: "猎奇悬念曝光与神级钩子加成 +25%",
    palette: {
      " ": "transparent",
      "K": "#0f172a", // Dark outline/black socks
      "R": "#c2410c", // Deep russet red-orange
      "F": "#ea580c", // Vivid fox flame orange
      "L": "#fb923c", // Light fox fur highlight
      "W": "#ffffff", // Pure white tail tip & chest ruff
      "Y": "#facc15", // Amber/Golden slanted eyes
      "P": "#f472b6", // Pink inner ear
    },
    frames: {
      idle1: [
        " KK       KK    ", // 0 Tall pointed ears
        " KKK     KKK    ", // 1 Black back of ears
        " KFPK   KPFK    ", // 2 White/pink inner ears
        " KFFKKKKKFFK    ", // 3 Forehead
        " KFFFFFFFFFK  KW", // 4 Slanted head & giant white tail tip
        "KFFYFFFFFYFFKKWW", // 5 Golden eyes & bushy tail white tip
        "KFKWFFFFFWKFKFWW", // 6 White cheek ruff & tail flame
        " KKFWWFWWFFKKFFF", // 7 Slender pointed snout
        "  KKWWKWWKKKFFFF", // 8 Black button nose on sharp snout & tail
        "   KWWWWWKKKFFFF", // 9 Fluffy white chest bib & tail
        "  KFFFFFFFKKKFFF", // 10 Slender body
        "  KFFFFFFFFKKKK ", // 11 Body & tail connection
        "  KKFFKKKFFKK   ", // 12 Fox legs
        "  KKKK   KKKK   ", // 13 Black socks/paws (标志性黑手套)
        "  KKK     KKK   ", // 14 Black paws
        "                ", // 15
      ],
      idle2: [
        " KK       KK    ", // 0
        " KKK     KKK    ", // 1
        " KFPK   KPFK    ", // 2
        " KFFKKKKKFFK    ", // 3
        " KFFFFFFFFFK KW ", // 4 Tail tip swaying
        "KFFKFFFFFKFFKWW ", // 5 Winking sly fox eyes
        "KFKWFFFFFWKFKFWW", // 6
        " KKFWWFWWFFKKFFF", // 7
        "  KKWWKWWKKKFFFF", // 8
        "   KWWWWWKKKFFFF", // 9
        "  KFFFFFFFKKKFFF", // 10
        "  KFFFFFFFFKKKK ", // 11
        "  KKFFKKKFFKK   ", // 12
        "  KKKK   KKKK   ", // 13
        "  KKK     KKK   ", // 14
        "                ", // 15
      ],
      walk1: [
        " KK       KK    ",
        " KKK     KKK    ",
        " KFPK   KPFK    ",
        " KFFKKKKKFFK    ",
        " KFFFFFFFFFK  KW",
        "KFFYFFFFFYFFKKWW",
        "KFKWFFFFFWKFKFWW",
        " KKFWWFWWFFKKFFF",
        "  KKWWKWWKKKFFFF",
        "   KWWWWWKKKFFFF",
        "  KFFFFFFFKKKFFF",
        "  KFFFFFFFFKKKK ",
        "   KKKK   KKKK  ", // Left stealthy step
        "   KKK     KKK  ",
        "                ",
        "                ",
      ],
      walk2: [
        " KK       KK    ",
        " KKK     KKK    ",
        " KFPK   KPFK    ",
        " KFFKKKKKFFK    ",
        " KFFFFFFFFFK KW ",
        "KFFYFFFFFYFFKWW ",
        "KFKWFFFFFWKFKFWW",
        " KKFWWFWWFFKKFFF",
        "  KKWWKWWKKKFFFF",
        "   KWWWWWKKKFFFF",
        "  KFFFFFFFKKKFFF",
        "  KFFFFFFFFKKKK ",
        "    KKKK   KKKK ", // Right stealthy step
        "    KKK     KKK ",
        "                ",
        "                ",
      ],
      jump: [
        " KK       KK  KW", // High arched leap
        " KKK     KKK KWW",
        " KFPK   KPFKKFWW",
        " KFFKKKKKFFKFFFF",
        " KFFFFFFFFFKFFFF",
        "KFFYFFFFFYFFKFFF",
        "KFKWFFFFFWKFKFFK",
        " KKFWWFWWFFKKKK ",
        "  KKWWKWWKKK    ",
        "   KWWWWWKK     ",
        "  KFFFFFFFKK    ",
        "  KKKK KKKK     ", // Paws extended
        "  KKK   KKK     ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        " KK       KK  KW", // Tail fluffing up
        " KKK     KKK KWW",
        " KFPK   KPFKKFWW",
        " KFFKKKKKFFKFFFF",
        " KFFFFFFFFFKFFFF",
        "KFF^FFFFF^FFKFFF", // Happy curved fox eyes
        "KFKWFFFFFWKFKFFK",
        " KKFWWFWWFFKKKK ",
        "PKKKWWKWWKKKP   ", // Happy blush
        "   KWWWWWKK     ",
        "  KFFFFFFFKK    ",
        "  KKFFKKKFFKK   ",
        "  KKKK   KKKK   ",
        "  KKK     KKK   ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        " KK       KK    ",
        " KKK     KKK    ",
        " KFPKKKKKPFK  KW",
        " KFFFFFFFFFK KWW",
        "KFF-FFFFF-FFKFWW", // Completely nestled inside giant bushy tail
        " KKWWKWWKKKKFFFF",
        "  KWWWWWKKFFFFFF",
        " KFFFFFFFFFFFFFF",
        "  KKKKKKKKKKKKK ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        " KK       KK    ",
        " KKK     KKK    ",
        " KFPK   KPFK    ",
        " KFFKKKKKFFK  KW",
        " KFFFFFFFFFK KWW",
        "KFFYFFFFFYFFKFWW",
        "KFKWFFFFFWKFKFFF",
        " KKFWWFWWFFKFFFF",
        "  KKWWKWWKKKFFFF",
        "   KWWWWWKKKFFF ",
        "  KFFFFFFFKKKK  ",
        "  KFFFFFFFFK    ",
        "  KKKKKKKKKK    ", // Tail wrapped gracefully around sitting black paws
        "  KKKK  KKKK    ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "嗷呜~ 灵狐蓬松的雪尖大尾巴为你扫清所有平庸标题！",
      "前 3 秒制造好奇悬念，就像狐狸的踪迹一样让人忍不住追逐！",
      "FOSMET QS40 的 ChatGPT 交互功能，简直是科技界的魔法！",
      "点击灵狐，为你降下极光爆单符文！",
    ],
  },

  // =========================================================================
  // 4. 🐉 DRAGON (东方神龙 / 幼龙)
  // Characteristic features:
  // - Branching golden-brown antler horns (鹿角)
  // - Long flowing dragon beard & whiskers (龙须)
  // - Emerald & Jade scales with golden segmented belly armor (龙腹金甲)
  // - Dorsal fiery spine ridges running along body
  // - Long serpentine tail with a flame tip (火焰龙尾)
  // =========================================================================
  dragon: {
    name: "翡翠小神龙 (Draco)",
    emoji: "🐉",
    species: "神龙",
    color: "#10b981",
    intro: "头顶鹿角分叉、身披青玉鳞甲与金腹的神圣小青龙，腾云驾雾",
    buff: "黑科技硬核指数与权威信任度 +30%",
    palette: {
      " ": "transparent",
      "K": "#064e3b", // Deep forest dragon outline
      "H": "#d97706", // Dragon antler horn gold-brown
      "Y": "#fde047", // Golden belly plates & horn tip
      "G": "#059669", // Jade green scales
      "E": "#10b981", // Emerald body scales
      "L": "#34d399", // Light scale shimmer
      "R": "#ef4444", // Fiery dorsal mane & tail flame
      "W": "#ffffff", // Sharp dragon fangs & eye shine
    },
    frames: {
      idle1: [
        " Y H     H Y    ", // 0 Antler Horn tips
        " KHKK   KKHK    ", // 1 Antler branches
        " KHHGKKKGHHK    ", // 2 Horn base on head
        " KGGGGGGGGGK    ", // 3 Dragon forehead & scales
        " KGEYGGGGYEGKK R", // 4 Golden piercing dragon eyes & tail flame
        " KGKWGGGGWKGKYRR", // 5 Dragon pupils & tail flame tip
        " KGGGGGGGGGGKERR", // 6 Dragon snout & tail
        "KKGGWGGGGWGGKGGK", // 7 Dragon whiskers (龙须) & sharp teeth
        " YKGGGGGGGGKKGGK", // 8 Whiskers flowing down
        "  KRYYYYYYRK KGK", // 9 Golden belly plates & red dorsal ridge
        "  KRYYYYYYRK  KK", // 10 Segmented belly plates
        "  KRYYYYYYRK    ", // 11 Serpentine body
        "  KGEKKKKGEK    ", // 12 Dragon claws
        "  KGGK  KGGK    ", // 13 Sharp claws
        "  KKKK  KKKK    ", // 14 Claws grounded
        "                ", // 15
      ],
      idle2: [
        " Y H     H Y    ", // 0
        " KHKK   KKHK    ", // 1
        " KHHGKKKGHHK    ", // 2
        " KGGGGGGGGGK   R", // 3 Flame flicker
        " KG-YGGGGY-GKKRR", // 4 Blinking dragon eyes
        " KGKWGGGGWKGKYRR", // 5
        " KGGGGGGGGGGKEKK", // 6
        "KKGGWGGGGWGGKGK ", // 7
        " YKGGGGGGGGKKGK ", // 8
        "  KRYYYYYYRK KK ", // 9
        "  KRYYYYYYRK    ", // 10
        "  KRYYYYYYRK    ", // 11
        "  KGEKKKKGEK    ", // 12
        "  KGGK  KGGK    ", // 13
        "  KKKK  KKKK    ", // 14
        "                ", // 15
      ],
      walk1: [
        " Y H     H Y    ",
        " KHKK   KKHK    ",
        " KHHGKKKGHHK    ",
        " KGGGGGGGGGK    ",
        " KGEYGGGGYEGKK R",
        " KGKWGGGGWKGKYRR",
        " KGGGGGGGGGGKERR",
        "KKGGWGGGGWGGKGGK",
        " YKGGGGGGGGKKGGK",
        "  KRYYYYYYRK KGK",
        "  KRYYYYYYRK  KK",
        "  KRYYYYYYRK    ",
        "   KGEK  KGEK   ", // Left claw forward
        "   KGGK  KGGK   ",
        "   KKKK  KKKK   ",
        "                ",
      ],
      walk2: [
        " Y H     H Y    ",
        " KHKK   KKHK    ",
        " KHHGKKKGHHK    ",
        " KGGGGGGGGGK    ",
        " KGEYGGGGYEGKK R",
        " KGKWGGGGWKGKYRR",
        " KGGGGGGGGGGKERR",
        "KKGGWGGGGWGGKGGK",
        " YKGGGGGGGGKKGGK",
        "  KRYYYYYYRK KGK",
        "  KRYYYYYYRK  KK",
        "  KRYYYYYYRK    ",
        "  KGEK  KGEK    ", // Right claw forward
        "  KGGK  KGGK    ",
        "  KKKK  KKKK    ",
        "                ",
      ],
      jump: [
        " Y H     H Y  RR", // Dragon flying with dragon flame aura
        " KHKK   KKHK RRR",
        " KHHGKKKGHHKKRR ",
        " KGGGGGGGGGKGGG ",
        " KGEYGGGGYEGKGGK",
        " KGKWGGGGWKGKKGK",
        " KGGGGGGGGGGK KK",
        "KKGGWGGGGWGGK   ",
        " YKGGGGGGGGKK   ",
        "  KRYYYYYYRK    ",
        "  KRYYYYYYRK    ",
        "  KGEKKKKGEK    ",
        "  KGGK  KGGK    ",
        "  KKKK  KKKK    ",
        "                ",
        "                ",
      ],
      happy: [
        " Y H  RR RR  H Y", // Fire breath sparks!
        " KHKK RRRRRR KKHK",
        " KHHGKKRRRRKGHHK",
        " KGGGGGGGGGGK   ",
        " KG^^GGGG^^GKK R", // Happy dragon smile
        " KGGGGGGGGGGKYRR",
        " KGGWWGGGGWWKERR",
        " YKGGGGGGGGKKGGK",
        "  KRYYYYYYRK KGK",
        "  KRYYYYYYRK  KK",
        "  KRYYYYYYRK    ",
        "  KGEKKKKGEK    ",
        "  KGGK  KGGK    ",
        "  KKKK  KKKK    ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        " Y H     H Y    ",
        " KHKK   KKHK    ",
        " KHHGKKKGHHK    ",
        " KG--GGGG--GKK R", // Slumbering dragon curled with tail
        " KGGWWGGGGWWKYRR",
        "  KRYYYYYYRKKEKK",
        " KGGGGGGGGGGGGK ",
        "  KKKKKKKKKKKK  ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        " Y H     H Y    ",
        " KHKK   KKHK    ",
        " KHHGKKKGHHK    ",
        " KGGGGGGGGGK    ",
        " KGEYGGGGYEGKK R",
        " KGKWGGGGWKGKYRR",
        " KGGGGGGGGGGKERR",
        "KKGGWGGGGWGGKGGK",
        " YKGGGGGGGGKKGK ",
        "  KRYYYYYYRK KK ",
        "  KRYYYYYYRK    ",
        " KGEKKKKKKGEK   ",
        " KGGGGGGGGGGK   ", // Perched on clouds
        "  KKKKKKKKKK    ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "吼！神龙鹿角生辉，吐出翡翠祥瑞之火！",
      "T20 独立 GPS 轨迹加上 5ATM 深度防水，户外霸主地位坚不可摧！",
      "矩阵 50 组高点击文案已全部就绪，一键导出直通爆单！",
      "摸摸小龙的龙须，为你带来顶级黑科技好运！",
    ],
  },

  // =========================================================================
  // 5. 🐰 BUNNY (垂耳与直耳雪兔)
  // Characteristic features:
  // - Long upright rabbit ears with soft pink inner canals
  // - Round chubby cheeks with whiskers and twitchy pink Y-nose
  // - Big glossy dark eyes
  // - Holding a bright orange carrot with green leafy top in front paws!
  // - Fluffy round cotton-ball tail on back
  // =========================================================================
  bunny: {
    name: "软萌雪绒兔 (Usagi)",
    emoji: "🐰",
    species: "玉兔",
    color: "#ec4899",
    intro: "手捧鲜嫩胡萝卜的长耳雪兔，腮帮鼓鼓，步伐轻快蹦跳",
    buff: "视觉亲和力与女性受众转化加成 +22%",
    palette: {
      " ": "transparent",
      "K": "#334155", // Soft slate outline
      "W": "#ffffff", // Pure snow white fur
      "S": "#e2e8f0", // Soft white fur shadow
      "P": "#f472b6", // Pink inner ear & nose & cheek blush
      "O": "#f97316", // Crunchy Orange carrot
      "G": "#22c55e", // Carrot green leaves
      "B": "#0f172a", // Shiny black bunny eyes
    },
    frames: {
      idle1: [
        "  KK      KK    ", // 0 Long upright ears
        " KPKK    KPKK   ", // 1 Pink ear canal
        " KPPK    KPPK   ", // 2 Long ears
        " KPPK    KPPK   ", // 3 Long ears
        " KWWK    KWWK   ", // 4 Ear base
        " KWWKKKKKKWWK   ", // 5 Forehead
        "KWWWWWWWWWWWWK  ", // 6 Chubby rabbit head
        "KWBWWWWWWWWWBWK ", // 7 Big glossy eyes
        "KWBBWWPWWWWBBWK ", // 8 Pink Y-nose & whiskers
        "KKWWPPPPPWWKK   ", // 9 Pink cheek blush
        " KWWWWGGWWWWK   ", // 10 Holding carrot green leafy top
        " KWWWOOOOWWWK KW", // 11 Holding orange carrot & round fluffy tail
        " KWWWOOOOWWWKKWW", // 12 Crunchy carrot & cotton ball tail
        "  KWWWKKWWWK KKK", // 13 Tiny bunny feet
        "  KKKK  KKKK    ", // 14 Grounded paws
        "                ", // 15
      ],
      idle2: [
        "  KK      KK    ", // 0
        " KPKK    KPKK   ", // 1
        " KPPK    KPPK   ", // 2
        " KPPK    KPPK   ", // 3
        " KWWK    KWWK   ", // 4
        " KWWKKKKKKWWK   ", // 5
        "KWWWWWWWWWWWWK  ", // 6
        "KW-WWWWWWWW-WWK ", // 7 Winking eyes
        "KW--WWPWWWW--WK ", // 8
        "KKWWPPPPPWWKK   ", // 9
        " KWWWWGGWWWWK   ", // 10
        " KWWWOOOOWWWK KW", // 11
        " KWWWOOOOWWWKKWW", // 12
        "  KWWWKKWWWK KKK", // 13
        "  KKKK  KKKK    ", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBWWWWWWWWWBWK ",
        "KWBBWWPWWWWBBWK ",
        "KKWWPPPPPWWKK   ",
        " KWWWWGGWWWWK   ",
        " KWWWOOOOWWWK KW",
        "  KWWKOOOOWKKKWW", // Bunny hopping forward
        "  KWWK   KWWK KK",
        "  KKK     KKK   ",
        "                ",
      ],
      walk2: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBWWWWWWWWWBWK ",
        "KWBBWWPWWWWBBWK ",
        "KKWWPPPPPWWKK   ",
        " KWWWWGGWWWWK   ",
        " KWWWOOOOWWWK KW",
        "   KWWKOOOOWKKWW", // Bunny hopping forward
        "   KWWK   KWWKKK",
        "    KKK    KKK  ",
        "                ",
      ],
      jump: [
        "  KK      KK    ", // Huge vertical binky leap!
        " KPKK    KPKK   ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBWWWWWWWWWBWK ",
        "KWBBWWPWWWWBBWK ",
        "KKWWPPPPPWWKK   ",
        " KWWWWGGWWWWK KW",
        " KWWWOOOOWWWKKWW",
        " KKWWWOOOWWWKKKK",
        "   KWWKKKWWK    ",
        "   KKK   KKK    ",
        "                ",
        "                ",
      ],
      happy: [
        "  KK      KK P  ", // Pink heart
        " KPKK    KPKKPPP",
        " KPPK    KPPK P ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KW^^WWWWWW^^WWK ", // Joyful eye crinkle
        "KW^^WWPWWWW^^WK ",
        "PKWWPPPPPWWKKP  ", // Big blush
        " KWWWWGGWWWWK   ",
        " KWWWOOOOWWWK KW",
        " KWWWOOOOWWWKKWW",
        "  KWWWKKWWWK KKK",
        "  KKKK  KKKK    ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "                ",
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KW--WWPWWWW--WK ", // Flat loaf with carrot next to mouth
        "KWWWWPOOOOPWWKK ",
        "KWWWWWOOOOWWWKWW",
        " KWWWWWWWWWWKKKK",
        "  KKKKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBWWWWWWWWWBWK ",
        "KWBBWWPWWWWBBWK ",
        "KKWWPPPPPWWKK   ",
        " KWWWWGGWWWWK   ",
        " KWWWOOOOWWWK KW",
        " KWWWOOOOWWWKKWW",
        " KWWWWWWWWWWKKKK", // Sitting snugly on haunches
        "  KKKKKKKKKK    ",
        "                ",
      ],
    },
    quotes: [
      "蹦蹦跳跳！雪兔啃一口胡萝卜，为你送上甜甜的爆款祝福！",
      "FOS10 仅 14.9g 极轻机身，女性手腕零负担，送礼爆单首选！",
      "E05 电致变色智能眼镜 4 档无级调光，科技感拉满！",
      "摸摸小兔长长软软的耳朵，灵感立即萌化全网！",
    ],
  },

  // =========================================================================
  // 6. 🐼 PANDA (国宝大熊猫)
  // Characteristic features:
  // - Pure white round face with angled black oval eye patches (八字黑眼圈)
  // - Round solid black ears atop head
  // - Solid black shoulder vest & black front paws & black hind legs
  // - Pure white lower belly/torso
  // - Holding a fresh green bamboo stalk with leafy shoots!
  // =========================================================================
  panda: {
    name: "功夫国宝大熊猫 (Boba)",
    emoji: "🐼",
    species: "大熊猫",
    color: "#10b981",
    intro: "拥有标志性八字黑眼圈与黑马甲的憨厚大熊猫，正悠闲嚼着竹子",
    buff: "沉稳耐力与高转化信任感 +28%",
    palette: {
      " ": "transparent",
      "K": "#0f172a", // Jet black outline & ears & limbs
      "B": "#1e293b", // Deep black fur / eye patches
      "W": "#ffffff", // Pure snowy white fur
      "S": "#cbd5e1", // White fur shadow
      "G": "#22c55e", // Fresh green bamboo stalk
      "E": "#15803d", // Deep green bamboo leaf
      "P": "#fb7185", // Pink tongue & nose
    },
    frames: {
      idle1: [
        "  KK      KK    ", // 0 Black round ears
        " KBBK    KBBK   ", // 1 Solid black ears
        " KBBKKKKKKBBK   ", // 2 Ear base
        "KWWWWWWWWWWWWK  ", // 3 Pure white round head
        "KWBBWWWWWWBBWK  ", // 4 Angled black eye patches (八字黑眼圈)
        "KWBBKWWWWKBBWK  ", // 5 Black eyes inside patches
        "KWWWWWWKWWWWWK  ", // 6 Black nose
        "KKWWWWPWWWWKK   ", // 7 Cute mouth
        " KBBBBBBBBBBK G ", // 8 Solid black shoulder vest & green bamboo leaf
        " KBBBBBBBBBBKGG ", // 9 Black arms & bamboo shoot
        " KBWWWWWWWWBBKE ", // 10 White belly between black arms & bamboo
        " KBWWWWWWWWBBK  ", // 11 White belly
        "  KBBKKKKBBK    ", // 12 Black hind legs
        "  KBBK  KBBK    ", // 13 Black paws
        "  KKKK  KKKK    ", // 14 Grounded paws
        "                ", // 15
      ],
      idle2: [
        "  KK      KK    ", // 0
        " KBBK    KBBK   ", // 1
        " KBBKKKKKKBBK   ", // 2
        "KWWWWWWWWWWWWK  ", // 3
        "KW--WWWWWW--WK  ", // 4 Blinking eyes inside black patches
        "KWBBWWWWWWBBWK  ", // 5
        "KWWWWWWKWWWWWK  ", // 6
        "KKWWWWPWWWWKK   ", // 7
        " KBBBBBBBBBBK G ", // 8
        " KBBBBBBBBBBKGG ", // 9
        " KBWWWWWWWWBBKE ", // 10
        " KBWWWWWWWWBBK  ", // 11
        "  KBBKKKKBBK    ", // 12
        "  KBBK  KBBK    ", // 13
        "  KKKK  KKKK    ", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK      KK    ",
        " KBBK    KBBK   ",
        " KBBKKKKKKBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBBWWWWWWBBWK  ",
        "KWBBKWWWWKBBWK  ",
        "KWWWWWWKWWWWWK  ",
        "KKWWWWPWWWWKK   ",
        " KBBBBBBBBBBK G ",
        " KBBBBBBBBBBKGG ",
        " KBWWWWWWWWBBKE ",
        "  KBWWWWWWBBK   ",
        "  KBBK  KBBK    ", // Clumsy waddle step left
        "  KKKK  KKKK    ",
        "                ",
        "                ",
      ],
      walk2: [
        "  KK      KK    ",
        " KBBK    KBBK   ",
        " KBBKKKKKKBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBBWWWWWWBBWK  ",
        "KWBBKWWWWKBBWK  ",
        "KWWWWWWKWWWWWK  ",
        "KKWWWWPWWWWKK   ",
        " KBBBBBBBBBBK G ",
        " KBBBBBBBBBBKGG ",
        " KBWWWWWWWWBBKE ",
        "  KBWWWWWWBBK   ",
        "   KBBK  KBBK   ", // Clumsy waddle step right
        "   KKKK  KKKK   ",
        "                ",
        "                ",
      ],
      jump: [
        "  KK      KK    ",
        " KBBK    KBBK   ",
        " KBBKKKKKKBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBBWWWWWWBBWK  ",
        "KWBBKWWWWKBBWK  ",
        "KWWWWWWKWWWWWK  ",
        "KKWWWWPWWWWKK   ",
        " KKBBBBBBBBKK G ",
        "  KBBBBBBBBK GG ",
        "  KBWWWWWWBBK E ",
        "  KKBBKKBBKK    ", // Jumping panda roll
        "   KBBKKBBK     ",
        "   KKK  KKK     ",
        "                ",
        "                ",
      ],
      happy: [
        "  KK      KK    ",
        " KBBK    KBBK   ",
        " KBBKKKKKKBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KW^^WWWWWW^^WK  ", // Joyful panda grin
        "KWBBWWWWWWBBWK  ",
        "KWWWWWWKWWWWWK  ",
        "PKWWWWPWWWWKKP  ", // Cheerful cheek blush
        " KBBBBBBBBBBK G ",
        " KBBBBBBBBBBKGG ",
        " KBWWWWWWWWBBKE ",
        " KBWWWWWWWWBBK  ",
        "  KBBKKKKBBK    ",
        "  KBBK  KBBK    ",
        "  KKKK  KKKK    ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "  KK      KK    ",
        " KBBK    KBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KW--WWWWWW--WK  ", // Sprawled like a panda pancake
        "KWWWWWWKWWWWWK  ",
        " KBBBBBBBBBBK   ",
        "KBBWWWWWWWWBBKG ",
        " KBBBBBBBBBBKGG ",
        "  KKKKKKKKKK  E ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK      KK    ",
        " KBBK    KBBK   ",
        " KBBKKKKKKBBK   ",
        "KWWWWWWWWWWWWK  ",
        "KWBBWWWWWWBBWK  ",
        "KWBBKWWWWKBBWK  ",
        "KWWWWWWKWWWWWK  ",
        "KKWWWWPWWWWKK   ",
        " KBBBBBBBBBBK G ",
        " KBBGGGGGGGBKGG ", // Holding bamboo in front of chest
        " KBWWGGGGWWBBKE ",
        " KBWWWWWWWWBBK  ",
        " KBBBBKKKBBBBK  ", // Sits with feet splayed forward
        "  KKKK   KKKK   ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "咔嚓咔嚓！大熊猫嚼着新鲜竹子，提醒你前 5 秒抛出核心卖点！",
      "KT80 拥有 800mAh 巨兽电池，正如大熊猫一样沉稳持久！",
      "功夫熊猫为你坐镇！好文案需要静心打磨，点击我开启番茄钟！",
      "投喂一根翡翠嫩竹，大熊猫为你施展太极八卦好运！",
    ],
  },

  // =========================================================================
  // 7. 🐧 PENGUIN (帝企鹅 / 小企鹅)
  // Characteristic features:
  // - Streamlined tuxedo body: solid black head/back cape & snow white belly
  // - Emperor penguin golden-yellow/orange neck cheek patches
  // - Sharp black/orange beak pointing forward
  // - Black flipper wings extending from sides
  // - Bright orange webbed waddling feet
  // =========================================================================
  penguin: {
    name: "极地帝企鹅 (Pippin)",
    emoji: "🐧",
    species: "企鹅",
    color: "#06b6d4",
    intro: "身披燕尾服、颈带金黄耳羽的帝企鹅，摇摇摆摆却充满南极智慧",
    buff: "欧洲德语/西语冷门爆款转化加成 +24%",
    palette: {
      " ": "transparent",
      "K": "#09090b", // Jet black outline & cape
      "B": "#0f172a", // Midnight black tuxedo feathers
      "W": "#ffffff", // Pure white tuxedo chest/belly
      "S": "#e0f2fe", // Icy white belly highlight
      "Y": "#facc15", // Emperor penguin golden ear/neck feathers
      "O": "#f97316", // Sharp orange beak & webbed feet
      "C": "#06b6d4", // Icy eye sparkle
    },
    frames: {
      idle1: [
        "     KKKK       ", // 0 Penguin head crown
        "    KBBBBK      ", // 1 Black head
        "   KBBBBBBK     ", // 2 Head & forehead
        "   KBCKKBCK     ", // 3 Icy penguin eyes
        "   KBBKKBBK     ", // 4 Eyes
        "  KYBBOOOBBYK   ", // 5 Emperor yellow ear patches & orange beak
        "  KYYBBOOBYYK   ", // 6 Golden neck patches & beak tip
        " KBBBWWWWBBBK   ", // 7 Black flippers & white chest
        "KBBBKWWWWKBBBK  ", // 8 Flippers at sides
        "KBBBKWWWWKBBBK  ", // 9 Flippers
        " KBBKWWWWKBBK   ", // 10 Torso & white belly
        "  KBKWWWWKBK    ", // 11 Lower belly
        "   KKWWWWKK     ", // 12 Base
        "   KOOKKOOK     ", // 13 Orange webbed feet
        "   KKKKKKKK     ", // 14 Grounded feet
        "                ", // 15
      ],
      idle2: [
        "     KKKK       ", // 0
        "    KBBBBK      ", // 1
        "   KBBBBBBK     ", // 2
        "   KB--KB--K    ", // 3 Blinking eyes
        "   KBBKKBBK     ", // 4
        "  KYBBOOOBBYK   ", // 5
        "  KYYBBOOBYYK   ", // 6
        " KBBBWWWWBBBK   ", // 7
        "KBBBKWWWWKBBBK  ", // 8
        "KBBBKWWWWKBBBK  ", // 9
        " KBBKWWWWKBBK   ", // 10
        "  KBKWWWWKBK    ", // 11
        "   KKWWWWKK     ", // 12
        "   KOOKKOOK     ", // 13
        "   KKKKKKKK     ", // 14
        "                ", // 15
      ],
      walk1: [
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KBCKKBCK     ",
        "   KBBKKBBK     ",
        "  KYBBOOOBBYK   ",
        "  KYYBBOOBYYK   ",
        " KBBBWWWWBBBK   ",
        "KBBBKWWWWKBBBK  ",
        " KBBKWWWWKBBK   ",
        "  KBKWWWWKBK    ",
        "   KKWWWWKK     ",
        "  KOOK  KK      ", // Left waddle step
        "  KKKK KOOK     ",
        "       KKKK     ",
        "                ",
      ],
      walk2: [
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KBCKKBCK     ",
        "   KBBKKBBK     ",
        "  KYBBOOOBBYK   ",
        "  KYYBBOOBYYK   ",
        " KBBBWWWWBBBK   ",
        "KBBBKWWWWKBBBK  ",
        " KBBKWWWWKBBK   ",
        "  KBKWWWWKBK    ",
        "   KKWWWWKK     ",
        "    KK  KOOK    ", // Right waddle step
        "   KOOK KKKK    ",
        "   KKKK         ",
        "                ",
      ],
      jump: [
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KBCKKBCK     ",
        "  KYBBOOOBBYK   ",
        "  KYYBBOOBYYK   ",
        "KKBBBWWWWBBBKK  ", // Wings raised high!
        " KBBBKWWWWKBBBK ",
        "  KBBKWWWWKBBK  ",
        "   KBKWWWWKBK   ",
        "    KKWWWWKK    ",
        "    KOOKKOOK    ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KB^^KB^^K    ", // Joyful penguin eyes
        "   KBBKKBBK     ",
        "  KYBBOOOBBYK   ",
        "  KYYBBOOBYYK   ",
        "KKBBBWWWWBBBKK  ", // Wings flapping happily
        " KBBBKWWWWKBBBK ",
        " KBBBKWWWWKBBBK ",
        "  KBKWWWWKBK    ",
        "   KKWWWWKK     ",
        "   KOOKKOOK     ",
        "   KKKKKKKK     ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KB--KB--K    ", // Tucking beak into feathers
        "  KYBBOOOBBYK   ",
        "   KBBWWWWBBK   ",
        "   KBBWWWWBBK   ",
        "    KKWWWWKK    ",
        "    KOOKKOOK    ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "     KKKK       ",
        "    KBBBBK      ",
        "   KBBBBBBK     ",
        "   KBCKKBCK     ",
        "   KBBKKBBK     ",
        "  KYBBOOOBBYK   ",
        "  KYYBBOOBYYK   ",
        " KBBBWWWWBBBK   ",
        " KBBBKWWWWKBBK  ",
        "  KBBWWWWBBK    ",
        "  KBBWWWWBBK    ",
        "   KKWWWWKK     ",
        "   KOOKKOOK     ", // Sits back on heels
        "   KKKKKKKK     ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "嘎嘎！企鹅在南极冰原滑行，就像 FOSMET 5ATM 深度防水一样从容！",
      "西语和德语受众格外看重实测品质，前置'防雨耐寒'直击痛点！",
      "企鹅扑腾着鳍翅，为你送来极地冷知识与冰爽灵感！",
    ],
  },

  // =========================================================================
  // 8. 🐻 BEAR (野生棕熊 / 蜜糖小熊)
  // Characteristic features:
  // - Round furry ears with lighter inner fur
  // - Pronounced honey-tan protruding muzzle with glossy black nose
  // - Deep rich brown coat with golden chest crescent mark (月牙斑)
  // - Bulky muscular shoulders, holding a clay jar dripping with golden honey!
  // =========================================================================
  bear: {
    name: "森林蜜糖熊 (Barney)",
    emoji: "🐻",
    species: "棕熊",
    color: "#b45309",
    intro: "拥有浅色吻部与金黄月牙胸斑的厚实棕熊，手捧香甜蜜糖罐",
    buff: "文案亲和力、收藏率与生活方式转化 +26%",
    palette: {
      " ": "transparent",
      "K": "#291505", // Deep dark brown outline
      "B": "#78350f", // Rich dark chocolate brown fur
      "M": "#92400e", // Warm medium brown fur
      "L": "#b45309", // Warm golden brown fur
      "T": "#fed7aa", // Light honey-tan muzzle & inner ears
      "Y": "#facc15", // Golden honey & chest crescent
      "W": "#ffffff", // Eye glint
      "C": "#b45309", // Clay honey pot
    },
    frames: {
      idle1: [
        "  KK       KK   ", // 0 Round bear ears
        " KTKK     KTKK  ", // 1 Tan inner ears
        " KBBMKKKKKMBBK  ", // 2 Furry head top
        " KBMMMMMMMMMBK  ", // 3 Broad bear forehead
        " KBMKWMMMWMKMBK ", // 4 Dark eyes with white glints
        " KBMKKTTTTKKMBK ", // 5 Pronounced tan muzzle (浅色吻部)
        "  KMMMTKKTTMMK  ", // 6 Black shiny bear nose
        "  KMMMTTTTTMMK  ", // 7 Tan muzzle & chin
        " KBMMMYYYYYMBBK ", // 8 Golden chest crescent (胸前金黄月牙斑)
        " KBMMMYYYYYMBBK ", // 9 Chest crescent & bulky shoulders
        " KBMKYYYYYYKMBK ", // 10 Holding honey jar with golden dripping honey
        " KBMCYYYYYYCMBK ", // 11 Clay honey pot (陶制蜜罐)
        "  KBMMKKKKMMBK  ", // 12 Heavy paws
        "  KBMBK  KBMBK  ", // 13 Big bear paws
        "  KKKKK  KKKKK  ", // 14 Grounded paws
        "                ", // 15
      ],
      idle2: [
        "  KK       KK   ", // 0
        " KTKK     KTKK  ", // 1
        " KBBMKKKKKMBBK  ", // 2
        " KBMMMMMMMMMBK  ", // 3
        " KBMK-MMM-MKMBK ", // 4 Winking eyes
        " KBMKKTTTTKKMBK ", // 5
        "  KMMMTKKTTMMK  ", // 6
        "  KMMMTTTTTMMK  ", // 7
        " KBMMMYYYYYMBBK ", // 8
        " KBMMMYYYYYMBBK ", // 9
        " KBMKYYYYYYKMBK ", // 10
        " KBMCYYYYYYCMBK ", // 11
        "  KBMMKKKKMMBK  ", // 12
        "  KBMBK  KBMBK  ", // 13
        "  KKKKK  KKKKK  ", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBBMKKKKKMBBK  ",
        " KBMMMMMMMMMBK  ",
        " KBMKWMMMWMKMBK ",
        " KBMKKTTTTKKMBK ",
        "  KMMMTKKTTMMK  ",
        "  KMMMTTTTTMMK  ",
        " KBMMMYYYYYMBBK ",
        " KBMMMYYYYYMBBK ",
        " KBMKYYYYYYKMBK ",
        " KBMCYYYYYYCMBK ",
        "  KBMBKK KBMBKK ", // Heavy lumbering step left
        "  KKKKK   KKKKK ",
        "                ",
        "                ",
      ],
      walk2: [
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBBMKKKKKMBBK  ",
        " KBMMMMMMMMMBK  ",
        " KBMKWMMMWMKMBK ",
        " KBMKKTTTTKKMBK ",
        "  KMMMTKKTTMMK  ",
        "  KMMMTTTTTMMK  ",
        " KBMMMYYYYYMBBK ",
        " KBMMMYYYYYMBBK ",
        " KBMKYYYYYYKMBK ",
        " KBMCYYYYYYCMBK ",
        "   KBMBKK KBMBKK", // Heavy lumbering step right
        "   KKKKK   KKKKK",
        "                ",
        "                ",
      ],
      jump: [
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBBMKKKKKMBBK  ",
        " KBMMMMMMMMMBK  ",
        " KBMKWMMMWMKMBK ",
        " KBMKKTTTTKKMBK ",
        "  KMMMTKKTTMMK  ",
        "  KMMMTTTTTMMK  ",
        " KKBMMYYYYMBBKK ",
        "  KBMYYYYYYMBK  ",
        "  KBMCYYYYCMBK  ",
        "  KKBMBKKKBMBKK ", // Powerful bear pounce
        "   KKKK   KKKK  ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBBMKKKKKMBBK  ",
        " KBMMMMMMMMMBK  ",
        " KBMK^MMM^MKMBK ", // Happy squint
        " KBMKKTTTTKKMBK ",
        "  KMMMTKKTTMMK  ",
        " PKMMMTTTTTMMKP ", // Happy cheek blush
        " KBMMMYYYYYMBBK ",
        " KBMMMYYYYYMBBK ",
        " KBMKYYYYYYKMBK ",
        " KBMCYYYYYYCMBK ",
        "  KBMMKKKKMMBK  ",
        "  KBMBK  KBMBK  ",
        "  KKKKK  KKKKK  ",
        "                ",
      ],
      sleep: [
        "                ",
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBMMMMMMMMMBK  ",
        " KBMK-MMM-MKMBK ", // Slumbering bear curled around honey jar
        "  KMMMTKKTTMMK  ",
        " KBMKKTTTTKKMBK ",
        " KBMCYYYYYYCMBK ",
        "KBBMMMMMMMMMMMBK",
        " KKKKKKKKKKKKKK ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK       KK   ",
        " KTKK     KTKK  ",
        " KBBMKKKKKMBBK  ",
        " KBMMMMMMMMMBK  ",
        " KBMKWMMMWMKMBK ",
        " KBMKKTTTTKKMBK ",
        "  KMMMTKKTTMMK  ",
        "  KMMMTTTTTMMK  ",
        " KBMMMYYYYYMBBK ",
        " KBMKYYYYYYKMBK ",
        " KBMCYYYYYYCMBK ",
        "  KBMMMMMMMMBK  ",
        " KBBMBKKKKKBMBK ", // Sitting squarely like a teddy bear
        "  KKKK     KKKK ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "蜜糖虽甜，但你的 50 组爆款矩阵文案更甜！",
      "小熊抱抱！创作累了就开启番茄钟休息 5 分钟，劳逸结合灵感更多！",
      "女性腕表 G2 和 FOS10 搭配温馨送礼场景，销量直线上升！",
    ],
  },

  // =========================================================================
  // 9. 🦄 UNICORN (梦幻独角兽 / 天马)
  // Characteristic features:
  // - Spiral golden horn radiating star sparkles on forehead
  // - Elegant equine muzzle with soft pink nostrils
  // - Flowing pastel rainbow / lilac mane cascading down the neck
  // - Delicate golden hooves & flowing magical horse tail
  // =========================================================================
  unicorn: {
    name: "星辉独角兽 (Stella)",
    emoji: "🦄",
    species: "独角兽",
    color: "#c084fc",
    intro: "额生璀璨螺旋金角、鬃毛如彩虹极光流转的梦幻天马，带来爆单奇迹",
    buff: "全网爆款爆单运势与算法推流 +35%",
    palette: {
      " ": "transparent",
      "K": "#3b0764", // Deep royal purple outline
      "Y": "#fde047", // Radiant golden magic horn & hooves
      "G": "#facc15", // Horn gold depth
      "W": "#ffffff", // Pure pearlescent white coat
      "P": "#f472b6", // Pastel rose pink mane
      "V": "#c084fc", // Pastel lilac purple mane
      "C": "#38bdf8", // Sky blue star sparkle & eye
    },
    frames: {
      idle1: [
        "       KYK      ", // 0 Golden horn tip
        "      KGYYK     ", // 1 Spiral golden magic horn
        "  KK  KYGGK KK  ", // 2 Equine ears & horn base
        " KPWK KYGK KPWK ", // 3 Ears with pink inner folds
        " KPWWKKKKWWWWPK ", // 4 Head & mane flow
        " KVWWWWWWWWWWVK ", // 5 Lilac mane
        " KWCCWWWWCCWWVK ", // 6 Celestial cyan horse eyes
        " KWWWWPPWWWKKVK ", // 7 Muzzle & pink horse nostrils
        "  KWWPPWWKKKVKK ", // 8 Graceful neck & flowing mane
        "  KWWWWWWKKKVKK ", // 9 Horse shoulder & mane
        " KWWWWWWWWKKKKV ", // 10 Torso & flowing rainbow tail
        " KWWWWWWWWWWKVV ", // 11 Slender horse body & tail
        "  KWWKKKKWWKKVV ", // 12 Slender horse legs & tail
        "  KYK    KYKKK  ", // 13 Golden hooves (金蹄)
        "  KKK    KKK    ", // 14 Grounded hooves
        "                ", // 15
      ],
      idle2: [
        "       KYK   C  ", // 0 Sparkle from horn
        "      KGYYK C C ", // 1
        "  KK  KYGGK KK  ", // 2
        " KPWK KYGK KPWK ", // 3
        " KPWWKKKKWWWWPK ", // 4
        " KVWWWWWWWWWWVK ", // 5
        " KW--WWWW--WWVK ", // 6 Blinking starry eyes
        " KWWWWPPWWWKKVK ", // 7
        "  KWWPPWWKKKVKK ", // 8
        "  KWWWWWWKKKVKK ", // 9
        " KWWWWWWWWKKKKV ", // 10
        " KWWWWWWWWWWKVV ", // 11
        "  KWWKKKKWWKKVV ", // 12
        "  KYK    KYKKK  ", // 13
        "  KKK    KKK    ", // 14
        "                ", // 15
      ],
      walk1: [
        "       KYK      ",
        "      KGYYK     ",
        "  KK  KYGGK KK  ",
        " KPWK KYGK KPWK ",
        " KPWWKKKKWWWWPK ",
        " KVWWWWWWWWWWVK ",
        " KWCCWWWWCCWWVK ",
        " KWWWWPPWWWKKVK ",
        "  KWWPPWWKKKVKK ",
        "  KWWWWWWKKKVKK ",
        " KWWWWWWWWKKKKV ",
        " KWWWWWWWWWWKVV ",
        "   KYKK   KYKKV ", // High-stepping trot step
        "   KKK    KKKK  ",
        "                ",
        "                ",
      ],
      walk2: [
        "       KYK      ",
        "      KGYYK     ",
        "  KK  KYGGK KK  ",
        " KPWK KYGK KPWK ",
        " KPWWKKKKWWWWPK ",
        " KVWWWWWWWWWWVK ",
        " KWCCWWWWCCWWVK ",
        " KWWWWPPWWWKKVK ",
        "  KWWPPWWKKKVKK ",
        "  KWWWWWWKKKVKK ",
        " KWWWWWWWWKKKKV ",
        " KWWWWWWWWWWKVV ",
        "  KYKK   KYKK V ", // High-stepping trot step
        "  KKK    KKK    ",
        "                ",
        "                ",
      ],
      jump: [
        "       KYK C C C", // Rearing pegasus leap with starry dust!
        "      KGYYK C C ",
        "  KK  KYGGK KK  ",
        " KPWK KYGK KPWK ",
        " KPWWKKKKWWWWPK ",
        " KVWWWWWWWWWWVK ",
        " KWCCWWWWCCWWVK ",
        " KWWWWPPWWWKKVK ",
        "  KWWPPWWKKKVKK ",
        " KKWWWWWWKKKKVK ",
        "  KWWWWWWWWKKKVV",
        "  KKYKKKKKYKKVV ",
        "   KKK   KKKKK  ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "    C  KYK  C   ", // Star bursts
        "   C CKGYYKC C  ",
        "  KK  KYGGK KK  ",
        " KPWK KYGK KPWK ",
        " KPWWKKKKWWWWPK ",
        " KVWWWWWWWWWWVK ",
        " KW^^WWWW^^WWVK ", // Joyful horse eyes
        " KWWWWPPWWWKKVK ",
        " PKWWPPWWKKKVKKP", // Cheerful blush
        "  KWWWWWWKKKVKK ",
        " KWWWWWWWWKKKKV ",
        " KWWWWWWWWWWKVV ",
        "  KWWKKKKWWKKVV ",
        "  KYK    KYKKK  ",
        "  KKK    KKK    ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "       KYK      ",
        "      KGYYK     ",
        "  KK  KYGGK KK  ",
        " KPWWKKKKWWWWPK ",
        " KW--WWWW--WWVK ", // Resting peacefully with horn soft glow
        "  KWWPPWWKKKVKK ",
        " KWWWWWWWWWWKKVV",
        "  KKKKKKKKKKKKK ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "       KYK      ",
        "      KGYYK     ",
        "  KK  KYGGK KK  ",
        " KPWK KYGK KPWK ",
        " KPWWKKKKWWWWPK ",
        " KVWWWWWWWWWWVK ",
        " KWCCWWWWCCWWVK ",
        " KWWWWPPWWWKKVK ",
        "  KWWPPWWKKKVKK ",
        " KWWWWWWWWKKKKV ",
        " KWWWWWWWWWWKVV ",
        "  KKWWWWWWKKKVV ", // Tucks hooves under gracefully
        "   KYKKKKKYKKK  ",
        "   KKK   KKK    ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "星辉独角兽挥动流光鬃毛！今天你所有的短视频都将登上热门推流！",
      "E05 智能眼镜 4 档变色调光，简直是把魔法带入了现实科技！",
      "彩虹星光洒向工作台，愿你的灵感取之不尽，爆单连连！",
    ],
  },

  // =========================================================================
  // 10. 🦉 OWL (雕鸮 / 猫头鹰)
  // Characteristic features:
  // - Feathered ear tufts (羽角)
  // - Heart-shaped facial disc with giant piercing golden forward-facing eyes
  // - Sharp hooked dark beak in center
  // - Layered brown & white arrow-pattern plumage
  // - Sharp yellow talons grasping a rustic wooden branch!
  // =========================================================================
  owl: {
    name: "夜行博学猫头鹰 (Archimedes)",
    emoji: "🦉",
    species: "猫头鹰",
    color: "#6366f1",
    intro: "拥有巨大敏锐圆眼与利爪羽角的博学夜行智者，洞悉算法逻辑与流量密码",
    buff: "标签 SEO 与算法精准推荐加成 +32%",
    palette: {
      " ": "transparent",
      "K": "#1e1b4b", // Deep indigo outline
      "F": "#4338ca", // Rich midnight owl feathers
      "B": "#6366f1", // Indigo wing feathers
      "W": "#ffffff", // Pure white facial disc & chest speckles
      "Y": "#facc15", // Piercing golden amber eyes & talons
      "O": "#f97316", // Sharp hooked orange beak
      "T": "#78350f", // Rustic wooden perch branch
    },
    frames: {
      idle1: [
        "  KK      KK    ", // 0 Feathery ear tufts (羽角)
        " KFFK    KFFK   ", // 1 Ear tufts
        " KFFBKKKKFBFFK  ", // 2 Head crown
        " KWWWWWWWWWWFK  ", // 3 Facial disc top
        " KWYKFWWFKWYFK  ", // 4 Giant forward-facing golden eyes (巨大圆眼)
        " KWYKKWWKKWYFK  ", // 5 Black pupils & white facial disc
        " KWWFOOOOFWWFK  ", // 6 Sharp hooked beak in center
        "  KFFFFFFFFFFK  ", // 7 Neck & chin
        " KFBWWWWWWWWBFK ", // 8 Speckled plumage chest (箭纹羽毛)
        " KFBWWFWWFWWBFK ", // 9 Layered wing feathers & chest
        " KFBWWWWWWWWBFK ", // 10 Folded wings at sides
        "  KFFFFFFFFFFK  ", // 11 Body lower hem
        "   KYYK  KYYK   ", // 12 Sharp yellow talons (锋利爪子)
        "TTTKYYKTTKYYKTTT", // 13 Grasping wooden tree branch (抓握栖木)
        "TTTTKKTTTTKKTTTT", // 14 Rustic perch branch
        "                ", // 15
      ],
      idle2: [
        "  KK      KK    ", // 0
        " KFFK    KFFK   ", // 1
        " KFFBKKKKFBFFK  ", // 2
        " KWWWWWWWWWWFK  ", // 3
        " KW-KFWWFKW-FK  ", // 4 Blinking owl eyes
        " KW-KKWWKKW-FK  ", // 5
        " KWWFOOOOFWWFK  ", // 6
        "  KFFFFFFFFFFK  ", // 7
        " KFBWWWWWWWWBFK ", // 8
        " KFBWWFWWFWWBFK ", // 9
        " KFBWWWWWWWWBFK ", // 10
        "  KFFFFFFFFFFK  ", // 11
        "   KYYK  KYYK   ", // 12
        "TTTKYYKTTKYYKTTT", // 13
        "TTTTKKTTTTKKTTTT", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK      KK    ",
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KWWWWWWWWWWFK  ",
        " KWYKFWWFKWYFK  ",
        " KWYKKWWKKWYFK  ",
        " KWWFOOOOFWWFK  ",
        "  KFFFFFFFFFFK  ",
        " KFBWWWWWWWWBFK ",
        " KFBWWFWWFWWBFK ",
        " KFBWWWWWWWWBFK ",
        "  KFFFFFFFFFFK  ",
        "  KYYK    KYYK  ", // Hopping along branch
        "TTTKYYKTTTTKKTTT",
        "TTTTKKTTTTTTTTTT",
        "                ",
      ],
      walk2: [
        "  KK      KK    ",
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KWWWWWWWWWWFK  ",
        " KWYKFWWFKWYFK  ",
        " KWYKKWWKKWYFK  ",
        " KWWFOOOOFWWFK  ",
        "  KFFFFFFFFFFK  ",
        " KFBWWWWWWWWBFK ",
        " KFBWWFWWFWWBFK ",
        " KFBWWWWWWWWBFK ",
        "  KFFFFFFFFFFK  ",
        "    KYYK  KYYK  ", // Hopping along branch
        "TTTTKKTTTKYYKTTT",
        "TTTTTTTTTTKKTTTT",
        "                ",
      ],
      jump: [
        "  KK      KK    ", // Spreading full wings!
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KWWWWWWWWWWFK  ",
        " KWYKFWWFKWYFK  ",
        " KWYKKWWKKWYFK  ",
        " KWWFOOOOFWWFK  ",
        "KKFFFFFFFFFFKK  ",
        " KFFBWWWWWWBFK  ",
        "  KFBWWWWWWBFK  ",
        "   KFFFFFFFFK   ",
        "    KYYKKYYK    ", // Flying off branch
        "    KKKKKKKK    ",
        "TTTTTTTTTTTTTTTT",
        "                ",
        "                ",
      ],
      happy: [
        "  KK      KK    ",
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KWWWWWWWWWWFK  ",
        " KW^^FWWFKW^^FK ", // Head tilted happy squint
        " KWWFOOOOFWWFK  ",
        " PKFFFFFFFFFFKP ", // Happy blush
        "  KFFFFFFFFFFK  ",
        " KFBWWWWWWWWBFK ",
        " KFBWWFWWFWWBFK ",
        " KFBWWWWWWWWBFK ",
        "  KFFFFFFFFFFK  ",
        "   KYYK  KYYK   ",
        "TTTKYYKTTKYYKTTT",
        "TTTTKKTTTTKKTTTT",
        "                ",
      ],
      sleep: [
        "                ",
        "  KK      KK    ",
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KW--FWWFKW--FK ", // Head tucked into feathers
        " KWWFOOOOFWWFK  ",
        "  KFFFFFFFFFFK  ",
        " KFBWWWWWWWWBFK ",
        "  KFFFFFFFFFFK  ",
        "   KYYK  KYYK   ",
        "TTTKYYKTTKYYKTTT",
        "TTTTKKTTTTKKTTTT",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK      KK    ",
        " KFFK    KFFK   ",
        " KFFBKKKKFBFFK  ",
        " KWWWWWWWWWWFK  ",
        " KWYKFWWFKWYFK  ",
        " KWYKKWWKKWYFK  ",
        " KWWFOOOOFWWFK  ",
        "  KFFFFFFFFFFK  ",
        " KFBWWWWWWWWBFK ",
        " KFBWWWWWWWWBFK ",
        "  KFFFFFFFFFFK  ",
        "   KYYK  KYYK   ",
        "TTTKYYKTTKYYKTTT", // Perched stoically
        "TTTTKKTTTTKKTTTT",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "咕咕！夜行猫头鹰已完成全网 SEO 关键词扫描，这套文案转化率极高！",
      "REC10 录音翻译手表的受众最关注'会议记录省时 80%'的核心痛点！",
      "点击猫头鹰，为你开启 AI 深度标题诊断实验室！",
    ],
  },

  // =========================================================================
  // 11. 🐹 HAMSTER (金丝熊 / 仓鼠)
  // Characteristic features:
  // - Gigantic puffed-out chubby cheek pouches (鼓鼓囊囊大腮帮)
  // - Tiny rounded ears with pink folds
  // - Holding a classic black-and-white striped sunflower seed in front paws!
  // - Golden honey apricot fur with white underbelly
  // - Round ball-shaped body with tiny pink feet
  // =========================================================================
  hamster: {
    name: "金丝胖仓鼠 (Nitro)",
    emoji: "🐹",
    species: "仓鼠",
    color: "#f59e0b",
    intro: "腮帮子塞得鼓鼓囊囊的金丝小仓鼠，正用两只小爪爪抱着葵花籽咔哧啃着",
    buff: "批量文案极速生成与多渠道发布 +35%",
    palette: {
      " ": "transparent",
      "K": "#451a03", // Warm dark outline
      "H": "#f59e0b", // Rich golden apricot hamster fur
      "L": "#fbbf24", // Light butterscotch highlight
      "W": "#ffffff", // Pure white cheek puff & sunflower seed stripe
      "B": "#0f172a", // Shiny black button eyes & sunflower seed black shell
      "P": "#fb7185", // Pink nose & inner ear & tiny paws
    },
    frames: {
      idle1: [
        "  KK      KK    ", // 0 Tiny round ears
        " KPKK    KPKK   ", // 1 Pink inner ears
        " KHLKKKKKKHLK   ", // 2 Head top
        "KHLHHHHHHHHHLK  ", // 3 Golden forehead
        "KHLBHHHHHHBLHLK ", // 4 Shiny black bead eyes
        "KWWWWPWWPWWWWK  ", // 5 Puffed-out gigantic white cheek pouches & pink nose
        "KWWWWWWPWWWWK   ", // 6 Puffed cheeks
        " KKHHWWWWWHHK   ", // 7 Muzzle base
        " KHHHKBWBKHHHK  ", // 8 Holding black & white striped sunflower seed (葵花籽)
        " KHHHKBWBKHHHK  ", // 9 Sunflower seed in front paws
        " KHHHWWWWWHHHK  ", // 10 Round ball body & white belly
        "  KHHHHHHHHHHK  ", // 11 Chubby spherical torso
        "  KHPKKKKKPHK   ", // 12 Tiny pink paws
        "  KKK     KKK   ", // 13 Grounded feet
        "                ", // 14
        "                ", // 15
      ],
      idle2: [
        "  KK      KK    ", // 0
        " KPKK    KPKK   ", // 1
        " KHLKKKKKKHLK   ", // 2
        "KHLHHHHHHHHHLK  ", // 3
        "KHL-HHHHHH-LHLK ", // 4 Winking eyes while chewing
        "KWWWWPWWPWWWWK  ", // 5
        "KWWWWWWPWWWWK   ", // 6
        " KKHHWWWWWHHK   ", // 7
        " KHHHKBWBKHHHK  ", // 8 Chewing sunflower seed (nom-nom)
        " KHHHKBWBKHHHK  ", // 9
        " KHHHWWWWWHHHK  ", // 10
        "  KHHHHHHHHHHK  ", // 11
        "  KHPKKKKKPHK   ", // 12
        "  KKK     KKK   ", // 13
        "                ", // 14
        "                ", // 15
      ],
      walk1: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KHLKKKKKKHLK   ",
        "KHLHHHHHHHHHLK  ",
        "KHLBHHHHHHBLHLK ",
        "KWWWWPWWPWWWWK  ",
        "KWWWWWWPWWWWK   ",
        " KKHHWWWWWHHK   ",
        " KHHHKBWBKHHHK  ",
        " KHHHKBWBKHHHK  ",
        " KHHHWWWWWHHHK  ",
        "  KHHHHHHHHHHK  ",
        "   KHPK   KHPK  ", // Rapid tiny feet scurrying
        "   KKK     KKK  ",
        "                ",
        "                ",
      ],
      walk2: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KHLKKKKKKHLK   ",
        "KHLHHHHHHHHHLK  ",
        "KHLBHHHHHHBLHLK ",
        "KWWWWPWWPWWWWK  ",
        "KWWWWWWPWWWWK   ",
        " KKHHWWWWWHHK   ",
        " KHHHKBWBKHHHK  ",
        " KHHHKBWBKHHHK  ",
        " KHHHWWWWWHHHK  ",
        "  KHHHHHHHHHHK  ",
        "  KHPK   KHPK   ", // Rapid tiny feet scurrying
        "  KKK     KKK   ",
        "                ",
        "                ",
      ],
      jump: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KHLKKKKKKHLK   ",
        "KHLHHHHHHHHHLK  ",
        "KHLBHHHHHHBLHLK ",
        "KWWWWPWWPWWWWK  ",
        "KWWWWWWPWWWWK   ",
        " KKHHWWWWWHHK   ",
        " KKHHWWWWWHHKK  ",
        "  KHKBWBKHK     ", // Jumping hamster sphere holding seed tight!
        "  KKHWWWHKK     ",
        "   KHPKPKK      ",
        "   KKK KKK      ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KHLKKKKKKHLK   ",
        "KHLHHHHHHHHHLK  ",
        "KHL^HHHHHH^LHLK ", // Joyful hamster grin
        "PKWWWPWWPWWWKP  ", // Big pink blush on cheek pouches
        "KWWWWWWPWWWWK   ",
        " KKHHWWWWWHHK   ",
        " KHHHKBWBKHHHK  ",
        " KHHHKBWBKHHHK  ",
        " KHHHWWWWWHHHK  ",
        "  KHHHHHHHHHHK  ",
        "  KHPKKKKKPHK   ",
        "  KKK     KKK   ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "                ",
        "  KK      KK    ",
        " KPKK    KPKK   ",
        "KHLHHHHHHHHHLK  ",
        "KHL-HHHHHH-LHLK ", // Curled into a spherical golden mochi ball
        "KWWWWWWPWWWWK   ",
        "KHHHKBWBKHHHK   ",
        "KHHHHWWWWWHHHHK ",
        " KHHHHHHHHHHHK  ",
        "  KKKKKKKKKKK   ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK      KK    ",
        " KPKK    KPKK   ",
        " KHLKKKKKKHLK   ",
        "KHLHHHHHHHHHLK  ",
        "KHLBHHHHHHBLHLK ",
        "KWWWWPWWPWWWWK  ",
        "KWWWWWWPWWWWK   ",
        " KKHHWWWWWHHK   ",
        " KHHHKBWBKHHHK  ",
        " KHHHKBWBKHHHK  ",
        " KHHHWWWWWHHHK  ",
        " KHHHHHHHHHHHK  ",
        "  KKHPKKKKPHKK  ", // Sits back on plump bottom
        "   KKK    KKK   ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "吱吱！大腮帮子里藏了 50 粒金黄葵花籽，一键批量连发！",
      "仓鼠飞轮急速运转中，文案矩阵生成绝不卡顿！",
      "投喂一颗金黄葵花籽，小仓鼠会开心得满屏幕打滚！",
      "E12 智能眼镜 16mm 大喇叭，骑行听歌超级带劲！",
    ],
  },
};
