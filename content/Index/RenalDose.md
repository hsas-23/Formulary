# 腎機能別投与量（Renal Dose）

---

## ⚠️ 調整が必要

- [[Drugs/Antibiotics/ampicillin|アンピシリン（ABPC）]]
- [[Drugs/Antibiotics/ampicillin-sulbactam|アンピシリン・スルバクタム（ABPC/SBT）]]
- [[Drugs/Antibiotics/piperacillin|ピペラシリン（PIPC）]]
- [[Drugs/Antibiotics/piperacillin-tazobactam|ピペラシリン・タゾバクタム（PIPC/TAZ）]]
- [[Drugs/Antibiotics/cefazolin|セファゾリン（CEZ）]]
- [[Drugs/Antibiotics/cefmetazole|セフメタゾール（CMZ）]]
- [[Drugs/Antibiotics/ceftazidime|セフタジジム（CAZ）]]
- [[Drugs/Antibiotics/cefepime|セフェピム（CFPM）]]
- [[Drugs/Antibiotics/meropenem|メロペネム（MEPM）]]
- [[Drugs/Antibiotics/clarithromycin|クラリスロマイシン（CAM）]]
- [[Drugs/Antibiotics/levofloxacin|レボフロキサシン（LVFX）]]
- [[Drugs/Antibiotics/sulfamethoxazole-trimethoprim|ST合剤（SMX/TMP）]]
- [[Drugs/Antibiotics/vancomycin|バンコマイシン（VCM）]]

---

## ✅ 調整不要
- [[Drugs/Antibiotics/ceftriaxone|セフトリアキソン（CTRX）]]
- [[Drugs/Antibiotics/clindamycin|クリンダマイシン（CLDM）]]
- [[Drugs/Antibiotics/minocycline|ミノサイクリン（MINO）]]
- [[Drugs/Antifungals/micafungin|ミカファンギン（MCFG）]]

---

---

```dataview

TABLE

  abx_id AS "略号",

  generic_ja AS "一般名",

  class_ja AS "分類"


FROM "Drugs"

WHERE renal_adjust = "required"

SORT generic_ja ASC

```