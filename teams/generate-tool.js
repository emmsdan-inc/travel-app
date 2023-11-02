const studentList = require('./students.csv.js');
const fs = require('fs')

const csvConverter = (data) => {
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');
    return rows.map((row) => {
        const newObj = {};
        headers.forEach((header, ind) => {
            newObj[header] = row.split(',')[ind].trim()
        })
        return newObj;
    })
}
const shuffleList = (arrayStudent) => {
    for (let i = arrayStudent.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = arrayStudent[i]
        arrayStudent[i] = arrayStudent[j];
        arrayStudent[j] = temp
    }
}

const randomSelector = (size=2, students) => {
    let teams = []
    let len = students.length
    len = len % 2 !== 0 ?students.length - 1: student.length
    for (let idx = 0; idx < len; idx += size) {
        const team = students.slice(idx, idx+(size))
        teams.push(team);
    }
    return teams;
}
const student =  csvConverter(studentList.modules)
shuffleList(student)
shuffleList(student)

// console.log(student);
const teams = randomSelector(2, student)
const toTeamsJson = `
const allTeams = ${JSON.stringify(teams, null, 2)}
`;
fs.writeFileSync('./teams/teams.js', toTeamsJson, 'utf-8')

console.log('Teams have been generated successfully')