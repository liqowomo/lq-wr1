import Image from 'next/image'
import Cr from './components/cr'

export default function Home() {
	return (
		<main>
			<section id="bganimation">
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
							src="https://ods.manyvids.com/1005199763/o1gjsce932np31b0sv5714km17ee1a/preview/a733a8909a18a2493466_1670622677247.mp4_720.mp4"
							type="video/mp4"
						/>
					</video>
				</section>
			</section>
			<section className="flex min-h-screen flex-col items-center justify-around p-24">
				<div className="border bg-[url('https://media.tenor.com/XtKKobUU1o4AAAAC/booty.gif')]">
					<Cr />
				</div>
				<h1 className="text-4xl font-extrabold">YumYum </h1>
			</section>
		</main>
	)
}
