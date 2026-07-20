const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your Name"],
    trim: true,
    minlength: 5,
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Your Last Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    trim: true,
    minlength: 4,
  },
  gender: {
    type: String,
    required: [true, "Please Enter Your Gender"],
    trim: true,
  },
  dob: {
    type: Date,
    required: [true, "Please Enter Your Date of Birth"],
    trim: true,
  },
  height: {
    type: Number,
    required: [true, "Please Enter Your Height"],
    trim: true,
  },
  weight: {
    type: Number,
    required: [true, "Please Enter Your Weight"],
    trim: true,
  },
  smoke: {
    type: String,
    required: [true, "Please Enter Your Smoke"],
    trim: true,
  },
  alcohol: {
    type: String,
    required: [true, "Please Enter Your Alcohol"],
    trim: true,
  },
  familyDetails: [{
    name: {
      type: String,
      required: [true, "Please Enter Your name"],
      trim: true,
    },
    relation: {
      type: String,
      required: [true, "Please Enter Your relation"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Please Enter Your age"],
      trim: true,
    },
    sugar: {
      type: Number,
      required: [true, "Please Enter Your sugar"],
      trim: true,
    },
    bp: {
      type: Number,
      required: [true, "Please Enter Your bp"],
      trim: true,
    },
    creatinine: {
      type: Number,
      required: [true, "Please Enter Your creatinine"],
      trim: true,
    },
    glucose: {
      type: Number,
      required: [true, "Please Enter Your Glucose"],
      trim: true,
    },
    skinthickness: {
      type: Number,
      required: [true, "Please Enter Your SkinThickness"],
      trim: true,
    },
    insulin: {
      type: Number,
      required: [true, "Please Enter Your Insulin"],
      trim: true,
    },
    bmi: {
      type: Number,
      required: [true, "Please Enter Your BMI"],
      trim: true,
    },
  }],
  role: {
    type: String,
    default: "User",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;