import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export function getStaticProps(){
  // get all our posts
  const files= fs.readdirSync('posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return{
      slug,
      frontmatter
    }
  })
  return {
    props:
    {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid grid-cols-3 lg:grid-cols-4 p-4 md:p-0 font-sans">
      {posts.map(({ slug, frontmatter }) =>(
        <div className='border-gray-200 m-2 rounded-xl shadow-lg overfllow-hidden flex flex-col' key={slug}>
          <Link href={`post/${slug}`}>
            <Image 
              width={650}
              height={220}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />
            <h1 className='p-4'>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}
