/** @format */

const transporter = require("../supports/nodemailer.js");
const db = require("../database/users.js");
const { default: validator } = require("validator");
const fs = require("fs");

const { createJwt, decodeToken } = require("../supports/jwt.js")
const jwt = require("jsonwebtoken")
const query = require('../database/async')


const handlebar = require("handlebars");
const upload=require('../supports/multer')

const hashing = require("../supports/hash.js");

const editCredential=(req,res)=>{
		upload(req,res,(err)=>{
			try {
				if(err)throw err
				if(req.bebas) throw err
				if(req.file){
						db.query('select profile_image from users where id=?',req.params.id,(err,result)=>{
							try {
								if(result[0].profile_image!==null){
									fs.unlinkSync('public/profile-images/'+result[0].profile_image)
								}
								db.query('update users set? where id=?',[{profile_image:req.file.filename},req.params.id],(err,image)=>{
									try {
											if(err)throw err
											res.send({
												error:false,
												message:'update image success'
											})
									} catch (error) {
											res.send({
												error:true,
												message:error
											})
									}
								})
							} catch (error) {
								console.log(error)
							}
						})
				}
				
				if(req.body.profile_data){
					db.query('update users set? where id=?',[JSON.parse(req.body.profile_data),req.params.id],(err,outcome)=>{
						try {
							if(err)throw err
							res.send({
								error:false,
								message:'update profile data success'
							})
						} catch (error) {
							res.send({
								error:true,
								message:error
							})
								
						}
					})
				}
				if(req.file && req.body.profile_data){

					db.query('select profile_image from users where id=?',req.params.id,(err,target)=>{
						try {
							if(target[0].profile_image!==null){
								fs.unlinkSync('public/profile-images/'+target[0].profile_image)
							}
							db.query('update users set? where id=?',[{profile_image:req.file.filename},req.params.id],(err,response)=>{
								try {
									if(err)throw err
									db.query('update users set? where id=?',[JSON.parse(req.body.profile_data),req.params.id],(err,result)=>{
										try {
											if(err)throw err
											res.send({
												error:false,
												message:'update success'
											})
										} catch (error) {
											res.send({
												error:true,
												message:error
											})
										}
									})
								} catch (error) {
									console.log(error)
								}
							})
						} catch (error) {
							console.log(error)
						}
					})
					
				}
		
			} catch (error) {
					console.log(error)
			}
		})

}


const Register = (req, res) => {
	// Get all data value
	const data = req.body; // {email,password}
	console.log(data)

	try {
		// validasi data
		if (!data.email || !data.password) throw "Data not complete";
		if (!validator.isEmail(data.email)) throw "Email format wrong";
		if (data.password.length < 8) throw "password too short (min 8 char)";

		//cek data.email with database if already exsited send notif email already exist
		let sql = "select * from users where email=?";
		db.query(sql, data.email, (err, result) => {
			try {
				if (err) throw err

				if (result.length === 0) {

					try {
						const afterHashing = hashing(data.password);
						data.password = afterHashing;
					} catch (error) {
						res.status(500).json({
							error: true,
							message: "failed to hash password"
						});
					}
					const dataToSend = {
						fullname: data.fullname,
						phone: data.phone,
						email: data.email,
						password: data.password,

					}
					db.query("insert into users set ?", dataToSend, (err, result) => {
						try {
							if (err) throw err;
							console.log(result);

							//send email
							fs.readFile(
								"D:/Purwadhika/mobile/Hoteliers/server/template/emailtemplate.html",

								{ encoding: "utf-8" },
								(err, file) => {
									if (err) throw err;
									const template = handlebar.compile(file);
									const resulttemp = template({
										email: dataToSend.email,
										link: "http://localhost:9000/verify/" + result.insertId + "/" + dataToSend.password + "/" + dataToSend.otp_number,
										text1: "this is description",
										text2: "this is description2"
									});
									transporter
										.sendMail({
											from: "toko  al-amin",
											to: dataToSend.email,
											subject: "email confirmation",
											html: resulttemp
										})
										.then(respons => {
											const token = createJwt({ id: result.insertId })
											db.query('select * from users where id=?', result.insertId, (err, result) => {
												try {
													if (err) throw err
													const fullname = result[0].fullname
													const email = result[0].email
													res.send({
														error: false,
														fullname,
														email,
														token
													})
												} catch (error) {
													res.send({
														error: true,
														message: error.message
													})
												}


											})

										})
										.catch(err => {
											res.send({
												error: true,
												message: err.message
											});
										});
								}
							);
						} catch (error) {
							res.send({
								error: true,
								message: error.message
							});
						}
					});
				} else {
					res.json({
						error: true,

						message: "email already exist"
					})


				}
			} catch (err) {
				res.status(406).send({
					error: true,
					message: err
				});
			}
		});

		// hash password

		// store data to db
	} catch (err) {
		res.status(500).send({
			error: true,
			message: error
		});
	}

	// hash password data
	// store data ke db
	// kirim email
};

