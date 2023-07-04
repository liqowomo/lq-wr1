import {options} from '../../../../ref/dgNextAuthIntro/src/app/api/auth/[...nextauth]/options'
import {getServerSession} from 'next-auth/next'
import UserCard from '../../../../ref/dgNextAuthIntro/src/app/components/UserCard'
import {redirect} from 'next/navigation'

// =========================

// Additions from codiums will be in this section 

//==========================

export default async function ServerPage() {
	const session = await getServerSession(options)

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/server')
	}

	return (
		<section className="flex flex-col gap-6">
			<UserCard user={session?.user} pagetype={'Server'} />
		</section>
	)
}
