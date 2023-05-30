import User from "./user.model";

// database logic
export const createUserToDB = async () => {
  const user = await new User({
    id: "104",
    role: "student",
    name: {
      firstName: "Facebook",
      middleName: "Sakib",
      lastName: "Abir",
    },
    password: "janijani",
    gender: "male",
    email: "abc@gmail.com",
    contact: "0188888888",
    emergencyContact: "0199999999",
    presentAddress: "Uganda",
    permanentAddress: "USA",
  });
  await user.save();
  return user;
};
