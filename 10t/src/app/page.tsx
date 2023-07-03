import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<Link href="/sign-in">
				<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
					Responsive
				</button>
			</Link>
			<h1 className="text-8xl">Welcome</h1>
		</main>
	)
}
