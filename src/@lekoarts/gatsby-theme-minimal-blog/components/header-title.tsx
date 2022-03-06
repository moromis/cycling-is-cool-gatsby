/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none`, display: "flex", alignItems: "center" }}
    >
      <img src="favicon.png" sx={{ height: [10, 12], mr: [2, 3] }}  />
      <span sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>{siteTitle}</span>
    </Link>
  )
}

export default HeaderTitle
