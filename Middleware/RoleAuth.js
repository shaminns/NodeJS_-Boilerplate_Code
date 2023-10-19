// Constants
const Message = require("../Constants/Message.js");
const ResponseCode = require("../Constants/ResponseCode.js");

// exports.check = (role, role2, role3) => {
//   return (req, res, next) => {
//     if (
//       req.user.role == role ||
//       (role2 && req.user.role == role2) ||
//       (role3 && req.user.role == role3)
//     ) {
//       next();
//     } else {
//       return res.status(ResponseCode.NOT_SUCCESS).json({
//         code: ResponseCode.NOT_SUCCESS,
//         message: Message.PERMISSION_DENIED,
//       });
//     }
//   };
// };
exports.check = (role) => {
  return (req, res, next) => {
    if (req.user.role == role) {
      next();
    } else {
      return res.status(ResponseCode.NOT_SUCCESS).json({
        code: ResponseCode.NOT_SUCCESS,
        message: Message.PERMISSION_DENIED,
      });
    }
  };
};
