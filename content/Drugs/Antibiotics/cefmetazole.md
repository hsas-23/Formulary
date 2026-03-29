---
type: antibiotic
abx_id: CMZ
generic_ja: セフメタゾール
generic_en: cefmetazole
brand_ja: セフメタゾン
class_ja: セフェム系（セファマイシン系）
route: [IV]
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: no
covers:
  MSSA: "○"
  Streptococcus_pneumoniae: "○"
  Streptococcus_pyogenes: "○"
  Viridans_streptococci: "○"
  E_coli: "◎"
  Klebsiella: "◎"
  Proteus: "◎"
  Haemophilus_influenzae: "○"
  Moraxella_catarrhalis: "○"
  Neisseria: "○"
  ESBL_producers: "○"
  Bacteroides_fragilis: "◎"
  Clostridium: "○"
  Peptostreptococcus: "○"
  Enterococcus: "×"
  MRSA: "×"
  Pseudomonas_aeruginosa: "×"
  Listeria: "×"
  Serratia: "×"
  Enterobacter: "×"
  Citrobacter: "×"
indications:
  - intra_abdominal_infection
  - gynecologic_infection
  - surgical_prophylaxis
  - skin_soft_tissue_infection
  - respiratory_infection
  - urinary_tract_infection
notes_short:
  - 嫌気性菌カバー可能なセフェム
  - NMTT側鎖による出血傾向・ジスルフィラム様反応
  - ESBL感染症に対するカルバペネムスペアリングとして使用される場合あり
links:
  references:
    - Sanford2025
    - JohnsHopkinsABxGuide
---

【抗菌薬まとめ】セフメタゾール

### セフメタゾール：CMZ：セフメタゾン®

### 分類
セフェム系抗菌薬（セファマイシン系：第2世代に分類されることが多い）

### 作用機序
ペニシリン結合タンパク（PBP）に結合し、細胞壁ペプチドグリカンの架橋形成を阻害することで殺菌的に作用する。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - MSSA
  - 肺炎球菌
  - 化膿性レンサ球菌
  - 緑色レンサ球菌
- グラム陰性菌
  - *Escherichia coli*
  - *Klebsiella* 属
  - *Proteus* 属
  - *Haemophilus influenzae*
  - *Moraxella catarrhalis*
  - *Neisseria* 属
  - 一部のβラクタマーゼ産生腸内細菌科細菌（AmpC産生のない菌種）
- 嫌気性菌
  - *Bacteroides fragilis* 群
  - *Clostridium* 属
  - *Peptostreptococcus* 属
　**※単剤で嫌気性菌へのスペクトラムを有することが最大の特徴**
　　（他のセファロスポリンは基本的に嫌気性菌には無効）
#### 無効・注意すべき耐性菌
- MRSA
- 腸球菌
- *Listeria monocytogenes*
- 緑膿菌
- *Serratia*、*Enterobacter*、*Citrobacter* 属
- カルバペネマーゼ産生菌

### 主な適応症
- 腹腔内感染症（嫌気性菌カバーを要する症例）
- 婦人科感染症
- 手術部位感染予防（腹部手術）
- 皮膚・軟部組織感染症
- 呼吸器感染症
- 尿路感染症

### 用法・用量
#### 成人の標準投与量
##### 静脈内（IV）投与
- 軽症〜中等症
  - **2 g 8–12時間ごと**
- 重症感染症
  - **2 g 6時間ごと**

（Time above MIC 依存型抗菌薬）

#### 腎機能障害時の用量調節
- 主に腎排泄性薬剤であり、腎機能低下時は投与間隔を延長する
- 初回投与量は腎機能にかかわらず通常量を用いる
- 調節は維持投与から行う
- eGFRではなく**Cockcroft–Gault式によるCrClで評価することを推奨**

