import React, { useState } from "react";
import PostList from "../components/PostList";

const InitBoard = () => {

    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물 내용입니다.', author: '홍길동' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.', author: '김철수' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.', author: '이영희' },
    ]);

    return (
        <div className="container">
            <h1>게시판</h1>
            <PostList posts={posts} />
        </div>
    );

}

export default InitBoard;