const socket = io("http://localhost:3000");

function sendMessage(e) {
    e.preventDefault();
    const msg = e.target.message.value;
    socket.emit("message", msg);
}

socket.on("msg", (data) => {
    console.log(data);
})