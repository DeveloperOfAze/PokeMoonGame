import React, { Component } from 'react';
import './Cards.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let funksiya = (number) => {

	//bu funksiyani basqa cur nece yazmaq olar  ? muellimden sorusacam 
	if (number <= 999) {
		return `00${number}`.slice(-3);
	} else {
		return number;
	}
};
class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${funksiya(this.props.id)}.png`;
		return (
			<div className="NewClassName">
				<h1 className="NewClassName-title">{this.props.name}</h1>
				<div className="NewClassName-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="NewClassName-data">Type: {this.props.type}</div>
				<div className="NewClassName-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
