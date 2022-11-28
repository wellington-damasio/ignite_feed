import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import Comment from './Comment'
import Avatar from './Avatar'

import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { useRef } from 'react'

const comments = [
    {
        id: 1,
        post_id: 2,
        author: 'Wellington Damasio',
        author_id: 1,
        avatar_url: 'https://github.com/wellington-damasio.png',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis facilis minus voluptas ex consectetur, odit iste delectus quas, recusandae ipsam in fugit'  
    },
    {
        id: 2,
        post_id: 1,
        author: 'Felipe Smith',
        author_id: 2,
        avatar_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem sit explicabo dignissimos aspernatur eius' 
    },
    {
        id: 3,
        post_id: 2,
        author: 'Felipe Smith',
        author_id: 2,
        avatar_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem sit explicabo dignissimos aspernatur eius' 
    },
    {
        id: 4,
        post_id: 5,
        author: 'Felipe Smith',
        author_id: 2,
        avatar_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem sit explicabo dignissimos aspernatur eius' 
    }
]

type Content = {
    type: 'paragraph' | 'link'
    content: string
}

type PostProps = {
    key: number
    id: number
    author: string
    profession: string
    avatarUrl: string
    content: Content[]
    tags: string[]
    publishedAt: Date
}
const Post = (props: PostProps) => {
    const publishedDateFormatted = format(
        props.publishedAt,
        "d 'de' LLLL 'às' HH:MM'h'",
        {locale: ptBr}
    )

    const publishedDateRelativeToNow = formatDistanceToNow(
        props.publishedAt, 
        {locale: ptBr, addSuffix: true}
    )

    const publishedDatetime = props.publishedAt.toISOString()

    const [commentList, setCommentList] = useState(comments)
    const [newCommentText, setNewCommentText] = useState('')
    const submitCommentButton = useRef(null)

    const loseFocus = (elemRef : any) => {
        elemRef.current.blur()
    }

    const handleNewCommentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    const handleCommentSubmit = (event: FormEvent) => {
        event.preventDefault()

        setCommentList([...commentList,{
            id: commentList.length + 1,
            post_id: props.id,
            author: 'Wellington Damasio',
            author_id: 1,
            content: newCommentText,
            avatar_url: 'https://github.com/wellington-damasio.png'
        }])

        setNewCommentText('')
        loseFocus(submitCommentButton)
    }

    const deleteComment  = (id: number) => {
        commentList.forEach((comment, i) => {
            const newCommentList = [...commentList]
            if(comment.id === id) {
                newCommentList.splice(i, 1)
                setCommentList(newCommentList)
            }
        })
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={props.avatarUrl} alt=''/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.profession}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedDatetime}
                >
                    { publishedDateRelativeToNow }
                </time>
            </header>

            <div className={styles.content}>
                {
                    props.content.map(pieceOfContent => {
                        switch(pieceOfContent.type) {
                            case 'paragraph':
                                return(
                                    <p key={pieceOfContent.content}>
                                        {pieceOfContent.content}
                                    </p>
                                ) 
                            case 'link':
                                return(
                                    <p key={pieceOfContent.content}>
                                        👉<a href="#">{pieceOfContent.content}</a>
                                    </p>
                                )
                        }
                    })
                } 
                <p className={styles.tags}>
                    {
                        props.tags.map((tag, i) =><a href='#' key={i}>{tag}</a>)
                    }
                </p>
            </div>

            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                <strong>Deixe seu cometário</strong>

                <textarea 
                    placeholder='Escreva um comentário...' 
                    value={newCommentText}
                    onChange={handleNewCommentInput}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type='submit' 
                        ref={submitCommentButton}
                        disabled={newCommentText.length <= 0}
                    >
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {commentList.map(comment => {
                    if(comment.post_id === props.id) {
                        return <Comment 
                            key={comment.id}
                            id={comment.id}
                            author={comment.author}
                            authorId={comment.author_id}
                            avatarUrl={comment.avatar_url} 
                            content={comment.content}
                            onDeleteComment={deleteComment}
                        />
                    }
                })}
            </div>
        </article>
    )
}

export default Post