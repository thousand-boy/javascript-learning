# javascript-learning
JavaScript の学習記録リポジトリです。HTML & CSS 学習（`html-css-learning`）の続きとして、Web サイトに動きや機能をつける JavaScript を学びます。

---

## 学習環境

| ツール | 用途 |
|---|---|
| VS Code | JavaScript／HTML ファイルの作成・編集（日本語化して使用） |
| ブラウザ（Google Chrome 等） | 表示確認用の標準ブラウザー |
| Chrome デベロッパーツール（コンソール） | JS の動作検証・エラー確認・`console.log()` 出力の確認 |
| CodePen | ブラウザー上で HTML/CSS/JS を試せるオンラインエディター（会員登録なしでも利用可） |
| GitHub | 学習証跡の蓄積・公開 |

---

## 進捗

| 日付 | 内容 | ファイル |
|---|---|---|
| 2026-07-16〜19 | 第1章 最初に知っておこう！JavaScriptでできること（JavaScriptとは：ブラウザーで動く言語・HTML/CSS/JSの役割分担／できること：HTML・CSSのリアルタイム書き換え・テキスト/画像/色の変更・ユーザーアクション対応・フォームバリデーション／実例サイト：ACES・ShiobaLove・Sustainable PRODUCTS・snaq.me） | notes/2026-07-16_19.md |
| 2026-07-16〜19 | 第2章 JavaScriptに触れてみよう！2-1〜2-5（書く場所：`<script>`・外部.js・src読み込み／環境構築：VSCode導入・日本語化／初コード：`window.alert()`・.jsファイル作成・window.省略／基本ルール：オブジェクト.メソッド('パラメーター')・半角/大小区別/引用符/セミコロン・エスケープ表記／コンソール：DevTools・`console.log()`・エラー確認） | notes/2026-07-16_19.md ／ chapter2/ |
| 2026-07-16〜19 | 第3章 JavaScriptの基本を学ぼう！3-1〜3-9（カラーピッカー制作）（完成形の把握／必要ファイル準備：`<input type="color">`・link・`<script defer>`・非同期処理／要素取得：`document.querySelector('#id')`・null・`.value`／テキスト変更：`textContent`・`=`代入・innerHTML／DOM：Document Object Model・DOMツリー・ノード・親子兄弟／テンプレート文字列：`` `...${}` ``・`+`連結／定数：`const`・命名ルール・予約語／イベント：`addEventListener('input', ...)`／関数：アロー関数`() => {}`・function・無名関数） | notes/2026-07-16_19.md ／ chapter3/ |
| 2026-07-21〜30 | 第4章 イベントで操作しよう！4-1〜4-16（5つの実装課題）（イベントの仕組み：登録→監視→検知→呼び出しの4段階・よく使うイベント20種／①ローディング画面：`load`・`classList.add/remove`・`inset: 0`・`opacity`＋`visibility`／②ダークモード：`click`・`classList.toggle`・`document.body`・`textContent`＋`if/else`／③文字数カウンター：`keyup`・`要素.value`・`.length`・サロゲートペア・比較演算子6種／④チェックで有効化：`change`・`要素.checked`・真偽値(true/false)・`disabled`・論理否定`!`／⑤プログレスバー：実装の5ステップ・`window.scrollY`・`scrollHeight`／`clientHeight`・算術演算子6種・`style.width`） | notes/2026-07-21_30.md ／ chapter4/ |

> 第1章はJavaScriptの「全体像」と「使われ方」を学ぶ概念中心の章のため、コードファイルはなし（コーディングは第2章以降）。
> 章タブ構成は「Introduction｜Getting Started｜Basic｜Event｜Data｜Animation｜Website｜Troubleshooting」の全8章。第1章＝Introduction、第2章＝Getting Started、第3章＝Basic、第4章＝Event。

---

## 学習内容サマリー

### 第1章 最初に知っておこう！JavaScriptでできること

#### 1-1 JavaScriptとは
- **概念**：JavaScript＝Webページに **機能を追加できるプログラミング言語**。ブラウザーで動く言語として **1995年に誕生**。今やほぼすべてのWebサイトで使われている。
- **役割分担**：Webサイトは3つで成り立つ。車の例えがわかりやすい。

| 言語 | 役割 | 車の例え |
|---|---|---|
| HTML | コンテンツを表示する文書構造（骨組み） | 車体の骨組み |
| CSS | 見た目を変化させる | 色などの見た目 |
| JavaScript | 動作・機能を作る | アクセル・ブレーキ・ライトなどの機能面 |

- **JSが必要な理由**：HTML・CSSは **一度ブラウザーに読み込まれると最初のコードから変化しない**。JavaScriptは **HTML・CSSをリアルタイムで書き換え**、ユーザーの操作にあわせて動きや機能を加えられる。
- COLUMN（Java ≠ JavaScript）：両者は別言語。JavaScriptは **Mocha → LiveScript → JavaScript**（Sun Microsystems 社の「Java」にあやかった命名）と改名された経緯を持つ。「メロンとメロンパン」の関係で、名前と“プログラミング言語である”点しか共通しない。

#### 1-2 JavaScriptでできること
- **① 条件によってHTMLやCSSを書き換える**：ページ全体を再読み込みせず、指定部分だけを即座に変更するので体感速度が速い。

| できること | 具体例 |
|---|---|
| テキストの書き換え | 「メニュー」→クリックで「閉じる」／「読み込み中…」→「完了！」 |
| 画像の変更 | `<img>` の **`src` の値だけ** を書き換え（例：`cat.jpg`→`dog.jpg`） |
| 色の変更 | 文字色・背景色を変更。**ダークモード切り替え** などに利用 |

- **② ユーザーのアクションに応じた動きを付ける**：CSSアニメーションは読み込み時点で内容・タイミングが固定。JSは **クリック・スクロールなどの操作にあわせて** 動きを決められる。
  - スクロールで要素を表示（横・下からスッと出現）。
  - フォームバリデーション（必須項目が空だと「必須項目です」等を表示）。

#### 1-3 様々なJavaScriptを使ったWebサイト
実在サイトのキャプチャで、身近なサイトの各所にJSが使われていることを確認。

