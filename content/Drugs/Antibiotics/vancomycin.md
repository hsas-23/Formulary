---
type: antibiotic
abx_id: VCM
generic_ja: バンコマイシン
generic_en: vancomycin
brand_ja: バンコマイシン
class_ja: グリコペプチド系抗菌薬
route:
  - IV
  - PO
renal_adjust: required
hepatic_adjust: no
pkpd: auc_guided
tDM: yes
restricted: yes
covers:
  MSSA: ○
  MRSA: ◎
  Streptococcus_pneumoniae: ○
  Streptococcus_pyogenes: ○
  Enterococcus_faecalis: ○
  Enterococcus_faecium: ○
  Clostridioides_difficile: ◎
  Listeria: ○
  Corynebacterium: ○
  gram_negative_bacteria: ×
  Pseudomonas_aeruginosa: ×
  VRE: ×
  VISA: △
  VRSA: ×
indications:
  - MRSA_bacteremia
  - infective_endocarditis
  - MRSA_pneumonia
  - meningitis
  - osteomyelitis
  - skin_soft_tissue_infection
  - catheter_related_bloodstream_infection
  - PRSP_severe_infection
  - CDI
notes_short:
  - MRSA感染症の第一選択薬の一つ
  - 重症MRSA感染症ではAUC/MIC 400–600を目標
  - TDM必須
links:
  references:
    - Sanford2025
    - UpToDate
    - ASHP_IDSA_PIDS_SIDP_2020
comments: true
feedback_form: true
---
【抗菌薬まとめ】バンコマイシン（静注用）

### **バンコマイシン：VCM：バンコマイシン

### **分類** 
グリコペプチド系抗菌薬

### **作用機序**
細菌の細胞壁構成成分であるムレインモノマー末端のD-alanyl-D-alanineに結合し、ペプチドグリカンの重合を阻害することで殺菌的に作用する。

### **抗菌スペクトラム**
#### **有効な菌種**
- **グラム陽性菌**
  - 黄色ブドウ球菌（MRSA、MSSA）
   - ただし、MSSAはアレルギー等でセファゾリンが使用できない場合のみ
　　（MSSAにVCMを用いると予後が悪化するエビデンスがある）
  - レンサ球菌属（肺炎球菌、化膿性レンサ球菌など）
  - 腸球菌属（*Enterococcus faecalis*, *E. faecium*）
  - *Clostridioides difficile*（経口投与）
  - *Listeria monocytogenes* （治療効果は劣るため、ABPCが使用できないとき）
  - *Corynebacterium* 属
　　など
#### **無効・注意すべき耐性菌**
- **グラム陰性菌全般**（本質的耐性：分子量が大きく外膜を透過できない）
- **バンコマイシン耐性腸球菌（VRE）**
- **バンコマイシン低感受性/耐性黄色ブドウ球菌（VISA/VRSA）**
  
### **主な適応症**
- MRSAによる諸感染症（敗血症、感染性心内膜炎、肺炎、髄膜炎、骨髄炎、皮膚・軟部組織感染症、カテーテル関連血流感染症など）
- ペニシリン耐性肺炎球菌（PRSP）による重症感染症
- *Clostridioides difficile* 感染症（CDI）（経口投与）
　
### **用法・用量**
#### **成人の標準投与量**
##### **静脈内 (IV) 投与:**
- **負荷投与 (Loading Dose)**
　- **25–30 mg/kg（実体重に基づき算出、最大3,000 mg）** の初回投与を行う。
　- 特に重症感染症や迅速に血中濃度を上昇させたい場合、**減量しない**（減らすか増やすか悩んだ時には、多めに投与する方がよい）。
- **維持投与 (Maintenance Dose)**
　- **15–20 mg/kg を8–12時間ごと**に投与。
　- 肥満患者やクリアランスが高い若年者では、8時間ごとの投与が必要となる場合が多い。
→日本化学療法学会のバンコマイシンTDMソフトウェアPATを用いて**投与設計を行う**。
　（https://www.chemotherapy.or.jp/modules/guideline/index.php?content_id=79）
　投与開始時・血中濃度測定時に薬剤科に設計・調整を依頼する（使い慣れていれば自身で設計・調整してもよい）。
- **溶解時の注意**
  - 後述のバンコマイシン注入反応（いわゆるRed man症候群）を予防するため、最低**1000mgあたり100mL以上の溶媒に溶解**する（10mg/mL以下にする）。
  - 例：1500mgの場合、生食250mLなど

