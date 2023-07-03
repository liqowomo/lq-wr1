import Tdo from '@/components/tdo'
import {UserButton} from '@clerk/nextjs'

export default function page() {
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
						src="https://video-previews.elements.envatousercontent.com/files/c501f5e5-c701-4363-bee6-57492384fd34/video_preview_h264.mp4"
						type="video/mp4"
					/>
				</video>
			</section>
			<UserButton />
			<section className="flex flex-col text-center items-center justify-center h-min">
				<h1 className="text-4xl font-extrabold text-red-600">
					{' '}
					Sniff and Lick Booty{' '}
				</h1>
				<Tdo />
			</section>
			<div></div>
			<div></div>
		</section>
	)
}
