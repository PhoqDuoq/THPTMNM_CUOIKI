const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Cho phép frontend gọi API
app.use(express.json());

// --- DATABASE GIẢ LẬP ---
let databaseUsers = [
    { id: 1, name: "Nguyen Van A", role: "Student" },
    { id: 2, name: "Tran Thi B", role: "Teacher" }
];

// --- API ---
app.get('/api/users', (req, res) => {
    res.json({

        message: "Code tu nhanh Main!",

        message: "Code tu nhanh feature-demo!",

        message: "Da xu ly xung dot xong (Final Merge)!",

        data: databaseUsers
    });
});

app.post('/api/users', (req, res) => {
    const newUser = { 
        id: databaseUsers.length + 1, 
        name: req.body.name || "Unknown", 
        role: "Guest" 
    };
    databaseUsers.push(newUser);
    res.json({ message: "Đã thêm user mới!", user: newUser });
});

app.listen(PORT, () => {
    console.log(`Backend đang chạy tại: http://localhost:${PORT}`);
});