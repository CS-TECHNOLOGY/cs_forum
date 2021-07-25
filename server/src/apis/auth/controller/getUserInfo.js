import getUserInfo from "../models/getUserInfo";

const getUserInfoController = async (req, res) => {
    console.log(req.body);
    const token = req.params.id;
    try {
        const response = await getUserInfo(token);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error)   
    }
}
export default getUserInfoController;