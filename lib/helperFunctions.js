
import {Person} from '../model/Person.js'

const delimiter = '|'

export const groupInputToSeperatePersons = arr => {
	const person = 'P'
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

export const convertToClass = lines => {
	if (lines.every(line => line === '')) {
		// Empty early return
		return
	}

	const person = new Person()
	let isFamily = false

	lines.forEach(line => {
		const arr = line.split(delimiter)

		const [type] = arr
		switch (type) {
			case 'P':
				const [, firstName, lastName] = arr
				person.addName(firstName, lastName)
				break
			case 'T':
				const [, mobile, phone] = arr
				if (isFamily) {
					person.addRelativeNumber(mobile, phone)
				} else {
					person.addNumber(mobile, phone)
				}
				break
			case 'A':
				const [, street, city, postalcode] = arr
				if (isFamily) {
					person.addRelativeAddress(street, city, postalcode)
				} else {
					person.addAddress(street, city, postalcode)
				}
				break
			case 'F':
				const [, name, yearBorn] = arr
				isFamily = true

				person.addRelative(name, yearBorn)
				break
			default:
		}
	})
	return person
}
