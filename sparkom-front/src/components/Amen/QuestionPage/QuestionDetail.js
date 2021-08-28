import React from 'react'
import avatar from "../../assets/img/avatar2.jpg";

function QuestionDetail() {
    return (
        <div>
            <table class="open-topic-table">
<thead>

<tr>
    <td class="author">
        <div class="author-thumb">
            <img src={avatar} alt="author"/>
        </div>
        <div class="author-content">
            <a href="02-ProfilePage.html" class="h6 author-name">Marina Valentine</a>
            <div class="country">Long Island, NY</div>
        </div>
    </td>
    <td class="posts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>Duis aute irure dolor in reprehenderit.</p>
        <p>Thanks!</p>
    </td>
</tr>

    </thead>

<tbody>



<tr>
    <td class="author">
        <div class="author-thumb">
            <img src={avatar} alt="author"/>
        </div>
        <div class="author-content">
            <a href="02-ProfilePage.html" class="h6 author-name">Marina Valentine</a>
            <div class="country">Long Island, NY</div>
        </div>
    </td>
    <td class="posts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>Duis aute irure dolor in reprehenderit.</p>
        <p>Thanks!</p>
    </td>
</tr>

<tr>
    <td class="topic-date" colspan="2">
        March 24th, 2016 at 8:05 pm
        <a href="#" class="reply-topic">Like</a>
        <a href="#" class="reply-topic">Dislike</a>

    </td>
</tr>



</tbody>
</table>

        </div>
    )
}

export default QuestionDetail
