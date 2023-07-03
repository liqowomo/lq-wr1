import {SignInButton, UserButton} from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<UserButton afterSignOutUrl="/" />
			<h1>Logina Testa</h1>
			<SignInButton mode="modal">
				<button className="btn btn-wide">login</button>
			</SignInButton>
		</main>
	)
}
