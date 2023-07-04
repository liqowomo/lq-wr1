'use client'

import Link from 'next/link'

export default function Compo() {
	return (
		<section>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						'url(/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
				}}
			>
				<div className="hero-overlay bg-opacity-60 bg-black"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<section id="body">
							<h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-[url('https://media.giphy.com/media/SYrMAmJZT4YcU/giphy.gif')] hover:animate-rotate-y animate-infinite animate-duration-[15000ms] text-center">
								ClerkDev E2E Test
							</h1>
						</section>
						<p className="mb-5">Click Button Below</p>
						<Link href="/sign-in">
							<button className="btn btn-glass bg-[url('https://media.giphy.com/media/eVSqI3mZYfaDIXYsnS/giphy.gif')] hover:animate-pulse btn-wide  animate-text">
								<h2 className="text-2xl font-extrabold text-rose-500 ">
									Login
								</h2>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
