import { makeCardTemplate } from '../src/list-component.js';
const test = QUnit.test;

QUnit.module('Create list');

test('create card template', assert => {
    // arrange
    const expected = /* eslint-disable */ /*html*/`
        <li>
            <h2>Goblin Spymaster</h2>
            <p>Mana Cost: {2}{R}</p> 
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420636type=card" alt="Image of Goblin Spymaster">
            <p class="card-text">Card text: First strike\nAt the beginning of each opponent's end step, that player creates a 1/1 red Goblin creature token with \"Creatures you control attack each combat if able.\""</p>
            <p class="pt">P/T 2/1</p>
        </li>
    `;
    const card = { 'name': 'Goblin Spymaster', 'names': [], 'manaCost': '{2}{R}', 'cmc': 3.0, 'colors': ['Red'], 'colorIdentity': ['R'], 'type': 'Creature — Goblin Rogue', 'supertypes': [], 'types': ['Creature'], 'subtypes': ['Goblin', 'Rogue'], 'rarity': 'Rare', 'set': 'C16', 'setName': 'Commander 2016', 'text': 'First strike\nAt the beginning of each opponent\'s end step, that player creates a 1/1 red Goblin creature token with "Creatures you control attack each combat if able."', 'flavor': '"Infiltrate and infuriate!" —Goblin Espionage League motto', 'artist': 'Wayne Reynolds', 'number': '19', 'power': '2', 'toughness': '1', 'layout': 'normal', 'multiverseid': 420636, 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420636type=card', 'starter': true, 'rulings': [{ 'date': '2016-11-08', 'text': 'If, during your declare attackers step, a creature you control is tapped or is affected by a spell or ability that says it can’t attack, then it doesn’t attack, even if you control one of Goblin Spymaster’s tokens. If there’s a cost associated with having a creature attack, you aren’t forced to pay that cost, so it doesn’t have to attack in that case either.' }], 'foreignNames': [{ 'name': 'Goblin-Meisterspion', 'text': 'Erstschlag\nZu Beginn des Endsegments jedes Gegners erzeugt dieser Spieler einen 1/1 roten Goblin-Kreaturenspielstein mit „Kreaturen, die du kontrollierst, greifen in jedem Kampf an, falls möglich".', 'flavor': '„Infiltriert sie und macht sie richtig wütend!" —Motto der Liga der Goblin-Spione', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=421338&type=card', 'language': 'German', 'multiverseid': 421338 }, { 'name': 'Maestro espía trasgo', 'text': 'Daña primero.\nAl comienzo del paso final de cada oponente, ese jugador crea una ficha de criatura Trasgo roja 1/1 con "Las criaturas que controlas atacan cada combate si pueden".', 'flavor': '"¡Infíltrate y enfurece!" —Lema de la liga de espionaje trasgo', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423093&type=card', 'language': 'Spanish', 'multiverseid': 423093 }, { 'name': 'Maître espion gobelin', 'text': 'Initiative\nAu début de l\'étape de fin de chaque adversaire, ce joueur crée un jeton de créature 1/1 rouge Gobelin avec « Les créatures que vous contrôlez attaquent à chaque combat si possible. »', 'flavor': '« Infiltrer et exaspérer ! » —Devise de la Ligue d\'espionnage gobeline', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=421689&type=card', 'language': 'French', 'multiverseid': 421689 }, { 'name': 'Capospia Goblin', 'text': 'Attacco improvviso\nAll\'inizio della sottofase finale di ogni avversario, quel giocatore crea una pedina creatura Goblin 1/1 rossa con "Le creature che controlli attaccano in ogni combattimento, se possono farlo".', 'flavor': '"Infiltratevi e infuriate!" —Motto della Lega delle Spie Goblin', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422040&type=card', 'language': 'Italian', 'multiverseid': 422040 }, { 'name': 'ゴブリンの密偵長', 'text': '先制攻撃\n各対戦相手の終了ステップの開始時に、そのプレイヤーは「各戦闘で、あなたがコントロールするクリーチャーは可能なら攻撃する。」を持つ赤の１/１のゴブリン・クリーチャー・トークンを１体生成する。', 'flavor': '「潜入し扇動せよ！」 ――ゴブリン間諜連盟の標語', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422391&type=card', 'language': 'Japanese', 'multiverseid': 422391 }, { 'name': 'Espião-mestre Goblin', 'text': 'Iniciativa\nNo início da etapa final de cada oponente, aquele jogador cria uma ficha de criatura vermelha 1/1 do tipo Goblin com "As criaturas que você controla atacam a cada combate se estiverem aptas."', 'flavor': '"Infiltrar e enfurecer!" — Lema da Liga de Espionagem Goblin', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422742&type=card', 'language': 'Portuguese (Brazil)', 'multiverseid': 422742 }, { 'name': '鬼怪密探长', 'text': '先攻\n在每位对手的结束步骤开始时，该牌手派出一个1/1红色鬼怪衍生生物，且具有「由你操控的生物每次战斗若能攻击，则必须攻击。」', 'flavor': '「摸进去，骂出来！」 ～鬼怪谍报团座右铭', 'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420987&type=card', 'language': 'Chinese Simplified', 'multiverseid': 420987 }], 'printings': ['C16', 'PZ2'], 'originalText': 'First strike\nAt the beginning of each opponent\'s end step, that player creates a 1/1 red Goblin creature token with "Creatures you control attack each combat if able."', 'originalType': 'Creature — Goblin Rogue', 'legalities': [{ 'format': '1v1', 'legality': 'Legal' }, { 'format': 'Commander', 'legality': 'Legal' }, { 'format': 'Duel', 'legality': 'Legal' }, { 'format': 'Legacy', 'legality': 'Legal' }, { 'format': 'Vintage', 'legality': 'Legal' }], 'id': '236fc9f4-9ef2-5e3b-9fd8-d05d7a24056c' };
    // act
    const result = makeCardTemplate(card);
    // assert
    assert.htmlEqual(result, expected);

});

test('If there is no image URL, use placeholder', assert => {
    // arrange
    const card = {
        name: 'Goblin Spymaster',
        manaCost: '{2}{R}',
        text: `First strike\nAt the beginning of each opponent's end step, that player creates a 1/1 red Goblin creature token with \"Creatures you control attack each combat if able.\"`,
        power: 2,
        toughness: 1
    };
    const expected = /*html*/`
        <li>
            <h2>Goblin Spymaster</h2>
            <p>Mana Cost: {2}{R}</p> 
            <img src="./assets/card-back.jpg" alt="Image of Goblin Spymaster">
            <p class="card-text">Card text: First strike\nAt the beginning of each opponent's end step, that player creates a 1/1 red Goblin creature token with \"Creatures you control attack each combat if able.\""</p>
            <p class="pt">P/T 2/1</p>
        </li>
    `;
    // act
    const result = makeCardTemplate(card);
    // assert
    assert.htmlEqual(result, expected);
});

test('if no p/t, give pt a hidden class', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Goblin Spymaster</h2>
            <p>Mana Cost: {2}{R}</p>
            <img src="./assets/card-back.jpg" alt="Image of Goblin Spymaster">
            <p class="card-text">Card text: "</p>
        </li>
    `;
    const card = {
        name: 'Goblin Spymaster',
        manaCost: '{2}{R}',
        text: ''
    };
    // act
    const result = makeCardTemplate(card);
    // assert
    assert.htmlEqual(result, expected);
});