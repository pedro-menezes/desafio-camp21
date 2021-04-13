const { encryptor } = require("../helpers");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        field: "is_admin",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      }
    },
    {
      tableName: "users",
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );

  User.beforeSave(async (user, options) => {
    const password = await encryptor.hashPassword(user.password);
    if (user.changed("password")) {
      Object.assign(user, { password });
    }
    return user;
  });

  User.prototype.toJSON = function () {
    const user = { ...this.get() };
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !["password"].includes(key))
    );
  };
  
  User.associate = models => {
    User.belongsToMany(models.Movie, { through: 'vote'});
  };

  return User;
};
