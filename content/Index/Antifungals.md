# 抗真菌薬一覧（Antifungals）

---

## 🧭 クイック検索

- [[Index/Spectrum|スペクトラムから探す]]
- [[Index/RenalDose|腎機能別投与量]]

---

## 💊 抗真菌薬一覧

- [[Drugs/Antifungals/micafungin|ミカファンギン（MCFG）]]

---

## 🎯 目的別で探す

### ▶ カンジダ血症（第一選択）
- [[Drugs/Antifungals/micafungin|ミカファンギン（MCFG）]]

---

### ▶ アスペルギルス
- [[Drugs/Antifungals/micafungin|ミカファンギン（MCFG）]]（※通常は併用）

---

## ⚠️ 注意ポイント

- ミカファンギンは髄液・尿・眼への移行が悪い  
- 重症例ではアゾール系やAmBとの使い分けが重要  

---

## 🧠 メモ

- *Candida*はエキノキャンディンが基本  
- de-escalationとしてフルコナゾールへ切り替え検討  

---


```dataview

TABLE
  abx_id AS "略号",
  generic_ja AS "一般名",
  class_ja AS "分類",
  route AS "投与経路"
FROM "Drugs/Antifungals"
WHERE type = "antifungal"
SORT generic_ja ASC

```
