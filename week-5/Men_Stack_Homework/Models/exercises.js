//const exerciseSchema = mongoose.Schema({
//    name: String
//}, {
//    cardio: Boolean
//}, {
//    weights: Boolean
//}, {
//    img: String
//});

const exercises = [
    {
        name: 'Bench Press',
        cardio: 'false',
        weights: 'true',
        img: "https://www.t-nation.com/system/publishing/articles/10005374/original/The-Descending-Set-Bench-Press-Workout.png?1506458045",
},
    {
        name: 'Push Up',
        cardio: 'false',
        weights: 'false',
        img: "https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/0216.Master-Pushup-Blog-Hero_preview.jpg",
},
    {
        name: 'Dead Lift',
        cardio: 'false',
        weights: 'true',
        img: "http://www.returnofkings.com/wp-content/uploads/2017/12/deadlift_1.jpg",
},
    {
        name: 'Box Jump',
        cardio: 'true',
        weights: 'false',
        img: "https://3vnqw32fta3x1ysij926ljs3-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Box-Jump.jpg"
                  }];





module.exports = exercises;
