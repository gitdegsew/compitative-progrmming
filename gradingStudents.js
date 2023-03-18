function gradingStudents(grades) {
    let newGrades=grades.map((grade)=>{
        if(grade>=38){
            if(grade%5>2){
                grade=Math.ceil(grade/5)*5
            }
        }
        return grade
    })
    return newGrades

}