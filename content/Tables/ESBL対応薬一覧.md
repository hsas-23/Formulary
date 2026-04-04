---
comments: true
feedback_form: true

version: 1.1
last_reviewed: 2026-04-04
status: reviewed
---


|   |略号|一般名|分類|ESBL|
|---|---|---|---|---|
|[meropenem](app://obsidian.md/Drugs/Antibiotics/meropenem.md)|MEPM|メロペネム|カルバペネム系抗菌薬|◎|
|[cefmetazole](app://obsidian.md/Drugs/Antibiotics/cefmetazole.md)|CMZ|セフメタゾール|セフェム系（セファマイシン系）|○|
|[sulfamethoxazole-trimethoprim](app://obsidian.md/Drugs/Antibiotics/sulfamethoxazole-trimethoprim.md)|SMX/TMP|スルファメトキサゾール・トリメトプリム|サルファ剤＋葉酸代謝拮抗剤配合剤|△|
|[minocycline](app://obsidian.md/Drugs/Antibiotics/minocycline.md)|MINO|ミノサイクリン|テトラサイクリン系抗菌薬|△|
|[levofloxacin](app://obsidian.md/Drugs/Antibiotics/levofloxacin.md)|LVFX|レボフロキサシン|ニューキノロン系抗菌薬（フルオロキノロン系）|

---


```dataview

TABLE
  abx_id AS "略号",
  generic_ja AS "一般名",
  class_ja AS "分類",
  covers.ESBL_producers AS "ESBL"
FROM "Drugs"
WHERE covers.ESBL_producers = "◎"
   OR covers.ESBL_producers = "○"
   OR covers.ESBL_producers = "△"

SORT covers.ESBL_producers DESC, generic_ja ASC

```