| サイト | 提供元 | 紹介されていた演出 |
|---|---|---|
| 株式会社ACES | AI事業会社 | ローディング画像／数字→文字に変化する見出し／ページ遷移アニメ（背景色が斜めに伸びる）／絞り込み検索 |
| ShiobaLove（塩原温泉郷公式） | 塩原温泉旅館協同組合ほか | 左右に動くカルーセル／Googleマップ連動（クリックで写真拡大）／背景ぼかし＋自動変化／言語選択（日本語・English・韓国語・中文簡/繁） |
| Sustainable PRODUCTS | 日本製紙グループ | コンテンツのふんわり表示／スライドメニュー（ハンバーガー→✕変化）／絞り込み検索／スクロール連動 |
| おやつ体験BOX snaq.me | おやつのサブスク | スクロールで動く波／画像の切り替え／流体シェイプ（じんわり変形）／タイプ診断（おやつ診断） |

---

### 第2章 JavaScriptに触れてみよう！

#### 2-1 JavaScriptはどこに書く？
- Webページに適用する方法は大きく **2通り**。

| 方法 | 書き方 | 向いているケース |
|---|---|---|
| ① HTML内に直接書く | `<script>〜</script>` の間に記述（範囲外はJSと認識されず動かない） | 単一ページで少量のコード |
| ② 外部 `.js` ファイルを読み込む | `.js` を作り `<script src="js/hello.js"></script>` で読み込む | **複数ページで同じコードを使う**（修正が1ファイルで済む） |

- **共通ルール**：記述場所は `<head>` 内でも `<body>` 内でも位置は自由。`.js` ファイル内に `<script>` タグは不要（直接コードを書く）。
- **複数ファイルの読み込み**：`<script>` を並べた順（例：`hello.js`→`bye.js`→`goodnight.js`）に読み込まれ処理が実行される。
- COLUMN（CodePen）：ブラウザー上でHTML/CSS/JSを書いて即プレビューできる無料Webサービス。会員登録なしでも動作確認可。本書デモでも使用。

#### 2-2 JavaScriptを書く環境を用意しよう
- **概念**：JSは特殊な開発環境が不要。HTML・CSSと同じエディターで書け、表示確認もブラウザーで行える。
- **VS Code（VSCode）**：Microsoft 製の無料エディター（Mac・Windows対応）。初期状態でも必要機能が揃い初心者向き。公式サイト（https://code.visualstudio.com/ ）からダウンロード。
- **日本語化**：左側メニュー最下部の拡張機能アイコン → 検索ボックスに「Japanese」→ **[Japanese Language Pack for Visual Studio Code]** を［Install］→ **VSCode を再起動**。
- COLUMN（その他のエディター）※料金は変動あり：

| エディター名 | ダウンロードURL | 料金 |
|---|---|---|
| DreamWeaver | https://www.adobe.com/jp/products/dreamweaver.html | 年間プラン 2,728円/月〜 |
| WebStorm | https://www.jetbrains.com/webstorm/ | 1年目 8,280円/年 |
| Sublime Text | https://www.sublimetext.com/ | $99 |

#### 2-3 はじめてのJavaScriptを書いてみよう
- **① HTML内に書く方法**：VSCodeで［フォルダーを開く］→新規フォルダー「03-demo1」作成 → ［＋］で `index.html` を作成 → `<body>` 内の `<script>` に記述し保存（Mac ⌘+S／Win Ctrl+S）→ ダブルクリックでブラウザー表示すると **警告ダイアログ** が表示される。

```html
<body>
  <script>window.alert('はじめてのJavaScript!');</script>
</body>
```

- **② JavaScriptファイルを作成する方法**：フォルダー「03-demo2」を作り `first.js` に `window.alert('はじめてのJavaScript!');` を記述。同フォルダーの `index.html` で **開始タグに `src` を書き足して** 読み込む。

```html
<body>
  <script src="first.js"></script>
</body>
```

- **`window.` は省略できる**：`window` は特別扱いのオブジェクトで、`window.` を省略しても動作する（`alert('はじめてのJavaScript!');`）。
- POINT：うまくいかない時は P.337「8-2 よくあるエラー一覧」でスペルミス・全角混入を確認。

#### 2-4 JavaScriptを書くときの基本ルール
- **基本文法**：`オブジェクト.メソッド('パラメーター');` の3パーツ構成。

| パーツ | 意味 | 例 |
|---|---|---|
| オブジェクト | 動作させる対象（物） | `window`（ウィンドウ）、`document`（HTML全体）、`console` 等 |
| メソッド | 対象への動作・命令（英語 method＝方法） | `alert()`＝警告表示、`log()`＝出力 |
| パラメーター | メソッドを補足する調整値。丸カッコ内に書く | `'はじめてのJavaScript!'`（文字列は引用符で囲む） |

- `alert()` は **組み込みオブジェクト（ビルトインオブジェクト）**＝ブラウザーに最初から用意されたプログラムの一部（文字列操作や数学計算ができるものもあり、第3章で紹介）。
- オブジェクトは `window` 以外に `history`（閲覧履歴）・`location`（アドレス情報）・`document`（HTML全体）・`console`（コンソール）などが階層的に存在（詳細は P.063「3-5 DOMを理解しよう」）。
- **コードを書くときの4ルール**：

| ルール | 説明 |
|---|---|
| 半角英数字で書く | 記号含め全て半角。**全角スペースもエラー** |
| 大文字・小文字は区別される | `alert` を `Alert` と書くとエラー |
| 文字列は引用符で囲む | シングル or ダブルクォーテーション（本書はシングル。どちらでも可） |
| 命令文の最後に `;` を付ける | 命令文の区切り（日本語の句点「。」に相当）。省略でも動くことが多いが最初は必ず付ける |

