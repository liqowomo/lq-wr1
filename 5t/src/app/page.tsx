import Image from 'next/image'
import Cr from './components/cr'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Cr />
		</main>
	)
}
