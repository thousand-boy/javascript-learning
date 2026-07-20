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

> 第1章はJavaScriptの「全体像」と「使われ方」を学ぶ概念中心の章のため、コードファイルはなし（コーディングは第2章以降）。
> 章タブ構成は「Introduction｜Getting Started｜Basic｜Event｜Data｜Animation｜Website｜Troubleshooting」の全8章。第1章＝Introduction、第2章＝Getting Started。

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
└── notes/
    └── 2026-07-16_19.md          # 第1章（1-1〜1-3）＋第2章（2-1〜2-5）＋第3章（3-1〜3-9）の学習ノート
```

> 第1章は概念中心のためコードファイルなし（`chapter1/` は作成していません）。
> `chapter2/` 内のフォルダ名（`03-demo1`／`03-demo2`／`05-demo`）は教材のサンプルデータ名に対応する想定です。`03-` は第2章の3節（2-3）、`05-` は5節（2-5）を指します。実際にコミットした練習ファイルに合わせて適宜調整してください。
> `chapter3/ColorPicker/` は 3-1〜3-9 を通して1つのカラーピッカーを完成させる構成です（教材のサンプルデータ名は `chapter3/ColorPicker`・`02-demo`〜`09-demo`／`09-demo2`）。各節はこの同一サイトに追記していく形なので、上記では最終的な `script.js` の到達点をコメントで表記しています。
> ※VSCode／Chrome DevTools のUI・ショートカット・拡張機能名は、書籍（2023年時点）記載のものです。現在の表記と異なる場合があります。

---

## 📚 使用教材、読書ログ

| 著者 | タイトル | 出版社 | 出版年 | ステータス |
| :--- | :--- | :--- | :--- | :--- |
| Mana | [1冊ですべて身につくJavaScript入門講座](https://www.sbcr.jp/product/4815615758/) | SBクリエイティブ | 2023年 | 学習中 (In Progress) |

> 前提教材：[1冊ですべて身につくHTML & CSSとWebデザイン入門講座［第2版］](https://www.sbcr.jp/product/4815618469/)（Mana／SBクリエイティブ）。同シリーズのHTML & CSS学習の続きとして本書に進んでいます。