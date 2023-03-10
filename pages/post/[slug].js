import fs from 'fs'
import md from 'markdown-it'
import matter from 'gray-matter'

export async function getStaticPaths() {
    // Retrieve our slugs
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false
    };
}


export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }

  export default function PostPage({ frontmatter, content }) {
    return (
      <div className='prose mx-auto dark:text-white'>
        <h1 className='dark:text-white'>{frontmatter.title}</h1>
        <div className='dark:text-white' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <div className="flex justify-between dark:text-white">
          <span>
            {frontmatter.date}
          </span>
          <span>
            by: {frontmatter.by}
          </span>
        </div>
      </div>
    );
  }