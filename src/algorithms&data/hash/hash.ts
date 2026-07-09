const userMap = new Map();

userMap.set("id_101", { name: "Alice", role: "Admin" });
userMap.set(42, "Answer to everything");

console.log(userMap.get("id_101"));

if (userMap.has(42)) {
  userMap.delete(42);
}
