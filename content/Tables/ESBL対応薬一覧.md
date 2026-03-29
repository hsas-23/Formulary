|                                                                   | 略号   | 一般名     | 分類              | ESBL |
| ----------------------------------------------------------------- | ---- | ------- | --------------- | ---- |
| [meropenem](app://obsidian.md/Drugs/Antibiotics/meropenem.md)     | MEPM | メロペネム   | カルバペネム系抗菌薬      | ◎    |
| [cefmetazole](app://obsidian.md/Drugs/Antibiotics/cefmetazole.md) | CMZ  | セフメタゾール | セフェム系（セファマイシン系） | ○    |

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
