import React, { Suspense } from 'react'
import PostsList from '@/components/post.list'

export default async function Page() {

  return (
    <main className="text-center pt-16 px-5">
          <h1 className="text-4xl font-bold md:text-5xl mb-5">All Posts</h1>

          <Suspense fallback='Loading...'>
            <PostsList/>
          </Suspense>
   </main>
  )
}
