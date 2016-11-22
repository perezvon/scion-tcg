import * as game from './game'

export let currentGame = new game.Game();

export let player = new game.Player();
player.deck = game.ubAndroids;
player.deck.shuffle();
player.deck.draw(player.hand, 7);