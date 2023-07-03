import {SignUp} from '@clerk/nextjs'

export default function Page() {
	const SignUpPage = () => (
		<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
	)
}
