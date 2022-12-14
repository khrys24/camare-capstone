const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const hasEmptyFields = (body, error_list) => {
    for(field in body) {
        if(!body[field] && field !== 'is_admin') { //body['is_admin'] = 0 => true
            error_list[field] = `${ evaluateMsg(field) } is required.`;
        }
    }
    if(Object.keys(error_list).length > 0) {
        return true;
    }
    return false;
}

const evaluateMsg = (field) => {
    switch (field) {
        case 'first_name':
            return 'First Name'
            break;
        case 'last_name':
            return 'Last Name'
            break;
        case 'phone_number':
            return 'Phone Number'
            break;
        case 'address':
            return 'Address'
            break;
        case 'city_id':
            return 'City'
            break;
        case 'email':
            return 'Email'
            break;
        case 'password':
            return 'Password'
            break;
        case 'confirm_password':
            return 'Confirm Password'
            break;
        // default:
        //     break;
    }
}



exports.register = async (req, res) => {
    // let params = {...req.body};
    const {
        first_name,
        last_name,
        phone_number,
        address,
        city_id,
        country,
        email,
        password,
        confirm_password
    } = req.body;

    let error_list = {};
    // error_list.first_name = first_name ? "" : "First Name is required";

    if(hasEmptyFields(req.body, error_list)) {
        res.status(400)
        return res.json(error_list);
    }

    if(password !== confirm_password) {
        error_list.confirm_password = "Password does not match"
        return res.status(400).json(error_list);
    }

    const hashpassword = await bcrypt.hash(password, 10);   

    db.query(
        `SELECT * FROM users WHERE email = ?`,
        // params.email,
        email,
        (err, result) => {
            if(err) {
                console.log(err.message);
                res.send(err);
            }
            if(result.length > 0) {
                error_list.email = "Email is already in use."
                return res.status(400).json(error_list  );
            }
            

            db.query(
                `INSERT INTO users SET ?`,
                {
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: phone_number,
                    address: address,
                    city_id: city_id,
                    country: country,
                    email: email,
                    password: hashpassword
                },
                (err) => {
                    if(err) {
                        return console.log(err.message);
                    }
                    console.log('Registration Submitted');
                    res.send('Success!');
                }
            );
        }
    );

    

}
