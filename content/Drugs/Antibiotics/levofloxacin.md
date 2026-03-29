---
type: antibiotic
abx_id: LVFX
generic_ja: レボフロキサシン
generic_en: levofloxacin
brand_ja: クラビット
class_ja: ニューキノロン系抗菌薬（フルオロキノロン系）
route: [PO, IV]
renal_adjust: required
hepatic_adjust: no
pkpd: concentration_dependent
tDM: no
restricted: yes
covers:
  Streptococcus_pneumoniae: "◎"
  Streptococcus_pyogenes: "○"
  MSSA: "△"
  Enterobacterales: "○"
  E_coli: "○"
  Klebsiella: "○"
  Enterobacter: "○"
  Pseudomonas_aeruginosa: "○"
  Haemophilus_influenzae: "◎"
  Moraxella_catarrhalis: "◎"
  Mycoplasma_pneumoniae: "◎"
  Chlamydia_pneumoniae: "◎"
  Legionella_pneumophila: "◎"
  Bacillus_anthracis: "◎"
  Yersinia_pestis: "◎"
  MRSA: "×"
  Enterococcus: "×"
  Anaerobes: "×"
  Neisseria_gonorrhoeae: "×"
indications:
  - CAP
  - acute_exacerbation_chronic_respiratory_disease
  - sinusitis
  - UTI
  - pyelonephritis
  - SSTI
  - atypical_pneumonia
  - legionella_pneumonia
  - anthrax
  - plague
notes_short:
  - レスピラトリーキノロンとして重要
  - 経口吸収率が高くIV/PO切替が容易
  - 腱障害・神経毒性・QT延長に注意
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---

【抗菌薬まとめ】レボフロキサシン

### レボフロキサシン：LVFX：クラビット®
（および後発品）

### 分類
ニューキノロン系抗菌薬（フルオロキノロン系）

### 作用機序
細菌のDNAジャイレースおよびトポイソメラーゼIVを阻害し、DNAの複製を妨げることで殺菌的に作用する。オフロキサシン（オフロキシン®）のL体（光学活性体）であり、オフロキサシンの約2倍の抗菌活性を持つ。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - 肺炎球菌（*S. pneumoniae*：ペニシリン耐性株を含む）、化膿レンサ球菌
  - MSSA（耐性に注意、第一選択にはならない）
- グラム陰性菌
  - 腸内細菌目（大腸菌、クレブシエラ、エンテロバクター等）
  - 緑膿菌（*P. aeruginosa*）：活性はあるが、シプロフロキサシン（CPFX）と比較するとやや弱い
  - *Haemophilus influenzae*
  - *Moraxella catarrhalis*
- 非定型菌
  - *Mycoplasma pneumoniae*
  - *Chlamysia* spp.
  - *Legionella* spp.（いずれも極めて良好な活性を持つ）
- その他
  - 炭疽菌（*Bacillus anthracis*）
  - ペスト菌（*Yersinia pestis*）

#### 無効・注意すべき耐性菌
- 本質的耐性・無効
  - MRSA
  - 腸球菌（一部を除き効果不十分）
  - 嫌気性菌（一般的に無効であり、嫌気性菌カバーが必要な場合はメトロニダゾール等の併用を要する）
- 耐性化が問題となる菌
  - 淋菌（*N. gonorrhoeae*）：高度耐性化が進んでいるため、現在は推奨されない
  - **大腸菌**（多剤耐性化が進んでいるため、感受性確認が重要である）

### 主な適応症
- 市中肺炎（CAP）、慢性呼吸器疾患の二次感染、副鼻腔炎（「レスピラトリーキノロン」として重要）
- 複雑性・非複雑性尿路感染症（腎盂腎炎等）
- 皮膚・軟部組織感染症
- 非定型肺炎（レジオネラ肺炎など）
- 炭疽、ペスト

