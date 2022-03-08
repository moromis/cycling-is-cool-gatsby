/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import Layout from "./layout"
import ShopLink from "./ShopLink"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  return (
    <Layout>
<Text sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}>
  Cycling is Cool,
</Text>
<br />
<Text sx={{ fontSize: [4, 5, 6], color: `heading`, display: "flex", justifyContent: "flex-end" }}>
  let people know.
</Text>
{/* Todo: change to use GatsbyImage */}
<a href="/shop"><img src="./product.png" style={{ maxWidth: "100%" }} /></a>
    <section sx={{ mb: [2, 3, 4], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
      <ShopLink />
    </section>
    </Layout>
  )
}

export default Homepage
