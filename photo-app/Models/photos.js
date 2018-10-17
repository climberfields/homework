const photosSchema = new mongoose.Schema [{
    name: String,
    location: String
}]


module.exports = mongoose.model('Photos', photosSchema);