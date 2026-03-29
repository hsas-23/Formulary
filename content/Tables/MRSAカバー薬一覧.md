|File4|略号|一般名|分類|MRSA|
|---|---|---|---|---|
|[sulfamethoxazole-trimethoprim](app://obsidian.md/Drugs/Antibiotics/sulfamethoxazole-trimethoprim.md)|SMX_TMP|スルファメトキサゾール・トリメトプリム|サルファ剤＋葉酸代謝拮抗剤配合剤|◎|
|[vancomycin](app://obsidian.md/Drugs/Antibiotics/vancomycin.md)|VCM|バンコマイシン|グリコペプチド系抗菌薬|◎|
|[clindamycin](app://obsidian.md/Drugs/Antibiotics/clindamycin.md)|CLDM|クリンダマイシン|リンコマイシン系抗菌薬|△|
|[minocycline](app://obsidian.md/Drugs/Antibiotics/minocycline.md)|MINO|ミノサイクリン|テトラサイクリン系抗菌薬|△|

---

```dataview

TABLE

  abx_id AS "略号",

  generic_ja AS "一般名",

  class_ja AS "分類",

  covers.MRSA AS "MRSA"

FROM "Drugs"

WHERE covers.MRSA = "◎" OR covers.MRSA = "○" OR covers.MRSA = "△"

SORT covers.MRSA DESC, generic_ja ASC

```