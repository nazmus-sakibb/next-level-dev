// 1. crating an interface
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dob: string;
  gender: "male" | "female";
  email?: string;
  contact: string;
  emergencyContact: string;
  presentAddress: string;
  permanentAddress: string;
}
