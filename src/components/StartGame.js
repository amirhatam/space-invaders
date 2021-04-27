import React, { Component } from 'react'


export class StartGame extends Component {
    render() {
        return (
            <div id='firstMenu'>
            <h1>Space Invaders </h1>
            <section>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
            {/* 2/ Lorsque que l'on click sur ce button, ça appelle la fonction toBegin  */}
            
          </div>
        )
    }
}

export default StartGame
