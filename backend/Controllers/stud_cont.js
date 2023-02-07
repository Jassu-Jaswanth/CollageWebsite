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
    const qstrng = "select * from student where id = \'" + 123 + "\';";
    await db_handler.fetchquery(qstrng)
    .then(result => {
        console.log(result.rows[0]);

        res.end(JSON.stringify(result.rows));
        // res.redirect("http://localhost:3000/home");
    })
    // get_prev_courses(student_i)
}