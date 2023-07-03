import {SignUp} from '@clerk/nextjs'

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
						src="https://i.giphy.com/media/mX1bWOEGPIAY1yhmKI/giphy.mp4"
						type="video/mp4"
					/>
				</video>
			</section>
			<section className="flex min-h-screen flex-col items-center justify-center p-24">
				<SignUp />
			</section>
		</section>
	)
}
