---
type: antibiotic
abx_id: SMX_TMP
generic_ja: スルファメトキサゾール・トリメトプリム
generic_en: sulfamethoxazole-trimethoprim
brand_ja: バクタ
class_ja: サルファ剤＋葉酸代謝拮抗剤配合剤
route: [PO, IV]
renal_adjust: required
hepatic_adjust: caution
pkpd: concentration_dependent
tDM: no
restricted: no
covers:
  MSSA: "○"
  MRSA: "◎"
  Streptococcus_pneumoniae: "○"
  Streptococcus_pyogenes: "○"
  Listeria: "○"
  Nocardia: "◎"
  Haemophilus_influenzae: "○"
  E_coli: "○"
  Klebsiella: "○"
  Proteus_mirabilis: "○"
  Stenotrophomonas: "◎"
  Salmonella: "○"
  Shigella: "○"
  Pneumocystis_jirovecii: "◎"
  Toxoplasma_gondii: "○"
  Cyclospora: "○"
  Pseudomonas_aeruginosa: "×"
  Anaerobes: "×"
  Enterococcus: "×"
indications:
  - PCP_treatment
  - PCP_prophylaxis
  - SSTI_MRSA
  - Stenotrophomonas_infection
  - cystitis
  - prostatitis
  - nocardiosis
  - listeriosis
  - enteric_infection
notes_short:
  - PCPの第一選択薬
  - Stenotrophomonas maltophiliaの第一選択薬の一つ
  - 高K血症と血清Cr上昇に注意
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
comments: true
feedback_form: true
---

【抗菌薬まとめ】ST合剤

### スルファメトキサゾール・トリメトプリム：SMX/TMP：バクタ®
（およびバクトラミン®、後発品）

### 分類
サルファ剤（スルファメトキサゾール）＋葉酸代謝拮抗剤（トリメトプリム）配合剤

### 作用機序
スルファメトキサゾールとトリメトプリムが、細菌の葉酸合成における連続した2段階を阻害することで相乗的に殺菌作用を発揮する。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - 黄色ブドウ球菌（MRSAを含む市中感染型MRSAに有効）
  - 肺炎球菌、化膿レンサ球菌
  - リステリア（*L. monocytogenes*）
  - ノカルジア（*Nocardia* spp.）
- グラム陰性菌
  - *Haemophilus influenzae*
  - 大腸菌（*E. coli*）
  - *Klebsiella* spp.
  - *Proteus mirabilis*
  - *Stenotrophomonas maltophilia*（第一選択薬の一つ）
  - *Salmonella*、*Shigella*
- 真菌・原虫
  - ニューモシスチス・イロベチイ（*Pneumocystis jirovecii*）
  - トキソプラズマ（*Toxoplasma gondii*）
  - サイクロスポラ（*Cyclospora*）

#### 無効・注意すべき耐性菌
- 緑膿菌（*P. aeruginosa*）
- 嫌気性菌
- 腸球菌（*Enterococcus* spp.：in vitroで感受性があっても臨床的には無効とされる）

### 主な適応症
- ニューモシスチス肺炎（PCP）の治療および予防
- 市中感染型MRSAによる皮膚・軟部組織感染症
- *Stenotrophomonas maltophilia* 感染症
- 尿路感染症（膀胱炎、前立腺炎）
- ノカルジア症
- リステリア症（ペニシリンアレルギー時）
- 腸管感染症（サルモネラ、シゲラ、旅行者下痢症）

### 用法・用量
※ 投与量はトリメトプリム（TMP）成分に基づき算出する。
※ 日本の標準錠（バクタ等）1錠：TMP 80mg / SMX 400mg 含有。
※ 海外の文献等でSSと書いてあるのは、single-strengthの略で、1錠中にTMP 80mg含有を指す。
　DS（double-strength）製剤が海外にはあるが、日本にはない。
　→日本のバクタ®／バクトラミン®錠は、SS
※ バクタミニ®配合錠が2021年に発売。これはTMP 20mgで、通常の錠剤0.25錠分に相当。　　
　サイズが小さくなり、甘味料が入り飲みやすくなったよう。

