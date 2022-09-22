

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

    getXMLPresentation() {
        if (!this.firstName || !this.lastname) {
            return
        }
        return `
  <person>
    <firstname>${this.firstName}</firstname>
    <lastname>${this.lastname}</lastname>
  ${this.relatives.map(relative => relative.getXMLPresentation()).join('\n')}
  </person>`.substring(1)
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