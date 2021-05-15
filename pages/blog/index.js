import React from 'react'
import Layout from '../../components/layout'
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'
import Image from 'next/image'
import style from './blog.module.css'
import Link from 'next/link'
import PrettyDate from '../../components/PrettyDate'


export async function getStaticProps({params}) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({content_type: 'blogpost'})
   return {
     props: {
       blogposts: res.items
     }
   }
}

const Blog = ({blogposts}) => {
  const sortBlogsByDate = () => {
    return blogposts.sort((post1, post2) => (
        post1.fields.created <= post2.fields.created
      )
    )
  }
  return (
    <div className={style.container}>
      <h1>Blog</h1>
      <div style={{width:"75vw"}}>
        {sortBlogsByDate().map(blogpost => {
          const {created, title, blogContent, coverImage, slug} = blogpost.fields;
          console.log(blogpost.fields)
          return (
            <Link href={`/blog/${slug}`}>
              <div key={created + title}
                className={style['preview-container']}>
                <h3 className={style.title}>{title}</h3>
                <PrettyDate datestring={created}/>
                {/* <div>{documentToReactComponents(blogpost.fields.blogContent, RICH_TEXT_OPTIONS)}</div> */}
              </div>
            </Link>
          )
        }
          
        )}
      </div>
      
    </div>
  )
}




export default Blog