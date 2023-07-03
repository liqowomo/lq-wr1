import {UserButton} from '@clerk/nextjs'

export default function page() {
	return (
		<section>
			<UserButton afterSignOutUrl="/" />
			<h1 className="text-5xl font-extrabold">Welcome</h1>
		</section>
	)
}
