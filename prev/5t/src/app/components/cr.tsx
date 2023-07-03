import React from 'react'

export default function Cr() {
	return (
		<section>
			<div className="carousel rounded-box">
				<div id="item1" className="carousel-item ">
					<img
						src="https://media1.giphy.com/media/CZedlPSpZ6hKo/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item2" className="carousel-item ">
					<img
						src="https://media1.giphy.com/media/4ftxO9bk1OJgI/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item3" className="carousel-item ">
					<img
						src="https://media1.giphy.com/media/WeiYU1ea1Poqs/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item4" className="carousel w-fu w-fullll">
					<img
						src="https://media1.giphy.com/media/eMO2b37vlirjFEMxwh/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item5" className="carousel-item ">
					<img
						src="https://media1.giphy.com/media/aA2FXW9zgaIYU/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item6" className="carousel-item ">
					<img
						src="https://media0.giphy.com/media/9CCraoy22z5ja/giphy.gif"
						alt="Burger"
					/>
				</div>
				<div id="item7" className="carousel-item ">
					<img
						src="https://media4.giphy.com/media/TZ6WMHCpM2mfS/giphy.gif"
						alt="Burger"
					/>
				</div>
			</div>
			<div className="flex justify-center  py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
				<a href="#item5" className="btn btn-xs">
					5
				</a>
				<a href="#item6" className="btn btn-xs">
					6
				</a>
				<a href="#item7" className="btn btn-xs">
					7
				</a>
			</div>
		</section>
	)
}
