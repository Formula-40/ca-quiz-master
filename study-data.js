// ===== 勉強ページデータ =====
const STUDY_DATA = {

ana: `
<div class="study-header ana-theme">
  <div class="airline-logo ana-logo" style="margin:0 auto 12px;">ANA</div>
  <h2>ANA 企業研究ノート</h2>
  <p class="study-subtitle">クイズの前にここで予習しよう</p>
</div>

<div class="study-section">
  <h3>🏢 企業概要</h3>
  <table class="study-table">
    <tr><th>正式名称</th><td>全日本空輸株式会社（All Nippon Airways Co., Ltd.）</td></tr>
    <tr><th>持株会社</th><td>ANAホールディングス株式会社（2013年〜）</td></tr>
    <tr><th>設立</th><td>1952年12月27日（前身: 日本ヘリコプター輸送）</td></tr>
    <tr><th>本社</th><td>東京都港区東新橋（汐留シティセンター）</td></tr>
    <tr><th>従業員数</th><td>約45,000名（グループ連結）/ CA約7,000名</td></tr>
    <tr><th>売上高</th><td>約2兆559億円（2024年3月期・過去最高益）</td></tr>
    <tr><th>アライアンス</th><td>スターアライアンス（1999年加盟・日本初）</td></tr>
    <tr><th>ハブ空港</th><td>羽田空港・成田空港</td></tr>
    <tr><th>保有機材</th><td>約290機（グループ全体）</td></tr>
    <tr><th>LCC子会社</th><td>Peach Aviation</td></tr>
  </table>
  <p class="study-source">出典: <a href="https://www.ana.co.jp/group/about-us/" target="_blank">ANA公式サイト</a> / <a href="https://www.anahd.co.jp/group/investors/" target="_blank">ANAホールディングスIR</a></p>
</div>

<div class="study-section">
  <h3>💡 経営理念・ビジョン・スローガン</h3>
  <div class="study-highlight ana-highlight">
    <div class="highlight-item">
      <strong>グループ経営理念</strong>
      <p>「安心と信頼を基礎に、世界をつなぐ<strong>心の翼</strong>で、夢にあふれる未来に貢献します」</p>
    </div>
    <div class="highlight-item">
      <strong>グループ経営ビジョン</strong>
      <p>「<strong>ワクワクで満たされる世界を</strong>」</p>
    </div>
    <div class="highlight-item">
      <strong>ブランドスローガン</strong>
      <p>「<strong>あんしん、あったか、あかるく元気！</strong>」</p>
    </div>
    <div class="highlight-item">
      <strong>ANA's Way（行動指針）4つの柱</strong>
      <p>① 安全（Safety） ② お客様視点（Customer Orientation）<br>③ 社会への責任（Social Responsibility） ④ チームスピリット（Team Spirit）</p>
    </div>
  </div>
  <p class="study-tip">💬 面接で「ANAの理念をどう体現するか」は頻出。自分のエピソードと結びつけて準備しよう！</p>
</div>

<div class="study-section">
  <h3>🌟 ANAの強み・差別化ポイント</h3>
  <ul class="study-list">
    <li><strong>スカイトラックス5スター</strong> — 2013年〜11年以上連続認定（世界で数社のみ）</li>
    <li><strong>ボーイング787ローンチカスタマー</strong> — 2011年世界初の商業飛行。世界最多80機以上保有</li>
    <li><strong>国内線シェアNo.1</strong> — 約50%超。羽田の発着枠でJALを上回る</li>
    <li><strong>ANAマイレージクラブ</strong> — 会員数約4,000万人以上（日本最大級）</li>
    <li><strong>イノベーション</strong> — ANA Avatar XPRIZE、ANA NEO（メタバース旅行）</li>
    <li><strong>サステナビリティ</strong> — 2050年カーボンニュートラル宣言、SAF（ACT FOR SKY）</li>
    <li><strong>万博</strong> — EXPO 2025 大阪・関西万博のオフィシャルエアライン</li>
  </ul>
</div>

<div class="study-section">
  <h3>👩‍✈️ CA採用プロセス（新卒）</h3>
  <div class="study-flow">
    <div class="flow-step"><span class="flow-num">1</span> ES提出（3〜4月）</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">2</span> 動画選考（自己PR 1分）</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">3</span> 1次グループ面接（4〜6名）</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">4</span> 2次グループ面接（3〜4名）</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">5</span> 最終個人面接 + 身体検査</div>
  </div>
  <div class="study-note">
    <strong>応募資格:</strong> 4年制大学 or 大学院卒業見込み（短大・専門不可）<br>
    <strong>TOEIC目安:</strong> 600点以上（実質700点以上が有利）
  </div>
  <p class="study-source">出典: <a href="https://www.anahd.co.jp/recruit/" target="_blank">ANA採用サイト</a> / <a href="https://www.onecareer.jp/" target="_blank">ONE CAREER</a> (2024-2025年)</p>
</div>

<div class="study-section">
  <h3>🆚 ANA vs JAL 比較ポイント</h3>
  <table class="study-table compare-table">
    <tr><th></th><th class="ana-th">ANA</th><th class="jal-th">JAL</th></tr>
    <tr><td>設立</td><td>1952年</td><td>1951年</td></tr>
    <tr><td>アライアンス</td><td>スターアライアンス</td><td>ワンワールド</td></tr>
    <tr><td>社風</td><td>実践的・挑戦的</td><td>フィロソフィ重視・精神的</td></tr>
    <tr><td>スローガン</td><td>あんしん、あったか、あかるく元気！</td><td>JALフィロソフィ（稲盛哲学）</td></tr>
    <tr><td>LCC子会社</td><td>Peach Aviation</td><td>ZIPAIR Tokyo</td></tr>
    <tr><td>CA応募資格</td><td>4年制大学以上のみ</td><td>専門・短大も可</td></tr>
    <tr><td>5スター取得</td><td>2013年〜</td><td>2018年〜</td></tr>
  </table>
</div>
`,

jal: `
<div class="study-header jal-theme">
  <div class="airline-logo jal-logo" style="margin:0 auto 12px;">JAL</div>
  <h2>JAL 企業研究ノート</h2>
  <p class="study-subtitle">クイズの前にここで予習しよう</p>
</div>

<div class="study-section">
  <h3>🏢 企業概要</h3>
  <table class="study-table">
    <tr><th>正式名称</th><td>日本航空株式会社（Japan Airlines Co., Ltd.）</td></tr>
    <tr><th>設立</th><td>1951年（戦後日本初の民間航空会社）</td></tr>
    <tr><th>本社</th><td>東京都品川区東品川</td></tr>
    <tr><th>従業員数</th><td>約36,000名（グループ連結）/ CA約5,500名</td></tr>
    <tr><th>売上収益</th><td>約1兆6,518億円（2024年3月期）/ 予想約1兆9,300億円（2025年3月期）</td></tr>
    <tr><th>アライアンス</th><td>ワンワールド（oneworld）</td></tr>
    <tr><th>ハブ空港</th><td>羽田空港・成田空港</td></tr>
    <tr><th>自社運航国際線</th><td>約66路線（68ヶ国・地域）</td></tr>
    <tr><th>LCC子会社</th><td>ZIPAIR Tokyo（2020年就航）</td></tr>
    <tr><th>新卒CA基本給</th><td>221,000円 + 乗務手当（約50,000円/月）</td></tr>
  </table>
  <p class="study-source">出典: <a href="https://www.jal.com/ja/outline/" target="_blank">JAL公式サイト</a> / <a href="https://www.jal.com/ja/investor/" target="_blank">JAL IR情報</a></p>
</div>

<div class="study-section">
  <h3>📖 JALフィロソフィ（超重要！）</h3>
  <div class="study-highlight jal-highlight">
    <div class="highlight-item">
      <strong>企業理念</strong>
      <p>「全社員の物心両面の幸福を追求し、お客さまに最高のサービスを提供します。企業価値を高め、社会の進歩発展に貢献します。」</p>
    </div>
    <div class="highlight-item">
      <strong>JAL Vision 2030</strong>
      <p>「<strong>世界で一番選ばれ、愛されるエアライングループ</strong>」</p>
    </div>
    <div class="highlight-item">
      <strong>稲盛和夫の方程式</strong>
      <p>人生・仕事の結果 ＝ <strong>考え方 × 熱意 × 能力</strong><br>（考え方がマイナスだと結果もマイナスになる）</p>
    </div>
  </div>

  <h4 style="margin-top:20px;">面接で特に聞かれるフィロソフィ項目</h4>
  <div class="philosophy-cards">
    <div class="phil-card">
      <strong>「土俵の真ん中で相撲をとる」</strong>
      <p>余裕をもって早めに準備・対応すること</p>
    </div>
    <div class="phil-card">
      <strong>「小善は大悪に似たり、大善は非情に似たり」</strong>
      <p>目先の優しさが相手のためにならず、厳しい指導が本当の優しさ</p>
    </div>
    <div class="phil-card">
      <strong>「有意注意で仕事にあたる」</strong>
      <p>意識を集中させ、注意力を持って物事に取り組む</p>
    </div>
    <div class="phil-card">
      <strong>「美しい心をもつ」</strong>
      <p>思いやり・感謝・誠実さ・謙虚さ = 内面の美しさ</p>
    </div>
    <div class="phil-card">
      <strong>「常に謙虚に素直な心で」</strong>
      <p>成長の基本姿勢。学びへの謙虚さ</p>
    </div>
  </div>
  <p class="study-tip">💬 面接では1〜2個に絞って、自分の経験と結びつけて語るのがコツ！「全部共感」はNG。</p>
</div>

<div class="study-section">
  <h3>🔑 経営破綻と再建（必ず知っておくべき）</h3>
  <div class="study-timeline">
    <div class="timeline-item"><span class="timeline-year">2010年1月</span> 会社更生法の適用を申請（経営破綻）</div>
    <div class="timeline-item"><span class="timeline-year">2010年2月</span> 稲盛和夫氏が会長に就任、再建を指揮</div>
    <div class="timeline-item"><span class="timeline-year">2010〜2012年</span> JALフィロソフィ教育を全社員に徹底、意識改革</div>
    <div class="timeline-item"><span class="timeline-year">2012年9月</span> 東京証券取引所に再上場（約2年8ヶ月で再建）</div>
  </div>
  <p class="study-tip">💬 面接で「経営破綻についてどう思うか」は頻出。批判ではなく、教訓とフィロソフィによる再建への敬意を示そう。</p>
</div>

<div class="study-section">
  <h3>👩‍✈️ CA採用プロセス（2026年度新卒）</h3>
  <div class="study-flow">
    <div class="flow-step"><span class="flow-num">1</span> ES提出 + 自己PR動画</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">2</span> AI面接 ← 2026年度新導入！</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">3</span> グループワーク + グループ面接</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">4</span> 適性検査（ロールシャッハテスト）</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span class="flow-num">5</span> 最終個人面接</div>
  </div>
  <div class="study-note">
    <strong>応募資格:</strong> 専門学校・短大・4年制大学・大学院卒業見込み（ANAより幅広い！）<br>
    <strong>TOEIC目安:</strong> 600点以上が望ましい<br>
    <strong>選考時期:</strong> 春ターム・夏タームの2回（どちらか選択）<br>
    <strong>特徴:</strong> 「感謝とエール」タイム（受験者同士が感謝・応援の言葉を送り合う）
  </div>
  <p class="study-source">出典: <a href="https://job-jal.com/" target="_blank">JAL採用サイト</a> (2025-2026年)</p>
</div>

<div class="study-section">
  <h3>🛡️ 安全への取り組み</h3>
  <div class="study-note" style="border-left-color: var(--jal-red);">
    <strong>JAL安全啓発センター</strong><br>
    1985年の御巣鷹山事故の遺物・資料を展示し、安全の教訓を風化させないための社内施設。全社員が定期的に訪問し、安全への決意を新たにしている。
  </div>
  <p class="study-tip">💬 「安全についてどう考えるか」も頻出。安全が全ての大前提であることを語ろう。</p>
</div>
`,

interview: `
<div class="study-header interview-theme">
  <div class="airline-logo interview-logo" style="margin:0 auto 12px;">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
  </div>
  <h2>面接対策ノート</h2>
  <p class="study-subtitle">クイズの前にここで予習しよう</p>
</div>

<div class="study-section">
  <h3>📋 ANA CA面接の流れ（現役CA体験談）</h3>

  <h4>エントリー</h4>
  <div class="study-note">
    ES（エントリーシート） + 自己PR動画の提出
  </div>

  <h4>1次面接（グループ）</h4>
  <div class="study-note">
    <strong>形式:</strong> 4〜6名のグループ面接、面接官2〜3名<br>
    <strong>質問例（約2問）:</strong><br>
    ・最近で心温まるエピソードは？<br>
    ・後輩がミスしてしまった時どう対応する？<br>
    <strong>ポイント:</strong> 他の受験者の話を聞く姿勢も評価されている！
  </div>

  <h4>2次面接（グループ 3〜4人）</h4>
  <div class="study-note">
    <strong>質問例:</strong><br>
    ・1分自己紹介<br>
    ・ESの深掘り<br>
    ・会社の改善点は？<br>
    ・外国の方とコミュニケーションをとる時心掛けていることは？<br>
    ・最後に一言（挙手制のアピールチャンス！）
  </div>

  <h4>最終面接（個人）</h4>
  <div class="study-note">
    <strong>質問例:</strong><br>
    ・自己PR<br>
    ・ESのさらなる深掘り<br>
    ・挫折した時どうする？<br>
    ・ANAから内定が出たら入社しますか？
  </div>
  <p class="study-source">出典: 現役ANA CA体験談 (2025年)</p>
</div>

<div class="study-section">
  <h3>🔑 面接で差がつく5つのポイント</h3>
  <div class="study-checklist">
    <div class="check-item">
      <span class="check-icon">1</span>
      <div>
        <strong>笑顔と傾聴</strong>
        <p>自分が話す時だけでなく、他の人の話を聞く時の表情・うなずきも評価される。「この人と一緒にフライトしたい」と思わせる。</p>
      </div>
    </div>
    <div class="check-item">
      <span class="check-icon">2</span>
      <div>
        <strong>自分のエピソードで語る</strong>
        <p>「おもてなしとは？」→ 辞書の定義ではなく自分の体験。「なぜANA/JAL？」→ 実際に搭乗した時の体験。具体性が命。</p>
      </div>
    </div>
    <div class="check-item">
      <span class="check-icon">3</span>
      <div>
        <strong>安全が絶対的な大前提</strong>
        <p>「安全とサービスどちらが大切？」→ 安全が大前提。安全があってこそサービスが成り立つ。</p>
      </div>
    </div>
    <div class="check-item">
      <span class="check-icon">4</span>
      <div>
        <strong>会社の違いを理解する</strong>
        <p>ANA: 「あんしん、あったか」の精神 / JAL: JALフィロソフィへの共感。相手の悪口ではなく、志望先の魅力を語る。</p>
      </div>
    </div>
    <div class="check-item">
      <span class="check-icon">5</span>
      <div>
        <strong>挫折→学び→成長のストーリー</strong>
        <p>「困難をどう乗り越えたか」は最終面接で必ず聞かれる。レジリエンス（回復力）を見ている。</p>
      </div>
    </div>
  </div>
</div>

<div class="study-section">
  <h3>📝 頻出質問TOP10</h3>
  <ol class="study-ranked-list">
    <li><strong>志望動機</strong>（なぜCA？ なぜこの会社？）</li>
    <li><strong>学生時代に力を入れたこと</strong>（ガクチカ）— STAR法で構成</li>
    <li><strong>自己PR</strong> — 強み→エピソード→CAとの接続</li>
    <li><strong>なぜANA（JAL）ではなく御社か</strong> — 批判ではなく志望先の魅力</li>
    <li><strong>チームで取り組んだ経験</strong> — 自分の役割を明確に</li>
    <li><strong>挫折・困難をどう乗り越えたか</strong> — レジリエンス</li>
    <li><strong>おもてなしとは何か</strong> — 自分の体験で語る</li>
    <li><strong>クレーム対応</strong> — まず傾聴→安全最優先→冷静に対応</li>
    <li><strong>10年後のキャリアビジョン</strong> — 成長ステップ + 会社への貢献</li>
    <li><strong>最後に一言</strong> — 感謝 + 入社への熱意を簡潔に</li>
  </ol>
</div>

<div class="study-section">
  <h3>📹 自己PR動画のコツ</h3>
  <div class="study-checklist">
    <div class="check-item">
      <span class="check-icon">✓</span>
      <div><strong>笑顔</strong> — 話の内容以上に第一印象が重視される</div>
    </div>
    <div class="check-item">
      <span class="check-icon">✓</span>
      <div><strong>カメラ目線</strong> — 画面ではなくレンズを見て話す</div>
    </div>
    <div class="check-item">
      <span class="check-icon">✓</span>
      <div><strong>時間厳守</strong> — 30秒〜1分を正確に</div>
    </div>
    <div class="check-item">
      <span class="check-icon">✓</span>
      <div><strong>構成</strong> — 結論→エピソード→CAとの結びつき</div>
    </div>
    <div class="check-item">
      <span class="check-icon">✓</span>
      <div><strong>自然に</strong> — 棒読み暗記はNG。何度も練習して自然に</div>
    </div>
  </div>
</div>

<div class="study-section">
  <h3>⚠️ 面接NG集</h3>
  <div class="study-ng-list">
    <div class="ng-item">❌ 他社の悪口を言う（「JALは経営破綻したから…」）</div>
    <div class="ng-item">❌ 「苦手な人はいません」と嘘をつく</div>
    <div class="ng-item">❌ 「特にありません」と逆質問を放棄</div>
    <div class="ng-item">❌ 給料・休みなど待遇面ばかり聞く</div>
    <div class="ng-item">❌ 全てのフィロソフィを暗記して列挙</div>
    <div class="ng-item">❌ 「とにかくANA（JAL）が好きです！」と熱量だけで押す</div>
  </div>
</div>
`
};
