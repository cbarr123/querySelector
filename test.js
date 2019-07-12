const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength)
console.log(empireStateBuilding.stories, empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)

const address = empireStateBuilding["address"]
const owner = empireStateBuilding["owner"]
const constructionDate = empireStateBuilding["constructionDate"]
const architect = empireStateBuilding["architect"]

console.log(address)
console.log(owner)
console.log(constructionDate)
console.log(architect)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime)

const ptInstructors = nashvilleSoftwareSchool.instructors.partTime
for (i = 0; i < ptInstructors.length; i += 1 ) {
    console.log(ptInstructors[i])
}
const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime
for (i = 0; i < ftInstructors.length; i += 1){
    console.log(ftInstructors[i])
}
console.log(`${nashvilleSoftwareSchool.instructors.partTime[1]} is a parttime instructor`)
console.log(`${nashvilleSoftwareSchool.instructors.fullTime[4]} is a fulltime instructor`)



// ----------------------------------------

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)