import Image from 'next/image'
import Sbu from './components/sbu'
import {SignInButton} from '@clerk/nextjs'
import {UserButton} from '@clerk/nextjs'

export default function Home() {
	return (
		<main>
			<section className="flex min-h-screen flex-col items-center justify-around p-24">
				<h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent animate-text">
					Sign Up and see
				</h1>
				<SignInButton mode="modal">
					<Sbu />
				</SignInButton>
				<UserButton afterSignOutUrl="/" />
			</section>
		</main>
	)
}
