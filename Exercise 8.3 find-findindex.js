// function to find a user by username
function findUserByUsername(users, username) {
  return users.find(function(user) {
    return user.username === username;
  });
}

// function to remove a user by username
function removeUser(users, username) {
  // find the index of the user with the given username
  const index = users.findIndex(function(user) {
    return user.username === username;
  });
  // if user is found, remove and return the user
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
