const MONGO_DATABASE = process.env.MONGO_DATABASE || "lyrical";
const MONGO_HOST = process.env.MONGO_HOST || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || "27017";

module.exports = {
    MONGO_DATABASE,
    MONGO_HOST,
    MONGO_PORT,
};