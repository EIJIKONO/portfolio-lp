/**
 * ドローンポートフォリオデータ
 * ここを編集して自分の情報に書き換えてください
 */

const PORTFOLIO_DATA = {

  // ========== 基本情報 ==========
  profile: {
    name: "EIJI KONO",
    nameEn: "Eiji Kono",
    title: "ドローンパイロット / 空撮クリエイター",
    tagline: "空から見える、新しい視点を届ける",
    bio: "国土交通省認定ドローンパイロット。不動産・建設・イベント・映像制作など幅広い分野で空撮サービスを提供。最新機材と高い操縦技術で、地上では得られない圧倒的な映像表現を実現します。",
    email: "hello@example.com",
    location: "広島県 / 全国対応",
    avatar: "images/avatar.jpg",
    socialLinks: [
      { label: "YouTube",   url: "https://youtube.com/",   icon: "youtube" },
      { label: "Instagram", url: "https://instagram.com/", icon: "instagram" },
      { label: "Twitter",   url: "https://twitter.com/",   icon: "twitter" },
    ],
  },

  // ========== 実績一覧 ==========
  works: [
    {
      id: 1,
      title: "不動産 空撮撮影",
      category: "不動産",
      description: "新築マンション・戸建て物件の空撮。周辺環境・日当たり・ランドマークとの位置関係を俯瞰映像で訴求。販売促進に貢献。",
      tags: ["DJI Mavic 3", "4K撮影", "不動産", "物件紹介"],
      image: "images/not scan.jpg",
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-11",
    },
    {
      id: 2,
      title: "建設現場 進捗管理",
      category: "建設・測量",
      description: "大規模建設現場の定期空撮による進捗記録。3Dモデリングデータとの連携で精度の高い測量・管理をサポート。",
      tags: ["DJI Matrice", "測量", "3Dマッピング", "定期撮影"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-09",
    },
    {
      id: 3,
      title: "結婚式 空撮映像",
      category: "イベント",
      description: "屋外ウェディングの空撮映像制作。新郎新婦・ゲストを上空から捉えた感動的なカットを提供。編集・BGM付き納品。",
      tags: ["DJI Mini 4 Pro", "ウェディング", "映像編集", "4K"],
      image: null,
      videoType: "youtube",
      videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      link: null,
      date: "2024-08",
    },
    {
      id: 4,
      title: "観光PR映像制作",
      category: "映像制作",
      description: "自治体の観光プロモーション映像。四季折々の風景を空から捉え、地域の魅力を国内外に発信するコンテンツを制作。",
      tags: ["空撮", "映像編集", "Premiere Pro", "観光PR"],
      image: null,
      videoType: "youtube",
      videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      link: null,
      date: "2024-06",
    },
    {
      id: 5,
      title: "太陽光パネル 点検",
      category: "インフラ点検",
      description: "メガソーラー施設のドローン点検。赤外線カメラによるホットスポット検出で、人力では困難な広大な施設を効率的に診断。",
      tags: ["赤外線カメラ", "点検", "太陽光", "DJI Zenmuse"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-04",
    },
    {
      id: 6,
      title: "スポーツイベント 空撮",
      category: "イベント",
      description: "マラソン大会・サイクルレースの空撮中継サポート。ダイナミックな追跡映像でイベントの臨場感を最大限に引き出す。",
      tags: ["スポーツ撮影", "追跡飛行", "映像配信", "イベント"],
      image: null,
      videoType: null,
      videoSrc: null,
      link: null,
      date: "2024-02",
    },
  ],

  // ========== スキル ==========
  skills: [
    { name: "ドローン操縦",          level: 98, category: "操縦" },
    { name: "空撮・構図設計",         level: 95, category: "撮影" },
    { name: "4K映像編集",            level: 88, category: "映像" },
    { name: "赤外線点検",            level: 80, category: "点検" },
    { name: "3Dマッピング・測量",     level: 75, category: "測量" },
    { name: "飛行申請・法令対応",     level: 95, category: "法務" },
    { name: "DJI機材全般",           level: 95, category: "機材" },
    { name: "Adobe Premiere Pro",   level: 85, category: "映像" },
  ],

  // ========== 数字で見る実績 ==========
  stats: [
    { value: "300+", label: "飛行時間" },
    { value: "80+",  label: "完了案件" },
    { value: "国交省", label: "認定パイロット" },
    { value: "全国",  label: "対応エリア" },
  ],

};
