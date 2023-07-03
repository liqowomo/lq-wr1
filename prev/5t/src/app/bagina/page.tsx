import React from 'react'

export default function page() {
	return (
		<section>
			<div>
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
			</div>
			<div className="flex flex-col h-screen justify-center">
				<div className="mockup-phone border-primary">
					<div className="camera"></div>
					<div className="display">
						<div className="artboard artboard-demo phone-1 p-3 text-center">
							<code className="animate-spin animate-infinite animate-duration-[10000ms] animate-ease-out">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="100"
									height="100"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
								</svg>
							</code>
							<h1 className="text-3xl bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent font-extrabold animate-text">
								This is some bad azz code
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
