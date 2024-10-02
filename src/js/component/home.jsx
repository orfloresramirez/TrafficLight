
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	let [rojo, setRojo] = useState("bg-transparent");
	let [ambar, setAmbar] = useState("bg-transparent")
	let [verde, setVerde] = useState("bg-transparent")

	function Parar() {
		if(rojo==="bg-danger"){
		setRojo("bg-transparent");
		setAmbar("bg-transparent");
		setVerde("bg-transparent");
		}
	else
		setRojo("bg-danger");
		setAmbar("bg-transparent");
		setVerde("bg-transparent");
	}
	
	function Esperar() {
		if(ambar==="bg-warning"){
		setRojo("bg-transparent");
		setAmbar("bg-transparent");
		setVerde("bg-transparent");
		}
	else
		setAmbar("bg-warning");
		setRojo("bg-transparent");
		setVerde("bg-transparent");
	}

	function Avanzar() {
		if(verde==="bg-success"){
		setRojo("bg-transparent");
		setAmbar("bg-transparent");
		setVerde("bg-transparent");
		}
	else
		setVerde("bg-success");
		setRojo("bg-transparent");
		setAmbar("bg-transparent");
	}
	



	
	return (
		<div className="text-center align-items-center justify-content-center">
			<div className="container text-center align-items-center justify-content-center">
				<div className="row bg-dark text-center justify-content-center py-2" id="contenedor">
					<div className="row text-center justify-content-center">
						<button onClick={Parar} className={`rounded-circle border-dark ${rojo}`}></button>
					</div>
					<div className="row">
						<button onClick={Esperar} className={`rounded-circle ${ambar}`}></button>
					</div>
					<div className="row">
						<button onClick={Avanzar} className={`rounded-circle ${verde}`}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
