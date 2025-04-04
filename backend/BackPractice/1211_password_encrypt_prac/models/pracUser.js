const PracUserModel = (Sequelize, DataTypes) => {
  const pracUser = Sequelize.define(
    "prac_user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return pracUser;
};

module.exports = PracUserModel;
