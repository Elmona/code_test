
const spacing = num => new Array(num).join(' ')
class Person {
    name = ''
    born = ''
    firstname = ''
    lastname = ''
    address = []
    city = ''
    mobile = ''
    homenumber = ''
    family = []

    addName(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    addNumber(mobile, homenumber) {
        this.mobile = mobile
        this.homenumber = homenumber
    }

    addAddress(street, city, postalcode) {
        this.address.push(new Address(street, city, postalcode))
    }

    addRelative(name, yearBorn) {
        this.family.push(new Family(name, yearBorn))
    }

    addRelativeNumber(mobile, homenumber) {
        this.family[this.family.length - 1].addNumber(mobile, homenumber)
    }

    addRelativeAddress(street, city, postalcode) {
        this.family[this.family.length - 1].addAddress(street, city, postalcode)
    }

    _convertToString(key, level) {
        if (!this[key]) {
            return ''
        }
        return `${spacing(level)}<${key}>${this[key]}</${key}>\n`
    }

    getXML(type = 'person', level = 2) {
        let str = `${spacing(level)}<${type}>\n`
        for (const [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                value.forEach(val => {
                    str += val.getXML(key, level + 2)
                })
            } else {
                str += this._convertToString(key, level + 2)
            }
        }
        str += `${spacing(level)}</${type}>\n`
        return str
    }
}
class Address extends Person {
    street = ''
    city = ''
    postalcode = ''

    constructor(street, city, postalcode) {
        super()
        this.street = street
        this.city = city
        this.postalcode = postalcode
    }
}
class Family extends Person {
    name = ''
    born = ''

    constructor(name, born) {
        super()
        this.name = name
        this.born = born
    }
}

export {Person}