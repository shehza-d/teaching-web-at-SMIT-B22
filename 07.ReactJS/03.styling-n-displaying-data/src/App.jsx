import "./smit.css";
import Navbar from "./components/Navbar.jsx";

function FirstComponent() {
	return <button> my button </button>;
}

function App() {
	let student = {
		username: "Shehzad Iqbal",
		age: 23,
		imgUrl: "link",
	};

	const smit = {
		color: "red",
		backgroundColor: "black",
		fontSize: 500,
	};

	return (
		<>
			<Navbar />
			<br />
			<FirstComponent />
			<FirstComponent></FirstComponent>
			<h1 className={"hello" + " world"} style={smit}>
				Shehzad React Project 3 Deployment
			</h1>

			<br />
			{/* <p>{student}</p>*/}
		</>
	);
}

export default App;
