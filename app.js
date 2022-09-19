'use strict'

console.log('CSV To XML converter')

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
P|Victoria|Bernadotte
T|070-0101010|0459-123456
A|Haga Slott|Stockholm|101
F|Estelle|2012
A|Solliden|Öland|10002
F|Oscar|2016
T|0702-020202|02-202020
P|Joe|Biden
A|White House|Washington, D.C
P|Emil|Larsson
A|Adelgatan|Kalmar
`

const delimiter = '|'
const arr = str.split('\n')
const person = 'P'

const groupInputToSeperatePersons = arr => {
	const result = []
	let Person = []

	arr.forEach(line => {
		if (line.split(delimiter)[0] === person) {
			result.push(Person)
			Person = []
		}

		Person.push(line)
	})

	result.push(Person)

	return result
}

class Person {
	setName(firstname, lastname) {
		this.firstName = firstname
		this.lastname = lastname
	}

	setNumber(mobile, homenumber) {
		this.mobile = mobile
		this.homenumber = homenumber
	}

	setAddress(address, city, postalcode) {
		this.address = address
		this.city = city
		this.postalcode = postalcode
	}

	getXMLPresentation() {
		if (!this.firstName || !this.lastname) {
			return
		}
		return `
	<person>
		<firstname>${this.firstName}</firstname>
		<lastname>${this.lastname}</lastname>
	</person>
`.substring(1)
	}
}

const convertToClass = lines => {
	const person = new Person()

	lines.forEach(line => {
		if (line.length < 0) {
			return
		}

		const arr = line.split(delimiter)

		const [type] = arr
		console.log(line)
		console.log(type)
		switch (type) {
			case 'P':
				const [, firstName, lastName] = arr
				person.setName(firstName, lastName)
				break
			case 'T':
				const [, mobile, homenumber] = arr
				person.setNumber(mobile, homenumber)
			case 'A':
				const [, address, city, postalcode] = arr
				person.setAddress(address, city, postalcode)
			default:
		}
	})
	return person
}

const res = groupInputToSeperatePersons(arr)
	.map(person => convertToClass(person))
	.map(person => person.getXMLPresentation())


console.log('<people>')
console.log(res.join('\n'))
console.log('</people>')