##### 経口（Oral）投与
- **軽症CDIの場合**
  - 1回125mg　1日4回経口投与
   - バンコマイシン散のバイアルに水（注射用水）を入れて溶解、全量を10mLにする
   - そのままだと苦味でまずいので、単シロップ10mLを加える（全量20mL）
   - 1回5mLを投与、溶解後は24時間以内に使用
- 重症CDIの場合
 - 1回500mg　1日4回経口投与
 - この場合は1回に1バイアルを使用

#### **腎機能障害時の用量調節**
*   バンコマイシンは主に腎臓から排泄されるため、クレアチニンクリアランス（CrCl）に応じた投与間隔の調節が必須である。
*   以下の表は、UpToDateに基づいた目安である。
* **薬剤科にTDMを依頼**する

| **CrCl (mL/minute)** | **推奨投与間隔** |
| :------------------: | :-------------------------------: |
|      > 100           |            8時間ごと            |
|      50 to 100       |            12時間ごと            |
|      20 to 50        |            24時間ごと            |
|         < 20          |      血中濃度に基づき再投与（トラフ値 < 15–20 mg/L時）      |

##### **血液透析 (HD) 患者:** 
- 初回負荷投与 25 mg/kg 投与後、透析終了後に 500–1,000 mg 程度を維持投与する。
- 透析前トラフ値 15–20 mg/Lを目標とする。
##### **持続的腎代替療法 (CRRT) 患者:** 
- 負荷投与 20–25 mg/kg 投与後、維持投与として 450–750 mg を12時間ごとに投与、または血中濃度に基づき調節する。
#### **肝機能障害時**
- 用量調節は通常不要。

###  **副作用**
#### **主な副作用**
*   **バンコマイシン注入反応（Vancomycin infusion reaction）**（いわゆるRed man症候群）
  　: 急速投与による非免疫学的なヒスタミン遊離。顔面・頸部の潮紅、瘙痒、低血圧など。
*   **腎毒性**: 特に高トラフ値やアミノグリコシド、NSAIDsとの併用でリスクが増大する。
*   **皮疹**
#### **重篤な副作用**
*   **アナフィラキシー**
*   **急性腎障害 (AKI)**
*   **第8脳神経障害**: 聴力低下、耳鳴り、めまい。特に高用量・長期投与時や他剤併用時に注意。
*   **血液障害**: 無顆粒球症、血小板減少（稀）。
*   ***Clostridioides difficile* 感染症**（CD腸炎、偽膜性大腸炎）: 点滴投与による腸内細菌叢の変化でも起こり得る。

### **薬物相互作用**
*   **アミノグリコシド系、NSAIDs、シクロスポリン**: 腎障害のリスクを相乗的に高める。
*   **筋弛緩薬**: 筋弛緩作用を増強させる可能性がある。

### **注意点**
*   **TDM (治療薬物モニタリング)**
  - 2020年のガイドラインに基づき、MRSA感染症では **AUC/MIC 400–600** を目標とする。
    従来のトラフ値のみの管理よりも、有効性と安全性の両立に優れる。
  -  一方MRSA以外の感染症では、AUC/MICを指標とするエビデンスがまだないため、従来の
    トラフをターゲットとした調整を行う。
*   **注入速度**: Red man症候群予防のため、**10 mg/分を目安に**（1000mgであれば最低60分−100分以上） かけてゆっくり点滴静注する。
*   **髄液移行性**: 髄膜炎などの炎症時には髄液移行性が向上するが、PRSPやMRSAによる髄膜炎治療では、確実な有効血中濃度の維持が必要である。
*   **肺移行性**: 肺胞被覆液への移行性は血中濃度より低いため、MRSA肺炎では十分な用量確保と注意深いモニタリングが求められる。
* 使用方法や適応など、**悩む場合には感染症内科へ相談**

---
### **参考**
- サンフォード感染症治療ガイド2025（Sanford Guide to Antimicrobial Therapy）
- UpToDate: Vancomycin: Parenteral dosing, monitoring, and adverse effects in adults
- 2020 ASHP/IDSA/PIDS/SIDP Consensus Guidelines
---