const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		password: { type: String, required: true },
		profileImage: { type: String, default: "" },
		backgroundImage: { type: String, default: "" },
		userDetail: { type: Object, default: null },
		role: { type: String, required: true, default: "User" },
		//
		isDeleted: { type: Boolean, default: false },
		deletedAt: { type: Date, default: null },
		///
		//submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true },
	{ strict: false }
);
module.exports = mongoose.model("User", userSchema);
