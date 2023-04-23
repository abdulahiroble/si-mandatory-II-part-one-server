import User from "../model/user.js"

// class UserRepository {
// async findOrCreateUser(profile) {
//     console.log(profile)
//     const data = new User({
//         firstname: profile.firstname,
//         email: profile.email,
//         googleId: profile.googleId
//     })

//     try {
//         const dataFound = await User.findOne({ googleId: profile.id });

//         if (dataFound.length) {
//             return {
//                 success: true,
//                 object: dataFound
//             }
//         } else {
//             const dataToSave = await data.save();

//             return {
//                 success: true,
//                 object: dataToSave
//             }
//         }

//     }
//     catch (error) {
//         return {
//             success: false,
//             object: {},
//             msg: "OOPS, something went wrong in saveUser" + error,
//             status: 405
//         }
//     }
// }
// }

// export default UserRepository

export default {
    findOrCreateUser: async (profile) => {
        console.log("==================")
        console.log(profile)
        const data = new User({
            firstName: profile.given_name,
            email: profile.email,
            googleId: profile.id
        })


        try {
            const dataFound = await User.findOne({ googleId: profile.id });

            if (dataFound != null) {
                console.log(dataFound)
                return {
                    success: true,
                    object: dataFound
                }
            } else {
                const dataToSave = await data.save();
                console.log(dataToSave)

                return {
                    success: true,
                    object: dataToSave
                }
            }
        } catch (error) {
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in saveUser" + error,
                status: 405
            }
        }

        // try {


        // }
        // catch (error) {
        //     return {
        //         success: false,
        //         object: {},
        //         msg: "OOPS, something went wrong in saveUser" + error,
        //         status: 405
        //     }
        // }
    }
}