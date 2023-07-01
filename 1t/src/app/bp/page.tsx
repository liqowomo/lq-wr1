import React from 'react'
import Acco from '../components/acco'

export default function page() {
	return (
		<section className="flex flex-col justify-around h-screen">
			<h1 className="text-8xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center animate-text">
				Inner <br /> Page
			</h1>
			<div>
				<Acco />
			</div>
		</section>
	)
}
