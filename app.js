'use strict'

import {
  groupInputToSeperatePersons,
  convertToClass
} from './lib/helperFunctions.js'

/*
Filformat input:
P|förnamn|efternamn
T|mobilnummer|fastnätsnummer
A|gata|stad|postnummer
F|namn|födelseår
P kan följas av T, A och F
F kan följas av T och A

Exempel:
P|Victoria|Bernadotte
T|070-0101010|0459-123456
A|Haga Slott|Stockholm|101
F|Estelle|2012
A|Solliden|Öland|10002
F|Oscar|2016
T|0702-020202|02-202020
P|Joe|Biden
A|White House|Washington, D.C
*/

const str = `
P|Carl Gustaf|Bernadotte
T|0768-101801|08-101801
A|Drottningholms slott|Stockholm|10001
F|Victoria|1977
A|Haga Slott|Stockholm|10002
F|Carl Philip|1979
T|0768-101802|08-101802
P|Barack|Obama
A|1600 Pennsylvania Avenue|Washington, D.C
`

const result = groupInputToSeperatePersons(str.split('\n'))
  .map(person => convertToClass(person))
  .filter(person => typeof person === 'object')
  .map(person => person.getXML())


console.log(`<people>\n${result.join('')}</people>`)




