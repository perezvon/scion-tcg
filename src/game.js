//gameplay

export const phases = ['untap', 'upkeep', 'draw', 'main1', 'beginCombat', 'attack', 'block', 'damage', 'endCombat', 'main2', 'end', 'cleanup'];

export const cards = [
  {
        number: 0,
        name: 'Android (Token)',
        type: 'Creature',
        subtype: 'Token',
        colors: [],
        power: 1,
        toughness: 1,
        image: 'http://njitvector.com/wp-content/uploads/2014/04/robo.jpg'
      }, {
        number: 1,
        name: 'Superstructure',
        type: 'Land',
        card_text: 'T: 1 tech.',
        flavor_text: 'Scrape the sky, Johnny.',
        colors: ['Black'],
        image: 'https://hd.unsplash.com/photo-1431321346354-f4ebb847aec2'
      }, {
        number: 2,
        name: 'Remote Hamlet',
        type: 'Land',
        card_text: 'Tap: 1 culture.',
        flavor_text: 'From humble beginnings come great works.',
        colors: ['White'],
        image: 'https://hd.unsplash.com/photo-1469547919255-9638e94237e4'
      }, {
        number: 3,
        name: 'Data Center',
        type: 'Land',
        card_text: 'Tap: 1 information.',
        flavor_text: 'Civilization on a wafer of silicon.',
        colors: ['Blue'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/BalticServers_data_center.jpg'
      }, {
        number: 4,
        name: 'Transit Hub',
        type: 'Land',
        card_text: 'Tap: 1 infrastructure.',
        flavor_text: 'Sic transit gloria -- there is no glory without transit.',
        colors: ['Green'],
        image: 'https://hd.unsplash.com/photo-1429221058999-e6c9fe645c06'
      }, {
        number: 5,
        name: 'Munitions Plant',
        type: 'Land',
        card_text: 'Tap: 1 combat.',
        flavor_text: 'Well-defended, often attacked.',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Main_Navy_Building_and_Munitions_Building_on_the_Washington_National_Mall,_1918.jpg'
      }, {
        number: 6,
        name: 'Lenticular Enhancements',
        type: 'Instant',
        card_text: 'Gain 5 insight.',
        flavor_text: 'I can see for miles.',
        cost: '{G}{G}',
        colors: ['Green'],
        image: 'https://hd.unsplash.com/photo-1471999796791-874f5de3b3f4'
      }, {
        number: 7,
        name: 'Internecine Warfare',
        type: 'Sorcery',
        card_text: 'Deal 3 damage to each creature and each player.',
        flavor_text: 'Fuck me? Fuck YOU!',
        cost: '3{R}{R}',
        colors: ['Red'],
        image: 'https://hd.unsplash.com/photo-1419848449479-6c8a7d8d62c2'
      }, {
        number: 8,
        name: 'Surfeit of Knowledge',
        type: 'Sorcery',
        card_text: 'Draw 4 cards.',
        flavor_text: 'There is no such thing as too much of a good thing.',
        cost: '5{U}{U}',
        colors: ['Blue'],
        image: 'https://hd.unsplash.com/photo-1433878455169-4698e60005b1'
      }, {
        number: 9,
        name: 'Jensak, Ailing Despot',
        type: 'Legendary Creature',
        card_text: 'When this enters the battlefield, discard a card. <br /> Tap, sacrifice a creature: Draw a card.',
        flavor_text: 'His empire has turned in on itself.',
        cost: '1{U}{B}',
        power: 3,
        toughness: 3,
        artist: 'Jam McJam',
        colors: ['Black', 'Blue'],
        image: 'https://hd.unsplash.com/photo-1471829698930-3649e02a48bd'
      }, {
        number: 10,
        name: 'Nootropics Laboratory',
        type: 'Enchantment',
        card_text: 'All your creatures have \'Tap: gain 1 insight.\'',
        flavor_text: 'The brain is a chemistry experiment.',
        cost: '2{U}{B}',
        colors: ['Black', 'Blue'],
        image: 'https://hd.unsplash.com/photo-1418834508981-6114b37427b8'
      }, {
        number: 11,
        name: 'Surveillance State',
        type: 'Enchantment',
        card_text: 'Creatures do not untap as normal during their controllers\' untap steps.',
        flavor_text: 'If you\'ve got nothing to hide, why do you care who\'s watching?',
        cost: '3{U}',
        colors: ['Blue'],
        image: 'https://hd.unsplash.com/photo-1461685265823-f8d5d0b08b9b'
      }, {
        number: 12,
        name: 'Ludditic Uprising',
        type: 'Instant',
        card_text: 'Destroy target artifact.',
        flavor_text: '\"Skepticism is healthy. Violence is effective.\" -Jonas Agamar',
        cost: '{R}',
        colors: ['Red'],
        image: 'https://images.unsplash.com/photo-1473158912295-779ef17fc94b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=157bbb52b14b043f71fda5be6351525b'
      }, {
        number: 13,
        name: 'Entropy Accelerator',
        type: 'Artifact',
        card_text: 'Tap: each creature gets a -1/-1 counter.',
        flavor_text: 'Time is a rule for many; for some, it\'s a plaything.',
        cost: '6',
        colors: [],
        image: 'https://hd.unsplash.com/photo-1461724947009-3c626ff3d2bc'
      }, {
        number: 14,
        name: 'Shadow Rebel',
        type: 'Creature',
        card_text: 'Haste \n When this enters the battlefield, deal 1 damage to target creature or player.',
        flavor_text: '',
        power: 1,
        toughness: 1,
        cost: '{R}',
        colors: ['Red'],
        image: 'https://hd.unsplash.com/photo-1462715412043-8d09205be605'
      }, {
        number: 15,
        name: 'Joe',
        type: 'Creature',
        card_text: 'When this enters the battlefield, you may tap target creature.',
        flavor_text: 'You name the trick; he\'s seen it.',
        power: 0,
        toughness: 3,
        cost: '{U}',
        colors: ['Blue'],
        image: 'https://images.unsplash.com/photo-1474995033736-8d46413ad93d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a1f387730389ad7f213197c37f469e96'
      }, {
        number: 16,
        name: 'Disappear',
        type: 'Instant',
        card_text: 'Exile target creature. That creature\'s controller draws cards equal to the creature\'s power / 2 rounded down.',
        flavor_text: 'Who?',
        cost: '{W}',
        colors: ['White'],
        image: 'https://hd.unsplash.com/photo-1445262801997-d50c1f12cb4d'
      }, {
        number: 17,
        name: 'Traveling Troubador',
        type: 'Creature',
        card_text: 'When this enters the battlefield, target creature with power 2 or greater cannot block this turn.',
        flavor_text: 'Dulcet tones.',
        cost: '{W}',
        power: 1,
        toughness: 2,
        colors: ['White'],
        image: 'https://hd.unsplash.com/photo-1471275287446-f463543ee84f'
      }, {
        number: 18,
        name: 'Digital Nomads',
        type: 'Creature',
        card_text: 'Vigilance',
        flavor_text: 'Available anywhere, anytime.',
        cost: '1{G}',
        power: 3,
        toughness: 2,
        colors: ['Green'],
        image: 'https://hd.unsplash.com/photo-1467922688251-c3011eac929a'
      }, {
        number: 19,
        name: 'Logistics Expert',
        type: 'Creature',
        card_text: 'Tap: 1 infrastructure.',
        flavor_text: 'That can be arranged.',
        cost: '{G}',
        power: 1,
        toughness: 1,
        colors: ['Green'],
        image: 'https://hd.unsplash.com/photo-1461632830798-3adb3034e4c8'
      }, {
        number: 20,
        name: 'Rebuild',
        type: 'Instant',
        card_text: 'Return target creature from your graveyard to your hand.',
        flavor_text: '\"Because we can, we must.\" -Deilak, technologist',
        cost: '{B}',
        colors: ['Black'],
        image: 'http://www.artisopensource.net/network/artisopensource/wp-content/uploads/2016/09/IMG_4667.jpg'
      }, {
        number: 21,
        name: 'Rogue Technologist',
        type: 'Creature',
        card_text: 'When this dies, put a 1/1 colorless Android token onto the battlefield.',
        flavor_text: 'Still mostly human. I think.',
        cost: '{B}',
        power: 1,
        toughness: 1,
        colors: ['Black'],
        image: 'https://hd.unsplash.com/photo-1439459615612-2f585873ca7a'
      }, {
        number: 22,
        name: 'Signal Loss',
        type: 'Instant',
        card_text: 'Blink up to two target creatures. \n Draw a card.',
        flavor_text: 'Can you hear me? Are you still there?',
        cost: '2{U}',
        colors: ['Blue'],
        image: 'https://hd.unsplash.com/photo-1471229620834-9118fa53ed1f'
      }, {
        number: 23,
        name: 'Communications Blackout',
        type: 'Instant',
        card_text: 'Counter target noncreature spell or destroy target enchantment.',
        flavor_text: 'So much depends on such fragile connections.',
        cost: '1{U}{U}',
        colors: ['Blue'],
        image: 'https://hd.unsplash.com/photo-1414476367528-f23f72691de0'
      }, {
        number: 24,
        name: 'Biofoundry',
        type: 'Artifact',
        card_text: '2, Tap: Put a 1/1 colorless Android token onto the battlefield.',
        flavor_text: 'Perfect. Identical. Beautiful.',
        cost: '3',
        colors: [],
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Airacobra_P39_Assembly_LOC_02902u.jpg'
      }, {
        number: 25,
        name: 'Recurring Insight',
        type: 'Sorcery',
        card_text: 'You get an emblem with \'Pay 4 insight: draw a card.\' <br /> Recycle 2 (You may pay 2 and discard this. If you do, draw a card.)',
        flavor_text: '',
        cost: '{U}{U}',
        colors: ['Blue'],
        image: 'https://static.pexels.com/photos/8180/time-watch-theme-machines-gears.jpg'
      }, {
        number: 26,
        name: 'Recurring Anger',
        type: 'Sorcery',
        card_text: 'You get an emblem with \'Pay 4 insight: destroy target artifact or deal 2 damage to target creature.\' <br /> Recycle 2 (You may pay 2 and discard this. If you do, draw a card.)',
        flavor_text: '',
        cost: '{R}{R}',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/USAF_EOD_explosion.jpg'
      }, {
        number: 27,
        name: 'Recurring Reanimation',
        type: 'Sorcery',
        card_text: 'You get an emblem with \'Pay 4 insight: put target creature from your graveyard into your hand.\' <br /> Recycle 2 (You may pay 2 and discard this. If you do, draw a card.)',
        flavor_text: '',
        cost: '{B}{B}',
        colors: ['Black'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Plaque_resurrection_dead_VandA_M.104-1945.jpg'
      }, {
        number: 28,
        name: 'Recurring Artistry',
        type: 'Sorcery',
        card_text: 'You get an emblem with \'Pay 4 insight: gain 4 life.\' <br /> Recycle 2 (You may pay 2 and discard this. If you do, draw a card.)',
        flavor_text: '',
        cost: '{W}{W}',
        colors: ['White'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Newton-WilliamBlake.jpg'
      }, {
        number: 29,
        name: 'Recurring Improvements',
        type: 'Sorcery',
        card_text: 'You get an emblem with \'Pay 4 insight: Add {G}{G} to your mana pool.\' <br /> Recycle 2 (You may pay 2 and discard this. If you do, draw a card.)',
        flavor_text: '',
        cost: '{G}{G}',
        colors: ['Green'],
        image: 'https://hd.unsplash.com/photo-1465447142348-e9952c393450'
      }, {
        number: 30,
        name: 'Cyznos Executive',
        type: 'Creature',
        card_text: 'When this enters the battlefield, gain 3 insight, then pay X insight. Put X -1/-1 counters on any number of target creatures.',
        flavor_text: 'Keep the meek meek. Make the strong meek.',
        cost: '3{B}{B}',
        power: 4,
        toughness: 5,
        colors: ['Black'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg'
      }, {
        number: 31,
        name: 'Molintech Executive',
        type: 'Creature',
        card_text: 'When this enters the battlefield, gain 3 insight, then pay X insight. Scry X, then draw two cards.',
        flavor_text: 'We have all the answers. It\'s simply a matter of finding them.',
        cost: '3{U}{U}',
        power: 3,
        toughness: 6,
        colors: ['Blue'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Battle_of_Jena.jpg'
      }, {
        number: 32,
        name: 'Marlowe Executive',
        type: 'Creature',
        card_text: 'Vigilance, lifelink <br /> When this enters the battlefield, gain 3 insight, then pay X insight. Gain control of any number of target creatures of combined power X or less.',
        flavor_text: '',
        cost: '3{W}{W}',
        power: 4,
        toughness: 4,
        colors: ['White'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Cincinato_abandona_el_arado_para_dictar_leyes_a_Roma,_c.1806_de_Juan_Antonio_Ribera.jpg'
      }, {
        number: 33,
        name: 'Agamar Executive',
        type: 'Creature',
        card_text: 'Haste \n When this enters the battlefield, gain 3 insight, then pay X insight. Deal X damage to target player.',
        flavor_text: '',
        cost: '3{R}{R}',
        power: 5,
        toughness: 4,
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Karl_Theodor_von_Piloty_Murder_of_Caesar_1865.jpg'
      }, {
        number: 34,
        name: 'Grental Executive',
        type: 'Creature',
        card_text: 'Trample <br /> When this enters the battlefield, gain 3 insight, then pay X insight. Put X +1/+1 counters on any number of target creatures.',
        flavor_text: '',
        cost: '3{G}{G}',
        power: 5,
        toughness: 5,
        colors: ['Green'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Giovanni_Battista_Tiepolo_-_Scipio_Africanus_Freeing_Massiva_-_Walters_37657.jpg'
      }, {
        number: 35,
        name: 'Molintech Drone',
        type: 'Creature',
        card_text: '2, Tap: Scry 1.',
        flavor_text: '',
        cost: '1{U}',
        power: 2,
        toughness: 2,
        colors: ['Blue'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Adolf_Menzel_-_%22Armor_Chamber_Fantasy%22,_1866_-_Google_Art_Project.jpg'
      }, {
        number: 36,
        name: 'Cyznos Drone',
        type: 'Creature',
        card_text: '2, Tap: Deal 1 damage to target creature.',
        flavor_text: '',
        cost: '1{B}',
        power: 1,
        toughness: 2,
        colors: ['Black'],
        image: 'http://pre10.deviantart.net/ebb3/th/pre/i/2014/256/9/2/robot_head_by_leomelodica-d7z0il6.jpg'
      }, {
        number: 37,
        name: 'Marlowe Drone',
        type: 'Creature',
        card_text: '2, Tap: Target creature gains +2/+2 until end of turn.',
        flavor_text: '',
        cost: '1{W}',
        power: 1,
        toughness: 2,
        colors: ['White'],
        image: 'https://c1.staticflickr.com/9/8367/8497395824_085e58bce3_b.jpg'
      }, {
        number: 38,
        name: 'Grental Drone',
        type: 'Creature',
        card_text: '2, Tap: Gain 2 insight.',
        flavor_text: '',
        cost: '1{G}',
        power: 2,
        toughness: 2,
        colors: ['Green'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/German_-_Maximilian_Armor_-_Walters_51584_-_Detail_B.jpg'
      }, {
        number: 39,
        name: 'Agamar Drone',
        type: 'Creature',
        card_text: 'Haste \n 2, Tap: Deal 1 damage to one or two target creatures and/or players.',
        flavor_text: '',
        cost: '1{R}',
        power: 2,
        toughness: 1,
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Gusoku_Met_04.4.9.jpg'
      }, {
        number: 40,
        name: 'Incensed Mob',
        type: 'Creature',
        card_text: 'Trample \n When this enters the battlefield, you may destroy target artifact or enchantment.',
        flavor_text: '',
        cost: '2{R}',
        power: 3,
        toughness: 3,
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Baltimore_Riot_1861.jpg'
      }, {
        number: 41,
        name: 'Altitude Strike',
        type: 'Instant',
        card_text: 'Deal 2 damage to target creature or player.',
        flavor_text: 'Your children will grow up to fear blue skies.',
        cost: '{R}',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/PAF_Mirage_III_ROSE_hits_target_with_two_500_lb_bombs_at_Falcon_Air_Meet_2010.jpg'
      }, {
        number: 42,
        name: 'Loot the Datacenters',
        type: 'Instant',
        card_text: 'Draw two cards, then discard two cards. Gain {i}{i}. \n Flashback {R}{R}{i}',
        flavor_text: '',
        cost: '{R}{R}',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Destroyed_Hard_Drive.jpg'
      }, {
        number: 43,
        name: 'End Run',
        type: 'Sorcery',
        card_text: 'Alternate cost: Sacrifice or discard two total Munitions Plants. \n Destroy target land. Its controller takes 4 damage.',
        flavor_text: '',
        cost: '4{R}{R}',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Cholon_after_Tet_Offensive_operations_1968.jpg'
      }, {
        number: 44,
        name: 'Heavy Combat Drone',
        type: 'Creature',
        card_text: 'Flying \n {R}: This gets +1/+0 until end of turn.',
        flavor_text: '',
        power: 4,
        toughness: 4,
        cost: '2{R}{R}',
        colors: ['Red'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NEUROn_-_Dassault_Aviation_-_D%C3%A9monstrateur_de_drone_de_combat.jpeg'
      }, {
        number: 45,
        name: 'Fragments of Lost Truth',
        type: 'Legendary Artifact',
        card_text: 'Whenever a spell or creature you control deals damage to an opponent, gain {i}.',
        flavor_text: '',
        cost: '3',
        colors: [],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ruined_temple_of_Garni,_early_20th_century.jpg'
      }, {
        number: 46,
        name: 'Cultural Singularity',
        type: 'Enchantment',
        card_text: 'All creatures are 1/1 green and white Artist creatures.',
        flavor_text: 'You are who we say you are.',
        cost: '2{G}{W}',
        colors: ['Green', 'White'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/BH_LMC.png'
      }

    ];

export function State (current) {
  this.turn = {
    activePlayer: 0,
    landPlayed: false
  };
  this.phase = phases[0];
  this.stack = [];
  this.nextPhase = () => {
    let curr = this.phase;
    this.phase = phases[(phases.indexOf(curr) + 1 < 12 ? phases.indexOf(curr) + 1 : 0)];
  }
  this.nextTurn = () => {
      this.turn.activePlayer === 0 ? this.turn.activePlayer = 1 : this.turn.activePlayer = 0;
      this.turn.landPlayed = false;
  }
  if (current) {
    this.turn = current.turn;
    this.phase = current.phase;
  }
    this.playCard = card => {
        if (this.phase === 'main1' || this.phase === 'main2') {
            if (card.type === 'Land' && this.turn.landPlayed === false) {
                this.turn.landPlayed = true;
                console.log(this.turn.landPlayed);
            } else {
                //if (this.payManaCost(card)) {
                    this.stack.push(card);
                console.log(this.stack);
                //}
                
            }
        } else {
            //logic for playing instants
        }
        
    }
}

export function Game () {
  this.currentState = new State();
  this.currentState.turn.activePlayer = 0;
  this.nextState = function(state) {
    if (state) {
      this.currentState = state;
    }
    this.currentState.nextPhase();
  }
}


export function Player () {
  this.lifeTotal = 20;
  this.hand = [];
  /*this.play = card => {
    let playedCard = this.hand.splice(card, 1);
    currentGame.currentState.stack.push(playedCard);
  }*/
}

export function Deck (name, deck) {
  this.name = name;
  this.deck = deck;
  this.shuffle = () => {
    let i = 0,
      j = 0,
      temp;
    for (i = this.deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    return this.deck;
  }
   this.draw = (hand, number) => {
     for (let i = 0; i < number; i++) {
        let topCard = this.deck.shift();
        hand.push(topCard);
     }
    };
}

export function Card () {
  this.cmc = 0;
  this.colors = [];
  this.type = '';
  this.subtype = '';
    this.location = '';
  this.tapped = false;
  this.hasSummoningSickness = false;
  this.doesNotUntap = false;
}

//blue black androids 
export const ubAndroids = new Deck('UB Androids', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 10, 10, 15, 15, 15, 15, 20, 20, 20, 20, 8, 8, 9, 9, 9, 21, 21, 21, 21, 24, 24, 24, 25, 25, 25, 25, 30, 30, 31, 31, 35, 35, 35, 36, 36, 36]);

//green white 
export const gwControl = new Deck('GW Control', [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 28, 28, 28, 28, 29, 29, 29, 29, 32, 32, 34, 34, 37, 37, 38, 38]);

//rdw
export const redDeckWins = new Deck('Red Deck Wins', [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 14, 14, 14, 14, 26, 26, 26, 26, 33, 33, 33, 39, 39, 39, 39, 40, 40, 40, 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45]);
