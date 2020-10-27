const personInfo = ({ name, age:personAge, location:{country:origin, city:homeCity }, friendQty=0, recordCreatedAt= new Date().getFullYear()} = person)=>{
    return {
        name,
        personAge,
        origin,
        homeCity,
        friendQty,
        recordCreatedAt
    };
}

const person = {
    name: "Alice",
    age:19,
    location:{
        country:"England",
        city:"London"
    }
}

console.log(personInfo(person));