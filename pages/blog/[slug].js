import {createClient} from 'contentful'
import styles from './blog.module.css'
import Image from 'next/image'
import PrettyDate from '../../components/PrettyDate'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogpost'
  })
  console.log(res)
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug} 
    }
  })
  return {
    paths,
    fallback: false, // if it goes to a path it doesn't exist, show 404 page
  }
}


const RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (<Image
        src={`https:${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height/10}
        width={node.data.target.fields.file.details.image.width/10}
      />)
    }
  }
}


export async function getStaticProps({params}) {
  // fetch a single item based on the page we are on
  const {items} = await client.getEntries({
    content_type: 'blogpost',
    'fields.slug':params.slug
  })
  return {
    props: {blogpost: items[0]}
  }
}

export default function Post({blogpost}) {
  const {title, created, blogContent, coverImage} = blogpost.fields
  console.log(coverImage)
  return (
    <div className={styles['blog-container']}>

      <h2 className={styles.title}>{title}</h2>
      <PrettyDate datestring={created} style={{fontStyle: "italic", marginTop: '0px'}}/>
      <Image
        src={`https:${coverImage.fields.file.url}`}
        layout="responsive"
        width="300px"
        height="200px"
        className={styles.coverImage}
      />
      <div>{documentToReactComponents(blogpost.fields.blogContent, RICH_TEXT_OPTIONS)}</div>
    </div>
  )
}