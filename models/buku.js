module.exports = (Sequelize, DataTypes) => {
    const Buku = sequelize.define("Buku", {
        id: {
           type: DataTypes.INTEGER,
           autoincrement: true,
           primaryKey: true,
        },

        Judul: {
            type: DataTypes.STRING,
        },

        Pengarang: {
            type: DataTypes.STRING,
        },

        TahunTerbit: {
            type: DataTypes.DATE,
        },

        Bidang: {
            type: DataTypes.STRING,
        }
    });
    return Buku;
}