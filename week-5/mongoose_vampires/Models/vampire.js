const vampire = vampireSchema{
  name: ,
  hair_color: ,
  eye_color: ,
  dob: ,
  loves: ,
  location: ,
  gender: ,
  victims: ,
};



const draculaSchema = {
    name: 'Dr.Acula',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1971, 7, 20),
    loves: ['blood', 'flying', 'people']
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 4,
};


module.exports = mongoose.model('vampire', draculaSchema);