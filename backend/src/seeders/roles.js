const roles = [
  {
    name: "user",
    description: "Regular user with browsing and saving capabilities",
    permissions: ["read_schemes", "save_schemes", "view_dashboard"]
  },
  {
    name: "admin",
    description: "Administrator with full system access",
    permissions: ["read_schemes", "save_schemes", "view_dashboard", "manage_schemes", "manage_categories", "manage_users"]
  }
];

module.exports = roles;