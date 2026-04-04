---
type: antibiotic
abx_id: PIPC_TAZ
generic_ja: ピペラシリン・タゾバクタム
generic_en: piperacillin-tazobactam
brand_ja: ゾシン
class_ja: ペニシリン系（ウレイドペニシリン）＋βラクタマーゼ阻害薬
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
  Streptococcus_pyogenes: "◎"
  Streptococcus_agalactiae: "○"
  Viridans_streptococci: "○"
  Enterococcus_faecalis: "○"
  Enterococcus_faecium: "×"
  Listeria_monocytogenes: "×"

  # グラム陰性菌（Enterobacterales）
  Escherichia_coli: "◎"
  Klebsiella_pneumoniae: "◎"
  Klebsiella_oxytoca: "◎"
  Klebsiella_aerogenes: "◎"
  Proteus_mirabilis: "◎"
  Proteus_vulgaris: "◎"
  Serratia_marcescens: "○"
  Enterobacter_cloacae: "○"
  Citrobacter_freundii: "○"
  Citrobacter_koseri: "○"
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
  Bacteroides_fragilis: "◎"
  Clostridioides_difficile: "×"

  # 耐性菌カテゴリー
  ESBL_producers: "◯"
  AmpC_producers: "△"
  Carbapenemase_producers: "×"

indications:
  - sepsis
  - febrile_neutropenia
  - HAP
  - NHCAP
  - intra_abdominal_infection
  - cholangitis
  - UTI_complicated

notes_short:
  - 緑膿菌＋嫌気性菌を同時にカバー可能
  - Extended infusion推奨
  - ESBL感染ではカルバペネム優先

links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
---


【抗菌薬まとめ】ピペラシリン・タゾバクタム

### ピペラシリン・タゾバクタム：PIPC/TAZ：ゾシン®
（および後発品：タゾピペ等）

### 分類
ペニシリン系抗菌薬（ウレイドペニシリン）＋β-ラクタマーゼ阻害薬配合剤

### 作用機序
ピペラシリンが細菌の細胞壁合成（PBP結合）を阻害することで殺菌的に作用する。タゾバクタムがβ-ラクタマーゼ（主にクラスA）を不可逆的に阻害し、ピペラシリンの分解を防ぐことで抗菌スペクトルを維持・拡大させる。

### 抗菌スペクトラム
#### 有効な菌種
- グラム陽性菌
  - レンサ球菌属（肺炎球菌、化膿レンサ球菌等）
  - 黄色ブドウ球菌（MSSA）
  - 腸球菌（*E. faecalis*）
- グラム陰性菌
  - 緑膿菌（*P. aeruginosa*）：PIPC/TAZの主要なターゲットの一つである
  - 腸内細菌目細菌（*E. coli*、*Klebsiella*、*Enterobacter*等。ただしESBL非産生株）
　- *Enterobacter*は、AmpC過剰産生により耐性化するため、条件付きで有効、と考える方がよい
  - インフルエンザ菌、モラクセラ・カタラーリス
- 嫌気性菌
  - *Bacteroides fragilis*群を含む多くの嫌気性菌に対し強力な活性を持つ

#### 無効・注意すべき耐性菌
- ESBL産生菌・CPRなど
  - ESBL産生菌：in vitroで感受性があっても、カルバペネム系と比較して治療失敗のリスクが報告されており、重症感染症では避けるべきである（特に菌血症の場合は予後が悪くなるエビデンスがある（MERINO trial））
  - カルバペネマーゼ産生菌（CPE等）
- 本質的耐性
  - MRSA、VRE（*E. faecium*）
  - *Stenotrophomonas maltophilia*

### 主な適応症
- 経験的治療（Empiric Therapy）として広域カバーが必要な重症感染症（敗血症、FNなど）
  - **ABPC/SBTよりも腸内細菌目細菌のカバーを広げたい場合**（主に*Enterobacter*、*Citrobacter*、*Serratia* などを想定）
- 院内肺炎（HAP）、医療介護関連肺炎（NHCAP）
- 腹腔内感染症（胆嚢炎、胆管炎、腹膜炎、肝膿瘍）
- 複雑性尿路感染症（腎盂腎炎）
- 閉塞性胆管炎など嫌気性菌とGNRの混合感染が疑われる場合

### 用法・用量
#### 成人の標準投与量
##### 静脈内（IV）投与
- **通常（間欠投与：30分以上かけて投与）**
  - 3.375g 6時間ごと（1日4回）
  - 重症：**4.5g 6時間ごと**（1日4回）
