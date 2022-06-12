
const fs = require('fs')
const path  = require('path')


// Data modeling
const students = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/students.json')).toString())

// get letest id
const letestId = () => {

    if(students.length > 0){
        return students[students.length - 1].id + 1
    }else{
        return 1;
    }
}

// Fatch All Students
const fatchStudnets =  (req, res) => {

    if(students.length > 0){
        res.status(200).json(students)
    }else{
        res.status(404).json({
            messge : "not found"
        })
    }

}

// Fatch SIngel Students
const fatchsungelStudnets =  (req, res) => {

   let id = req.params.id
    if (students.some(data => data.id == id)) {
        res.status(200).json(students.find(data => data.id == id))
    } else {
        res.status(404).json({
            messge : "not found"
        })
    }
   


}

// Post  Students data
const postStudents =  (req, res) => {
    if (req.body.name != '' || req.body.age != '' || req.body.skill != '') {
        students.push({
            id : letestId(),
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill
        })
        fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(students)) 
    
        
        res.json({
            messge : 'done'
        })
    } else {
        
        res.status(404).json({
            messge : 'not found'
        })
    }
    


}

// Ed ite  Students data
const editStudents =  (req, res) => {
    
    let id = req.params.id

    if (!students.some(data => data.id == id)) {
        res.status(404).json({
            message : 'Not Found'
        })
    } else {
        students[students.findIndex(data => data.id == id)] = {
            id : id,
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill
    }

    fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(students))

    res.status(200).json({
        message : 'successfull'
    })

    }

    
   

}
// Delate  Students data
const deleteStudents =  (req, res) => {

    let id = req.params.id
    console.log(id);

    if (students.some(data => data.id == id)) {
        
       let data =  students.filter(data => data.id != id)

       fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(data))
       res.status(202).json({
           message : 'Data Delates'
       })

    } else {
        res.status(204).json({
            messge : 'not found'
        })
    }

}

module.exports = {
    fatchStudnets,
    fatchsungelStudnets,
    postStudents,
    editStudents,
    deleteStudents
    
}
