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