- COLUMN（エスケープ表記）：文字列中に引用符自体を含めたい時は `\`（バックスラッシュ／¥）を組み合わせる。この記号自体は表示されない＝**エスケープ表記／エスケープシーケンス**。

```javascript
// alert('You're special!');   // エラー（どこまでがパラメーターか不明）
alert('You\'re special!');     // \' でエスケープ → 正しく動作
// \' = '  /  \" = "  /  \n = 改行
```

#### 2-5 コンソールを使ってみよう
- **概念**：Chrome標準の **デベロッパーツール（DevTools）** 内の **コンソール** で、JSが正しく動くか検証できる。
- **開き方**：Chromeでページを開き ［右クリック］→［検証］→ **[Console] タブ**（ショートカット：Mac は Shift+⌘+C／Option+⌘+I、Win は Ctrl+Shift+I／F12）。`>` の部分に直接JSを入力・実行できる。
- **`console.log()`**：`console`（オブジェクト）+ `log()`（メソッド）。`log`＝「記録する／出力する」。コンソールに値を出力する。HTMLの `<script>` 内に書いても同様に動作する。

```javascript
alert('はじめてのコンソール！');       // 警告ダイアログを表示
console.log('はじめてのコンソール！');  // コンソールに出力
```

- **コンソールを使う理由**：

| 用途 | 内容 |
|---|---|
| エラーの確認 | 入力ミスがあると赤字でエラー表示（例：引用符閉じ忘れ→`Uncaught SyntaxError: Invalid or unexpected token`）。原因特定に不可欠 |
| 制作途中の確認 | `console.log()` でその時点のデータを出力し、意図通りか検証。`alert()` と違いOK押下不要で細かいデータも見られる |

- POINT：DevTools のレイアウトは右上「⋮」→「Dock Side」で配置変更可。日本語化は右上の ⚙ → Preferences の Language を **[Japanese - 日本語]** に設定 → [Reload DevTools] で再起動。

---

### 第3章 JavaScriptの基本を学ぼう！（カラーピッカー制作）

> 第3章は「背景色を変更できるカラーピッカー」を1つ作りながらJavaScriptの基本機能を学ぶ実践パート（章タブ＝Basic）。**要素取得 → 値取得 → 表示（テンプレート文字列）→ 定数化 → イベントで発動（関数）** という、今後あらゆるUI実装で使う基本の型を通しで習得する。3-1で完成形を先に見せ、3-2〜3-9で1つずつ組み上げていく構成。

#### 完成イメージ（3-1 作成するカラーピッカーの紹介）
- 画面中央のカード内の色見本（`<input type="color">`）をクリック → ブラウザー標準のカラーパネルが開く → 色を選ぶと **① 背景色が変わる／② 「カラーコード：」の右横に16進数のコードを表示**（例 `#ee9696`／`#0097bd`）。
- **特別扱い**：黒 `#000000` なら `(black)`、白 `#ffffff` なら `(white)` とカラーネームも表示（3-1完成コードの `if / else if / else` で分岐）。
- 3-1は完成版の `index.html`／`js/script.js`／`css/style.css` を先に提示する節。テンプレートリテラル・`const`・`addEventListener`・アロー関数は3-6〜3-9で解説される。

#### 3-2 必要なファイルを用意しよう
- **フォルダー構成**：「ColorPicker」フォルダーに `index.html`、`css/style.css`、`js/script.js` を用意（下記フォルダ構成参照）。
- **カラーピッカー本体**：`<input>` の **`type="color"`** にするだけで色を選べる入力欄が表示される。
- **CSS読み込み**：`<head>` 内に `<link rel="stylesheet" href="css/style.css">`。背景が黒・白いカードが画面中央に配置される。
- **JS読み込み**：`<head>` 内に **`<script src="js/script.js" defer></script>`**。まずは `console.log('準備完了！');` で読み込み確認。
- **`defer` 属性（非同期処理）**：`<script>` に `defer` を付けると **HTML解析を止めずにJSを同時読み込みし、解析終了後にJSを実行** する＝ページ読み込みが速くなる。

| 読み込み方 | 挙動 | 評価 |
|---|---|---|
| `<head>` 内（defer なし） | `<script>`到達時にHTML解析が一旦停止 → JS読込・実行 → 残りを解析。要素未生成でエラーの恐れ | △ |
| `</body>` 直前 | HTML解析後にJS実行で安全。ただし全体の読込時間は短縮されない | ○ |
| **`<head>` 内 ＋ `defer`** | HTML解析と同時にJS読込、解析終了後に実行。速度も改善 | ◎（本書推奨） |

- たとえ：非同期処理＝コンビニでお弁当を温める間に会計を進める（待ち時間を作らない）。

#### 3-3 カラーピッカーの色の値を取得しよう
- **要素の取得**：`document.querySelector('セレクター')` でHTMLから要素を取得。基本文法 `オブジェクト.メソッド('パラメーター')` の形（`document`＝HTML全体／`querySelector()`＝取得メソッド／セレクター＝CSSと同じ書き方 `#id`・`.class`）。
- 例：`console.log(document.querySelector('#colorPicker'));` → コンソールに `<input id="colorPicker" type="color">` が表示されれば成功。**`querySelector` の「S」は大文字**（1文字でも違うと動かない）。
- **`null` が出たら**：`null`＝「そんなIDないよ」。IDのスペルや大文字小文字のミスを疑う（例：`#colorpicker` は誤り、正しくは `#colorPicker`）。
- **値の取得**：取得した要素の末尾に **`.value`** を繋げると値（カラーコード）が得られる。例：`document.querySelector('#colorPicker').value` → `#000000`。
- **補足**：`<input>` に `value="#00bbdd"` を付けると初期値として取得される（動作確認用。今回は削除して黒に戻す）。

#### 3-4 テキストを変更しよう
- **考え方**：JavaScriptでは「どこの・何を・どう変えるか」を明示する（新規追加より「今の表示を書き換える」イメージ）。
- **手順**：① どこの＝`document.querySelector('#colorText')`／② 何を＝`.textContent`（**Cのみ大文字**）／③ どう変える＝`= '文字列';`。
  - `document.querySelector('#colorText').textContent = 'カラーコード：';`
- **`=` は「代入」**：JavaScriptの `=` は「等しい」ではなく **右の値を左に入れる（置き換える）** 意味。
- **HTMLタグは無視される**：`textContent` はタグも **文字列として** 表示する。タグを有効にしたいときは **`innerHTML`** を使う（例：`.innerHTML = '<h1>カラーコード：</h1>'` で見出しになる）。

#### 3-5 DOMを理解しよう
- **DOMとは**：ブラウザーがHTMLを読み込むと作られる **内部データ構造**。**Document Object Model** の略で、HTMLをツリー状に分解しJavaScriptと接続する。流れは **HTML → DOM → Webページ**。
- **DOMは操作できる**：3-4のテキスト書き換えは、HTMLファイルそのものではなく **その間にあるDOMを操作** していた。要素・スタイルの追加・削除も可能。
- **DOMツリーとノード**：階層構造を **DOMツリー**、その各要素を **ノード**（節・結び目）と呼ぶ。最上位は `document` ノード。

| ノードの種類 | 例 |
|---|---|
| 要素ノード | `<p id="colorText">カラーコードを検索</p>` |
| 属性ノード | `id="colorText"` |
| テキストノード | カラーコードを検索 |

- **親子・兄弟**：`<body>` から見て `<html>`＝親ノード／`<div>`＝子ノード／`<head>`＝兄弟ノード。

