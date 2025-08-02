function getUser(id, callback) {
  setTimeout(() => {
    console.log("fetching user");
    callback({ id, name: "saurav" });
  }, 1000);
}

function getPosts(data, callback) {
  setTimeout(() => {
    console.log("getting user posts for id:", data.id, " name: ", data.name);
    callback({ posts: 10, id: data.id, name: data.name });
  }, 5000);
}

function getComments(posts, callback) {
  setTimeout(() => {
    console.log(
      "getting comments for id:",
      posts.id,
      "name:",
      posts.name,
      "for",
      posts.posts,
      "posts"
    );
    callback(posts.posts * 1000);
  }, 10000);
}

/**
 * //Invoke the above callback
 * getUser(21, function (data) {
  getPosts(data, function (posts) {
    getComments(posts, function (totalComments) {
      console.log("Total Comments:", totalComments);
    });
  });
});
 */

/**
 * Promises Approach below
 */

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching user");
      resolve({ id, name: "saurav" });
    }, 1000);
  });
}

function getPostsPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting user posts for id:", data.id, " name: ", data.name);
      resolve({ posts: 10, id: data.id, name: data.name });
    }, 5000);
  });
}

function getCommentsPromise(posts) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "getting comments for id:",
        posts.id,
        "name:",
        posts.name,
        "for",
        posts.posts,
        "posts"
      );
      resolve(posts.posts * 1000);
    }, 10000);
  });
}

/**
 * Invoke promises from above:
 * getUserPromise(10).then((data) =>
  getPostsPromise(data).then((posts) =>
    getCommentsPromise(posts).then((tc) => console.log(tc))
  )
);
 */

/**
 * Async Await approach below:
 */

async function fetchAll() {
  const user = await getUserPromise(10);
  const posts = await getPostsPromise(user);
  const totalComments = await getCommentsPromise(posts);
  console.log("Total Comments:", totalComments);
}

fetchAll();
