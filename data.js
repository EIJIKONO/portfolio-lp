/**
 * ドローンポートフォリオデータ
 * ここを編集して自分の情報に書き換えてください
 */

const PORTFOLIO_DATA = {

  // ========== 基本情報 ==========
  profile: {
    name: "河野 栄治",
    nameEn: "Eiji Kono",
    title: "ドローンパイロット / データ活用コンサルタント",
    tagline: "ドローンを「飛ばす」より「活かす」、データで価値を創る",
    bio: "広島県広島市を拠点に活動するドローンパイロット。生コンクリート製造業での現場経験を活かし、橋梁点検・建築現場の定点撮影・空撮映像制作を手がける。Metashapeを活用した3D点群処理にも対応。AIとドローンの融合で新しい価値を創造することをミッションに掲げる。屋号：ウベコン浜田（株）",
    email: "hello@example.com",
    location: "広島県広島市",
    avatar: "images/avatar.jpg",
    socialLinks: [
      { label: "X (Twitter)", url: "https://x.com/sekitobayoshiro", icon: "twitter" },
    ],
  },

  // ========== 実績一覧 ==========
  // image: "images/フォルダに入れた画像ファイル名"
  // videoType: "youtube" または "mp4" または null
  works: [
    {
      id: 1,
      title: "橋梁点検 空撮",
      category: "インフラ点検",
      description: "老朽化した橋梁の目視点検にドローンを活用。人が立ち入れない箇所も高解像度映像で記録し、効率的かつ安全な点検を実現。",
      tags: ["DJI Mavic 3 Enterprise", "橋梁点検", "インフラ", "4K撮影"],
      image: "images/not scan.jpg",
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-11",
    },
    {
      id: 2,
      title: "建築現場 定点撮影",
      category: "建設・測量",
      description: "建築現場の工事進捗を定点空撮で記録。施主への報告資料作成や、Metashapeを用いた3D点群データの生成にも対応。",
      tags: ["DJI Mini 3", "定点撮影", "Metashape", "3D点群"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-09",
    },
    {
      id: 3,
      title: "サバイバルフィールド 空撮",
      category: "空撮映像",
      description: "サバイバルゲームフィールドの空撮撮影。フィールド全景や迫力あるゲームシーンを上空から捉え、集客PRコンテンツとして活用。",
      tags: ["DJI Mavic 3 Enterprise", "空撮", "PR映像", "4K"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-07",
    },
    {
      id: 4,
      title: "学校PR動画 空撮",
      category: "空撮映像",
      description: "学校の入学・広報PR用映像の空撮パート制作。校舎・グラウンド・周辺環境を美しく撮影し、学校の魅力を伝えるコンテンツを提供。",
      tags: ["DJI Mini 3", "PR映像", "空撮", "映像編集"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-05",
    },
  ],

  // ========== スキル ==========
  skills: [
    { name: "DJI Mavic 3 Enterprise",   level: 92, category: "機体" },
    { name: "DJI Mini 3",               level: 90, category: "機体" },
    { name: "Metashape（3D点群処理）",   level: 78, category: "ソフト" },
    { name: "橋梁・インフラ点検",         level: 85, category: "点検" },
    { name: "定点撮影・進捗管理",         level: 88, category: "撮影" },
    { name: "空撮映像制作",              level: 82, category: "映像" },
    { name: "AIドローン活用",            level: 75, category: "AI" },
    { name: "飛行申請・法令対応",         level: 70, category: "法務" },
  ],

  // ========== 数字で見る実績 ==========
  stats: [
    { value: "2機",    label: "保有機体" },
    { value: "3分野",  label: "点検/空撮/定点" },
    { value: "広島市", label: "活動拠点" },
    { value: "全国",   label: "出張対応" },
  ],

};
