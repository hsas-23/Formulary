---
type: antibiotic
abx_id: CAZ
generic_ja: セフタジジム
generic_en: ceftazidime
brand_ja: モダシン
class_ja: セフェム系（第3世代）
route: [IV]
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: yes

comments: true
feedback_form: true

version: 1.1
last_reviewed: 2026-04-04
status: reviewed

covers:
  # グラム陽性菌
  Staphylococcus_aureus_MSSA: "×"
  Staphylococcus_aureus_MRSA: "×"
  Streptococcus_pneumoniae: "×"
  Streptococcus_pyogenes: "×"
  Streptococcus_agalactiae: "×"
  Viridans_streptococci: "×"
  Enterococcus_faecalis: "×"
  Enterococcus_faecium: "×"
  Listeria_monocytogenes: "×"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "◎"
  Klebsiella_pneumoniae: "◎"
  Klebsiella_oxytoca: "◎"
  Klebsiella_aerogenes: "△"
  Proteus_mirabilis: "◎"
  Proteus_vulgaris: "◎"
  Serratia_marcescens: "△"
  Enterobacter_cloacae: "△"
  Citrobacter_freundii: "△"
  Citrobacter_koseri: "△"
  Salmonella: "◎"
  Shigella: "◎"

  # 非発酵菌
  Pseudomonas_aeruginosa: "◎"
  Acinetobacter_baumannii: "×"
  Stenotrophomonas_maltophilia: "×"

  # その他グラム陰性菌
  Haemophilus_influenzae: "◎"
  Moraxella_catarrhalis: "◎"
  Neisseria_meningitidis: "◎"
  Neisseria_gonorrhoeae: "◎"

  # 嫌気性菌・特殊菌
  Bacteroides_fragilis: "×"
  Clostridioides_difficile: "×"

  # 耐性菌カテゴリー
  ESBL_producers: "×"
  AmpC_producers: "△"
  Carbapenemase_producers: "×"

indications:
  - pseudomonal_infection
  - sepsis
  - pneumonia
  - urinary_tract_infection
  - febrile_neutropenia
  - HAP
  - VAP

notes_short:
  - 緑膿菌を主標的とする第3世代セフェム
  - グラム陽性菌カバーは乏しい
  - 腎機能低下時は厳密な用量調節が必要

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---

【抗菌薬まとめ】セフタジジム

### セフタジジム：CAZ：モダシン®
（および後発品）

### 分類
セフェム系抗菌薬（第3世代）

### 作用機序
細菌の細胞壁合成（PBP結合）を阻害することで殺菌的に作用する。第3世代セフェム系の中でも特に緑膿菌に対し強力な活性を持つ。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陰性菌
  - 緑膿菌（*P. aeruginosa*）：本薬の主要なターゲットである
  - 腸内細菌目細菌（*E. coli*、*Klebsiella*、*Proteus*など）
  - *Haemophilus influenzae*
  - *Neisseria* 属

#### 無効・注意すべき耐性菌
- **グラム陽性菌**に対してはほとんど活性がなく、<u>無効と考えた方が良い</u>（臨床的にはカバー薬として用いない）
  - レンサ球菌属（肺炎球菌など）
  - 黄色ブドウ球菌（MSSA）
- βラクタマーゼ産生菌
  - AmpC産生菌（エンテロバクター、シトロバクター等）：セフェピム（第4世代）と比較して安定性が低く、耐性誘導のリスクがある。
  - ESBL産生菌、カルバペネマーゼ産生菌：無効である。
- 本質的耐性・無効
  - MRSA
  - 腸球菌（*Enterococcus* spp.）
  - 嫌気性菌
  - リステリア

### 主な適応症
- 緑膿菌感染症（敗血症、肺炎、尿路感染症等）
- 発熱性好中球減少症（FN）の経験的治療
- 院内肺炎（HAP）、人工呼吸器関連肺炎（VAP）

### 用法・用量
#### 成人の標準投与量
##### 静脈内（IV）投与
- **通常（30分点滴）**
  - 1〜2g 8時間ごと
  - 生命を脅かす重症感染症（特に免疫不全者）：2g 8時間ごと
- **長時間点滴（Extended Infusion：3〜4時間かけて投与）** 
  　※推奨レジメンだが、煩雑となるため当院では通常時は用いていない
  - 2g 8時間ごと
  - 初回のみ通常の30分点滴（Loading dose）を行い、次回から長時間点滴に移行することが推奨される。

#### 腎機能障害時の用量調節
- 主に腎排泄であるため、腎機能低下時は厳密な用量調節が必要である。
- 以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（1g q8h基準） | 重症用量時（2g q8h基準） |
|---|---|---|
| > 50 | 1g q8h | 2g q8h |
| 31–50 | 1g q12h | 2g q12h |
| 16–30 | 1g q24h | 2g q24h |
| ≤ 15 | 500mg q24h | 1g q24h |

##### 血液透析（HD）
- 透析終了後に 500mg〜1g を投与する（24時間ごと）。
- 重症例や耐性菌懸念時は、透析後に2gの投与を検討する。

外来透析患者では以下も使用される（抗菌薬投与のためのルートが不要になる）
- **月・水：2 g 透析後**
- **金：3 g 透析後**

##### 腹膜透析（PD）
- 1g 24時間ごと

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 2g 8〜12時間ごと

#### 肝機能障害時
- 用量調節は不要である。

### 副作用
#### 主な副作用
- 過敏反応（発疹、蕁麻疹など）
- 消化器症状（下痢、悪心など）
- 肝機能異常
- 光線過敏症（稀に報告がある）

#### 重篤な副作用
- ショック、アナフィラキシー
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- 神経毒性（意識障害、痙攣等）：腎機能低下時の過剰投与でリスクが高まる。
- 好中球減少、血小板減少

### 薬物相互作用
- 特筆すべき重大な相互作用は少ないが、アミノグリコシド系や利尿薬との併用による腎毒性の増強に注意する。

### 注意点
- **アズトレオナム（AZT）との交差アレルギー**
  - セフタジジムはモノバクタム系のアズトレオナム（アザクタム®）と同一のR1側鎖を持つため、セフタジジムに真のアレルギーがある患者ではアズトレオナムの使用も避けるべきである。
- グラム陽性菌のカバーがない
  - グラム陽性菌には効果がないため、カバーが必要な場合には、他の薬剤を選択する
- 嫌気性菌カバーがない
  - 嫌気性菌には無効である。腹腔内感染症等では必ずメトロニダゾール等の嫌気性菌カバー薬を併用すること。
- 緑膿菌への対応
  - 緑膿菌に対しては、Time above MICを最大化するため、長時間点滴（3〜4時間投与）が治療効果の最大化に有用である。
- セフェピム（第4世代）との使い分け
  - AmpC産生菌が疑われる場合は、セフタジジムよりも耐性誘導のリスクが低いセフェピムやカルバペネム系が優先される。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---