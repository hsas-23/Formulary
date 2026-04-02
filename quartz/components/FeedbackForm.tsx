import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FeedbackForm: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData.frontmatter?.feedback_form) {
    return null
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>フィードバックフォーム</h2>
      <p>
        誤記指摘、改善提案、追加希望、質問などがあれば以下からお寄せください。
        医療相談、患者個別相談には対応していません。個人情報は記載しないでください。
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScJmx5Zyd6SqLpBbCV2MjZmxmP-xtDnYBxYPklMr5D7tv0nlQ/viewform?embedded=true"
        width="100%"
        height="1772"
        style={{ border: "none" }}
      >
        読み込んでいます…
      </iframe>
    </div>
  )
}

export default (() => FeedbackForm) satisfies QuartzComponentConstructor