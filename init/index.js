const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/nestora";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=> {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: "6866a7862c3405fd9618fd23",}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();