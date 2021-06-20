module.exports = {
    development: {
        username: "ipfs-proxy-dev",
        password: process.env.MYSQL_PASSWORD || "dev",
        database: process.env.MYSQL_DATABASE || "ipfs-proxy",
        host: "127.0.0.1",
        port: "3307",
        dialect: "mysql",
    },
};
