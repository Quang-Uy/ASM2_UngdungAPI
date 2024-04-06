const mongoose = require('mongoose');
const local = "mongodb+srv://uybqph35004:fUjMwqqAPXa1X0Sr@cluster0.igmz4cs.mongodb.net/ASM_API";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
