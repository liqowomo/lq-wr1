import {currentUser} from '@clerk/nextjs'

export async function User() {
	const user = await currentUser()
	return <h1 className="text-6xl">Hello {user?.username}</h1>
}
