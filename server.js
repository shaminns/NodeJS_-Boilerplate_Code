const socket = require("socket.io");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const app = require("./app");
const port = Number(process.env.PORT) || 4100;
const options = {
	key: fs.existsSync(process.env.SSL_KEY)
		? fs.readFileSync(process.env.SSL_KEY)
		: null,
	cert: fs.existsSync(process.env.SSL_CRT)
		? fs.readFileSync(process.env.SSL_CRT)
		: null,
};
const server =
	process.env.MODE == "DEV"
		? http.createServer(app)
		: http.createServer(options, app);
console.log("Serving on ", port);
const clients = [];
// const io = require("socket.io")(server);
var io = socket(server, {
	cors: {
		origin: "*",
	},
});
/*let users = [];

const addUser = (userId, socketId) => {
	!users.some((user) => user.userId === userId) &&
		users.push({ userId, socketId });
};

const removeUser = (socketId) => {
	users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
	return users.find((user) => user.userId === userId);
};
let usersArr = []; //for socket connected (online) user
//io connection
io.on("connection", (socket) => {
	console.log("a user connected!");
	socket.on("addUser", async (userId) => {
		let senderId = userId;
		addUser(senderId, socket.id);
		io.emit("getUsers", users);
		console.log("after add : ", users);
	});

	socket.on("sendMessage", async ({ senderId, receiverId, text }) => {
		console.log("new msg : ", { senderId, receiverId, text }); //sender msg
		console.log("sender Id : ", senderId);
		let stringSenderId = senderId.toString();
		let stringReceiverId = receiverId.toString();

		let conversationDetail = await conversationController.conversationDetail(
			stringSenderId,
			stringReceiverId
		);
		//
		let conversationId;
		if (conversationDetail == null || conversationDetail.length == 0) {
			console.log("new conversation");
			let newConversationId = await ConversationHelper.addThread(
				stringSenderId,
				stringReceiverId
			);
			conversationId = newConversationId.toString();
		} else {
			console.log("conversation already exist! - server");
			conversationId = conversationDetail._id;
		}

		// await ChatMessageHelper.createMessage(conversationId, stringSenderId, text);
		const user = getUser(stringReceiverId);
		////
		const receiverDetail = getUser(stringReceiverId);
		io.to(receiverDetail.socketId).emit("getMessage", text);
		console.log(text); // receiver msg
	});

	//TODO: discount user when goes offline
	socket.on("disconnect", () => {
		console.log("a user disconnected!");
		removeUser(socket.id);
		console.log("after remove : ", users);
		io.emit("getUsers", usersArr);
		// console.log("after user offline", users)
	});
});*/
server.listen(port);
