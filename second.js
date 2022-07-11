const data = [
  {
    text: "some text in a string",
    likes: 3,
    poster: "a name",
  },
  {
    text: "some text in a string",
    likes: 700,
    poster: "a name",
  },
  {
    text: "some text in a string",
    likes: 30,
    poster: "a name",
  },
  {
    text: "some text in a string",
    likes: 1,
    poster: "a name",
  },
  {
    text: "some text in a string",
    likes: 100,
    poster: "a name",
  },
];

const myFunc = (arrOfUserPosts) => {
  let currentBiggest = 0;

  for (let i = 0; i < arrOfUserPosts.length; i++) {
    if (arrOfUserPosts[i]["likes"] > currentBiggest) {
      currentBiggest = arrOfUserPosts[i].likes;
    }
  }
  return currentBiggest;
};

console.log(myFunc(data));

// take array of post & return username of most liked post
console.log(myFunc2());

// from class
const areAnagrams = (a, b) => {
  if (a.length != b.length) {
    return false;
  } else {
    console.log(a.split(""));
    return a.split("").every((c) => b.includes(c));
  }
};

const getTopUser = (data) => {
  let currentMax = 0; // max score seen so far
  let currentUser = null; // username of poster with max score

  for (let post of data) {
    if (currentMax < post["likes"]) {
      currentMax = post["likes"];
      currentUser = post["poster"];
    }
  }

  return currentUser;
};
