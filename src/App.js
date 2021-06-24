const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h2", {}, props.name),
		React.createElement("h3", {}, props.animal),
		React.createElement("h3", {}, props.breed),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
		React.createElement(Pet, { name: "Luna", animal: "Dog", Breed: "Havanese" }),
		React.createElement(Pet, { name: "Pepper", animal: "Bird", Breed: "Cockatiel" }),
		React.createElement(Pet, { name: "Sudo", animal: "Dog", Breed: "Wheaten Terrier" }),
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
