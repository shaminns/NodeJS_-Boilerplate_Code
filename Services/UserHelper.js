const moment = require("moment");
// Mongoose
const mongoose = require("mongoose");
//Helpers
const GeneralHelper = require("./GeneralHelper");
//Models
const User = require("../Models/User");
// exports.createUser = async (password, userDetail, request) => {
// 	let role = "User";
// 	const user = new User({
// 		_id: new mongoose.Types.ObjectId(),
// 		password: password,
// 		role: role,
// 		profileImage: "",
// 		backgroundImage: "",
// 		userDetail: userDetail,
// 	});
// 	await user.save();
// 	return user._id;
// };

//exports.findDesignationWiseEmployeesWithPagination = async (
//   designationIdArr,
//   pageNo
// ) => {
//   let pg = GeneralHelper.getPaginationDetails(pageNo);
//   let result = await PersonalInfo.find({
//     designation: { $in: designationIdArr },
//     isDeleted: false,
//   })
//     .skip(pg.skip)
//     .limit(pg.pageSize)
//     .exec();
//   let total = await PersonalInfo.find({
//     designation: { $in: designationIdArr },
//     isDeleted: false,
//   }).countDocuments();
//   return {
//     pagination: GeneralHelper.makePaginationObject(
//       pg.pageNo,
//       pg.pageSize,
//       pg.skip,
//       total,
//       result.length
//     ),
//     data: result,
//   };
// };