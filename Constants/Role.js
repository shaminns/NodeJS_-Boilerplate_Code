function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
  });
}

// Roles
define("SUPER_ADMIN", "Super_Admin");
define("ADMIN", "Admin");
define("USER", "User");
