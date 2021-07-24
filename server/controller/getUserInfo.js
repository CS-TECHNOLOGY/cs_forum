import getUserInfo from "../model/getUserInfo/index.js";

const getUserInfoController = async (req, res) => {
    console.log(req.body);
    const token = req.query.id;
    try {
        const response = await getUserInfo(token);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error)   
    }
}
export default getUserInfoController;