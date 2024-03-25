// Add SocketUser dps

const joinRoom = async (socket, room_name) => {
  socket.join(room_name);
  //   await SocketUser("base").updateOne({ socketId: socket.id }, { $push: { rooms: room_name } });
};

const leaveRoom = async (socket, room_name) => {
  socket.leave(room_name);
  //   await SocketUser("base").updateOne({ socketId: socket.id }, { $pull: { rooms: room_name } });
};

export { joinRoom, leaveRoom };
