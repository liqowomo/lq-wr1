import {SignUp} from '@clerk/nextjs'

export default function Page() {
	;<section>
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
		</section>
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<SignUp />
		</div>
	</section>
}
