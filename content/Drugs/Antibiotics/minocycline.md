---
type: antibiotic
abx_id: MINO
generic_ja: ミノサイクリン
generic_en: minocycline
brand_ja: ミノマイシン
class_ja: テトラサイクリン系抗菌薬
route:
  - PO
  - IV
renal_adjust: no
hepatic_adjust: caution
pkpd: time_dependent
tDM: no
restricted: yes
covers:
  Streptococcus_pneumoniae: ○
  Streptococcus_pyogenes: ○
  MSSA: ○
  MRSA: △
  Acinetobacter_baumannii: ◎
  Stenotrophomonas: ○
  Chlamydia: ◎
  Mycoplasma_pneumoniae: ◎
  Rickettsia: ◎
  Orientia_tsutsugamushi: ◎
  Rickettsia_japonica: ◎
  Nocardia: ○
  Treponema_pallidum: ○
  Pseudomonas_aeruginosa: ×
  Proteus: ×
indications:
  - MDR_Acinetobacter
  - Stenotrophomonas_infection
  - nocardiosis
  - atypical_pneumonia
  - rickettsial_infection
  - acne
notes_short:
  - 組織移行性が良好（高脂溶性）
  - MDRアシネトバクターに有効
  - 前庭障害が高頻度
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
comments: true
feedback_form: true
---

【抗菌薬まとめ】ミノサイクリン

### ミノサイクリン：MINO：ミノマイシン®
（および後発品）

### 分類
テトラサイクリン系抗菌薬

### 作用機序
細菌のリボソーム30Sサブユニットに結合し、タンパク質合成を阻害することで静菌的に作用する。テトラサイクリン系の中で最も脂溶性が高く、組織移行性が良好である。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - レンサ球菌属（肺炎球菌、化膿レンサ球菌等）
  - 黄色ブドウ球菌（MSSA。MRSAの一部にも活性を示すことがある（感受性を確認））
- グラム陰性菌
  - 多剤耐性アシネトバクター（*Acinetobacter baumannii*）：テトラサイクリン系の中で最も活性が高い
  - *Stenotrophomonas maltophilia* （感受性を確認）
- 非定型菌・その他
  - *Chlamydia* spp.
  - *Mycoplasma pneumoniae*
  - リケッチア
   - ツツガムシ病リケッチア（*Orientia tsutsugamushi*）
   - 日本紅斑熱（*Rickettsia japonica*）
  - ノカルジア（*Nocardia* spp.）
  - 梅毒トレポネーマ（*Treponema pallidum*）

#### 無効・注意すべき耐性菌
- 本質的耐性・無効
  - 緑膿菌（*P. aeruginosa*）
  - プロテウス属（*Proteus* spp.）

### 主な適応症
- 多剤耐性アシネトバクター感染症
- *Stenotrophomonas maltophilia* 感染症
- ノカルジア症
- 非定型肺炎（オウム病、Q熱など）、リケッチア感染症
- ざ瘡（にきび）

### 用法・用量
#### 成人の標準投与量
##### 経口（Oral）・静脈内（IV）投与共通
- **通常感染症**
  - 初回200mg、その後100mgを12時間ごと
- **重症感染症・多剤耐性グラム陰性桿菌（アシネトバクター等）・ノカルジア症**
  - 200mgを12時間ごと（最大400mg/日）が推奨される場合がある。

#### 腎機能障害時の用量調節
- 本薬は腎排泄の影響をほとんど受けないため、腎機能低下による用量調節は不要である。
- ただし、テトラサイクリン系特有の抗同化作用（タンパク異化作用）によりBUNを上昇させることがある。腎機能障害患者に高用量（200mg/日超）を使用する場合は、BUNやクレアチニンのモニタリングが推奨される。
- Johns Hopkinsガイドでは、CrCl < 50 mL/minの患者には代替薬としてドキシサイクリン（DOXY）の使用が検討される。

| CrCl (mL/min) | 通常用量時 |
|---|---|
| ≥ 50 | 100mg q12h（調節不要） |
| 10–50 | 100mg q12h（調節不要） |
| < 10 | 100mg q12h（調節不要） |

##### 血液透析（HD）
- 透析によって除去されないため、用量調節や透析後の追加投与は不要である。

##### 腹膜透析（PD）
- 用量調節は不要である。

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 用量調節は不要である。

#### 肝機能障害時
- 用量調節の具体的な基準はないが、肝毒性が報告されているため、重度の肝障害がある場合は慎重に投与する。

### 副作用
#### 主な副作用
- **前庭症状**（めまい感、運動失調、悪心・嘔吐）：30〜90%と非常に高頻度で出現し（特に女性に多い）、使用を制限する最大の要因となる。ドキシサイクリンの方が頻度が低い。
- 消化器症状（悪心、腹痛など）
- **色素沈着**：長期投与により、皮膚、爪、粘膜、甲状腺などに青みがかった濃灰色〜暗藍色の色素沈着が生じることがある。

#### 重篤な副作用
- 肝機能障害、肝不全
- 薬剤性過敏症症候群（DIHS）、SJS/TEN
- 自己免疫疾患の誘発（ループス様症候群、自己免疫性肝炎など）
- 頭蓋内圧上昇（偽脳腫瘍）

### 薬物相互作用
- **多価陽イオン含有製剤**（アルミニウム、マグネシウム含有制剤、鉄剤、カルシウム製剤）：経口投与時、キレートを形成し吸収が著しく低下するため、同時投与を避ける（前後2〜3時間以上空ける）。
- **ワーファリン**：抗凝固作用を増強する可能性がある。

### 注意点
- **前庭症状への指導**
  - めまいやふらつきが頻発するため、外来処方時（特に高齢者や女性）には転倒や自動車の運転等に十分注意するよう指導が必要である。
- **小児・妊婦への禁忌**
  - 胎児や小児の骨発育不全、歯牙の黄染・エナメル質形成不全を起こすため、妊婦（FDAリスク区分 D）および8歳未満の小児には原則禁忌である。
- **静注用製剤のマグネシウム**
  - 日本の静注用製剤には硫酸マグネシウムが含まれている場合があり、腎不全患者では高マグネシウム血症のリスクに留意する（サンフォード記載）。
- 長期間使用での皮膚色素沈着
  - 長期投与により皮膚等に色素沈着を生じることがある。早期に中止すれば可逆性であることが多い。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
---