import Link from 'next/link'

export default function Txa() {
	return (
		<section data-theme="luxury" className="flex-col flex items-center gap-5">
			<Link href="/">
				<button className="btn glass">Glass button</button>
			</Link>
			<textarea
				placeholder="Bio"
				className="textarea textarea-bordered textarea-lg w-full max-w-2xl"
			></textarea>
			<ul className="menu bg-base-200 w-56 rounded-box">
				<li>
					<a>LickArmpits</a>
				</li>
				<li>
					<a>SniffFart</a>
				</li>
				<li>
					<a>DrinkGolden</a>
				</li>
			</ul>
			<div className="mockup-window border bg-base-300">
				<div className="flex justify-center px-4 py-16 bg-base-200">
					<code>import bigBreasted ladies from fetishqueen</code>
				</div>
			</div>
		</section>
	)
}
