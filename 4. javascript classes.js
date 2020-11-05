
class House {
    constructor( name_of_the_owner ) {
        this.name_of_the_owner = name_of_the_owner
        this.roof = 'blue roof'
        this.windows = '2 windows'
        this.door = 'expensive door'
    }

    openWindows() {
        console.log( ' the windows from ' + this.name_of_the_owner + ' house are now opened ')
    }
    closeWindows() {
        console.log( ' the windows are now closed ')
    }
}


const tudors_house = new House( 'Tudor' )
const cristinas_house = new House( 'Cristina' )
const dragos_house = new House( 'Dragos' )
const john_house = new House( 'John' )

const list_of_houses = [
    tudors_house,
    dragos_house,
    john_house
]

for (const house of list_of_houses) {
    house.openWindows()
}








