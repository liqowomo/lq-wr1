import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <UserButton afterSignOutUrl="/"/>
      <h1 className="text-6xl">Hello World</h1>
    </main>
  )
}
