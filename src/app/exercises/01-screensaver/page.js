import React from 'react';
import Link from 'next/link';

function ChooseYourColor() {
	return (
		<main>
			<h1>Choose your color:</h1>
			<ul>
				<li><Link href={`/exercises/01-screensaver/lavender`}>lavender</Link></li>
				<li><Link href={`/exercises/01-screensaver/slateblue`}>slateblue</Link></li>
				<li><Link href={`/exercises/01-screensaver/hotpink`}>hotpink</Link></li>
				<li><Link href={`/exercises/01-screensaver/white`}>white</Link></li>
				<li><Link href={`/exercises/01-screensaver/rebeccapurple`}>rebeccapurple</Link></li>
			</ul>
		</main>
	);
}

export default ChooseYourColor;
