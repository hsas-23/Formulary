---
type: antibiotic
abx_id: ABPC/SBT
generic_ja: アンピシリン・スルバクタム
generic_en: ampicillin-sulbactam
brand_ja: ユナスピン
class_ja: ペニシリン系（アミノペニシリン）＋βラクタマーゼ阻害薬
route:
  - IV
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: no

comments: true
feedback_form: true

version: 1.1
last_reviewed: 2026-04-02
status: reviewed

covers:
  # グラム陽性菌
  Staphylococcus_aureus_MSSA: "○"
  Staphylococcus_aureus_MRSA: "×"
  Streptococcus_pneumoniae: "◎"
  Streptococcus_pyogenes: "◎"
  Streptococcus_agalactiae: "◎"
  Enterococcus_faecalis: "◎"
  Enterococcus_faecium: "△"
  Listeria_monocytogenes: "◯"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "○"
  Klebsiella_pneumoniae: "○"
  Klebsiella_oxytoca: "○"
  Klebsiella_aerogenes: "×"
  Proteus_mirabilis: "○"
  Proteus_vulgaris: "×"
  Serratia_marcescens: "×"
  Enterobacter_cloacae: "×"
  Citrobacter_freundii: "×"
  Citrobacter_koseri: "◯"
  Salmonella: "◯"
  Shigella: "◯"

  # 非発酵菌
  Pseudomonas_aeruginosa: "×"
  Acinetobacter_baumannii: "×"
  Stenotrophomonas_maltophilia: "×"

  # その他グラム陰性菌
  Haemophilus_influenzae: "◎"
  Moraxella_catarrhalis: "◎"
  Neisseria_meningitidis: "◯"
  Neisseria_gonorrhoeae: "✕"

  # 嫌気性菌・特殊菌
  Bacteroides_fragilis: "◎"
  Clostridioides_difficile: "×"

  # 耐性菌カテゴリー
  ESBL_producers: "×"
  AmpC_producers: "×"
  Carbapenemase_producers: "×"

indications:
  - sepsis
  - pneumonia
  - lung_abscess
  - empyema
  - intra_abdominal_infection
  - cholangitis
  - gynecologic_infection
  - SSTI
  - otitis_media
  - sinusitis
  - UTI_complicated

notes_short:
  - 腸球菌＋嫌気性菌を同時にカバー可能
  - 緑膿菌には無効
  - AmpC・ESBL産生菌には無効

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---

# アンピシリン・スルバクタム（ABPC/SBT / ユナスピン®）

---

## 分類
ペニシリン系抗菌薬（アミノペニシリン）＋β-ラクタマーゼ阻害薬配合剤

---

## 作用機序
アンピシリンはペニシリン結合タンパク（PBP）に結合し、細胞壁ペプチドグリカンの架橋形成を阻害することで殺菌的に作用する。  
スルバクタムはβ-ラクタマーゼを不可逆的に阻害し、アンピシリンの分解を防ぐことで抗菌スペクトラムを拡大する。

---

## 抗菌スペクトラム

### 有効な菌種

#### グラム陽性菌
- 肺炎球菌
- 化膿性レンサ球菌（GAS, GBS, GGS）
- 腸球菌（*Enterococcus faecalis*）
- メチシリン感受性黄色ブドウ球菌（MSSA）
  　　など

#### グラム陰性菌
- *Haemophilus influenzae*（βラクタマーゼ産生株含む）
- *Escherichia coli*（βラクタマーゼ産生株含む）
- *Klebsiella* 属
- *Proteus mirabilis*
- *Moraxella catarrhalis*
  　　など

#### 嫌気性菌
- *Bacteroides fragilis* group
- *Prevotella* 属
- *Clostridium* 属（*Clostridium perfringens*など。*Clostridioides difficile*は除く）
  　　など

---

### 無効・注意すべき耐性菌

#### βラクタマーゼ産生菌
- ESBL 産生菌
- カルバペネマーゼ産生菌

#### 本質的耐性
- MRSA
- 緑膿菌
- *Serratia*、*Enterobacter*、*Citrobacter* 属（AmpCを保有する菌種）
- 肺炎でも、非定型肺炎には無効（*Mycoplasma*や*Legionella*、*Chlamydia*をカバーしない）のため要注意

