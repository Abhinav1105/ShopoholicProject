import User from '../model/userSchema.js';

export const signUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(400).json('User already exist');
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json('User successfully registered!!');
        
    } catch (error) {
        console.log('Errorr: ', error.message);
    }
    return "Hi";
}

export const login = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}