#### 成人の標準投与量
##### 経口（Oral）投与
- **通常感染症（尿路感染症等）**
  - 2錠（TMP 160mg）を12時間ごと
- **ニューモシスチス肺炎（PCP）予防**
  - 1錠〜2錠 を1日1回、または 2錠を週3回（海外では主流）
  - 1錠を1日1回、または1錠を週3回（日本で行われることが多い）
  - 0.5錠を1日1回、という内服方法も主に膠原病領域から有効性が報告されている（日本）

##### 静脈内（IV）投与
- **通常感染症**
  - 8〜10 mg/kg/日（TMP換算）を2〜4回に分割投与
- **ニューモシスチス肺炎（PCP）治療**
  - 15〜20 mg/kg/日（TMP換算）を3〜4回に分割投与（6〜8時間ごと）

#### 腎機能障害時の用量調節
- 本剤は主に腎排泄されるため、腎機能低下時は用量調節が必要である。
- 以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（2錠 q12h基準） | PCP治療用量時（15-20mg/kg/d基準） |
|---|---|---|
| > 30 | 調節不要 | 調節不要 |
| 15–30 | 50%に減量（例：1錠 q12h または 2錠 q24h） | 50%に減量（例：7.5-10mg/kg/dを2分割） |
| < 15 | 25〜50%に減量（慎重投与） | 25〜50%に減量（例：4-5mg/kg/dを24時間ごと） |

##### 血液透析（HD）
- 透析後に通常用量の50%（例：1錠）を投与、または15mg/kg/日（PCP治療時）を投与する。

##### 腹膜透析（PD）
- CrCl < 15 mL/minの基準に従い投与（1錠 q24h等）。

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 調節不要（通常用量での投与が可能）。

#### 肝機能障害時
- 重度の肝障害がある場合は慎重投与。

### 副作用
#### 主な副作用
- 発疹、そう痒（薬疹は頻度が高い）
- 悪心、嘔吐、食欲不振（特に高齢者では、開始後の食事量低下に注意）
- 高カリウム血症（特に高齢者やACE阻害薬/ARB併用、腎機能障害者で注意が必要である）
- 血清クレアチニン値の上昇（TMPによる尿細管分泌阻害による擬似的な上昇）

#### 重篤な副作用
- ショック、アナフィラキシー
- 皮膚粘膜眼症候群（SJS）、中毒性表皮壊死融解症（TEN）
- 血液障害（汎血球減少、無顆粒球症、血小板減少、溶血性貧血）
- 急性腎障害、間質性腎炎
- 低ナトリウム血症
- 低血糖（稀）

### 薬物相互作用
- **ワーファリン**: 抗凝固作用を著しく増強させるため、併用時はINRの頻回なモニタリングとワーファリンの減量が必要である。
- **ACE阻害薬、ARB、スピロノラクトン**: 高カリウム血症のリスクが増大する。
- **メトトレキサート**: 葉酸代謝阻害を増強し、血液毒性を高める可能性がある。
- **フェニトイン**: フェニトインの代謝を阻害し、血中濃度を上昇させる。

### 注意点
- **サルファ剤アレルギー**
  - サルファ剤に対して過敏症の既往がある患者には禁忌である。
- **G6PD欠損症**
  - 溶血性貧血を起こすリスクがあるため、原則として投与を避ける。
- **妊娠・授乳**
  - 葉酸代謝を阻害するため、妊娠初期は避けるべきである。また新生児（特に低出生体重児）では核黄疸のリスクがあるため、分娩間近の投与も避ける。
- **光線過敏症**
  - 投与中の日光曝露により発疹が出現することがあるため注意が必要である。
- **高カリウム血症のモニタリング**
  - 特に高齢者や腎機能障害者、高用量投与時（PCP治療等）には血清カリウム値を頻回にチェックする必要がある。

---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---