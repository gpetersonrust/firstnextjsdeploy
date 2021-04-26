 import React from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 
 const Profile = () => {
     return (
         <div>
              <h1>Profile</h1>
             
              <Image 
              src="https://source.unsplash.com/random/1600x800"
              alt="First Next Served Picture"
              width="400"
              height="200"
              />

          <Link href={{
                pathname: '/posts/[...id]',
                query: { id: 3, comment_id: 9},
          }}><a> Post</a></Link>
         </div>
     )
 }
 
 export default Profile
 