const Login = (req, res) => {
	const data = req.body;

	try {
		if (!data.email || !data.password) throw "Data not complete";
		if (!validator.isEmail(data.email)) throw "Email format wrong";
		if (data.password.length < 8) throw "password too short (min 8 char)";

		try {
			const passwordHashed = hashing(data.password);
			data.password = passwordHashed;
		} catch (error) {
			res.status(500).send({
				error: true,
				message: "failed to hash password"
			});
		}

		let sql = "select * from users where email=? and password=?";

		db.query(sql, [data.email, data.password], (err, result) => {
			try {
				if (err) throw err;
				if (result.length === 0) throw "email or password wrong";


				const token = createJwt({ id: result[0].id })
				const fullname = result[0].fullname
				const email = result[0].email
				const phone=result[0].phone
				const image=result[0].profile_image

				res.send({
					error: false,
					fullname,
					email,
					phone,
					token,
					image
				});
			} catch (error) {
				res.send({
					error: true,
					message: error
				});
			}
		});
	} catch (error) {
		res.send({
			error: true,
			message: error
		});
	}
};

const sendMail = (req, res) => {
	const mailOptions = {
		from: "firman hadi yudistia",
		to: "yudistia.fireman28@gmail.com",
		subject: "Verify your email now !!!!",
		html: "<h1>Hello, Please Verify your email <a href='www.google.com'>here</a>"
	};

	transporter
		.sendMail(mailOptions)
		.then(val => {
			console.log(val);
			res.json({
				error: false,
				message: "Email successfully sent"
			});
		})
		.catch(err => {
			console.log(err);
		});
};

const verifyEmail = (req, res) => {
	const data = req.params




	let sql = "update users set is_email_confirm=1 where id=? and password=? and otp_number=?  ";
	db.query(sql, [data.id, data.password, data.otpnumber], (err, result) => {
		try {
			if (err) throw error;
			let sql = "select * from users where id=?"
			db.query(sql, data.id, (error, result) => {
				try {

					if (result[0].is_email_confirm === 0) throw "otp number does not match "
					res.send({
						error: false,
						message: "email has been verified"
					})
				} catch (error) {
					res.send({
						error: true,
						message: error
					})
				}
			})

		} catch (error) {
			res.send({
				error: true,
				message: err.message
			});
		}
	});




};




const getUserById =  (req, res) => {


		const {id}=req.params
		const user_id= decodeToken(id).id


	db.query('select * from users where id=?',user_id,(err,result)=>{
		try {
			if(err) throw err

			console.log(result[0])
			res.send({
				error:false,
				data:result[0]
			})
		} catch (error) {
				res.send({
					error:true,
					message:error
				})
		}
	})


	



}

const isVerifieduser = (req, res) => {


	const data = req.bebas
	console.log(data)


	db.query('select * from users where id = ?', data.id, (err, result) => {
		try {
			if (err) throw err
			console.log(result)
			res.json({ error: false, is_verified: result[0].is_email_confirm, id: result[0].id })
		} catch (err) {
			res.json({ error: true, message: error.message, detail: error })
		}
	})


}

const forgotPass = (req, res) => {
	let { email, password } = req.body
	const passwordHashed = hashing(password);
	password = passwordHashed;
	console.log(email)
	console.log(password)
	db.query('update users set password=? where email=?', [password, email], (err, result) => {
		try {
			if (err) throw err
			console.log(result)
			if (result.affectedRows === 0) {
				res.json({
					error: true,
					message: 'email not found'
				})
			} else {
				res.json({
					error: false,
					message: 'email successfully updated'
				})
			}

		} catch (error) {
			res.json({
				error: true,
				message: error.message
			})
		}
	})

}

module.exports = {
	Register: Register,
	Login: Login,
	sendMail: sendMail,
	verifyEmail: verifyEmail,
	getUserById: getUserById,
	isVerifieduser: isVerifieduser,
	forgotPass,
	editCredential
};
