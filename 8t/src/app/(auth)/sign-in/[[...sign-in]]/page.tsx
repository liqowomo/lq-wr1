import {SignIn} from '@clerk/nextjs'

export default function Page() {
	return (
		<section>
			<section id="bganimation">
				<video
					muted
					autoPlay
					loop
					playsInline
					disablePictureInPicture
					className="absolute h-full w-full object-cover -z-10 blur-lg brightness-50"
				>
					<source
						src="https://media.giphy.com/media/DKO203YtkprL6HkUfk/giphy.mp4"
						type="video/mp4"
					/>
				</video>
				<SignIn />
			</section>
		</section>
	)
}