#### 3-6 テンプレート文字列で表示させよう
- **カラーコードをページに表示**：`console.log()` ではなく、`textContent` に `.value` を代入してカード内に表示（コンソール用の行は削除可）。
- **文字列と値の連結**：単に並べると `Uncaught SyntaxError: Unexpected identifier 'document'` になる。連結方法は2種類。

| 方法 | 書き方 | 特徴 |
|---|---|---|
| ① `+` で連結 | `'カラーコード：' + color.value` | 値が増えると可読性が下がり、足し算と紛らわしい |
| ② **テンプレート文字列**（本書採用） | `` `カラーコード：${color.value}` `` | 全体を `` ` ``（バックティック）で囲み、値・式を `${ }` で挿入。読みやすい |

- テンプレート文字列＝**テンプレートリテラル**。`${ }` の中には「文字列以外（値・式・変数・定数）」を入れる。
- COLUMN（オンラインツール② JSFiddle）：CodePen 同様、HTML欄は基本 `<body>` 内のみ記述。左上 [Run] で実行、右上 Settings で調整。https://jsfiddle.net/

#### 3-7 定数でコードをスッキリまとめよう
- **定数とは**：文字列・数値・式などを入れておく「箱」。名前（定数名）を付けて使い回し、記述ミスを防ぎコードを整理する。
- **書き方**：`const 定数名 = 値;`（宣言）。この `=` も「代入」。**使うときは定数名だけ**でよい（`const` 不要）。
  - 例：`const name = 'Mana'; console.log(name);` → `Mana`
  - カラーピッカー：`const text = document.querySelector('#colorText');` ／ `const color = document.querySelector('#colorPicker');` → `text.textContent = `カラーコード：${color.value}`;`（表示は同じ・コードはスッキリ）。
- **定数名のルール**：

| ルール | 良い例 | 悪い例 |
|---|---|---|
| 半角英数字・`$`・`_` のみ／数字始まり不可 | `myColor`／`color1` | `1color`（数字始まり） |
| ハイフン不可（CSSと違う） | `my_color` | `my-color` |
| スペース不可 | `myColor` | `my color` |
| 予約語は使えない | `colorBg` | `const`・`if`・`for` 等の予約語 |

- **キャメルケース**：`myColor` のように2単語目以降の頭を大文字にする命名。JSで多用される。
- **予約語**（定数名に使えない）：`break / case / catch / class / const / continue / debugger / default / delete / do / else / export / extends / finally / for / function / if / import / in / instanceof / new / return / super / switch / this / throw / try / typeof / var / void / while / with / yield`（字句文法 - JavaScript | MDN を参照）。

#### 3-8 カラーコードを表示する「きっかけ」を作ろう
- **イベント（きっかけ）**：クリック・入力・スクロールなど、動作を引き起こすユーザー操作の「きっかけ」。詳細は P.092「4-1 イベントとは？」。
- **書き方**：`何が.addEventListener(どうなったら, どうなる);`（要素にイベントと処理をカンマ区切りで登録）。
- 今回：①何が＝`color`（カラーピッカー）／②どうなったら＝`'input'`（**文字列なのでクォート必須**。入力欄の値変更イベント）／③どうなる＝`colorBg`（処理の名前。**クォート不要**）。
  - `color.addEventListener('input', colorBg);`
- この時点では `colorBg` 未定義のため `Uncaught ReferenceError: colorBg is not defined`（＝「呼んでるけど用意されてない」）。中身は次節で定義。
- POINT：`'input'` はたまたまタグ名 `input` と同じ綴りだが、タグ名を書いているわけではない。

#### 3-9 関数で選んだ色を取得しよう
- **関数とは**：一連の処理をひとまとめにして名前を付けたもの。呼び出して実行する（洗濯機の「洗う→すすぐ→脱水」を1つの「洗濯」ボタンにまとめる例え）。
- **書き方（2種類）**：

| 書き方 | 記法 | 備考 |
|---|---|---|
| **アロー関数**（本書採用） | `const 関数名 = () => { 処理 };` | `=>` が矢印に見える。新しめでシンプル |
| function 構文 | `function 関数名() { 処理 }` | 歴史的に古い書き方 |

- **完成コード**：`text.textContent = ...` を `const colorBg = () => { ... };` で囲んで関数化。`color.addEventListener('input', colorBg);` で「カラーピッカーを（color）／入力したら（'input'）／colorBg を発動」。→ 色を選ぶと `カラーコード：#ff7070` などが **即座に表示** される。

```javascript
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  text.textContent = `カラーコード：${color.value}`;
};

// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);
```

- **無名関数**：関数を事前定義せず、`addEventListener` の第2引数に式そのものを直接渡す書き方。名前付けが不要。

```javascript
color.addEventListener('input', () => {
  text.textContent = `カラーコード：${color.value}`;
});
```

- **使い分け**：短い処理はどちらでも大差なし。処理が複雑になるなら、あらかじめ関数を定義しておくと読みやすい。

---

### 第4章 イベントで操作しよう！（章タブ＝Event）

> 第4章は「よく見かけるイベント」を題材に **5つの小さな実装課題** を作りながらイベントの扱いを身につける実践パート。4-1でイベントの仕組みを学び、以降は ①ローディング画面（4-2〜4-3）／②ダークモード切替（4-4〜4-6）／③文字数カウンター（4-7〜4-9）／④チェックで有効化（4-10〜4-12）／⑤スクロールのプログレスバー（4-13〜4-16）を制作する。全課題に共通する型は **「CSSにクラスや状態を用意しておき、JSはイベントに応じてその切り替えだけを担当する」** という役割分担。前章の「完成形を先に見せてから組み上げる」構成も引き継がれている。

#### 4-1 イベントとは？
- **イベント＝ユーザーの操作に応じて動作を起こすきっかけ**（P.074「3-8」で既習）。ブラウザーではクリック・キーボード操作・スクロール・ページ読み込みなど様々なタイミングで発生し、JSには **あらかじめ用意した処理をイベント発生時に呼び出す仕組み** が備わっている。
- **イベントの仕組み（4段階）**：

| 段階 | 内容 |
|---|---|
| ① 処理の登録をする | 「何が」「どうなったら」「どうなるか」を指定。`btn.addEventListener('click', message);` ＝ ボタンが／クリックされたら／メッセージを表示する。**この時点では実行されず「予約」されている** |
| ② ブラウザーがイベントの発生を監視する | ブラウザーは常にイベントが発生しないか監視している |
| ③ イベントの発生を検知する | 発生したら「イベント発生！クリックされました！」とプログラムに通知する |
| ④ 処理を呼び出す | ①で登録しておいた処理が呼び出され実行される |

