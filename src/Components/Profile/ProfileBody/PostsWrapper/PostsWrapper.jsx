import Post from './Post/Post'
import styles from './PostsWrapper.module.css'

function PostsWrapper (props) {
    const posts = props.postsData.map(el => {
        return (<Post
            author={el.author} 
            avatar={el.avatar} 
            postText={el.postText} 
            likes={el.likes} 
        />)
    })

    return (
        <div className={styles.PostsWrapper}>
            {posts}
        </div>
    )
}

export default PostsWrapper