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
						src="https://media.giphy.com/media/MuDevakrscnni/giphy.mp4"
						type="video/mp4"
					/>
				</video>
			</section>
			<section className="flex flex-col items-center justify-center h-screen">
				<SignUp />
			</section>
		</section>
	)
}
