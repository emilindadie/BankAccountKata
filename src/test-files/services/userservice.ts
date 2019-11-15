import { CreateUserDto } from "../../model/user";
import { User } from "../../model/user.i";

export const user = new CreateUserDto();
user.email = "dadie.emilin@gmail.com";
user.name = "Emilin";
user.password = "toto";
user.address = "14 rue de Mulhouse";

export const userMock : User = {
    id : 1,
    name : "Emilin",
    address: "",
    email :"dadie.emilin@gmail.com",
    password: "toto"
}


