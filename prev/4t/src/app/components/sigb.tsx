'use client'

import {SignInButton} from '@clerk/nextjs'

export default function Sigb() {
	return (
		<section data-theme="synthwave">
			<SignInButton mode="modal">
				<button className="btn glass">Glass button</button>
			</SignInButton>
		</section>
	)
}
