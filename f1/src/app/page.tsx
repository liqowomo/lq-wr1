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
			<section
				id="body"
				className="flex min-h-screen flex-col items-center justify-around p-24"
			>
				<h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-[url('https://media.giphy.com/media/SYrMAmJZT4YcU/giphy.gif')] hover:animate-rotate-y animate-infinite animate-duration-[15000ms] text-center">
					ClerkDev E2E Test
				</h1>
				<h2>Click fkn button to loginza</h2>
			</section>
		</main>
	)
}
