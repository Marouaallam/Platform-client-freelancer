import { profileModel } from '../models/profileModel.js'

module.exports.findProfileById =async (userID) => {
    try {
        const profile = await profileModel.findOne({ userID: userID }).populate('userID');
        return profile ;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to find profile');
    }
};
