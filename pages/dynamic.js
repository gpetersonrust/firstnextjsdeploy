import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

 

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/dynamic/?counter=10', undefined, { shallow: true })
   
  }, [])

  useEffect(() => {
    setLoading(true )
    // The counter changed!
  }, [router.query.counter])

  console.log();
  return (
      <h1> Dynamic : {loading ? router.query.counter : (<div> Loading... </div>)} </h1>
  )
}

 

export default Post