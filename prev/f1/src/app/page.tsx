import Compo from '@/components/compo'
import Image from 'next/image'

export default function Home() {
	return (
		<main>
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
						src="https://media.giphy.com/media/1GkRWmlZzcE3HLDXQw/giphy.mp4"
						type="video/mp4"
					/>
				</video>
			</section>
			<div>
				<Compo />
			</div>
		</main>
	)
}
