
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

    setName(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    setNumber(mobile, homenumber) {
        this.mobile = mobile
        this.homenumber = homenumber
    }

    setAddress(street, city, postalcode) {
        this.address.push(new Address(street, city, postalcode))
    }

    addRelative(name, yearBorn) {
        this.family.push(new Family(name, yearBorn))
    }

    addRelativeNumber(mobile, homenumber) {
        this.family[this.family.length - 1].setNumber(mobile, homenumber)
    }

    addRelativeAddress(street, city, postalcode) {
        this.family[this.family.length - 1].setAddress(street, city, postalcode)
    }

    convertToString(key, level) {
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
                str += this.convertToString(key, level + 2)
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