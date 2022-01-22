import * as  Mongoose  from 'mongoose';
import { UserRoleEnum } from 'src/enum/user-role';
// TO DO : missing fields (see models.ts)
export const UsersSchema = new Mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String, required:true},
    description:{ type: String },
    role:{type:String,default:UserRoleEnum.Participant}
  });

export interface User extends Mongoose.Document {  
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role : UserRoleEnum;
  
}