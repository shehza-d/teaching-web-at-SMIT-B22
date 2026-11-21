// function App() {
// 	let isPresent = false;

// 	if (isPresent == true) {
// 		return <h1>This user is present</h1>;
// 	} else {
// 		return <h1>This user is Absent</h1>;
// 	}
// }

// function LoginPage() {
// 	return (
// 		<form>
// 			<input type="text" placeholder="Enter your email" />
// 			<input type="text" placeholder="Enter your Password" />
// 		</form>
// 	);
// }

// function App() {
// 	let a = (
// 		<button>
// 			{" "}
// 			this is <b>button</b>
// 		</button>
// 	);

// 	let b = <LoginPage/>

// 	return (
// 		<>
// 			<div>{a}</div>
// 			<div>{b}</div>

// 		</>
// 	);
// }

const products = [
	{ title: "Cabbage", id: 1 },
	{ title: "Garlic", id: 2 },
	{ title: "Apple", id: 3 },
];

function App() {
	return (
		<div>
			<ul>
				{products.map((obj) => <li key={obj.id} >{obj.title}</li>)}
			</ul>

			{/* <ul>
				<li>{products[0].title}</li>
				<li>{products[1].title}</li>
				<li>{products[2].title}</li>
			</ul>*/}
		</div>
	);
}

export default App;
