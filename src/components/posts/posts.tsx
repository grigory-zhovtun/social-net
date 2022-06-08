import React from 'react';
import s from './posts.module.css'
import {PostItem} from "../post-items/post-items";
import {NewPost} from "../new-post/new-post";

export const Posts = () => {
    return (
        <>
            <NewPost />
            <div className={s.PostsWrapper}>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </>

    );
};