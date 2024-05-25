const io =require('socket.io')(8800,{
    cors:{
        origin:"http://localhost:5173"
    }
})
let activeUsers =[]

io.on("connection", (socket) => {
    // Add new user
    socket.on('new-user-add', (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            });
        }
        console.log("connected users",activeUsers)
        io.emit('get-users',activeUsers)
    });

    //send message
    socket.on("send-message",(data)=>{
        const {recieverId}=data;
        const user =activeUsers.find((user)=>user.userId ===recieverId)
        console.log("sending from socket to client",recieverId);
        console.log("data",data)
        if(user){
            io.to(user.socketId).emit("reciever-message",data)
        }
    })
    socket.on("disconnect",()=>{
        activeUsers=activeUsers.filter((user)=>user.socketId !== socket.id)
        console.log("user Disconnected",activeUsers)
        io.emit('get-users',activeUsers)
    })
});
