---
type: antibiotic
abx_id: CAM
generic_ja: クラリスロマイシン
generic_en: clarithromycin
brand_ja: クラリス／クラリシッド
class_ja: マクロライド系抗菌薬
route: [PO]
renal_adjust: required
hepatic_adjust: caution
pkpd: time_dependent
tDM: no
restricted: no
covers:
  Mycoplasma_pneumoniae: "◎"
  Chlamydia_pneumoniae: "◎"
  Legionella_pneumophila: "◎"
  Streptococcus_pneumoniae: "△"
  Streptococcus_pyogenes: "△"
  Haemophilus_influenzae: "○"
  Moraxella_catarrhalis: "○"
  Bordetella_pertussis: "◎"
  Helicobacter_pylori: "◎"
  MAC: "◎"
  Enterobacterales: "×"
  Pseudomonas_aeruginosa: "×"
  MRSA: "×"
  Enterococcus: "×"
indications:
  - CAP
  - acute_exacerbation_chronic_bronchitis
  - pertussis
  - H_pylori_eradication
  - MAC_infection
  - MAC_prophylaxis
  - atypical_pathogen_infection
notes_short:
  - 非定型菌に有効
  - CYP3A4阻害による相互作用が非常に多い
  - 本邦では肺炎球菌・化膿レンサ球菌の耐性率に注意
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
comments: true
feedback_form: true
version: 1.0
last_reviewed: 2026-04-02
status: reviewed
---

【抗菌薬まとめ】クラリスロマイシン

### クラリスロマイシン：CAM：クラリス®、クラリシッド®
（および後発品）

### 分類
マクロライド系抗菌薬

### 作用機序
細菌のリボソーム50Sサブユニットに結合し、タンパク質の合成を阻害することで静菌的（一部の菌には殺菌的）に作用する。

### 抗菌スペクトラム
#### 有効な菌種
- 非定型菌
  - マイコプラズマ（*Mycoplasma pneumoniae*）
  - クラミジア（*Chlamydia pneumoniae*）
  - レジオネラ（*Legionella pneumophila*）
- グラム陽性菌
  - 肺炎球菌、化膿レンサ球菌（※ただし本邦では耐性率が高いため注意が必要である）
- グラム陰性菌
  - インフルエンザ菌、モラクセラ・カタラーリス
  - 百日咳菌（*Bordetella pertussis*）
- その他
  - ヘリコバクター・ピロリ（*H. pylori*）
  - 非結核性抗酸菌（MAC：*Mycobacterium avium* complex）

#### 無効・注意すべき耐性菌
- 本質的耐性・無効
  - 腸内細菌目細菌（大腸菌、クレブシエラ等）
  - 緑膿菌（*P. aeruginosa*）
  - MRSA、腸球菌
- 耐性化が問題となる菌
  - 肺炎球菌や化膿レンサ球菌におけるマクロライド耐性（耐性遺伝子の保有）

### 主な適応症
- 市中肺炎（CAP）（主に非定型肺炎のカバーとして）
  - マイコプラズマ肺炎
- 百日咳
- *H. pylori* 除菌療法の併用薬
- 非結核性抗酸菌（MAC）感染症の治療および予防
- 一部の皮膚軟部組織感染症（代替薬として、感受性があれば（積極的には使用しない））

### 用法・用量
#### 成人の標準投与量
##### 経口（Oral）投与
- **通常感染症（市中肺炎、気道感染症など）**
  - 250mg〜500mg を1日2回（12時間ごと）
- **百日咳**
  - 500mg を1日2回（12時間ごと）7日間
- **非結核性抗酸菌症、H. pylori除菌**（併用療法のうちの1剤として）
  - 500mg を1日2回（12時間ごと）

#### 腎機能障害時の用量調節
- クレアチニンクリアランス（CrCl）が30 mL/min未満の場合に用量の半量への減量が必要である。
- 以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（250mg 1日2回基準） | 高用量時（500mg 1日2回基準） |
|---|---|---|
| ≥ 30 | 250mg 1日2回 | 500mg 1日2回 |
| < 30 | 250mg 1日1回 | 250mg 1日2回 または 500mg 1日1回 |

##### 血液透析（HD）
- 250mg 1日1回、または 250mg 1日2回 / 500mg 1日1回
- 透析による有意な除去はないため、透析日における投与タイミングの厳密な指定はないが、透析後の投与を考慮してもよい。

##### 腹膜透析（PD）
- 250mg 1日1回、または 250mg 1日2回 / 500mg 1日1回

##### 持続的腎代替療法（CRRT）
- 有意に除去されないため、CrCl < 30 mL/minの患者に対する用量推奨に従う（例：250mg 1日1回 または 250mg 1日2回）。

#### 肝機能障害時
- 腎機能が正常であれば用量調節は不要である。ただし、重度の腎機能障害と肝機能障害が合併している場合は減量を考慮する。

### 副作用
#### 主な副作用
- 消化器症状（下痢、悪心、腹痛など）
- 味覚異常（苦味、金属様味覚）
- 肝機能異常（AST/ALT上昇）

#### 重篤な副作用
- **QTc延長**、心室性不整脈（Torsades de pointes等）：心疾患リスクのある患者では注意が必要である。
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- アナフィラキシー、重症薬疹（SJS/TEN）

### 薬物相互作用
- **CYP3A4の強力な阻害薬**であるため、非常に多くの薬剤と相互作用を起こす。併用薬の血中濃度を著しく上昇させる危険がある
  - **スタチン系**（シンバスタチン、ロバスタチン等）：横紋筋融解症のリスク増大（併用禁忌または厳重注意）
  - **カルシウム拮抗薬**（アムロジピン等）：低血圧、急性腎障害のリスク増大
  - **コルヒチン**：致死的なコルヒチン毒性のリスク（腎/肝障害患者では併用禁忌）
  - **DOAC（リバーロキサバン、アピキサバン等）**、**ワーファリン**：出血リスクの増大
  - **スボレキサント**、**テオフィリン**、**タクロリムス**など

### 注意点
- **薬物相互作用の確認**
  - 処方前に必ず患者の持参薬（特にスタチン、CCB、DOACなど）を確認し、CYP3A4阻害による相互作用がないかチェックすることが極めて重要である。
- **耐性菌への懸念**
  - 日本国内では、肺炎球菌および化膿レンサ球菌のマクロライド耐性率が高いため、これらの菌による感染症（中耳炎、副鼻腔炎、扁桃炎など）の第一選択薬としては推奨されない。
  - 主に非定型肺炎（マイコプラズマ等）をターゲットとする場合に使用する。
- **心血管イベントリスク**
  - マクロライド系全般に言えることであるが、QTc延長リスクがあるため、ベースラインでQTc延長がある患者や、他のQTc延長薬を服用している患者では慎重に投与する。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---