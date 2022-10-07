const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayhello()

// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const ryohei = {
  name: "川井涼平",
  age: 21,
  hobbies: ["ゲーム", "英語の勉強"],
  isSleepy: false,
  address: {
    country: "日本",
    city: "新潟",
  },
  sayhello: function () {
    console.log("よろしくおねがいします")
  },
}
ryohei.sayhello()
