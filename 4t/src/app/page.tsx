import Image from 'next/image'
import {UserButton} from '@clerk/nextjs'
import {SignInButton} from '@clerk/nextjs'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<h1
					id="HadPanty"
					className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-yellow-400 to-rose-500 bg-clip-text text-center animate-text"
				>
					Liq
					<br />
					her
					<br />
					Now
				</h1>
			</section>
			<SignInButton>
				<div>
					<button className="btn btn-wide">Wide</button>
				</div>
			</SignInButton>
			<UserButton afterSignOutUrl="/" />
		</main>
	)
}
