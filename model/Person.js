
const spacing = num => new Array(num).join(' ')
class Person {
    relatives = []

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

    addRelative(name, yearBorn) {
        this.relatives.push(new Relative(name, yearBorn))
    }

    addRelativeNumber(mobile, homenumber) {
        this.relatives[this.relatives.length - 1].setNumber(mobile, homenumber)
    }

    getXML(type = 'person', level = 2) {
        let str = `${spacing(level)}<${type}>\n`
        for (const [key, value] of Object.entries(this)) {
            if (key === 'family' || key === 'address') {
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

class Relative extends Person {
    constructor(name, yearBorn) {
        super()
        this.name = name
        this.yearBorn = yearBorn
    }

    getXMLPresentation() {
        return `
  <family>
    <firstname>${this.name}</firstname>
    <born>${this.yearBorn}</born>
  </family>`.substring(1)
    }
}

export {Person}