- **よく利用されるイベントの種類**（20種）：

| イベント名 | 発生するタイミング | イベント名 | 発生するタイミング |
|---|---|---|---|
| `load` | スタイルシートや画像など、すべてのリソースの読み込みが完了したとき | `dbclick`（※教材表記） | ダブルクリックされたとき |
| `submit` / `reset` | フォームが送信されるとき／リセットされるとき | `mousedown` / `mouseup` | マウスのボタンが押されたとき／離されたとき |
| `resize` / `scroll` | 画面のサイズが変わったとき／スクロールされたとき | `mouseover` / `mouseout` | マウスカーソルが重なったとき／離れたとき |
| `copy` / `paste` | コピーされたとき／ペーストされたとき | `select` | テキストを選択したとき |
| `keydown` / `keyup` | キーが押されたとき／離されたとき | `focus` / `blur` | 要素にフォーカスされたとき／はずれたとき |
| `click` | クリックされたとき | `input` / `change` | 入力されたとき／変化があったとき |

- ⚠️ **表記注意**：ダブルクリックは教材の表では `dbclick` と記載されているが、**正しいDOMイベント名は `dblclick`**（`b` と `c` の間に `l` が入る）。誤記でもエラーにならず「反応しないだけ」なので気づきにくい。→ [Element: dblclick event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)

#### 4-2〜4-3 ローディング中の画面を作ろう／CSSのクラスを加えよう（`chapter4/02-demo`）
- **完成イメージ**：ページを開くと **スピナー（ロード中にくるくる動く画像）** が表示 → 画像の読み込み → **ローディング画面が少しずつ消える** → 画像が表示。
- **作り方の流れ**：① ローディング画面とコンテンツを HTML＋CSS で作成 → ② JSで「ローディングが終わったらローディング画面を消す」指示を書く。
- **HTML/CSS側**：ローディング画面の `<div>` に **`loading` という ID** を割り振り、`position` プロパティでコンテンツと重ねる。
- **`inset: 0;`**：`top: 0; right: 0; bottom: 0; left: 0;` をまとめた指定。**`position: fixed;` と組み合わせると要素を画面いっぱいに広げられる**。
- **JS側のイベント**：ターゲットは画面なので **`window` が一番はじめ** にくる。**画像・音声・動画などすべてのリソースの読み込み完了** には **`load`** を使用。処理が短いので **無名関数**（P.080参照）で書く。
- **クラスの付与**：CSSに **要素の不透明度を0にして隠すクラス `.loaded`** を用意し、**`classList.add()`** で付与。**クラス名はシングルクォーテーションで囲む**。

```css
#loading {
  transition: all 1s;          /* 少しずつ消えるように */
  background-color: #ddd;
  position: fixed;
  z-index: 9999;               /* 最前面へ */
  inset: 0;                    /* = top/right/bottom/left すべて 0 */
  display: grid;
  place-items: center;         /* スピナーを画面中央に */
}
.loaded {                      /* ← 読み込み完了後に JS が付与する */
  opacity: 0;
  visibility: hidden;
}
```

```javascript
const loading = document.querySelector('#loading');   // 非表示にしたい要素を定数に

window.addEventListener('load', () => {
  loading.classList.add('loaded');   // 「loading」に「loaded」クラスを追加
});
```

