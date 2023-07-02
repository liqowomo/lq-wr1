import Image from 'next/image'
import Cr from './components/cr'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-around p-24">
			<div className="border">
				<Cr />
			</div>
			<h1 className="text-4xl font-extrabold">YumYum </h1>
		</main>
	)
}
