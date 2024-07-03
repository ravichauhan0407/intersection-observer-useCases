const { faker } = require('@faker-js/faker');

const fs=require('fs')


function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


const users=[];

for(let i=0;i<100;i++){
  users.push(createRandomUser())   
}

fs.writeFile('./dummy.js',JSON.stringify(users),(err)=>{
    console.log(err)
})