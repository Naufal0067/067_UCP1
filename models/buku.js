module.exports = (sequelize, DataTypes) => {
    const Buku = sequelize.define("Buku", {
        id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
        },
        Judul: {
            type: DataTypes.STRING,
        },
        Pengarang: {
            type: DataTypes.STRING,
        },
        TahunTerbit: {
            type: DataTypes.INTEGER,
        },
        Bidang: {
            type: DataTypes.STRING,
        }
    });
    return Buku;
}