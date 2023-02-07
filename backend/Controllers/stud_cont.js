var db_handler = require('./db_handler');

async function get_prev_courses(student_id,year){
    const qstrng = "select t1.course_id,t1.year,title,dept_name,credits,grade \
                    from course, (select course_id,year,grade \
                                  from student,takes \
                                  where student.id = takes.id and student.id = '" + student_id +"') as t1 \
                    where t1.course_id = course.course_id \
                    order by year desc, title desc;"
    // console.log(qstrng);
    db_handler.fetchquery(qstrng).then(result => {
        for (let i = 0; i < result.rowCount; i++){
            console.log(result.rows[i].grade);
        }
    })
}
// get_prev_courses(123,2003);

exports.stud_profile =  async (req,res) => {
    const qstrng = "select * from student where id = \'" + req.body.student_id + "\';";
    const result = await db_handler.fetchquery(qstrng);
    console.log(result.rows[0]);
    res.send(JSON.stringify(result.rows));
    res.end();
}