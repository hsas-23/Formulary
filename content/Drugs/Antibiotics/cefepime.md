---
type: antibiotic
abx_id: CFPM
generic_ja: セフェピム
generic_en: cefepime
brand_ja: マキシピーム
class_ja: セフェム系（第4世代）
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
  Staphylococcus_aureus_MSSA: "○"
  Staphylococcus_aureus_MRSA: "×"
  Streptococcus_pneumoniae: "○"
  Streptococcus_pyogenes: "○"
  Streptococcus_agalactiae: "○"
  Viridans_streptococci: "○"
  Enterococcus_faecalis: "×"
  Enterococcus_faecium: "×"
  Listeria_monocytogenes: "×"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "◎"
  Klebsiella_pneumoniae: "◎"
  Klebsiella_oxytoca: "◎"
  Klebsiella_aerogenes: "◎"
  Proteus_mirabilis: "◎"
  Proteus_vulgaris: "◎"
  Serratia_marcescens: "◎"
  Enterobacter_cloacae: "◎"
  Citrobacter_freundii: "◎"
  Citrobacter_koseri: "◎"
  Salmonella: "◯"
  Shigella: "◯"

  # 非発酵菌
  Pseudomonas_aeruginosa: "◎"
  Acinetobacter_baumannii: "△"
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
  ESBL_producers: "✕"
  AmpC_producers: "◎"
  Carbapenemase_producers: "×"

indications:
  - febrile_neutropenia
  - HAP
  - VAP
  - NHCAP
  - sepsis
  - UTI_complicated
  - pyelonephritis
  - meningitis

notes_short:
  - 緑膿菌およびAmpC産生菌を意識した広域セフェム
  - 腎機能障害時は厳密な用量調節が必須
  - セフェピム脳症に注意
  - 第3世代よりAmpC安定性が高い

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---

【抗菌薬まとめ】セフェピム

### セフェピム：CFPM：マキシピーム®
（および後発品）

### 分類
セフェム系抗菌薬（第4世代）

### 作用機序
細菌の細胞壁合成（PBP結合）を阻害することで殺菌的に作用する。第3世代セフェム系と比較して、染色体性のAmpC型β-ラクタマーゼに対して安定性が高い。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - 肺炎球菌、化膿レンサ球菌、緑色レンサ球菌
  - 黄色ブドウ球菌（MSSA）
- グラム陰性菌
  - 緑膿菌（*P. aeruginosa*）：主要なターゲットの一つ
  - 腸内細菌目細菌（*E. coli*、*Klebsiella* など）
  - AmpC産生菌（*Enterobacter*、*Citrobacter*、*Serratia* 等）：第3世代セフェムより推奨される
  - *Haemophilus influenzae*
  - *M. catarrhalis*

#### 無効・注意すべき耐性菌
- βラクタマーゼ産生菌
  - ESBL産生菌（in vitroで感受性があっても治療失敗のリスクがあり、通常は避けるべきである）
  - カルバペネマーゼ産生菌
- 本質的耐性・無効
  - MRSA
  - 腸球菌（*Enterococcus* spp.）
  - 嫌気性菌（*Bacteroides fragilis* 等：嫌気性菌カバーが必要な場合はメトロニダゾール等の併用が必要）
  - *Listeria monocytogenes*
  - *Legionella* spp.

### 主な適応症
- 発熱性好中球減少症（FN）の経験的治療
- 院内肺炎（HAP）、人工呼吸器関連肺炎（VAP）、医療介護関連肺炎（NHCAP）
- 重症敗血症（緑膿菌が疑われる場合）
- 複雑性尿路感染症、腎盂腎炎
- 髄膜炎（緑膿菌やAmpC産生菌が原因または疑われる場合）

### 用法・用量
#### 成人の標準投与量
##### 静脈内（IV）投与
- **通常（30分点滴）**
  - 軽症〜中等症：1〜2g 8〜12時間ごと
  - 重症感染症・発熱性好中球減少症（FN）・緑膿菌感染症：2g 8時間ごと
- **長時間点滴（Extended Infusion：3〜4時間かけて投与）** ※重症例や耐性懸念例で推奨
  - 2g 8時間ごと
  - 初回のみ通常の30分点滴（Loading dose）を行い、次回から長時間点滴に移行することが望ましい。

#### 腎機能障害時の用量調節
- 主に腎排泄であるため、腎機能低下時は用量調節が必須である（セフェピム脳症予防のため極めて重要）。
- 以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（1g q12h基準） | 通常用量時（2g q12h基準） | 重症・緑膿菌用量時（2g q8h基準） |
|---|---|---|---|
| > 60 | 1g q12h | 2g q12h | 2g q8h |
| 30–60 | 1g q24h | 1g q12h | 2g q12h |
| 11–29 | 500mg q24h | 1g q24h | 1g q12h または 2g q24h |
| < 11 | 250mg q24h | 500mg q24h | 1g q24h |

##### 血液透析（HD）
- 初日1g投与後、2日目以降は 500mg〜1g を24時間ごと（透析日は透析終了後に投与する）。
- 外来透析（週3回）の場合（不可能ではないが、入院が無難）：
  - 中2日：1.5gを透析後に投与（残存腎機能ありまたはMIC≥4の場合は2g）
  - 中3日：2gを透析後に投与

##### 腹膜透析（PD）
- 1〜2g 48時間ごと

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 浄化量（effluent flow rate）に基づく用量：
  - 1L/時間：1g 8時間ごと
  - ≥2L/時間：1g 6時間ごと

#### 肝機能障害時
- 用量調節は不要である。

### 副作用
#### 主な副作用
- 発疹、過敏症（セフェムアレルギー）
- 肝機能異常
- 下痢、悪心
- 静脈炎（投与部位）

#### 重篤な副作用
- **セフェピム脳症（非けいれん性てんかん状態を含む神経毒性）**
  - リスク因子：腎機能障害、高齢、過量投与
  - 症状：意識障害、混迷、見当識障害、ミオクローヌス、幻覚、昏睡
  - 対策：腎機能に応じた厳密な用量調節が必要である。発症が疑われた場合は直ちに投与を中止し、脳波検査等を検討する。
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- 好中球減少症（特に長期投与時）、クームス陽性、血小板減少

### 薬物相互作用
- 特筆すべき重大な薬物相互作用は少ないが、他のセフェム系同様に利尿薬等との併用による腎障害の増悪に注意する。

### 注意点
- **セフェピム脳症**の予防
  - CFPMは中枢神経系への移行性が高く、特に腎機能低下例では脳症を起こしやすい（GABA受容体を阻害するための神経毒性などが機序として考えられている）。腎機能障害患者では血中濃度が上昇しやすいため、CrClを正確に評価し、厳密な用量調節を行うことが最も重要である。
  - <u>低活動性せん妄</u>のような症状で発見されることが多い
  - 中止すれば可逆的である
- **嫌気性菌カバーの欠如**
  - 嫌気性菌には無効であるため、腹腔内感染症や誤嚥性肺炎などで嫌気性菌の関与が疑われる場合は、メトロニダゾール等の併用が必須である（PIPC/TAZとの大きな違い）。
- 長時間点滴の活用
  - Time above MICが有効性の指標となるため、緑膿菌やAmpC産生菌などMICが高い菌種が疑われる重症感染症では、3〜4時間の長時間点滴が推奨される。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---