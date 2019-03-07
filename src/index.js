import characterData from '../data/data.js';
import loadCharacterContainer from './make-character-template.js';
import { writeSearchToQuery } from './hash-query.js';

loadCharacterContainer(characterData);

writeSearchToQuery(existingQuery, species);