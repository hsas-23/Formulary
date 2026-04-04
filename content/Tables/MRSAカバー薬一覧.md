---
comments: true
feedback_form: true

version: 1.1
last_reviewed: 2026-04-04
status: reviewed
---


|   |略号|一般名|分類|MRSA|
|---|---|---|---|---|
|[vancomycin](app://obsidian.md/Drugs/Antibiotics/vancomycin.md)|VCM|バンコマイシン|グリコペプチド系抗菌薬|◎|
|[sulfamethoxazole-trimethoprim](app://obsidian.md/Drugs/Antibiotics/sulfamethoxazole-trimethoprim.md)|SMX/TMP|スルファメトキサゾール・トリメトプリム|サルファ剤＋葉酸代謝拮抗剤配合剤|○|
|[clindamycin](app://obsidian.md/Drugs/Antibiotics/clindamycin.md)|CLDM|クリンダマイシン|リンコマイシン系抗菌薬|△|
|[minocycline](app://obsidian.md/Drugs/Antibiotics/minocycline.md)|MINO|ミノサイクリン|テトラサイクリン系抗菌薬|

---

```dataview

TABLE

  abx_id AS "略号",

  generic_ja AS "一般名",

  class_ja AS "分類",

  covers.Staphylococcus_aureus_MRSA AS "MRSA"

FROM "Drugs"

WHERE covers.Staphylococcus_aureus_MRSA = "◎" OR covers.Staphylococcus_aureus_MRSA = "○" OR covers.Staphylococcus_aureus_MRSA = "△"

SORT covers.Staphylococcus_aureus_MRSA DESC, generic_ja ASC

```