const moment = require("moment");
const fs = require("fs");
// Controllers

// Helpers
const UserHelper = require("../Services/UserHelper");
const ResponseHelper = require("../Services/ResponseHelper");
const EmailHelper = require("../Services/EmailHelper")

// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");
///
///////**************************** *///////////////////////////
/*
 * @params:
 * @res:
 * @body:
 * @dev: [purpose]
 */
///////**************************** *///////////////////////////
exports.showUser = async (req, res) => {
	let response = ResponseHelper.getDefaultResponse();
	let request = req.body;
	response = ResponseHelper.setResponse(
		ResponseCode.SUCCESS,
		Message.REQUEST_SUCCESSFUL
	);
	response.user = "User Data Here";
	return res.status(response.code).json(response);
};
/////////**************************** *///////////////////////////
// /*
//  * @params:
//  * @header:
//  * @res:
//  * @body:
//  * @dev: [purpose]
//  */
// ///////**************************** *///////////////////////////
// exports.designationFilter = async (req, res) => {
//   let response = ResponseHelper.getDefaultResponse();
//   let request = req.body;
//   let finalDesigArr = [];
//   let desigName = "";
//   let designationIdArr = request.designationId;
//   console.log("designation id arr : ", designationIdArr);
//   if (designationIdArr.length == 0) {
//     finalDesigArr = [];
//   } else {
//     let pageNo;
//     if (request.pageNo) {
//       pageNo = request.pageNo;
//     }
//     if (!request.pageNo) {
//       pageNo = 1;
//     }
//     let dsignationWiseEmployees =
//       await UserHelper.findDesignationWiseEmployeesWithPagination(
//         designationIdArr,
//         pageNo
//       );
//     console.log("ddd : ", dsignationWiseEmployees);
//     if (dsignationWiseEmployees.data.length > 0) {
//       for (let i = 0; i < dsignationWiseEmployees.data.length; i++) {
//         let designationId = dsignationWiseEmployees.data[i].designation;
//         let designationDetail = await DesignationHelper.findAllDesignationById(
//           designationId
//         );
//         if (designationDetail != null) {
//           desigName = designationDetail.designation;
//         }
//         let empInfoObj = {
//           isDeleted: dsignationWiseEmployees.data[i].isDeleted,
//           deletedAt: dsignationWiseEmployees.data[i].deletedAt,
//           _id: dsignationWiseEmployees.data[i]._id,
//           empId: dsignationWiseEmployees.data[i].empId,
//           fullName: dsignationWiseEmployees.data[i].fullName,
//           designation: desigName,
//           cnic: dsignationWiseEmployees.data[i].cnic,
//           contactNumber: dsignationWiseEmployees.data[i].contactNumber,
//           emergencyContact: dsignationWiseEmployees.data[i].emergencyContact,
//           personalEmail: dsignationWiseEmployees.data[i].personalEmail,
//           permanentAddress: dsignationWiseEmployees.data[i].permanentAddress,
//           currentAddress: dsignationWiseEmployees.data[i].currentAddress,
//           createdAt: dsignationWiseEmployees.data[i].createdAt,
//           updatedAt: dsignationWiseEmployees.data[i].updatedAt,
//         };
//         finalDesigArr.push(empInfoObj);
//       }
//     }
//     let pagination = dsignationWiseEmployees.pagination;
//     response = ResponseHelper.setResponse(
//       ResponseCode.SUCCESS,
//       Message.REQUEST_SUCCESSFUL
//     );
//     response.leagueData = { ...pagination, data: finalDesigArr };
//     return res.status(response.code).json(response);
//   }
// };