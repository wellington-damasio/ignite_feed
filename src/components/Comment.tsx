import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import Avatar from './Avatar'
import styles from './Comment.module.css'


type CommentProps = {
    key: number
    id: number
    author: string
    authorId: number
    avatarUrl: string
    content: string
    onDeleteComment: (id: number) => void
}

const Comment = (props: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = (id: number, autorId: number) => {
        if(autorId === 1) {
            props.onDeleteComment(id), 1000
        }
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1)
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={props.avatarUrl} alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.author}</strong>
                            <time 
                                title="11 de Maio às 08:13h"
                                dateTime='2022-05-11 08:13:30'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        {
                            props.authorId === 1 ? (
                                <button 
                                    title='Deletar comentário' 
                                    onClick={() => {
                                        handleDeleteComment(props.id, props.authorId)
                                    }}
                                        >
                                    <Trash size={24} />
                                </button>
                            ) : null
                        }
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment