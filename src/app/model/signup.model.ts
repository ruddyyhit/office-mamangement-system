export class Signup {
    firstname: string;
    lastname: string;
    gender: string;
    photoPath ?: string;
    email: string;
    role: string;
    password: {
        pwd: string;
        confirmPwd: string;
    };

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
 }
