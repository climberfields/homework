const userSchema = new mongoose.Schema ({
    username: String,
    age: String,
    Location: String
});

module.exports = mongoose.model('User', userSchema);