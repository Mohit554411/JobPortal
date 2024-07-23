export default class UserModel{
    constructor(id,name,email,password,role){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static registerUser(newUser){
       const addUser = new UserModel(
        user.length+1,
        newUser.name,
        newUser.email,
        newUser.password,
        newUser.role
       )
       if(user.find(user=>user.eamil===newUser.email)){
        return false;
       }
       else{
        user.push(addUser);
        return true;
       }
    }
    static loginUser(email,password){
        return user.find(user=> user.email === email && user.password === password);
    }
}
let user = [];