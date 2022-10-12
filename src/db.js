const sql = require("msnodesqlv8");

const connectionString = "server=192.168.10.14;Database=Little_Dev;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
let num = "jay";
let user = {
    studentfirstname: "Jay",
    studentlastname: "Shah",
    studentclass: 12,
    studentPhoto: "ahgatajdbnab/adhgad",
    parentfirstname: "Amit",
    parentlastname: "Shah",
    parentmobilenumber: 9824603112,
    parentemailaddress: "amit@gmail.com",
    address: "jhdu hgdhyad uaydu ajdh",
    lat: 72.35545,
    lng: 24.57868
}
// const query = `INSERT INTO student_details(student_firstname) VALUES ('${num}')`;

const query = `INSERT INTO student_details(student_firstname,student_lastname,student_class,student_photo,
    parent_firstname,parent_lastname, parent_mobilenumber,parent_emailaddress, student_address, lat, lng ) 
    VALUES('${user.studentfirstname}', '${user.studentlastname}', ${user.studentclass}, '${user.studentPhoto}',
    '${user.parentfirstname}', '${user.parentlastname}', ${user.parentmobilenumber}, '${user.parentemailaddress}',
    '${user.address}', ${user.lat}, ${user.lng} );`;

sql.query(connectionString, query, (err, rows) => {
    console.log("rows",err);
});