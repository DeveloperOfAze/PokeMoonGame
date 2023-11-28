import React, { Component } from 'react';
import Pokecard from './Cards';
import './Basliqlarin.css';

class BasliqComponent extends Component {
	render() {
		let title;
		if (this.props.isWinner) {
			title = <h1 className="baslik-kazanan">Qazanan</h1>;
		} else {
			title = <h1 className="baslik-kaybeden">Uduzan</h1>;
		}
		return (
			<div className="baslik-random">
				{title}
				<h4>Ümumi Xal: {this.props.exp}</h4>
				<div className="baslik-kartlar">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default BasliqComponent;