- **クラスの削除・複数指定**：削除は **`classList.remove('クラス名')`**。**カンマ区切りで一度に複数のクラスを追加・削除できる**（`add('a', 'b', 'c')`）。
- POINT：`.loaded` に `opacity: 0` **だけ** だと見えないまま画面上に残り、下のコンテンツがクリックできない。`visibility: hidden` を併記するのがセット（`display: none` だと `transition` が効かない）。
- POINT：本章の全デモは **リセットCSS `ress.css`** を CDN（`https://unpkg.com/ress/dist/ress.min.css`）で読み込み、ブラウザー間の表示を統一している。→ [filipelinhares/ress](https://github.com/filipelinhares/ress)

#### 4-4〜4-6 ボタンをクリックしてダークモードにしよう（`chapter4/04-demo`）
- **ダークモード＝画面の背景を黒基調にしたデザイン**。CSSのカスタムプロパティやメディア特性で **OSの設定を判定する方法もある** が、ここでは **ボタンで切り替えるタイプ** を実装。
- **設計**：CSSに **`dark-theme`**（背景 `#000`／文字色 `#ddd`）を用意し、**この段階ではHTML内のどの要素にも加えない**。ボタンがクリックされたらJSが付与する。
- **`classList.toggle()`**：クリックのたびに付け外ししたいので `add`／`remove` ではなくこちら。**指定した要素にクラス名が付いていなければ追加、付いていれば削除**。**`<body>` は `document.body` で取得** できる。

| メソッド | 使いどころ |
|---|---|
| `classList.add()` / `remove()` | 一方向の状態変化（ローディング終了＝二度と戻らない）／値に応じて毎回決め直す場合 |
| **`classList.toggle()`** | **クリックのように往復する操作**（`<body class="dark-theme">` ⇔ `<body class="">`） |

- **ボタンのテキストも切り替える（4-6）**：`toggle` だけでは **ラベルが「ダークモードにする」のまま**。要素のテキストは **`textContent`** で挿入でき、条件には **`btn.textContent === 'ダークモードにする'`** を使って現在の表示を評価する（P.086「3-11」の `if / else` を応用）。
- **進め方のコツ**：**条件を付けるときやコードが長くなりそうなときは、一旦日本語で考え、コメントアウトを使いながら整理してコードを書いていく**。

```javascript
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');   // 追加と削除を交互に

  // もしボタンのテキストが「ダークモードにする」になっているなら
  if (btn.textContent === 'ダークモードにする') {
    btn.textContent = 'ライトモードにする';
  // そうでないなら（「ライトモードにする」と表示されているなら）
  } else {
    btn.textContent = 'ダークモードにする';
  }
});
```

- POINT：`transition: .5s` は **切り替わる要素（`body`）側** に書く。クラスが付いた瞬間に滑らかに変化する（4-2 の `#loading { transition: all 1s; }` と同じ設計）。
- POINT：「状態」と「その状態を説明するUI表記」は別物。どちらも明示的に更新する必要がある。

#### 4-7〜4-9 入力した文字数を数えてみよう／lengthでカウント／文字数によって表示を変える（`chapter4/07-demo`）
- **完成イメージ**：100文字以内で入力するよう説明したテキストエリア。入力するたびに文字数が更新され、**100文字より多くなると数字の色が変わる**。
- **準備**：**文字数を表示したい箇所は `<span>` で囲み `count` という ID を割り振る**。指示に使う要素を定数（`text`／`count`）として用意。
- **イベント**：「テキストエリアに入力されたら」には **`keyup`**（キーボードで入力したとき、正確には **キーから手が離れたとき**）を使用。
- **`length`**：**数えたい文字列のあとに `.length` をつなげるだけでOK**。length は英語で「長さ」＝文字列の長さ（文字数）。**すでに入力された値は `要素.value` で取得できる** ので `text.value.length`。`length` は **要素の数を数えるときにも使える**。

```javascript
'文字列'.length;   // → 3（コンソールで確認できる）
```

- **サロゲートペア**：**絵文字や一部の漢字は1文字でも2文字とカウントされる**。Unicodeで1文字を2つの文字コードで表す文字（通常「1文字＝2バイト」のところ一部は「1文字＝4バイト」）で、これを **サロゲートペア** と呼ぶ。回避策は **スプレッド演算子**。

```javascript
'😄'.length;        // → 2（1文字なのに2）
[...'😄'].length;   // → 1（スプレッド演算子で1文字としてカウント）
```

- **比較演算子（4-9）**：条件には **算数でもおなじみの不等号** を使う。**`>` は左側が右側よりも大きいかを評価**し、大きければ波カッコ内が実行される。**このように左右を比較する記号を「比較演算子」と言う**。

| 演算子 | 意味 | 演算子 | 意味 |
|---|---|---|---|
| `A === B` | AとBが等しいか | `A >= B` | AがB以上か（≧と同じ） |
| `A > B` | AがBを超えるか | `A <= B` | AがB以下か（≦と同じ） |
| `A < B` | AがB未満か | `A !== B` | AとBが等しくないか |

- **進め方のコツ**：**「100文字を超えると」という条件式はひとまず置いておき、これまでの学習で書けるところだけ書く**。骨組み（`if` / `classList.add` / `else` / `classList.remove`）を先に組み、最後に条件式 `text.value.length > 100` を埋める。

```javascript
const text = document.querySelector('#text');    // テキストエリア
const count = document.querySelector('#count');  // 文字数の表示先

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;

  // 100文字を超えるなら
  if (text.value.length > 100) {
    count.classList.add('alert');       // alert クラスを加える
  // そうでないなら（100文字以下なら）
  } else {
    count.classList.remove('alert');    // alert クラスをはずす
  }
});
```

- POINT：**記号の順序をひっくり返して `=>` や `=<` と書くと演算子として認識されない**（アロー関数の `=>` と紛らわしいので特に注意）。
- POINT：`#text` は `width: 600px` ＋ `max-width: 100%` の併記。固定幅を基本にしつつ画面が狭いときだけ縮む、レスポンシブの定番パターン。
- ⚠️ **補足（教材範囲外）**：`keyup` は **キー操作でしか発火しない** ため、右クリック→貼り付けやドラッグ＆ドロップではカウンターが更新されない。値の変化そのものを起点にする **`input`** の方が実務向き。日本語入力（IME）では変換中も発火するため、除外には `event.isComposing` を見る。→ [input event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)・[keyup event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)

#### 4-10〜4-12 チェックを入れるとボタンを押せるようにしよう／効率のいい書き方（`chapter4/10-demo`）
- **完成イメージ**：初期状態ではボタンがグレーアウトしてクリックできず、**チェックボックスにチェックを入れるとクリックできる状態になる**（「規約に同意したら送信可」の定番UI）。
- **HTML/CSS側**：`<input>` の **`type="checkbox"`** でチェックボックスを用意し、ボタンには **`disabled` 属性を付与して無効（押せない状態）** にしておく。CSSでは **疑似クラス `:disabled`** で無効時の背景を薄いグレーに。

```html
<label><input id="check" type="checkbox"> 利用規約に同意する</label>
<input id="btn" type="submit" value="送信する" disabled>   <!-- disabled で無効化 -->
```

- **イベント**：チェックボックスに **変化があったときに発動させるには `change` イベント**。
- **真偽値（ブール値）**：`console.log(isAgreed.checked)` とすると（**文字列ではないのでクォート不要**）チェック時 `true`／解除時 `false` が表示される。**`true` / `false` は真偽値（ブール値）と呼ばれる特別なデータの型**で、これまで「条件に当てはまる／当てはまらない」と説明してきたものを **当てはまる＝`true`（真）／当てはまらない＝`false`（偽）** と表現する。「はい」か「いいえ」で答えられる質問の返答がこれ。
- **`disabled` の2つの顔**：

| 場所 | 書き方 | 意味 |
|---|---|---|
| HTML（属性） | `<input ... disabled>` | 属性名を書くだけで無効化される |
| JavaScript（プロパティ） | `btn.disabled = true / false` | `true` で無効、`false` で有効。**読み込み直後は `true`＝無効化が効いている** |

- **`=== true` は省略できる**：if文の条件で「〇〇に当てはまるなら」の意味で使う `=== true` は省略可。`if (isAgreed.checked === true)` ＝ `if (isAgreed.checked)`。
- **効率のいい書き方（4-12）**：入出力を観察すると **チェックボックスとボタンの無効化の状態は常に逆** になっている。そこで **逆を意味する記号 `!`（論理否定）** を使い、if / else 4行を **1行に集約** できる。

| `isAgreed.checked` | `btn.disabled` |
|---|---|
| `true`（チェックされている） | `false`（無効化なし＝押せる） |
| `false`（チェックなし） | `true`（無効化される） |

```javascript
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

// if / else 版（4-11）
isAgreed.addEventListener('change', () => {
  if (isAgreed.checked) {     // 「=== true」は省略
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

// 「!」で1行にまとめた版（4-12・完成形）
isAgreed.addEventListener('change', () => {
  btn.disabled = !isAgreed.checked;   // 前に「!」を付けて逆の結果を代入
});
```

- **`!` の既習箇所**：4-9 の比較演算子でイコールに付けた **`!==`（等しくない）** として登場済み。ここでは真偽値そのものを反転させる用途。
- POINT：教材は **「慣れるまでは `if` や `else` を使って書いてもらって問題ない。少しずつより効率よく書く方法がないか考えてみるとよい」** と明言。短縮技を先に覚えるのではなく、**まず動くコードを書き、入出力の法則を見つけてから縮める** という順序が学びの本体。
- POINT：定数名 `isAgreed`（同意しているか）のように **真偽値は `is〜` / `has〜` で始める** と `if (isAgreed.checked)` が英文としてほぼそのまま読める。

#### 4-13〜4-16 ページのスクロール量を表示しよう（`chapter4/13-demo`）
- **完成イメージ**：文章がメインの縦長ページの上部に、**スクロール量を表す「プログレスバー」** を設置。ページを開いた時点では何も表示されず、スクロールすると水色のラインが伸び、一番下で右端に到達する。題材は宮沢賢治『銀河鉄道の夜』。
- **実装のステップ**：3節にまたぐ複雑な作業なので、**最初に実装の過程を整理してから着手** する（各節の見出しにこの番号が再登場する）。

| # | ステップ | 該当節 |
|---|---|---|
| 1 | プログレスバーを作成する | 4-14 |
| 2 | スクロール量を取得する | 4-14 |
| 3 | ページのサイズを取得する | 4-15 |
| 4 | スクロールされた割合を計算する | 4-16 |
| 5 | プログレスバーの幅に設定する | 4-16 |

- **【1】バーを作成**：**`bar` という ID のついた空の `<div>`** を用意。CSSでは水色の背景と `position: fixed;` で画面上部に固定。**現段階では幅の指定がないので何も表示されない**（仮に `width: 100%` を加えると左端から右端まで表示される）。**この幅の値は後ほどJavaScript側で操作するので、今は記述しないでおく** ＝「静的な見た目はCSS、動的に変わる値はJS」という役割分担。
- **【2】スクロール量**：**`scroll` イベントは画面をスクロールするたびに発生**し、画面に関することなので **`window`** に設定。**処理の指定が少し長くなりそうなので、関数を用意してイベント発生時に呼び出す書き方** にする（無名関数との使い分けは **処理の分量** で判断）。スクロール量は **`window.scrollY`**（ページの一番上から垂直方向に何px スクロールしたか）。**POINT：横方向は `scrollX`**。
- **【3】ページのサイズ**：ページ全体の高さはすぐ取得できそうだが、**「スクロール可能な高さ」となると計算が必要**。**ページの高さには表示領域（現在表示されている画面）の高さが考慮されていない** ため。

```
スクロール可能なページの高さ ＝ ページ全体の高さ － 表示領域の高さ
（例：ページ 2000px、表示領域 800px → 1200px スクロールした時点で一番下に到達）
```

| 取得したいもの | 書き方 | 補足 |
|---|---|---|
| ページ全体の高さ | `document.documentElement.scrollHeight` | **画面に表示されていない伸びた部分も含む**。`document.documentElement` は **ページのルートとなる `<html>` タグの部分** |
| 表示領域の高さ | `document.documentElement.clientHeight` | **スクロールバーを含まない** 部分の高さ |
| （POINT）横方向 | `scrollWidth` / `clientWidth` | ページの横幅／表示領域の幅 |

- **【4】割合の計算**：**JavaScriptでは算数や数学で使う四則演算が利用できる**が記号が一部変わる。数値は数値型なので **クォート不要**（P.129「COLUMN 様々なデータの型」）。**数値の計算をするための記号を「算術演算子」と言う**。

| 算術演算子 | 意味 | 例 | 結果 |
|---|---|---|---|
| `+` / `-` | 足し算／引き算 | `10 + 3` / `10 - 3` | `13` / `7` |
| `*` | 掛け算（`×` ではない） | `10 * 3` | `30` |
| `/` | 割り算（`÷` ではない） | `10 / 3` | `3.3333333333333335` |
| `%` | 割り算の余りを計算 | `10 % 3` | `1` |
| `**` | べき乗を計算 | `10 ** 3` | `1000` |

- **優先順位**：算数と同じく **掛け算・割り算が足し算・引き算より優先**。変えたいときは **カッコで囲む**。今回の実装で `(pageHeight - viewHeight)` のカッコが必須な理由に直結する。

```javascript
console.log(10 + 3 * 2);    // → 16（掛け算が優先。26 ではない）
console.log((10 + 3) * 2);  // → 26（カッコで優先順位を変える）
```

- **【5】幅に設定**：計算した割合を **ID `bar` の横幅（`width`）としてスタイルを付与**。**単位の「%」も必要なのでテンプレート文字列で指定** する。

```javascript
const getScrollPercent = () => {
  // スクロール量
  const scrolled = window.scrollY;

  // ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  // 表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;

  // スクロールされた割合（0〜100）
  const percentage = scrolled / (pageHeight - viewHeight) * 100;

  // プログレスバーに幅を指定（単位の「%」が必要なのでテンプレート文字列で）
  document.querySelector('#bar').style.width = `${percentage}%`;
};

window.addEventListener('scroll', getScrollPercent);   // ← 関数名のみ（カッコは付けない）
```

- POINT：**「まずコンソールに出して確認 → 確認できたら消す／コメントアウトする」** が4回反復される（`'スクロールされました'` → `${scrolled}` → `pageHeight`/`viewHeight` → `percentage`）。**動作確認用の `console.log()` は足場であって成果物ではない**。実測での検算（`5194 - 523 = 4671`）で `scrollHeight - clientHeight` がスクロール量と一致することも確認できる。
- POINT：**コンソールでメッセージ左横に出る数字はイベントが発生した回数**。少しスクロールしただけで200回超に達し、`scroll` が高頻度で走ることが体感できる（重い処理を書くなら `requestAnimationFrame` などで間引く配慮が必要）。
- ⚠️ **補足（教材範囲外）**：`%` は「余り」だが正確には **剰余（remainder）でモジュロではない**。符号が常に被除数（左側）と同じになるため `-10 % 3` は `2` ではなく `-1`。正の余りが欲しい場合は `((n % d) + d) % d` と書く。→ [Remainder (%) | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- ⚠️ **補足（教材範囲外）**：`10 / 3` の結果が `3.3333333333333335` と末尾「5」で終わるのは誤植ではなく **浮動小数点数（IEEE 754 倍精度）の表現限界**。`0.1 + 0.2 !== 0.3` と同根。

#### 第4章で押さえた「型」
- **イベント処理の共通形**：`要素.addEventListener('イベント名', 処理)` で **「何が」「どうなったら」「どうなるか」** を登録する。処理が短ければ **無名関数**、長くなりそうなら **名前付き関数を定義して参照だけ渡す**（カッコを付けると即実行されてしまう）。
- **状態の切り替えは3パターン**：`classList.add` / `remove`（一方向・値に従う）／`classList.toggle`（往復）／`要素.プロパティ = 真偽値`（`disabled` など）。
- **見た目はCSS、切り替えはJS**：クラスや状態を先にCSSで定義しておき、JSはトリガーと切り替えだけを担当する。動的に変わる値（`width` など）だけはCSSに書かず空けておく。
- **書く前に日本語で整理する**：4-6・4-9・4-11 では日本語の擬似コードを書き、コメントアウトとして残したままコード化。4-13〜4-16 ではさらに大きなスケールで **実装を5ステップに分解してから着手** している。

---

## フォルダ構成

```
javascript-learning/
├── README.md
├── .gitignore
├── chapter2/                     # 第2章 実践コード（教材のサンプルデータ名に対応）
│   ├── 03-demo1/                 # 2-3 ① HTML内に直接書く方法
│   │   └── index.html            #   <script>window.alert('はじめてのJavaScript!');</script>
│   ├── 03-demo2/                 # 2-3 ② JavaScriptファイルを作成して読み込む方法
│   │   ├── first.js              #   window.alert('はじめてのJavaScript!'); ／ window.省略版 alert(...)
│   │   └── index.html            #   <script src="first.js"></script>
│   └── 05-demo/                  # 2-5 ファイルから console.log を呼び出す
│       └── index.html            #   <script>console.log('はじめてのコンソール！');</script>
│   # ※ 2-1 書く場所・2-2 環境構築・2-4 基本ルール は概念中心のため独立コードなし
│   #   （2-4 は 03-demo1/03-demo2 のコードを題材に文法を解説）
├── chapter3/                     # 第3章 実践コード（カラーピッカー制作）
│   └── ColorPicker/              # 3-1〜3-9 で継続制作する完成物（1つのサイト）
│       ├── index.html            # 3-2 <input type="color">・link・<script defer> ／ 3-4 p#colorText・div#colorPicker
│       ├── css/
│       │   └── style.css         # 3-2 body(背景#000・grid中央寄せ)・div(白カード・padding・border-radius・box-shadow)
│       └── js/
│           └── script.js         # 3-2 console.log('準備完了！') → 3-3 querySelector・.value → 3-6 textContent＋テンプレート文字列 → 3-7 const text/color → 3-8 addEventListener('input', colorBg) → 3-9 colorBg 関数定義（完成）
│   # ※ 3-1 完成形の紹介・3-5 DOMの理解 は概念中心（3-1 は完成コードの先出し）
│   #   09-demo2 相当（無名関数版）は script.js の別解として本文で紹介
├── chapter4/                     # 第4章 実践コード（イベント／5つの実装課題）
│   ├── 02-demo/                  # 4-2〜4-3 ローディング中の画面（load・classList.add）
│   │   ├── index.html            #   div#loading＋img.spinner ／ div.gallery（画像一覧）
│   │   ├── css/
│   │   │   └── style.css         #   #loading(position:fixed・inset:0・z-index:9999・grid中央)・.loaded(opacity:0・visibility:hidden)・.gallery(grid auto-fit)
│   │   ├── js/
│   │   │   └── script.js         #   window.addEventListener('load', …) → loading.classList.add('loaded')
│   │   └── images/               #   loading.png（スピナー）・img1.jpg〜（ギャラリー画像）
│   ├── 04-demo/                  # 4-4〜4-6 ボタンをクリックしてダークモードに（click・classList.toggle）
│   │   ├── index.html            #   button#btn＋h1＋p（本文）
│   │   ├── css/
│   │   │   └── style.css         #   body(transition:.5s)・.dark-theme(背景#000・文字#ddd)・#btn
│   │   └── js/
│   │       └── script.js         #   document.body.classList.toggle('dark-theme') ＋ if/else で btn.textContent を切替
│   ├── 07-demo/                  # 4-7〜4-9 入力した文字数を数える（keyup・length・比較演算子）
│   │   ├── index.html            #   textarea#text ／ span#count（文字数の表示先）
│   │   ├── css/
│   │   │   └── style.css         #   #text(width:600px＋max-width:100%)・#count・.alert(color:#f66)
│   │   └── js/
│   │       └── script.js         #   count.textContent = text.value.length ＋ if(… > 100) で .alert を add/remove
│   ├── 10-demo/                  # 4-10〜4-12 チェックを入れるとボタンを押せるように（change・真偽値・!）
│   │   ├── index.html            #   input#check[type=checkbox] ／ input#btn[type=submit][disabled]
│   │   ├── css/
│   │   │   └── style.css         #   label(display:block)・#btn・#btn:disabled(background:#ccc)
│   │   └── js/
│   │       └── script.js         #   if/else 版 → btn.disabled = !isAgreed.checked（1行に集約した完成形）
│   └── 13-demo/                  # 4-13〜4-16 ページのスクロール量を表示（scroll・5ステップ実装）
│       ├── index.html            #   div#bar（空・幅はJSが操作）＋ article（『銀河鉄道の夜』本文）
│       ├── css/
│       │   └── style.css         #   #bar(position:fixed・top/left:0・height:10px・width は書かない)・article・h2
│       └── js/
│           └── script.js         #   getScrollPercent 関数：scrollY／scrollHeight／clientHeight → percentage → #bar の style.width に代入
│   # ※ 4-1 イベントの仕組み は概念中心のため独立コードなし
│   #   デモ番号は各課題の親節に対応（4-2→02、4-4→04、4-7→07、4-10→10、4-13→13）
│   #   全デモが <head> でリセットCSS ress.css を CDN 読み込み（unpkg.com/ress/dist/ress.min.css）
└── notes/
    ├── 2026-07-16_19.md          # 第1章（1-1〜1-3）＋第2章（2-1〜2-5）＋第3章（3-1〜3-9）の学習ノート
    └── 2026-07-21_30.md          # 第4章（4-1〜4-16）の学習ノート
```

---

## 📚 使用教材、読書ログ

| 著者 | タイトル | 出版社 | 出版年 | ステータス |
| :--- | :--- | :--- | :--- | :--- |
| Mana | [1冊ですべて身につくJavaScript入門講座](https://www.sbcr.jp/product/4815615758/) | SBクリエイティブ | 2023年 | 学習中 (In Progress) |