---

## 主な適応症
- 敗血症（培養で起因菌判明後）
- 肺炎、肺化膿症、膿胸
- 腹腔内感染症（消化管穿孔、腹膜炎、胆嚢炎、胆管炎、肝膿瘍）
- 産婦人科感染症
- 皮膚・軟部組織感染症
- 中耳炎、副鼻腔炎
- 複雑性尿路感染症

- **嫌気性菌感染症**
  - 腹腔内・婦人科感染症で有用
- **腸球菌と嫌気性菌を一度にカバーしたいとき（≒腹腔内感染症）**
  - ABPCで腸球菌をカバー、かつSBTによりGNR、嫌気性菌も一緒にカバーできる

---

## 用法・用量

### 成人の標準投与量

#### 静脈内（IV）投与
- 重症感染症
  - **3 g（ABPC 2 g / SBT 1 g）6時間ごと**
  　　（通常用量 1.5 g（ABPC 1 g / SBT 0.5 g）6時間ごと　と記載しているものもあるが、「入院している＝大体重症」なので、1回投与量は3gでよい）

---

### 腎機能障害時の用量調節
- 主に腎排泄性薬剤であり、腎機能低下時は**投与間隔を延長**する
- **初回投与量は腎機能にかかわらず通常量**を用いる
- 調節は**維持投与（2回目以降）から**行う

| CrCl (mL/min) | 推奨用量 |
|---|---|
| >30 | 通常用量・通常間隔 |
| 15–29 | (1.5–)3 g 12時間ごと |
| 5–14 | (1.5–)3 g 24時間ごと<br>→これを用いることで、重度腎機能障害患者の場合には、<br>　セフトリアキソン的に1日1回通院での静注治療も不可能ではない |

---

#### 血液透析（HD）
- **(1.5–)3 g を透析終了後に投与**
- 透析による除去あり（中等度）

#### 腹膜透析（PD）
- (**1.5–)3 g 24時間ごと**

#### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- **3 g 8時間ごと**
- 透析条件により調整を要する

---

### 肝機能障害時
- 用量調節不要

---

## 副作用

### 主な副作用
- 発疹、蕁麻疹などの過敏症反応
- 下痢、悪心、嘔吐
- 肝機能障害（AST・ALT 上昇）
- 好酸球増多

### 重篤な副作用
- アナフィラキシー、ショック
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- Stevens–Johnson 症候群、TEN
- 急性腎障害、間質性腎炎
- 血液障害（無顆粒球症、血小板減少）
- 中枢神経毒性（痙攣、意識障害）

---

## 薬物相互作用
- **プロベネシド**：腎排泄抑制による血中濃度上昇
- **メトトレキサート**：排泄低下による毒性増強
- **アロプリノール**：皮疹頻度増加
- **経口避妊薬**：効果減弱の可能性

---

## 注意点
- **ペニシリンアレルギー:** 既往歴のある患者では注意（アナフィラキシー既往の場合。自称「ペニシリンアレルギー」の9割は真のアレルギーではない）。重篤な即時型反応の既往がある場合は禁忌。
- **伝染性単核球症:** 伝染性単核球症の患者に投与すると、高頻度で皮疹が出現するため、投与を避けるべきである（ペニシリンGや、内服の場合はバイシリンGを用いる）。
- **耐性の強いβ-ラクタマーゼ産生菌**
  - 一般的にベータラクタマーゼ産生菌は本剤でカバー可能だが、AmpC過剰産生菌や、ESBL 産生菌は対象外
- **緑膿菌**
  - 本剤は無効
- **ナトリウム含有量**
  - 3 g 製剤あたり食塩相当量 約0.587 gのナトリウムを含有している
  →これを生理食塩液100mLに溶解して投与する場合、生食とあわせ1回あたり食塩相当量は約1.487g。1日4回投与では約5.948gとなり、ナトリウム制限が必要な患者では相当な塩分負荷となる。
  - 生食液希釈時はナトリウム負荷が増加するため、1回50mLに溶解とするか、必要に応じてブドウ糖液希釈を用いる

---

## 参考
- サンフォード感染症治療ガイド2025（Sanford Guide to Antimicrobial Therapy日本語版）
- UpToDate
- Johns-Hopkins ABx Guide
---