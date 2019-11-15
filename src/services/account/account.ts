

export class AccountService{

    haveName(name : string){
        if(name && name.length > 0){
            return true;
        }
        return false
    }
}