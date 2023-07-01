import Image from 'next/image'
import {SignIn, SignInButton, UserButton} from '@clerk/nextjs'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-8xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center animate-text">
				Welcome Page
			</h1>
			<div>
				<button className="btn btn-wide">
					<SignInButton mode="modal" />
				</button>
			</div>
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</main>
	)
}
