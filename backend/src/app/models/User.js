const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoosePaginate = require("mongoose-paginate-v2");

const { UserProfile } = require("../constants/userConstants");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  userProfile: UserProfile
}, {
  timestamps: true
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) {
    next()
  }

  this.password = await bcrypt.hash(this.password, 8)
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToken() {
    return jwt.sign({ id: this._id }, process.env.JWT_AUTH_KEY, {
      expiresIn: 86400
    })
  }
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);