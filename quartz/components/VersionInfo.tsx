import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const VersionInfo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const version = fileData.frontmatter?.version
  const lastReviewed = fileData.frontmatter?.last_reviewed
  const status = fileData.frontmatter?.status

  if (!version && !lastReviewed && !status) {
    return null
  }

  const statusLabel =
    status === "draft"
      ? "作成途中"
      : status === "reviewed"
        ? "確認済"
        : status === "provisional"
          ? "暫定"
          : status

  const statusStyle =
    status === "draft"
      ? {
          backgroundColor: "#fff8db",
          borderColor: "#f0d98a",
          color: "#7a5d00",
        }
      : status === "reviewed"
        ? {
            backgroundColor: "#eaf7ee",
            borderColor: "#9fd3ad",
            color: "#1f5c2e",
          }
        : status === "provisional"
          ? {
              backgroundColor: "#fdecec",
              borderColor: "#e2a4a4",
              color: "#8a1f1f",
            }
          : {
              backgroundColor: "var(--light)",
              borderColor: "var(--lightgray)",
              color: "var(--darkgray)",
            }

  return (
    <div
      style={{
        marginTop: "0.5rem",
        marginBottom: "1rem",
        padding: "0.75rem 1rem",
        border: `1px solid ${statusStyle.borderColor}`,
        borderRadius: "8px",
        fontSize: "0.95rem",
        color: statusStyle.color,
        backgroundColor: statusStyle.backgroundColor,
      }}
    >
      {version && <span><strong>Ver.</strong> {String(version)}</span>}
      {version && lastReviewed && <span> ｜ </span>}
      {lastReviewed && <span><strong>最終更新日</strong> {String(lastReviewed)}</span>}
      {(version || lastReviewed) && statusLabel && <span> ｜ </span>}
      {statusLabel && <span><strong>状態</strong> {statusLabel}</span>}
    </div>
  )
}

export default (() => VersionInfo) satisfies QuartzComponentConstructor