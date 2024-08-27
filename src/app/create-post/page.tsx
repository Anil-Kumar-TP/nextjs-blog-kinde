import { createPost } from '@/actions/actions'
import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'

export default async function page() {
    
  return (
      <main className='text-center pt-16'>
          <h1 className="text-4xl font-bold md:text-5xl mb-5">Create Post</h1>
          <form className='gap-2 my-10 flex flex-col max-w-[400px] mx-auto' action={createPost} >
              <input type="text" className='border rounded px-3 h-10' name='title' placeholder='Title of Post' required />
              <textarea name='body' placeholder='content...' className='border rounded px-3 py-2' rows={6} required/>
              <button className='h-10 bg-blue-500 px-5 rounded text-white'>Submit</button>
          </form>
          <LogoutLink>LogOut</LogoutLink>
    </main>
  )
}
