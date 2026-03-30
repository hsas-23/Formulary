import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Comments: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData.frontmatter?.comments) {
    return null
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <script
        src="https://giscus.app/client.js"
        data-repo="hsas-23/Formulary"
        data-repo-id="R_kgDORzhnbQ"
        data-category="General"
        data-category-id="DIC_kwDORzhnbc4C5k1P"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-theme="preferred_color_scheme"
        data-lang="ja"
        crossOrigin="anonymous"
        async
      ></script>
    </div>
  )
}

export default (() => Comments) satisfies QuartzComponentConstructor