- **緑膿菌感染症**
  - **4.5g 6時間ごと**（1日4回）
- **長時間点滴（Extended Infusion：4時間かけて投与）** 
  　※推奨レジメンだが、煩雑となるため当院では通常時は用いていない
  　（耐性菌への投与では推奨、<u>感染症内科へ相談</u>を）
  - 3.375g または 4.5g を8時間ごと（1日3回）
  - 重症患者では、初回のみ通常の30分投与（Loading dose）を行い、速やかに有効血中濃度に到達させた後、次回から長時間点滴に移行する手法が推奨される。

#### 腎機能障害時の用量調節
- 維持投与（2回目以降）から調節を行う。以下の表はUpToDateに基づく目安である。

| CrCl (mL/min) | 通常用量時（3.375g q6h基準） | 重症用量時（4.5g q6h基準）           | 長時間点滴（4h投与）   |
| ------------- | ------------------- | --------------------------- | ------------- |
| 40–100        | 3.375g q6h          | **4.5g q6h**                | 3.375g q8h    |
| 20–40         | 2.25g q6h           | **4.5g q8h** または 3.375g q6h | 3.375g q8-12h |
| <20           | 2.25g q8h           | **4.5g q12h** または 2.25g q6h | 3.375g q12h   |
※海外には3.375g製剤が存在する。また、本邦にも2.25g製剤があるが、当院で採用がない。
※<u>3.375gや2.25gは、調製が煩雑</u>（水で溶解するとかさが増えて、用量調整が大変）なため、**当院では、できるだけ1回4.5gを用いることを推奨する**（表中の**太字**記載）

##### 血液透析（HD）
- 4.5g 12時間ごと、または 2.25g 8時間ごと
- 透析により30-40%が除去されるため、透析後は速やかに投与を行うことが望ましい。

##### 腹膜透析（PD）
- 4.5g 12時間ごと、または 2.25g 8時間ごと

##### 持続的腎代替療法（CRRT：CVVH / CVVHD / CVVHDF）
- 4.5g 8時間ごと
- または 4.5g 負荷投与後、2.25g 6時間ごと

#### 肝機能障害時
- 用量調節は不要である（Child-Pugh A-C）。

### 副作用
#### 主な副作用
- 下痢、軟便（頻度が非常に高い）
- 発疹、蕁麻疹
- 肝機能不全（AST/ALT上昇）
- 好酸球増多

#### 重篤な副作用
- ショック、アナフィラキシー
- *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
- 好中球減少、血小板減少（2週間以上の長期投与時に特に注意が必要である）
- 痙攣、意識障害（腎機能障害時の高用量投与でリスクが高まる）
- 低カリウム血症、高ナトリウム血症

### 薬物相互作用
- プロベネシド：ピペラシリンの腎排泄を遅延させ、血中濃度を上昇させる。
- メトトレキサート：メトトレキサートの排泄を阻害し、その毒性を増強させる可能性がある。

### 注意点
- アレルギー
  - ペニシリン系アレルギーの既往がある場合は慎重投与。セフェム系との交差反応性についても留意する。
- **ナトリウム含有量**
  - 本剤はナトリウム塩であり、1回4.5g製剤には約12.6mEq（約290mg）のナトリウムが含まれる。
  - 生理食塩液100mLで希釈した場合、生食由来のナトリウム（15.4mEq）と合わせ、1回あたり約28mEq（食塩相当量 約1.6g）の負荷となる。1日4回投与では食塩約6.4gに相当し、心不全、腎不全、高度の塩分制限が必要な患者では、希釈液を5%ブドウ糖液に変更するなどの検討が必要である。
- 耐性菌対応
  - ESBL産生菌が強く疑われる、あるいは確定している場合は、in vitroの感受性結果に関わらず、セフメタゾールやカルバペネム系抗菌薬への変更を検討すべきである。
- 投与方法の最適化
  - Time above MICを最大化するため、可能な限り「長時間点滴（4時間投与）」を用いることが治療アウトカムの向上とコスト削減に寄与する。
  
---
### 参考
- サンフォード感染症治療ガイド2025
- UpToDate (Dosing: Adult / Dosing: Kidney Impairment: Adult)
- Johns-Hopkins ABx Guide
- JAMA. 2018 Sep 11;320(10):984-994.
---