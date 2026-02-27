/**
 * ポートフォリオデータ
 * ここを編集して自分の情報に書き換えてください
 */

const PORTFOLIO_DATA = {

  // ========== 基本情報 ==========
  profile: {
    name: "山田 太郎",
    nameEn: "Taro Yamada",
    title: "Webデベロッパー / UIデザイナー",
    tagline: "使いやすく、美しいプロダクトを創る",
    bio: "東京を拠点に活動するフリーランスのWebデベロッパー兼UIデザイナーです。フロントエンド開発からUI/UXデザインまで幅広く対応。ユーザー体験を最優先に、機能的で美しいプロダクトを届けることを大切にしています。",
    email: "hello@example.com",
    location: "東京, 日本",
    avatar: "images/avatar.jpg",   // プロフィール画像のパス
    socialLinks: [
      { label: "GitHub",   url: "https://github.com/",   icon: "github" },
      { label: "Twitter",  url: "https://twitter.com/",  icon: "twitter" },
      { label: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    ],
  },

  // ========== 実績一覧 ==========
  // image: "images/フォルダに入れた画像ファイル名"
  // videoType: "youtube" または "mp4" または null
  // videoSrc: YouTubeのURLまたはMP4ファイルのパス
  works: [
    {
      id: 1,
      title: "ECサイト リニューアル",
      category: "Web開発",
      description: "大手アパレルブランドのECサイトをフルリニューアル。Next.jsとTailwind CSSを採用し、パフォーマンスを大幅改善。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify"],
      image: "images/not scan.jpg",
      videoType: "youtube",
      videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      link: "https://example.com",
      date: "2024-11",
    },
    {
      id: 2,
      title: "コーポレートサイト制作",
      category: "Webデザイン",
      description: "スタートアップ企業のコーポレートサイトをゼロから制作。ブランドアイデンティティの確立からデザイン・実装まで一貫して担当。",
      tags: ["Figma", "React", "GSAP", "WordPress"],
      image: "images/work2.jpg",
      videoType: null,
      videoSrc: null,
      link: "https://example.com",
      date: "2024-09",
    },
    {
      id: 3,
      title: "ダッシュボードUI設計",
      category: "UIデザイン",
      description: "SaaSプロダクトの管理画面UI/UXを設計。ユーザーインタビューと反復的なプロトタイピングで使いやすさを追求。",
      tags: ["Figma", "ユーザーリサーチ", "プロトタイピング"],
      image: "images/work3.jpg",
      videoType: "mp4",
      videoSrc: "videos/demo.mp4",
      link: null,
      date: "2024-07",
    },
    {
      id: 4,
      title: "スマホアプリ UI",
      category: "アプリデザイン",
      description: "フィットネストラッキングアプリのUI設計。ユーザーが毎日使いたくなるような体験を重視したデザインを実現。",
      tags: ["Figma", "iOS", "Android", "Motion Design"],
      image: "images/work4.jpg",
      videoType: null,
      videoSrc: null,
      link: "https://example.com",
      date: "2024-05",
    },
    {
      id: 5,
      title: "LP制作 / マーケティング",
      category: "Web開発",
      description: "新商品発売に合わせたランディングページを制作。A/Bテストを実施しCVRを従来比150%に改善。",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "GA4"],
      image: "images/work5.jpg",
      videoType: "youtube",
      videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      link: "https://example.com",
      date: "2024-03",
    },
    {
      id: 6,
      title: "ブランディング / VI設計",
      category: "デザイン",
      description: "食品ベンチャーのブランドアイデンティティを策定。ロゴ・カラーパレット・タイポグラフィ・各種ガイドラインを整備。",
      tags: ["Illustrator", "Photoshop", "ブランディング"],
      image: "images/work6.jpg",
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-01",
    },
  ],

  // ========== スキル ==========
  skills: [
    { name: "HTML / CSS",      level: 95, category: "Frontend" },
    { name: "JavaScript",      level: 90, category: "Frontend" },
    { name: "React / Next.js", level: 85, category: "Frontend" },
    { name: "TypeScript",      level: 80, category: "Frontend" },
    { name: "Figma",           level: 90, category: "Design" },
    { name: "UI/UX Design",    level: 85, category: "Design" },
    { name: "Node.js",         level: 70, category: "Backend" },
    { name: "WordPress",       level: 80, category: "CMS" },
  ],

  // ========== 数字で見る実績 ==========
  stats: [
    { value: "50+",  label: "完了プロジェクト" },
    { value: "30+",  label: "クライアント数" },
    { value: "5年",  label: "実務経験" },
    { value: "98%",  label: "顧客満足度" },
  ],

};
