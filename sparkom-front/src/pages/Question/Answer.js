import React from "react";

export default function Answer({ answer, questionId }) {
  const postedBy = answer.questionedBy._id || answer.questionedBy;

  return (
    <div>
      <tr>
        <td class="author">
          <div class="author-thumb">
            <img
              src={`http://localhost:3002/api/user/photo/${postedBy}?${new Date().getTime()}`}
              alt="author"
            />
          </div>
          <div class="author-content">
            <a href="02-ProfilePage.html" class="h6 author-name"></a>
            <div class="country">{answer.created}</div>
          </div>
        </td>
        <td class="posts">
          <p>{answer.text}</p>
        </td>
      </tr>

      <tr>
        <td class="topic-date" colspan="2">
          {answer.created}
          <a href="#" class="reply-topic">
            Like
          </a>
          <a href="#" class="reply-topic">
            Dislike
          </a>
        </td>
      </tr>
    </div>
  );
}
