import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";



export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1" style={{ display: 'flex', alignItems: 'center' }}>TeamUp Nexus</span>
				</Link>
				<div className="ml-auto">
					{!store.token ? 
					<div>
					<Link to="/signup">
						<button className="btn btn-primary signup">Sign up</button>
					</Link>	
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>	
					</div>
			:
					<button onClick={() => actions.logout()} className="btn btn-primary">Logout</button>
			}
				</div>
			</div>
		</nav>
	);
};
