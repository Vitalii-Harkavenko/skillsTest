export const LogoText = () => {
	const losangeles = "LOSANGELES".split('');
	const mountains = "MOUNTAINS".split('');

	return (
		<>
		<div className="losangeles">
			{losangeles.map((letter, index) => {
				return <p key={index}>{letter}</p>
			})}
		</div>
		<div className="mountains">
			{mountains.map((letter, index) => {
				return <p key={index}>{letter}</p>
			})}
		</div>
		</>
	)
}