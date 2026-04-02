---
type: antibiotic
abx_id: MEPM
generic_ja: メロペネム
generic_en: meropenem
brand_ja: メロペン
class_ja: カルバペネム系抗菌薬
route: [IV]
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: yes
covers:
  MSSA: "○"
  MRSA: "×"
  Streptococcus_pneumoniae: "○"
  Streptococcus_pyogenes: "○"
  Enterococcus_faecalis: "△"
  Enterococcus_faecium: "×"
  Enterobacterales: "◎"
  ESBL_producers: "◎"
  AmpC_producers: "◎"
  Pseudomonas_aeruginosa: "○"
  Neisseria_meningitidis: "◎"
  Haemophilus_influenzae: "◎"
  anaerobes: "◎"
  Bacteroides_fragilis: "◎"
  CRE: "×"
  Stenotrophomonas: "×"
indications:
  - sepsis
  - intra_abdominal_infection
  - complicated_UTI
  - severe_pneumonia
  - febrile_neutropenia
  - bacterial_meningitis
  - ESBL_infection
notes_short:
  - 超広域βラクタム
  - ESBL感染の第一選択
  - デエスカレーション必須
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
    - JAID_JSC_guideline
comments: true
feedback_form: true
---

【抗菌薬まとめ】メロペネム
### **メロペネム：MEPM：メロペン®**

### **分類** 
カルバペネム系抗菌薬

### **作用機序**
細菌のペニシリン結合タンパク（PBP）に結合し、細胞壁合成を阻害することで殺菌的に作用する。特にPBP-2およびPBP-3に対して高い親和性を持つ。

### **抗菌スペクトラム**
#### **有効な菌種**
- **グラム陽性菌**
  - MSSA（MRSAには無効）
  - レンサ球菌属（肺炎球菌、化膿性レンサ球菌など）
  - 腸球菌属（*Enterococcus faecalis* の一部。*E. faecium* には無効）
   - メロペネムの活性は弱く、通常は他剤を使用する
    （カルバペネムの場合には、イミペネム・シラスタチンを用いる）
- **グラム陰性菌（非常に広域）**
  - 腸内細菌目細菌（ESBL産生菌、AmpC過剰産生菌を含む）
  - 緑膿菌 (*Pseudomonas aeruginosa*)
  - 髄膜炎菌（*Neisseria meningitidis*）
  - *Haemophilus influenzae*
- **嫌気性菌**
  - *Bacteroides fragilis* グループを含む嫌気性菌全般
#### **無効・注意すべき耐性菌**
- **MRSA**（全てのカルバペネム系が無効）
- **バンコマイシン耐性腸球菌（VRE）**
- **カルバペネム耐性腸内細菌目細菌（CRE/CPE）**
- **カルバペネム耐性緑膿菌、アシネトバクター**
- ***Stenotrophomonas maltophilia***（本質的耐性）
  
### **主な適応症**
- **ESBL産生菌**が疑われる、あるいは同定された場合の**感染症**
- **重症感染症**（敗血症、複雑性腹腔内感染症、複雑性尿路感染症、重症肺炎など）**の初期治療**
- **発熱性好中球減少症**（FN）の**初期治療**
- 細菌性髄膜炎（中枢移行性が良いため選択薬の一つ（ではあるが、細菌性髄膜炎の起因菌を考えると、メロペネムまでは不要なことがほとんど））

### **用法・用量**
#### **成人の標準投与量**
##### **静脈内 (IV) 投与:**
- **通常感染症**
　- **1 g を8時間ごと**（1日 3 g）に投与。
- **重症・難治性感染症（緑膿菌感染、髄膜炎、嚢胞性線維症など）**
　- **2 g を8時間ごと**（1日 6 g）に投与。
- **延長投与 (Extended Infusion)**
　- 時間依存性抗菌薬であるため、耐性菌（緑膿菌など）や重症例では、**1回量を3時間かけて点滴静注**することで、fT > MIC（MICを上回る時間）を最大化し、治療効果を高めることが推奨される。

#### **腎機能障害時の用量調節**
*   メロペネムは主に腎排泄されるため、腎機能に応じた調節が必要である。
*   以下はUpToDateの推奨に基づく（通常用量 1g 8時間ごとを基準とした場合）。

| **CrCl (mL/minute)** | **推奨用量** | **投与間隔** |
| :------------------: | :----------: | :----------: |
|      > 50            |      1 g     |   8時間ごと  |
|      26 to 50        |      1 g     |  12時間ごと  |
|      10 to 25        |    500 mg    |  12時間ごと  |
|         < 10         |    500 mg    |  24時間ごと  |

##### **血液透析 (HD) 患者:** 
- 500 mg を24時間ごとに投与。透析による除去率が高いため、**透析終了後に投与**する。
##### **持続的腎代替療法 (CRRT: CVVH/CVVHD/CVVHDF) 患者:** 
- **1 g を8–12時間ごと**に投与。
- 除去効率が高いため、通常の腎不全用量よりも多めの設定が必要である。耐性菌ターゲットの場合は 1g 8時間ごとの延長投与を検討する。
#### **肝機能障害時**
- 用量調節は不要。

###  **副作用**
#### **主な副作用**
*   下痢、悪心、嘔吐
*   皮疹、瘙痒感
*   肝機能障害（AST/ALTの上昇）
#### **重篤な副作用**
*   **アナフィラキシー**
*   **痙攣**: カルバペネム系の中ではイミペネムより頻度は低いが、過量投与や腎機能障害時に注意が必要。
*   **血液障害**: 汎血球減少、無顆粒球症、血小板減少。
*   *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）

### **薬物相互作用**
*   **バルプロ酸**: バルプロ酸の血中濃度を著明に低下させ、痙攣を誘発する恐れがあるため、**併用禁忌**である。
*   **プロベネシド**: メロペネムの腎排泄を遅延させ、血中濃度を上昇させる。

### **注意点**
*   **カルバペネム・スペアリング**: 広域すぎるため、培養結果が判明次第、可能な限り狭域な抗菌薬への変更（デエスカレーション）を検討する。変更先に迷う場合には、感染症内科にコンサルト。
 * <u>メロペネムの使用が頭をよぎる場合</u>（初期治療）には、感染症内科コンサルトしてしまってもよい。
*   **安定性**: 溶解後の安定性が低いため、特に3時間の延長投与を行う際は、生理食塩液で溶解し、速やかに投与を開始すること。
*   **中枢移行性**: 髄膜炎に対する投与量は 2g 8時間ごと（最高用量）が必要である。

---
### **参考**
- サンフォード感染症治療ガイド2025（Sanford Guide to Antimicrobial Therapy）
- UpToDate: Meropenem: Drug information
- Johns-Hopkins ABx Guide
- 日本化学療法学会/日本感染症学会：カルバペネム系抗菌薬適正使用ガイダンス

---