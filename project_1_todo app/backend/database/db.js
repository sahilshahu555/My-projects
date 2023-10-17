const mongoose=require("mongoose");

const connection = mongoose.connect("mongodb+srv://sahilshahu555:harsh123123123@cluster0.ehyj2m8.mongodb.net/project_1-blog-app");



module.exports = {connection};