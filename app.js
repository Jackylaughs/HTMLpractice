// alert("Hello World!");

console.log("logに文字を送信したよ");
console.log(1 + 2);
// console.logは開発者ツールを見た時、命令が正しく動いてるかを見るため？
// 正しく値を取得できているかコンソールに出力し、確認できたら消すらしい

// dayという変数を宣言（const）し、その値を2にする
const day = 2;

// letという後から代入可能な変数もあるけど、基本的には代入不可のconstで書いてから、代入したい時だけletに変えるのがおすすめ
// 代入できるという選択肢がなければ余計な誤動作起こさなくて済む

console.log(5 + 2) // + 足し算　"文字列"同士をつなぎ合わせることもできる
console.log("いぬ" + "かわいい")
console.log(5 - 2) // - 引き算
console.log(5 * 2) // * 掛け算
console.log(5 / 2) // / 割り算
console.log(5 % 2) // % 剰余　割り算の余りを求める

console.log(5 === 5) // === 左右が等しい場合trueと返し、等しくない場合falseと返す
console.log(5 !== 5) // !== 等しくない場合trueと返す
console.log(10 > 5) // > より大きい場合trueと返す
console.log(3 <= 4) // <= 以下の場合trueと返す

let age = 23; // 年齢

let canWork = age >= 18 && age < 65; // 働ける = 年齢 が18以上 かつ (&&) 65未満
console.log("年齢: " + age);
console.log("働ける年齢？ " + canWork);

let cannotWork = age < 18 || age >= 65; // 働けない = 年齢 が18未満 もしくは (||) 65以上
console.log("働けない年齢？ " + cannotWork);

let isMinor = !(age >= 18); // 成人ではない = 年齢 が18以上 ではない(かっこの前の(!))
console.log("未成年？ " + isMinor);

if (age >= 20) {
    console.log("一般");
}
else if(age >= 65){
    console.log("シニア");
}

// 複数の値をチェックする時はswitchを使って並べることもできる
// 東京のケース、大阪のケース、熊本のケース、どれでもないケースはそれぞれの文章を出力する

let pref = "Osaka"; 

switch (pref) {
    case "Tokyo":
        console.log("住所は東京です");
        break; // breakがないと次のcaseも一緒に出力されちゃう！忘れずに
    case "Osaka":
        console.log("住所は大阪です");
        break;
    case "Kumamoto":
        console.log("住所は熊本です");
        break;
    default:
        console.log("住所はその他です"); // defaultはどれにも当てはまらない場合出力するものとかを設定できる　最後の文であればbreakはいらない
}

// 簡単なif文であれば三項演算子を使って書くこともできる
//  (条件) ? 当てはまる場合 : 当てはまらない場合

// let age = 18;
let status = (age >= 18) ? "成人" : "未成年";
console.log(status);

// 配列 scratchでいうリストかな？

let fruits = ["りんご", "バナナ", "みかん"]; // fruitsというリストの中にりんご、バナナ、みかんを入れている

console.log(fruits.length); // lengthはリストの中に何個入っているか確認する
console.log("配列には" + fruits.length + "個のくだものがあります");

console.log(fruits[1]); // 最初の要素を取り出す　1からじゃなくて0から始まる！

// let fruits = ["りんご", "バナナ", "みかん"];

fruits[3] = "メロン"; // 配列の3の位置にメロンを追加する
console.log("くだものリスト", fruits);

fruits.push("いちじく"); // pushを使うと配列の最後に要素を追加できる
console.log("リスト更新後：", fruits);

fruits.unshift("スイカ"); // unshiftで配列の最初に要素を追加できる
console.log("リスト更新2回目：", fruits);

fruits.pop(); // 配列の最後を削除する
console.log("popした後のリスト：", fruits);

fruits.shift(); // 配列の最初を削除する
console.log("shiftの後：", fruits);

fruits[1] = "アボカド"; // []で数字を指定してその位置の要素を変更できる
console.log("変更後：", fruits);

if (fruits.includes("アボカド")){ // includesで要素が含まれているか調べる
    alert("アボカドがあります！");
}else{
    alert("アボカドがありません！");
}
