import Txa from '@/app/components/txa'
import {Dancing_Script} from 'next/font/google'

const dan = Dancing_Script({subsets: ['latin']})

export default function page() {
	return (
		<section className={dan.className}>
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
			<section className="flex min-h-screen flex-col items-center justify-around p-24">
				<h1 className="text-6xl text-center">Logged in Dawg</h1>
				<div>
					<Txa />
				</div>
			</section>
		</section>
	)
}
