import { User } from "../../common/models/user.model";

export class AuthorizationContainer {
     public user : User = new User();
     public rawJwt: String;
}