| CrCl (mL/min) | 推奨用量           |
| ------------- | -------------- |
| >80           | 用量調節不要         |
| 50–80         | (1–)2 g 12時間ごと |
| 10–49         | 2g 24時間ごと      |
| <10           | (1–)2 g 48時間ごと |

##### 血液透析（HD）
- **1–2 g 48時間ごと**
- 透析日は**透析後投与**

##### 腹膜透析（CAPD）
- **1–2 g 48時間ごと**

##### CRRT / SLED
- 明確なデータなし
- 実臨床では 1–2 g 12–24時間ごとを目安に個別調整（感染症内科に相談）

#### 肝機能障害時
- 用量調節不要（Child-Pugh A–C）

### 副作用
#### 主な副作用
- 胃腸症状（悪心、嘔吐、下痢）
- 発疹、過敏症
- 肝機能検査値上昇
- 好酸球増多

#### 重篤な副作用
- アナフィラキシー
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- 痙攣（高用量・腎機能障害時）
- 血液障害（無顆粒球症、血小板減少、溶血性貧血）
- 出血傾向：ビタミンK依存性凝固障害
- アルコールとの併用で**ジスルフィラム（嫌酒薬）様反応**

### 薬物相互作用
- アルコール
  - N-メチルチオテトラゾール（NMTT）側鎖によりジスルフィラム様反応
  - 投与中および終了後数日間は禁酒
- ワルファリン
  - N-メチルチオテトラゾール（NMTT）側鎖によりビタミンK代謝障害→PT-INR延長の可能性（ビタミンK抑制）

### 注意点
- UpToDateでの情報: セフメタゾールは米国では販売されていないため、UpToDateには記載がない
- NMTT側鎖
  - ビタミンKエポキシド還元酵素阻害 → 出血傾向
  - 栄養不良・高齢者・長期投与で注意
  - 臨床的にあまり問題とならないが（使用中にアルコールを飲まないため）、アルコールとの併用でジスルフィラム様反応
- ESBL産生菌への使用
  - in vitroでは活性あり（日本国内で検出されることが多いESBLのタイプでは、大体有効（多くのCTX-M型ESBLに対してin vitro活性あり））
  - 教科書的にはESBL感染症に対する標準治療ではないとされているが、当院では**カルバペネム温存目的での代替選択**（カルバペネムスペアリング）として積極的に用いている
　　（日本国内の多施設観察研究や後ろ向きコホート研究では、尿路感染症や菌血症においてセフメタゾールはカルバペネムと同等の臨床効果や死亡率を示したと報告）
- 嫌気性菌
  - 腹腔内感染症に有用
- ペニシリンアレルギー
  - 重篤即時型反応既往では禁忌



---
### ★★★アンピシリン・スルバクタムとセフメタゾールの使い分け★★★

CMZの位置づけは：
- 嫌気性菌を含む腹腔内感染症
- 手術予防投与
- ESBL産生菌感染症でのカルバペネム温存

つまり

**ABPC/SBT vs CMZ**
- 腸球菌を一緒にカバー → ABPC/SBT
- 周術期予防抗菌薬 → CMZ
- ESBL産生菌感染症でのカルバペネム温存（特に尿路感染症や胆道感染症、菌血症） → CMZ 
  (AmpCを保有する菌（*Enterobacter*、*Citrobacter*、*Serratia*など）にはCMZは無効)

---
### 参考
- サンフォード感染症治療ガイド2025（Sanford Guide to Antimicrobial Therapy日本語版）
- Johns-Hopkins ABx Guide

カルバペネムスペアリングについての研究
- Antimicrob Agents Chemother. 2015 Sep;59(9):5107-13.  
- BMC Infect Dis. 2016 Aug 18;16(1):427.
- Antimicrob Agents Chemother. 2023 Oct 18;67(10):e0051023.
- Open Forum Infect Dis. 2023 Oct 7;10(10):ofad502.
- Pediatr Int. 2019 Jun;61(6):572-577.
---