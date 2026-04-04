---
type: antibiotic
abx_id: CEZ
generic_ja: セファゾリン
generic_en: cefazolin
brand_ja: セファメジンα
class_ja: セフェム系（第1世代セファロスポリン）
route: [IV]
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: no

comments: true
feedback_form: true

version: 1.1
last_reviewed: 2026-04-04
status: reviewed

covers:
  # グラム陽性菌
  Staphylococcus_aureus_MSSA: "◎"
  Coagulase_negative_staphylococci_methicillin_susceptible: "○"
  Streptococcus_pyogenes: "◎"
  Streptococcus_agalactiae: "◎"
  Streptococcus_pneumoniae: "○"
  Viridans_streptococci: "○"
  Enterococcus_faecalis: "×"
  Enterococcus_faecium: "×"
  Listeria_monocytogenes: "×"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "○"
  Klebsiella_pneumoniae: "○"
  Klebsiella_oxytoca: "○"
  Klebsiella_aerogenes: "×"
  Proteus_mirabilis: "◎"
  Proteus_vulgaris: "×"
  Serratia_marcescens: "×"
  Enterobacter_cloacae: "×"
  Citrobacter_freundii: "×"
  Citrobacter_koseri: "×"
  Salmonella: "×"
  Shigella: "×"

  # 非発酵菌
  Pseudomonas_aeruginosa: "×"
  Acinetobacter_baumannii: "×"
  Stenotrophomonas_maltophilia: "×"

  # その他グラム陰性菌
  Haemophilus_influenzae: "×"
  Moraxella_catarrhalis: "×"
  Neisseria_meningitidis: "×"
  Neisseria_gonorrhoeae: "×"

  # 嫌気性菌・特殊菌
  Bacteroides_fragilis: "×"
  Clostridioides_difficile: "×"

  # 耐性菌カテゴリー
  ESBL_producers: "×"
  AmpC_producers: "×"
  Carbapenemase_producers: "×"

indications:
  - skin_soft_tissue_infection
  - bone_joint_infection
  - infective_endocarditis
  - bacteremia
  - urinary_tract_infection
  - surgical_prophylaxis

notes_short:
  - MSSA感染症の第一選択薬の一つ
  - 第1世代セフェムでグラム陽性菌に強い
  - 嫌気性菌カバーなし

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
    - ClinInfectDis2007_44_190
---

# セファゾリン（CEZ / セファメジンα®）

---

## 分類
セフェム系抗菌薬（第1世代セファロスポリン）

---

## 作用機序
ペニシリン結合タンパク（PBP）に結合し、ペプチドグリカン架橋形成を阻害することで細菌の細胞壁合成を阻害し、殺菌的に作用する。

---

## 抗菌スペクトラム

### 有効な菌種
- グラム陽性菌
  - ***Staphylococcus aureus*（MSSA）**
  - コアグラーゼ陰性*Staphylococcus*（Methicillin感受性）
  - ***Streptococcus pyogenes*（A群）**
  - *Streptococcus agalactiae*（B群）
  - *Streptococcus pneumoniae*（感受性株）
  - Viridans streptococci
- グラム陰性菌
  - ***Escherichia coli*（感受性株）**
  - ***Klebsiella pneumoniae***
  - *Klebsiella oxytoca*
  - ***Proteus mirabilis***

### 無効・注意すべき耐性菌
- **βラクタマーゼ産生菌**
  - ESBL産生腸内細菌目細菌（Enterobacterales）
  - AmpC産生菌（*Enterobacter*, *Citrobacter*, *Serratia* など）
- 本質的耐性
  - **MRSA**
  - ***Enterococcus* spp.**
  - ***Pseudomonas aeruginosa***
  - ***Listeria monocytogenes***
  - *Acinetobacter* spp.
  - **嫌気性菌**（*Bacteroides fragilis*など）

---

## 主な適応症
- **皮膚・軟部組織感染症**（蜂窩織炎、膿瘍など）
- **骨・関節感染症**
- **感染性心内膜炎（MSSA）**
- **菌血症（MSSA）**
- **尿路感染症**
- **外科手術時の予防投与**
  
　MSSA感染症では、**抗ブドウ球菌ペニシリン**（日本ではほぼ使用不可）**と並び第一選択**となることが多い。

---

## 用法・用量

### 成人の標準投与量

#### 静脈内（IV）投与
- 通常
  - **1–2 g IV q8h**
- 重症感染症（菌血症、心内膜炎、骨髄炎など）
  - **2 g IV q6–8h**
  - 最大 12 g/日

#### 外科手術時の予防投与
- **2 g IV**（皮膚切開60分以内）
  - 体重 ≥120 kg：**3 g IV**
- 手術時間が長い場合
  - **4時間ごとに追加投与**

---

### 腎機能障害時の用量調節
- eGFR併記可。ただし薬物投与量調整は**Cockcroft–GaultによるCrCl**を参考にする
- 初回投与量は腎機能にかかわらず通常量を用いる
- 維持投与から調整する

| CrCl (mL/min) | 通常用量時 | 重症用量時 |
|---|---|---|
| >50 | 調整不要（1–2 g q8h） | 2 g q6–8h |
| 30–50 | 1–2 g q8–12h | 2 g q8h |
| 10–30 | 0.5–1 g q12h | 1–2 g q12h |
| <10 | 0.5–1 g q24h | 1 g q24h |

#### 血液透析（HD）
- 0.5–1 g **24時間ごと**
- 透析日は**透析後投与**

外来透析患者では以下も使用される（抗菌薬投与のためのルートが不要になる）
- **月・水：2 g 透析後**
- **金：3 g 透析後**

#### 腹膜透析（PD）
- **0.5–1 g q24h**

#### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- **1–2 g q12h**

---

### 肝機能障害時
- **用量調節不要**

---

## 副作用

### 主な副作用
- 局所静脈炎
- 発疹
- 発熱
- 過敏症（約5%）
- クームス陽性（溶血性貧血との関連）（約3%）
- 好中球減少
- 血小板減少
- 肝酵素上昇
- BUN/クレアチニン上昇
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）

### 重篤な副作用
- **アナフィラキシー**
- **Stevens–Johnson症候群 / TEN**
- 急性腎障害
- 間質性腎炎
- 溶血性貧血
- 無顆粒球症
- 高用量時の痙攣（特に腎不全時）

---

## 薬物相互作用
- **プロベネシド**
　　→ 腎排泄抑制により血中濃度上昇
- **抗凝固薬（ワルファリンなど）**
　　→ PT延長の可能性

---

## 注意点
- アレルギー
  - CEZは側鎖構造が他βラクタムと異なるため**ペニシリンアレルギーとの交差反応は低い**
- 中枢神経感染症
  - 髄液移行性が低く**髄膜炎には通常使用しない**
- MSSA感染症
  - MSSA菌血症・心内膜炎では**第一選択薬**
- 嫌気性菌
  - 嫌気性菌カバーは不十分
  - 必要に応じ**メトロニダゾール等併用**を行うか、ベータラクタマーゼ阻害薬配合ペニシリン等に変更
- ESBL産生菌、AmpC過剰産生菌
  - **無効**

---

## 参考
- Sanford Guide to Antimicrobial Therapy
- UpToDate
- Johns-Hopkins ABX Guide
- Clin Infect Dis 44:190, 2007