### 用法・用量
#### 成人の標準投与量
経口および静脈内投与の生物学的同等性が高いため、同一用量で切り替えが可能である。
##### 経口・静脈内（IV）投与共通
- **通常感染症**
  - 500mg 1日1回（24時間ごと）
- **重症感染症・呼吸器感染症**
  - 750mg 1日1回（24時間ごと）
  - サンフォードガイドでは多くの適応で750mg q24hを推奨している
  - 本邦では500mg q24hが保険適応。海外との体格差からも、日本人では1回500mgまででよいことが多い

#### 腎機能障害時の用量調節
- 主に腎排泄性であり、腎機能低下時は厳密な調節が必要である。
- 以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（500mg q24h基準） | 高用量時（750mg q24h基準） |
|---|---|---|
| ≥ 50 | 500mg q24h | 750mg q24h |
| 20–49 | 初回500mg、以降250mg q24h | 750mg q48h |
| < 20 | 初回500mg、以降250mg q48h | 初回750mg、以降500mg q48h |

##### 血液透析（HD）
- 週3回透析：初回 500mg〜750mg、以降 250mg〜500mgを48時間ごとに投与（透析日は透析終了後に投与する）。

##### 腹膜透析（PD）
- HDと同様の調節を行う。

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 通常500mg q24hの場合：初回500mg、以降250mg q24h または 500mg q48h。
- 通常750mg q24hの場合：初回750mg、以降500mg q24h または 750mg q48h。

#### 肝機能障害時
- 用量調節は不要である。

### 副作用
#### 主な副作用
- 消化器症状（下痢、悪心）
- 中枢神経症状（頭痛、めまい、不眠）
- 光線過敏症（日光への曝露を避ける）

#### 重篤な副作用
- **腱炎、腱断裂**（アキレス腱など。高齢者やステロイド併用者でリスクが高い）
- **末梢神経障害**（不可逆的なしびれや痛み）
- **中枢神経毒性**（痙攣、混乱、幻覚、振戦）
- **QTc延長**、重篤な心室性不整脈
- **血糖異常**（重篤な低血糖および高血糖：高齢者や糖尿病治療薬併用者で特に注意）
- **大動脈瘤、大動脈解離**（近年警告が追加されている）
- ***Clostridioides difficile* 感染症**（CD腸炎、偽膜性大腸炎）：現代ではクリンダマイシンを抜いて最も原因薬剤として多いとされている
- 重症薬疹（SJS/TEN）

### 薬物相互作用
- **多価陽イオン含有製剤**（アルミニウム、マグネシウム含有制剤、鉄剤、カルシウム製剤、マルチビタミン等）：キレートを形成し、本薬の吸収が著しく低下する。併用する場合は前後2〜3時間以上空けること。
- **ワーファリン**：ワーファリンの作用を増強し、出血リスクを高める可能性がある。
- **非ステロイド性消炎鎮痛薬（NSAIDs）**：中枢神経のGABA受容体阻害を強め、痙攣を誘発するリスクがある。
- **糖尿病治療薬**：低血糖リスクが増大する。

### 注意点
- **安全性に関する警告（Boxed Warning）**
  - FDAは、単純性尿路感染症や急性副鼻腔炎などの軽度な感染症に対し、他に選択肢がある場合は腱障害や神経毒性のリスクを考慮し、キノロン系の使用を控えるよう勧告している。
- **重症筋無力症**
  - 筋力低下を悪化させる恐れがあるため、重症筋無力症の患者には禁忌（または原則禁忌）である。
- **結核の隠蔽**
  - レボフロキサシンは**抗結核菌活性**を持つため、肺結核の診断がついていない状況で不用意に使用すると、症状を一時的に改善させ**診断を遅らせる（結核の隠蔽）リスク**がある。<u>市中肺炎として治療しても改善が不良な場合は常に結核を考慮</u>すべきである。
- **投与方法**
  - 経口吸収率が極めて高く（>99%）、IVからPOへの速やかな切り替え（スイッチ療法）が推奨される（**ただし多価陽イオン含有製剤の内服に注意**）。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---