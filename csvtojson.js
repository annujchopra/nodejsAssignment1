const converter = require('csvtojson')
const csvFile = './customer-data.csv'
const fs = require('fs')


converter().fromFile(csvFile).then((jsonObj) => {

    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), "utf8", error => {
        if(error)
            return "error"
    })

    //console.log(jsonObj);
})

