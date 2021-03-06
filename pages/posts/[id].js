 
import React from 'react'
 import styles from '../../styles/SinglePosts.module.css'
 import {useRouter} from 'next/router'
const id = ({post}) => {


    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
      return <div>Loading...</div>
    }
  
  
 
    return (
        <div  className={styles.container}>
            <h2>{post.title}</h2>
        <p> {post.body}</p>
        </div>
    )
}



// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id:  String(post.id) },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    
  
    // Pass post data to the page via props
    return { props: { post }, revalidate: 1 }
  }

  export default id
