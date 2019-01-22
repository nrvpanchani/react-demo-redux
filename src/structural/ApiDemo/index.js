import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from "react-router-dom";

import TopMenu from '../../components/TopMenu'
import Home from "../../components/Home";
import Users from "../../components/Users";

export default class ApiDemo extends Component {

	render() {
		return (
			<Container>
				<TopMenu />

				<Route exact path="/" component={Home} />
			    <Route path="/users" component={Users} />
			</Container>
		);
	}
}
