import React from "react";

const commentsData = [
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [],
  },
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [
          {
            name: "krishna",
            text: "Nice to meet you here Akshay saini namaste react",
            replies: [
              {
                name: "krishna",
                text: "Nice to meet you here Akshay saini namaste react",
                replies: [
                  {
                    name: "krishna",
                    text: "Nice to meet you here Akshay saini namaste react",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "krishna",
            text: "Nice to meet you here Akshay saini namaste react",
            replies: [],
          },
          {
            name: "krishna",
            text: "Nice to meet you here Akshay saini namaste react",
            replies: [],
          },
        ],
      },
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [],
      },
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [],
      },
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [],
      },
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [],
      },
      {
        name: "krishna",
        text: "Nice to meet you here Akshay saini namaste react",
        replies: [],
      },
    ],
  },
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [],
  },
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [],
  },
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [],
  },
  {
    name: "krishna",
    text: "Nice to meet you here Akshay saini namaste react",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 bg-gray-100 rounded-lg shadow-sm my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
