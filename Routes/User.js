const multer = require("multer");
const path = require("path");
// Express Router
const express = require("express");
const router = express.Router();
// Middlewares
const jwtAuth = require("../Middleware/JWTAuth");
const roleAuth = require("../Middleware/RoleAuth");
const Role = require("../Constants/Role");
//
const UserController = require("../Controllers/UserController");
//
const { exceptionFunc } = require("../Services/ExceptionHelper");
//
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "Uploads/UserImages/");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});
const upload = multer({ storage: storage });
//
//router.put("/imgUpload", upload.single("imagePath"), (req, res) => exceptionFunc(req, res)(UserController, 'updateImage', 'Backend issue: user-post-imgUpload'))
router.get("/showUser", (req, res) =>
	exceptionFunc(req, res)(
		UserController,
		"showUser",
		"Backend issue: user-get-showUser"
	)
);

//router.get(
//  "/showUser",
//  jwtAuth,
//  roleAuth.check(Role.ADMIN),
//  UserController.showUser
//);

module.exports = router;
