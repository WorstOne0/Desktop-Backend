import { Server } from "socket.io";
import { joinRoom, leaveRoom } from "./rooms.js";

let io;

const socketServer = (server) => {
  io = new Server(server, {
    path: "/socket_server",
    cors: {
      origin: true,
      credentials: true,
      transports: ["websocket", "polling"],
    },
    allowEIO3: true,
    pingTimeout: 10000,
  });

  io.on("connection", (socket) => {
    // *** Connection ***
    console.log("User Connected :: Socket Created");

    socket.on("disconnect", async () => {
      console.log("User Disconnected", socket.id);
    });

    socket.on("set_user", async (userId) => {
      console.log(`Socket ID :: ${socket.id} -- User ID :: ${userId}`);
    });

    // *** Rooms ***
    socket.on("join_room", async (room_name) => {
      joinRoom(socket, room_name);
    });
    socket.on("leave_room", async (room_name) => {
      leaveRoom(socket, room_name);
    });
    socket.on("send_to", (item) => {
      const { room, route, data } = item;
      socket.to(room).emit(route, data);
    });

    // *** Test ***
    socket.on("chat_message", (msg) => {
      socket.broadcast.emit(msg);
    });
  });
};

const socketConnection = () => {
  return io;
};

export { socketServer, socketConnection };
