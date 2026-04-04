---
type: antibiotic
abx_id: CLDM
generic_ja: クリンダマイシン
generic_en: clindamycin
brand_ja: ダラシン
class_ja: リンコマイシン系抗菌薬
route:
  - PO
  - IV
renal_adjust: no
hepatic_adjust: caution
pkpd: time_dependent
tDM: no
restricted: no

comments: true
feedback_form: true

version: 1.0
last_reviewed: 2026-04-04
status: reviewed

covers:
  # グラム陽性菌
  Staphylococcus_aureus_MSSA: "○"
  Staphylococcus_aureus_MRSA: "△"
  Coagulase_negative_staphylococci_methicillin_susceptible: "○"
  Streptococcus_pyogenes: "◎"
  Streptococcus_agalactiae: "○"
  Streptococcus_pneumoniae: "○"
  Viridans_streptococci: "○"
  Enterococcus_faecalis: "×"
  Enterococcus_faecium: "×"
  Listeria_monocytogenes: "×"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "×"
  Klebsiella_pneumoniae: "×"
  Klebsiella_oxytoca: "×"
  Klebsiella_aerogenes: "×"
  Proteus_mirabilis: "×"
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
  Bacteroides_fragilis: "△"
  Clostridioides_difficile: "×"

  # その他
  Pneumocystis_jirovecii: "○"
  Toxoplasma_gondii: "○"

  # 耐性菌カテゴリー
  ESBL_producers: "×"
  AmpC_producers: "×"
  Carbapenemase_producers: "×"

indications:
  - aspiration_pneumonia
  - lung_abscess
  - tonsillar_abscess
  - SSTI
  - necrotizing_fasciitis_adjunct
  - penicillin_allergy_alternative
  - CA_MRSA
  - osteomyelitis

notes_short:
  - 嫌気性菌（特に口腔内）に強い
  - 毒素抑制効果あり（GAS, PVL）
  - CDIリスク高い

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---

# クリンダマイシン（CLDM / ダラシン®）

---

## 分類
リンコマイシン系抗菌薬

---

## 作用機序
細菌のリボソーム50Sサブユニットに結合し、タンパク質合成を阻害することで静菌的に作用する。また、毒素産生（黄色ブドウ球菌のPVL、A群レンサ球菌のピロゲン外毒素など）を抑制する効果がある。

---

## 抗菌スペクトラム

### 有効な菌種

#### グラム陽性菌
- レンサ球菌属（肺炎球菌、化膿レンサ球菌等）
- 黄色ブドウ球菌（MSSA。市中感染型MRSA（CA-MRSA）の一部にも活性を示す）
  - **使用前にD-testの確認**が必要

#### 嫌気性菌
- 横隔膜より上部の嫌気性菌（*Peptostreptococcus*、*Fusobacterium* spp.、*Actinomyces* spp.など）に対し良好な活性を持つ
- 一方で*Bacteroides* spp.は耐性化が進み、もはや第一選択となり得ない

#### その他（原虫など）
- ニューモシスチス、トキソプラズマ、マラリア（他剤との併用）

---

### 無効・注意すべき耐性菌

#### 本質的耐性・無効
- グラム陰性桿菌（腸内細菌目、緑膿菌など）：本質的に無効である
- 腸球菌（*Enterococcus* spp.）：無効である

#### 耐性化が問題となる菌
- *Bacteroides fragilis* group：耐性率が上昇しており（約60%）、腹腔内感染症での第一選択には推奨されない（腹腔内感染ではメトロニダゾールやβラクタム／βラクタマーゼ阻害薬配合剤が優先）

---

## 主な適応症
- 頭頸部、口腔、呼吸器の嫌気性菌感染症（誤嚥性肺炎、肺膿瘍、扁桃周囲膿瘍など）
- 皮膚・軟部組織感染症（蜂窩織炎、壊死性筋膜炎（特にGAS、毒素抑制目的での併用））
- ペニシリンアレルギー患者におけるグラム陽性菌感染症の代替薬
- CA-MRSAによる感染症
- 骨髄炎

---

## 用法・用量

### 成人の標準投与量

#### 経口（Oral）投与
- **通常感染症**
  - 150mg〜450mg を6〜8時間ごと
  - UpToDateでは 600mg〜1.8g/日（2〜4分割）を提示

#### 静脈内（IV）投与
- **通常感染症**
  - 600mg〜900mg を8時間ごと
- **重症感染症（壊死性筋膜炎、トキシックショック症候群など）**
  - 900mg を8時間ごと、または最大 4.8g/日（分割投与）

---

### 腎機能障害時の用量調節
- 腎機能低下による用量調節は原則不要である。透析による除去もわずかであるため、透析後の追加投与も不要である。

| CrCl (mL/min) | 通常用量時 |
|---|---|
| > 50 | 調節不要 |
| 10–50 | 調節不要 |
| < 10 | 調節不要 |

#### 血液透析（HD）・腹膜透析（PD）・持続的腎代替療法（CRRT）
- いずれも用量調節は不要である。

---

### 肝機能障害時
- 軽度〜中等度（Child-Pugh A, B）では調節不要。高度（Child-Pugh C）では慎重投与とし、蓄積に注意しながら必要に応じて減量を検討する。

---

## 副作用

### 主な副作用
- 消化器症状（下痢（約20%）、悪心）
- 発疹、蕁麻疹
- 味覚異常（金属様味覚）

---

### 重篤な副作用
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
  ：あらゆる抗菌薬で起こり得るが、本薬は特にリスクが高いことで知られている
- 食道炎、食道潰瘍（経口薬服用時）
- 重症薬疹（SJS/TEN、DRESS症候群）
- 肝機能障害（AST/ALTの上昇）
- 好中球減少、血小板減少

---

## 薬物相互作用
- エリスロマイシン等のマクロライド系抗菌薬：作用点が近いため、併用により拮抗する可能性がある。
- 神経筋遮断薬：作用を増強させる可能性がある。

---

## 注意点
- ***Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）**への警戒**
  - 投与中および投与終了後数週間にわたって下痢の出現に注意し、頻回の下痢や腹痛、発熱を認めた場合は速やかに検査を行う必要がある。
- **毒素抑制効果**
  - A群レンサ球菌によるトキシックショック症候群や壊死性筋膜炎では、タンパク質合成阻害による毒素産生抑制を期待して、ペニシリン系等に本剤を併用することが強く推奨される。
- **Dテスト**
  - エリスロマイシン耐性株では、クリンダマイシンに対してin vitroで感受性があっても、使用中に誘導耐性を起こす可能性がある（Dテスト陽性株）。
- **服用方法（経口）**
  - 食道潰瘍を予防するため、十分な水とともに服用し、服用直後の就寝を避けるよう指導する。

---

## 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide

---