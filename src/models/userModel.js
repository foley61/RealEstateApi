const {mongoose} = require("../configs/dbConnection")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},{
    collection: "Users",
    timestamps: true
})

userSchema.pre('save', async function (next) {
    const existingUser = await this.model('User').findOne({ username: this.username });
    if (existingUser) {
      throw new Error('user already exist'); // Throw a custom error with a clear message
    }
    next(); // If no existing user, proceed with saving
  });
module.exports = mongoose.model("User",userSchema)