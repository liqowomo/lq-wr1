import {SignIn} from '@clerk/nextjs'

export default function Page() {
	const SignInPage = () => (
		<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
	)
}
