---
type: antibiotic
abx_id: ABPC
generic_ja: アンピシリン
generic_en: ampicillin
brand_ja: ビクシリン
class_ja: ペニシリン系（アミノペニシリン）
route: [IV]
renal_adjust: required
hepatic_adjust: no
pkpd: time_dependent
tDM: no
restricted: no
covers:
  Streptococcus_pneumoniae: "◎"
  Streptococcus_pyogenes: "◎"
  Streptococcus_agalactiae: "◎"
  Enterococcus_faecalis: "◎"
  Listeria: "◎"
  Haemophilus_influenzae: "△"
  E_coli: "△"
  Proteus_mirabilis: "○"
  Salmonella: "○"
  Shigella: "○"
  Klebsiella: "×"
  MRSA: "×"
  Pseudomonas_aeruginosa: "×"
  Serratia: "×"
  Enterobacter: "×"
  Citrobacter: "×"
  Anaerobes: "×"
indications:
  - sepsis_documented
  - infective_endocarditis
  - pneumonia
  - cystitis
  - pyelonephritis
  - meningitis
  - otitis_media
  - sinusitis
notes_short:
  - Enterococcus faecalisの第一選択
  - Listeria monocytogenesの第一選択
  - βラクタマーゼ産生菌には無効
links:
  references:
    - Sanford2025
    - UpToDate
    - JohnsHopkinsABxGuide
comments: true
feedback_form: true
---
---

### アンピシリン：ABPC：ビクシリン®
### **分類** 
ペニシリン系抗菌薬（アミノペニシリン）
### **作用機序**
ペニシリン結合タンパク（PBP）に結合し、細胞壁ペプチドグリカンの架橋形成を阻害することで殺菌的に作用する。

### **抗菌スペクトラム**
#### **有効な菌種**
- **グラム陽性菌**
  - 肺炎球菌
  - 化膿性レンサ球菌（GAS, GBS, GGS）
  - 腸球菌（*Enterococcus faecalis*）（**第一選択**）
  - *Listeria monocytogenes*（**第一選択**）
　　など
*  **グラム陰性菌**
  - _Haemophilus influenzae_（βラクタマーゼ非産生株）
  - _Escherichia coli_（βラクタマーゼ非産生株）
  - _Proteus mirabilis_
  - _Salmonella_ 属、_Shigella_ 属
　　など
#### **無効・注意すべき耐性菌**
- **βラクタマーゼ産生菌**
  - 多くの _E. coli_、_H. influenzae_、_Klebsiella_ 属など
- **本質的耐性**
  - MRSA
  - 緑膿菌
  - *Serratia*、*Enterobacter*、*Citrobacter*属 など
  
### **主な適応症**
　*  （培養で起因菌が判明後の）敗血症、感染性心内膜炎
　*  肺炎
　*  膀胱炎、腎盂腎炎
　*  髄膜炎 （特にリステリア髄膜炎）
　*  中耳炎、副鼻腔炎
　
### **用法・用量**
#### **成人の標準投与量**
##### **静脈内 (IV) 投与:**
- **通常**
　- **1–2 g IV 4–6時間ごと**
- **重症感染症（髄膜炎、心内膜炎など）**
　- **2 g IV 4時間ごと**
#### **腎機能障害時の用量調節**
*   アンピシリンは主に腎臓から排泄されるため、腎機能障害時には**投与間隔を延長**する。
*   以下の表は、UpToDateに基づいたCrClに応じた用量調節の目安である。
-   **初回投与量は腎機能にかかわらず通常量**を用いる
-   調節は**維持投与（2回目以降）から**行う

| **CrCl (mL/minute)** | **静脈内投与<br>(通常推奨用量 1-2 g 6時間ごと)** | **静脈内投与<br>(通常推奨用量 2 g 4時間ごと)** |
| :------------------: | :-------------------------------: | :-----------------------------: |
|      50 to <130      |            1-2 g 6時間ごと            |            2 g 4時間ごと            |
|      30 to <50       |            1-2 g 8時間ごと            |            2 g 6時間ごと            |
|      15 to <30       |           1-2 g 12時間ごと            |            2 g 8時間ごと            |
|         <15          |           1-2 g 24時間ごと            |           2 g 12時間ごと            |

##### **血液透析 (HD) 患者:** 
1-2 gを24時間ごとに投与する（重症用量の場合には、2gを12時間ごとに投与）。
- 透析による除去率：約40–60%
- 透析日は透析終了後に投与
##### **腹膜透析 (PD) 患者:** 
HD患者の場合と同様
##### **持続的腎代替療法 (CRRT：CVVH / CVVHD / CVVHDF) 患者:** 
2 gを8-12時間ごとに投与する（重症用量の場合には、2gを6−8時間ごとに投与）。
#### **肝機能障害時**
*   用量調節は不要

###  **副作用**
#### **主な副作用**
*   皮疹（伝染性単核球症患者では非アレルギー性の発疹が高頻度で出現する）
*   下痢
*   悪心、嘔吐
#### **重篤な副作用**
*   アナフィラキシー
*   中枢神経毒性（痙攣：高用量投与時や腎機能障害時に特に注意が必要である）
*   血液障害（好中球減少、血小板減少）
*   間質性腎炎
*   *Clostridioides difficile* 感染症（CD腸炎、偽膜性大腸炎）
*   肝毒性

### **薬物相互作用**
*   **プロベネシド:** 腎排泄を抑制→血中濃度を上昇（これの目的に併用することがある）
*   **経口避妊薬:** 腸内細菌叢を変化させ、経口避妊薬の効果を減弱させる可能性がある
*   **メトトレキサート:** メトトレキサートの腎排泄を阻害し、毒性を増強する可能性がある
*   **アロプリノール:** 皮疹の発現頻度を増加させる可能性がある

### **注意点**
*   **ペニシリンアレルギー:** 既往歴のある患者では注意（アナフィラキシー既往の場合。自称「ペニシリンアレルギー」の9割は真のアレルギーではない）。重篤な即時型反応の既往がある場合は禁忌。
*   **伝染性単核球症:** 伝染性単核球症の患者に投与すると、高頻度で皮疹が出現するため、投与を避けるべきである（ペニシリンGや、内服の場合はバイシリンGを用いる）。
*   **β-ラクタマーゼ産生菌への対応:** β-ラクタマーゼ産生菌が疑われる場合、β-ラクタマーゼ阻害薬配合剤（例: アンピシリン・スルバクタム）や他の抗菌薬への変更を検討する。
*   **腸球菌感染症:** 腸球菌感染症では、アミノグリコシド系抗菌薬との併用により相乗的な殺菌効果が期待でき、感染性心内膜炎では腎毒性に注意しながら併用する場合がある。
*   **髄液移行性:** 髄膜炎時には髄液移行性が良好となる。

---
### **参考**
- サンフォード感染症治療ガイド2025（Sanford Guide to Antimicrobial Therapy日本語版）
- UpToDate
- Johns-Hopkins ABx Guide
---
