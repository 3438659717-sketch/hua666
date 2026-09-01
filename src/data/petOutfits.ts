import { PetAccessory, AccessoryDefinition } from "./petData";

// Helper function to turn 16x16 ASCII grid into pixel rows
function makeGrid(
  matrix: string[],
  palette: Record<string, string>
): { r: number; c: number; color: string }[] {
  const rows: { r: number; c: number; color: string }[] = [];
  matrix.forEach((line, r) => {
    for (let c = 0; c < 16; c++) {
      const char = line[c] || " ";
      if (char !== " " && palette[char]) {
        rows.push({ r, c, color: palette[char] });
      }
    }
  });
  return rows;
}

export const EXTRA_ACCESSORY_SPRITES: Record<string, AccessoryDefinition> = {
  // =========================================================================
  // 1. 全身完整套装 (Full Outfits) - Covers Hat + Upper Body + Lower Body + Shoes
  // =========================================================================
  suit_astronaut: {
    name: "星际宇航全战服",
    icon: "👨‍🚀",
    desc: "全封闭太空战服：防辐射面罩+增压胸甲+反重力宇航靴",
    category: "suit",
    price: 320,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "     WWWWWW     ", // 0 Helmet Dome top
        "    WWWWWWWW    ", // 1 Helmet Dome
        "   WWSSSSSSWW   ", // 2 Visor glass upper
        "   WWSSSSSSWW   ", // 3 Visor glass middle
        "   WWBDSSDBWW   ", // 4 Visor reflection
        "    WWWWWWWW    ", // 5 Helmet base seal
        "   WWWWWWWWWW   ", // 6 Neck pressure ring
        "  WWWWDDDDWWWW  ", // 7 Upper Chest & Oxygen intake
        " WWWWRSGGSRWWWW ", // 8 Chest Console (Red/Green LED buttons)
        " WWWWDDDDDDWWWW ", // 9 Chest life-support pack
        " WWWWWWWWWWWWWW ", // 10 Torso & pressurized sleeves
        "  GGYYYYYYYYGG  ", // 11 High-tech utility belt
        "  WWWW    WWWW  ", // 12 Space Pants Thighs
        "  WWWW    WWWW  ", // 13 Space Pants Knees
        "  SSWW    WWSS  ", // 14 Boots cuff
        "  DDDD    DDDD  ", // 15 Magnetic thruster boots
      ],
      {
        W: "#f8fafc", // White suit armor
        D: "#0284c7", // Deep blue armor plates
        S: "#38bdf8", // Sky blue visor & thrusters
        B: "#0369a1", // Visor shade
        R: "#ef4444", // Red LED
        G: "#22c55e", // Green LED
        Y: "#facc15", // Gold utility belt
      }
    ),
  },

  suit_wizard: {
    name: "星空大魔导长袍",
    icon: "🧙‍♂️",
    desc: "霍格沃茨学派大魔导法袍：尖顶星空帽+秘法符文长袍+贤者战靴",
    category: "suit",
    price: 360,
    unlockLevel: 5,
    rows: makeGrid(
      [
        "       PP       ", // 0 Wizard Hat Tip
        "      PPPP      ", // 1 Wizard Hat Cone
        "     PPPPPP     ", // 2 Wizard Hat Mid
        "    YYYYYYYY    ", // 3 Golden Hat Band
        "   PPPPPPPPPP   ", // 4 Hat Brim
        "                ", // 5 Face visible
        "   PPPPPPPPPP   ", // 6 Robe High Collar
        "  PPPPDDDDPPPP  ", // 7 Robe Shoulders & Chest
        " PPPPDDYPDDPPPP ", // 8 Star Pendant (Gold)
        " PPPPDDDDDDPPPP ", // 9 Robe Mystic Rune Inscription
        " PPPPDDDDDDPPPP ", // 10 Robe & Wide sleeves
        "  YYYYYYYYYYYY  ", // 11 Mystic Gold Sash Belt
        "  PPPPPPPPPPPP  ", // 12 Flowing Robe Skirt
        "  PPPPPDDPPPPP  ", // 13 Flowing Robe Skirt
        "  DPPPPPPPPPPD  ", // 14 Robe Hem
        "   YYY    YYY   ", // 15 Gold Sage Slippers
      ],
      {
        P: "#7e22ce", // Purple mage velvet
        D: "#581c87", // Deep arcane purple
        Y: "#facc15", // Star yellow
      }
    ),
  },

  suit_ninja: {
    name: "暗影隐忍潜行服",
    icon: "🥷",
    desc: "暗部忍者夜行全套：木叶护额+夜行紧身劲装+绑腿苦无暗器带",
    category: "suit",
    price: 340,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "                ", // 0
        "   KKKKKKKKKK   ", // 1 Headband Top
        "  KKWWSSWWSSKK  ", // 2 Headband Metal Plate
        "  RRKKKKKKKKRR  ", // 3 Red Ribbons on sides
        "                ", // 4 Eyes visible
        "   RRRRRRRRRR   ", // 5 Ninja Cowl
        "  RRRRRRRRRRRR  ", // 6 Cowl Drape
        " KKKKRRRRRRKKKK ", // 7 Shinobi Shoulders
        " KKKKSSKKSSKKKK ", // 8 Silver Cross Straps
        " KKKKKKKKKKKKKK ", // 9 Ninja Vest & Arm Sleeves
        " KKKKSSSSSSKKKK ", // 10 Kunai Holster
        "  RRRRRRRRRRRR  ", // 11 Red Obi Waist Sash
        "  KKKK    KKKK  ", // 12 Black Shinobi Trousers
        "  WWSS    WWSS  ", // 13 White Shin Wraps (Bandages)
        "  WWSS    WWSS  ", // 14 White Shin Wraps
        "  KKKK    KKKK  ", // 15 Stealth Tabi Boots
      ],
      {
        K: "#0f172a", // Dark stealth obsidian
        R: "#ef4444", // Crimson scarf & ribbon
        W: "#f8fafc", // White bandages & metal highlight
        S: "#94a3b8", // Silver kunai / plate
      }
    ),
  },

  suit_kimono: {
    name: "和风绯樱羽织服",
    icon: "👘",
    desc: "传统和风正装全套：落樱花簪+朱红羽织+紫金腰带与木屐",
    category: "suit",
    price: 350,
    unlockLevel: 5,
    rows: makeGrid(
      [
        "          FF    ", // 0 Sakura hairpin top
        "         FFYY   ", // 1 Sakura hairpin petal & gold
        "                ", // 2
        "                ", // 3
        "                ", // 4 Face visible
        "   WWWWWWWWWW   ", // 5 White Inner Kimono Collar
        "  RRRRWWWWWRRRR ", // 6 Red Haori Shoulders
        " RRRRRWWWWWRRRRR", // 7 Overlapping Robe Collar
        " RRRRRRWWWWRRRRR", // 8 Kimono Chest
        " RRRRRRRRRRRRRRR", // 9 Wide Kimono Sleeves
        " RRRRRRRRRRRRRRR", // 10 Kimono Sleeves
        "  PPPPYYYYPPPP  ", // 11 Purple & Gold Obi Sash
        "  RRRRRRRRRRRR  ", // 12 Flowing Kimono Hakama
        "  RRRRRRRRRRRR  ", // 13 Kimono Hem
        "  WWWW    WWWW  ", // 14 White Tabi Socks
        "  BBBB    BBBB  ", // 15 Wooden Geta Clogs
      ],
      {
        R: "#e11d48", // Rose Red Kimono
        W: "#ffffff", // Pure White silk
        P: "#7e22ce", // Royal Purple Obi
        Y: "#facc15", // Gold Obi knot
        F: "#f472b6", // Pink Sakura
        B: "#b45309", // Wooden brown geta
      }
    ),
  },

  suit_tuxedo: {
    name: "贵族绅士燕尾服",
    icon: "🤵",
    desc: "英伦皇家盛宴正装：丝绒高礼帽+双排扣燕尾服+红领结皮鞋",
    category: "suit",
    price: 380,
    unlockLevel: 6,
    rows: makeGrid(
      [
        "     BBBBBB     ", // 0 Silk Top Hat Top
        "     BBBBBB     ", // 1 Silk Top Hat Crown
        "     RRRRRR     ", // 2 Crimson Hat Band
        "   BBBBBBBBBB   ", // 3 Top Hat Brim
        "                ", // 4 Face visible
        "   WWWWWWWWWW   ", // 5 Stiff White Collar
        "  BBBBWWWWBBBB  ", // 6 Black Lapels & White Shirt
        " BBBBRRRRRRBBBB ", // 7 Red Bowtie
        " BBBBWGWWGWWBBBB", // 8 Pleated Shirt & Gold Buttons
        " BBBBWGWWGWWBBBB", // 9 Double-breasted Jacket
        " BBBBBBBBBBBBBB ", // 10 Black Jacket & Sleeves
        "  BBBBBBBBBBBB  ", // 11 Tailcoat Waist
        "  BBBB    BBBB  ", // 12 Tuxedo Trousers Thighs
        "  BBBB    BBBB  ", // 13 Tuxedo Trousers Knees
        "  BBBB    BBBB  ", // 14 Tuxedo Trousers Shins
        "  KKKK    KKKK  ", // 15 Polished Black Patent Leather Shoes
      ],
      {
        B: "#1e293b", // Slate black tuxedo
        K: "#020617", // Ultra black shiny shoes
        W: "#f8fafc", // Crisp white shirt
        R: "#ef4444", // Red silk bowtie & ribbon
        G: "#facc15", // Gold buttons
      }
    ),
  },

  suit_santa: {
    name: "圣诞狂欢红绒服",
    icon: "🎅",
    desc: "节日限定全套：圣诞绒球帽+白绒边红绒袄+金扣黑皮带雪地靴",
    category: "suit",
    price: 290,
    unlockLevel: 2,
    rows: makeGrid(
      [
        "           WW   ", // 0 White Pom-pom
        "          RRWW  ", // 1 Santa Hat Tip
        "     RRRRRRRR   ", // 2 Santa Hat Crown
        "   WWWWWWWWWWWW ", // 3 White Fur Hat Rim
        "                ", // 4 Face visible
        "   WWWWWWWWWW   ", // 5 White Fur Coat Collar
        "  RRRRWWWWWRRRR ", // 6 Red Velvet Shoulders
        " RRRRRWWWWWRRRRR", // 7 Red Coat with White Fur Center
        " RRRRRWWWWWRRRRR", // 8 Red Velvet & Sleeves
        " RRRRRWWWWWRRRRR", // 9 Red Velvet & Sleeves
        "  KKKKYYYYKKKK  ", // 10 Black Leather Belt & Gold Buckle
        "  WWWWWWWWWWWW  ", // 11 White Fur Coat Trim
        "  RRRR    RRRR  ", // 12 Red Velvet Pants
        "  WWWW    WWWW  ", // 13 White Fur Boot Cuffs
        "  KKKK    KKKK  ", // 14 Black Snow Boots
        "  KKKK    KKKK  ", // 15 Snow Boots Soles
      ],
      {
        R: "#ef4444", // Christmas Red velvet
        W: "#ffffff", // Fluffy white fur
        K: "#0f172a", // Black leather belt & boots
        Y: "#facc15", // Gold brass buckle
      }
    ),
  },

  suit_emperor: {
    name: "黄金帝王加冕服",
    icon: "👑",
    desc: "帝国至尊全套：红宝石皇冠+黄金战铠+赤红王权披风",
    category: "suit",
    price: 450,
    unlockLevel: 8,
    rows: makeGrid(
      [
        "    Y  R  R  Y  ", // 0 Imperial Crown peaks
        "    YYYYYYYYYY  ", // 1 Crown Jewels
        "    YYRRYYRRYY  ", // 2 Ruby Inset
        "   YYYYYYYYYYYY ", // 3 Golden Crown Rim
        "                ", // 4 Face visible
        "  RRRRYYYYYYRRR ", // 5 Crimson Cape Mantle & Gold Gorget
        " RRRRYYYYYYYYRRR", // 6 Golden Pauldrons
        " RRRRYYRRRRYYRRR", // 7 Imperial Crest
        " RRRRYYYYYYYYRRR", // 8 Golden Breastplate
        " RRRRYYYYYYYYRRR", // 9 Plated Gold Gauntlets
        " RRRRYYYYYYYYRRR", // 10 Gold Armor
        "  RRRRYYYYYYRRR ", // 11 Gilded Armor Tassets
        "  YYYY    YYYY  ", // 12 Gold Greaves Thighs
        "  YYYY    YYYY  ", // 13 Gold Greaves Knees
        "  YYYY    YYYY  ", // 14 Gold Sabatons
        "  DDDD    DDDD  ", // 15 Armored Soles
      ],
      {
        Y: "#facc15", // Gleaming Gold
        R: "#ef4444", // Royal Crimson Red
        D: "#b45309", // Deep Gold Shadow
      }
    ),
  },

  suit_dev: {
    name: "硅谷极客工程师",
    icon: "🧑‍💻",
    desc: "程序员全套：降噪耳机+红黑格纹衬衫+牛津牛仔裤与球鞋",
    category: "suit",
    price: 260,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "    SSSSSSSS    ", // 1 Cyan Headband
        "   SS      SS   ", // 2 Headphone earcups top
        "  SSSS    SSSS  ", // 3 Studio Headphone earcups
        "                ", // 4 Face visible
        "   RRRRRRRRRR   ", // 5 Plaid Shirt Collar
        "  RRKKRRKKRRKK  ", // 6 Red & Black Plaid Shoulders
        " RRKKRRSSRKKRRKK", // 7 Cyan Dev Badge Lanyard
        " RRKKRRSSRKKRRKK", // 8 Plaid Flannel Chest
        " RRKKRRKKRRKKRRK", // 9 Plaid Flannel Sleeves
        " RRKKRRKKRRKKRRK", // 10 Plaid Flannel Hem
        "  KKKKDDDDKKKK  ", // 11 Leather Belt
        "  DDDD    DDDD  ", // 12 Blue Washed Denim Jeans
        "  DDDD    DDDD  ", // 13 Denim Knees
        "  DDDD    DDDD  ", // 14 Denim Cuffs
        "  RRWW    WWRR  ", // 15 Retro Red & White Sneakers
      ],
      {
        R: "#ef4444", // Red Flannel & Sneaker
        K: "#0f172a", // Charcoal Black Plaid & Belt
        S: "#38bdf8", // Cyan Dev Badge & Headphones
        D: "#1d4ed8", // Classic Indigo Denim
        W: "#f8fafc", // White Sneaker Sole
      }
    ),
  },

  suit_rockstar: {
    name: "重金属摇滚乐手",
    icon: "🎸",
    desc: "朋克摇滚全套：暗黑战术墨镜+铆钉机车皮背心+破洞裤马丁靴",
    category: "suit",
    price: 330,
    unlockLevel: 5,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "   KKKKKKKKKK   ", // 3 Shades Top Frame
        "  KKSSKKKKSSKK  ", // 4 Mirrored Rocker Shades
        "   KKKKKKKKKK   ", // 5 Studded Choker Collar
        "  KKSSKKKKSSKK  ", // 6 Silver Studded Vest Shoulders
        " KKKKRRRRYYKKKK ", // 7 Rock Flame Graphic on Chest
        " KKKKRRRRYYKKKK ", // 8 Black Leather Vest
        " KKKKSSKKSSKKKK ", // 9 Studded Leather Sides & Arms
        " KKKKKKKKKKKKKK ", // 10 Leather Vest Hem
        "  KKYYSSKKSSKK  ", // 11 Silver Wallet Chains & Buckle
        "  KKKK    KKKK  ", // 12 Black Ripped Jeans
        "  WWKK    KKWW  ", // 13 White Ripped Skin Knees
        "  KKKK    KKKK  ", // 14 Heavy Martin Boots
        "  KKKK    KKKK  ", // 15 Heavy Lug Soles
      ],
      {
        K: "#18181b", // Midnight black leather
        S: "#e4e4e7", // Chrome silver spikes & chains
        R: "#ef4444", // Flame Red
        Y: "#facc15", // Flame Yellow / Gold Buckle
        W: "#f8fafc", // Ripped skin/fabric
      }
    ),
  },

  suit_cyber_mecha: {
    name: "赛博机甲重外骨骼",
    icon: "🤖",
    desc: "近未来重装机甲全套：AR扫描目镜+等离子反应堆胸甲+推进重靴",
    category: "suit",
    price: 480,
    unlockLevel: 9,
    rows: makeGrid(
      [
        "                ", // 0
        "    CCCCCCCC    ", // 1 Mecha Head Plate
        "   CCCCCCCCCC   ", // 2 Armored Forehead
        "  CCCCCCCCCCCC  ", // 3 Tactical AR Visor Top
        "  CCSSSSSSSSCC  ", // 4 Neon Glowing Cyan AR Visor
        "   CCCCCCCCCC   ", // 5 Armored Neck Collar
        "  CCCCDDDDCCCC  ", // 6 Heavy Armored Shoulders
        " CCCCCCPPPCCCCCC", // 7 Plasma Reactor Core (Purple)
        " CCCCCCPPPCCCCCC", // 8 Plasma Reactor Core (Purple)
        " CCCCCCDDDCCCCCC", // 9 Heavy Mecha Exoskeleton
        " CCCCCCCCCCCCCC ", // 10 Exoskeleton Arms & Plating
        "  SSSSDDDDSSSS  ", // 11 Cyan Luminescent Belt
        "  CCCC    CCCC  ", // 12 Hydraulic Leg Joints
        "  CCCC    CCCC  ", // 13 Reinforced Titanium Shins
        "  SSSS    SSSS  ", // 14 Cyan Ion Thruster Rings
        "  DDDD    DDDD  ", // 15 Heavy Mecha Landers
      ],
      {
        C: "#0f172a", // Dark Titanium plating
        D: "#334155", // Steel frame
        S: "#22d3ee", // Glowing Neon Cyan
        P: "#c084fc", // Plasma Core Purple
      }
    ),
  },

  suit_scientist: {
    name: "首席科学家白大褂",
    icon: "🩺",
    desc: "实验室特级研究员全套：单目战术镜+双袋白大褂与听诊器",
    category: "suit",
    price: 300,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "   CCCC         ", // 3 Monocle Top (Left eye)
        "  CCSSCC        ", // 4 Digital Monocle Visor
        "   WWWWWWWWWW   ", // 5 White Lab Coat Collar
        "  WWWWDDDDWWWW  ", // 6 Lab Coat Shoulders & Navy Shirt
        " WWWWDDSSDDWWWW ", // 7 Stethoscope & Pocket Pens
        " WWWWWWDDWWWWWW ", // 8 Double-breasted Lab Coat
        " WWWWWWWWWWWWWW ", // 9 Lab Coat Sleeves & Pockets
        " WWWWWWWWWWWWWW ", // 10 Lab Coat Hem
        "  WWWWWWWWWWWW  ", // 11 Long Lab Coat Body
        "  DDDD    DDDD  ", // 12 Charcoal Research Trousers
        "  DDDD    DDDD  ", // 13 Trousers Knees
        "  DDDD    DDDD  ", // 14 Trousers Shins
        "  KKKK    KKKK  ", // 15 Clean Leather Oxford Shoes
      ],
      {
        W: "#f8fafc", // Pure White Lab Coat
        D: "#334155", // Deep Slate Shirt & Trousers
        C: "#0284c7", // Blue Monocle Rim
        S: "#38bdf8", // Cyan Lens & Stethoscope
        KK: "#0f172a", // Black Oxford Shoes
        K: "#0f172a",
      }
    ),
  },

  // =========================================================================
  // 2. 衣服 / 外套 (Tops & Outerwear) - Covers Full Chest, Sleeves & Hem (Rows 6-11)
  // =========================================================================
  top_hoodie: {
    name: "潮酷连帽卫衣",
    icon: "👕",
    desc: "街头潮流重磅连帽卫衣，带抽绳与袋鼠插袋",
    category: "top",
    price: 160,
    unlockLevel: 2,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   PPPPPPPPPP   ", // 6 Hoodie Collar & Drawstrings
        "  PPPPWWWWPPPP  ", // 7 White Drawstring cords
        " PPPPPPPPPPPPPP ", // 8 Heavy French Terry Chest
        " PPPPSSDDSSPPPP ", // 9 Kangaroo Pocket & Logo
        " PPPPDDDDDDPPPP ", // 10 Kangaroo Pocket
        "  PPPPPPPPPPPP  ", // 11 Ribbed Hem & Cuffs
      ],
      {
        P: "#6366f1", // Vibrant Indigo Violet
        W: "#f8fafc", // White drawstring cords
        S: "#38bdf8", // Cyan logo print
        D: "#4f46e5", // Deep indigo pocket shade
      }
    ),
  },

  top_suit_shirt: {
    name: "极客西服红领带",
    icon: "👔",
    desc: "深邃黑西装外套配白衬衫与热血红领带",
    category: "top",
    price: 200,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   WWWWWWWWWW   ", // 6 Crisp White Collar
        "  BBBBWWWWBBBB  ", // 7 Black Lapels & White Shirt
        " BBBBRRRRRRBBBB ", // 8 Red Silk Tie Knot
        " BBBBWWRRWWBBBB ", // 9 Long Red Tie & Pocket Square
        " BBBBWWRRWWBBBB ", // 10 Gold Buttons & Red Tie
        "  BBBBBBBBBBBB  ", // 11 Jacket Waist Hem
      ],
      {
        B: "#0f172a", // Midnight black suit jacket
        W: "#f8fafc", // Crisp white dress shirt
        R: "#ef4444", // Passion red tie
      }
    ),
  },

  top_hawaiian: {
    name: "夏威夷度假花衬衫",
    icon: "🌺",
    desc: "热带海岛风情印花短袖衬衫，清凉夏日感拉满",
    category: "top",
    price: 170,
    unlockLevel: 2,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   CCCCCCCCCC   ", // 6 Open Vacation Collar
        "  CCRRCCCCRRCC  ", // 7 Coral Pink Hibiscus Flowers
        " CCRRYYCCYYRRCC ", // 8 Yellow Palm leaves & Flowers
        " CCGGCCCCGGCCCC ", // 9 Green Monstera Leaf print
        " CCRRCCCCRRCCCC ", // 10 Summer Flowers
        "  CCCCCCCCCCCC  ", // 11 Shirt Hem
      ],
      {
        C: "#06b6d4", // Tropical Turquoise Ocean Blue
        R: "#fb7185", // Hibiscus Coral Pink
        Y: "#fde047", // Sunshine Gold
        G: "#22c55e", // Palm Tree Green
      }
    ),
  },

  top_cyber_jacket: {
    name: "赛博霓虹机能夹克",
    icon: "⚡",
    desc: "高透光夜光机能飞行员夹克，荧光青与暗夜紫配色",
    category: "top",
    price: 240,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   SSSSSSSSSS   ", // 6 Glowing Cyan High Tech Collar
        "  KKSSSSSSSSKK  ", // 7 Dark Shoulders & Neon Cyan
        " KKSSPPPPPPSSKK ", // 8 Dark Purple Chest with Cyan Trim
        " KKSSPPPPPPSSKK ", // 9 Cyber Neon Chest
        " KKSSSSSSSSSSKK ", // 10 Neon Piping & Sleeves
        "  SSSSSSSSSSSS  ", // 11 Reflective Elastic Hem
      ],
      {
        K: "#09090b", // Stealth matte black
        S: "#22d3ee", // High-glow Neon Cyan
        P: "#a855f7", // Deep Cyber Purple
      }
    ),
  },

  top_sweater: {
    name: "英伦学院风V领毛衣",
    icon: "🎓",
    desc: "牛津学院针织V领毛衣，藏青红杠撞色条纹",
    category: "top",
    price: 180,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   WWWWWWWWWW   ", // 6 White Inner Shirt Collar
        "  YYYYRRRRYYYY  ", // 7 Crimson V-Neck Stripe
        " YYYYRRBBRRYYYY ", // 8 Navy Inner V
        " YYYYYYDDYYYYYY ", // 9 Cream Cable Knit Body
        " YYYYYYYYYYYYYY ", // 10 Warm Knit Sleeves
        "  RRRRRRRRRRRR  ", // 11 Crimson Striped Hem
      ],
      {
        Y: "#fef3c7", // Warm Cream Wool
        R: "#991b1b", // Oxford Crimson Red
        B: "#1e3a8a", // Navy Blue
        D: "#d97706", // Cable stitch texture
        W: "#f8fafc", // White collar
      }
    ),
  },

  top_leather_jacket: {
    name: "重装朋克机车皮衣",
    icon: "🧥",
    desc: "重磅牛皮铆钉斜拉链皮衣，狂放不羁机车党",
    category: "top",
    price: 220,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   KKKKKKKKKK   ", // 6 Leather Notch Collar
        "  KKSSKKKKSSKK  ", // 7 Silver Chrome Lapel Studs
        " KKSSKKWWKKSSKK ", // 8 Diagonal Metal Zipper & Red Tee
        " KKKKKKWWKKKKKK ", // 9 Slanted Metal Zip
        " KKKKKKSSKKKKKK ", // 10 Heavy Belt Loop
        "  KKYYKKKKYYKK  ", // 11 Heavy Silver Waist Buckle
      ],
      {
        K: "#18181b", // Matte Black Leather
        S: "#e4e4e7", // Chrome Silver Rivets & Zippers
        W: "#ef4444", // Red inner graphic tee
        Y: "#facc15", // Brass buckle
      }
    ),
  },

  top_knit_cardigan: {
    name: "森林复古针织开衫",
    icon: "🧶",
    desc: "温暖墨绿粗棒针织开衫，缀有复古实木纽扣",
    category: "top",
    price: 190,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   GGGGGGGGGG   ", // 6 Cardigan Open V-Neck
        "  GGGGWWWWGGGG  ", // 7 White Inner Shirt
        " GGGGYWWWWYGGGG ", // 8 Wooden Button 1 & Knit
        " GGGGGWWWWGGGGG ", // 9 Thick Ribbed Stitching
        " GGGGYWWWWYGGGG ", // 10 Wooden Button 2 & Hem
        "  GGGGGGGGGGGG  ", // 11 Forest Cardigan Hem
      ],
      {
        G: "#166534", // Forest Pine Green
        W: "#f8fafc", // Soft White Tee
        Y: "#b45309", // Warm Wood Button
      }
    ),
  },

  top_sports_jersey: {
    name: "爆款创作者10号球衣",
    icon: "🎽",
    desc: "耀眼亮橙电竞球衣，胸前印有爆款10号冠军徽记",
    category: "top",
    price: 150,
    unlockLevel: 1,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "   OOOOOOOOOO   ", // 6 V-Neck Athletic Collar
        "  OOWWWWWWOOOO  ", // 7 White Shoulder Stripe
        " OOOOWWWWOOOOOO ", // 8 Champion #10 Top
        " OOOOWWWWOOOOOO ", // 9 Champion #10 Bottom
        " OOOOOOOOOOOOOO ", // 10 Breathable Mesh Fabric
        "  CCCCCCCCCCCC  ", // 11 Cyan Contrast Hem
      ],
      {
        O: "#ea580c", // Energetic Champion Orange
        W: "#ffffff", // Pure White Number & Stripes
        C: "#06b6d4", // Electric Cyan Accent
      }
    ),
  },

  // =========================================================================
  // 3. 裤装 / 下装 (Pants & Bottoms) - Covers Waistband, Legs & Shoes (Rows 11-15)
  // =========================================================================
  bottom_jeans: {
    name: "原色经典水洗牛仔裤",
    icon: "👖",
    desc: "深邃靛蓝丹宁水洗牛仔裤，橙黄车线与金属纽扣",
    category: "bottom",
    price: 150,
    unlockLevel: 1,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  YYYYYYYYYYYY  ", // 11 Gold Copper Rivets & Belt Loop
        "  DDDD    DDDD  ", // 12 Indigo Washed Denim Thighs
        "  DDDD    DDDD  ", // 13 Denim Faded Knees
        "  DDDD    DDDD  ", // 14 Denim Cuffs
        "  RRWW    WWRR  ", // 15 Red & White Street Sneakers
      ],
      {
        D: "#1d4ed8", // Classic Indigo Denim
        Y: "#facc15", // Copper/Gold Rivets
        R: "#ef4444", // Red Sneaker Canvas
        W: "#f8fafc", // White Rubber Toe & Sole
      }
    ),
  },

  bottom_swim_shorts: {
    name: "热带沙滩花花短裤",
    icon: "🩳",
    desc: "夏日海岛粉蓝拼色花短裤配浅蓝沙滩人字拖",
    category: "bottom",
    price: 130,
    unlockLevel: 1,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  WWWWWWWWWWWW  ", // 11 White Drawstring Waistband
        "  PPSP    PPSP  ", // 12 Pink & Cyan Floral Pattern
        "  SPPS    SPPS  ", // 13 Boardshorts Hem
        "                ", // 14 Bare Ankle
        "  SSSS    SSSS  ", // 15 Cyan Beach Flip-Flops
      ],
      {
        P: "#ec4899", // Neon Pink Flower
        S: "#38bdf8", // Sky Blue Water & Flip-Flops
        W: "#f8fafc", // White Drawstring
      }
    ),
  },

  bottom_cargo: {
    name: "战术多袋工装裤",
    icon: "🪖",
    desc: "硬核军绿多功能大贴袋工装裤配重型战术靴",
    category: "bottom",
    price: 190,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  KKKKKKKKKKKK  ", // 11 Tactical Webbing Belt
        "  GGYY    YYGG  ", // 12 Olive Drab & Gold Utility Clips
        "  GGGG    GGGG  ", // 13 Heavy Cargo Flap Pockets
        "  KKKK    KKKK  ", // 14 Heavy Combat Boots
        "  KKKK    KKKK  ", // 15 Lug Sole Grip
      ],
      {
        G: "#57534e", // Tactical Olive/Stone
        K: "#1c1917", // Black Tactical Webbing & Boots
        Y: "#eab308", // Brass Hardware
      }
    ),
  },

  bottom_skirt: {
    name: "日系学院百褶短裙",
    icon: "👗",
    desc: "优雅酒红格纹百褶短裙配白长袜与小皮鞋",
    category: "bottom",
    price: 180,
    unlockLevel: 2,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  RRRRRRRRRRRR  ", // 11 Skirt Waistband
        " RRPPRRPPRRPPRR ", // 12 Wine Red & Rose Plaid Pleats
        " RRPPRRPPRRPPRR ", // 13 Flared Pleated Hem
        "  WWWW    WWWW  ", // 14 White High Socks
        "  BBBB    BBBB  ", // 15 Brown Leather Loafers
      ],
      {
        R: "#9f1239", // Deep Wine Red
        P: "#fb7185", // Rose Plaid Accent
        W: "#f8fafc", // White High Socks
        B: "#78350f", // Brown Loafers
      }
    ),
  },

  bottom_overalls: {
    name: "复古丹宁背带工装裤",
    icon: "👖",
    desc: "带金属铜扣的经典丹宁背带裤配亮黄帆布鞋",
    category: "bottom",
    price: 210,
    unlockLevel: 3,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "  YY        YY  ", // 8 Brass Overall Buckles
        "  DDDDDDDDDDDD  ", // 9 Denim Chest Bib
        "  DDDDDDDDDDDD  ", // 10 Chest Bib Pocket
        "  DDDDDDDDDDDD  ", // 11 Waistband & Tool loops
        "  DDDD    DDDD  ", // 12 Denim Thighs
        "  DDDD    DDDD  ", // 13 Denim Knees
        "  DDDD    DDDD  ", // 14 Rolled-up Cuffs
        "  YYWW    WWYY  ", // 15 Bright Yellow Canvas Kicks
      ],
      {
        D: "#2563eb", // Vintage Blue Denim
        Y: "#eab308", // Yellow Canvas Shoes & Brass Buckles
        W: "#f8fafc", // White Rubber Toe
      }
    ),
  },

  bottom_cyber_joggers: {
    name: "赛博机能束脚裤",
    icon: "⚡",
    desc: "荧光青防撕裂机能束脚裤配发光 LED 气垫鞋",
    category: "bottom",
    price: 230,
    unlockLevel: 4,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  SSSSSSSSSSSS  ", // 11 Glowing Cyan Waistband
        "  KKSS    SSKK  ", // 12 Black Ripstop with Neon Straps
        "  KKSS    SSKK  ", // 13 Cyber Jogger Knees
        "  KKKK    KKKK  ", // 14 Elastic Cuffed Ankle
        "  SSSS    SSSS  ", // 15 Cyan LED Sole Air Cushion Shoes
      ],
      {
        K: "#09090b", // Deep Techwear Black
        S: "#22d3ee", // High-Voltage Neon Cyan
      }
    ),
  },

  bottom_martial_pants: {
    name: "武道纯黑束带长裤",
    icon: "🥋",
    desc: "极道黑带武术练功裤配纯白绑腿与千层底布鞋",
    category: "bottom",
    price: 170,
    unlockLevel: 2,
    rows: makeGrid(
      [
        "                ", // 0
        "                ", // 1
        "                ", // 2
        "                ", // 3
        "                ", // 4
        "                ", // 5
        "                ", // 6
        "                ", // 7
        "                ", // 8
        "                ", // 9
        "                ", // 10
        "  RRRRRRRRRRRR  ", // 11 Red Martial Arts Belt
        "  KKKK    KKKK  ", // 12 Black Loose Gi Pants
        "  WWSS    WWSS  ", // 13 White Leg Wraps (Bandages)
        "  WWSS    WWSS  ", // 14 White Leg Wraps
        "  KKKK    KKKK  ", // 15 Traditional Kung Fu Shoes
      ],
      {
        K: "#0f172a", // Obsidian Black Gi
        R: "#ef4444", // Red Martial Belt
        W: "#f8fafc", // White Ankle Wraps
        S: "#cbd5e1", // Wrap shadow
      }
    ),
  },
};
