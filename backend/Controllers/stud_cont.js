var db_handler = require('./db_handler');

exports.stud_profile =  async (req,res) => {
    // console.log(req.session)
    const qstrng = "select * from student where id = \'" + 123 + "\';";
    console.log(qstrng);
    const result = await db_handler.fetchquery(qstrng);
    console.log(result.rows[0]);
    res.send(JSON.stringify(result.rows[0]));
    res.end();
}

exports.course_dets = async (req,res) => {
    //first fetch for a session existence
    const qstrng = "select t.year as year,t.course_id as cid,c.title as cname,c.credits as credits from takes as t,course as c where t.course_id = c.course_id and id = \'" + 123 + "\' order by year desc;";
    console.log(qstrng);
    const result = await db_handler.fetchquery(qstrng);
    console.log(result.rows);
    res.send(JSON.stringify(result.rows));
    res.end();
}