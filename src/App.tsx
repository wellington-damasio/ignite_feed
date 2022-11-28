import Header from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

type Content = {
  type: 'paragraph' | 'link'
  content: string
}

type PostProps = {
  key: number
  id: number
  author: string
  profession: string
  avatar_url: string
  content: Content[]
  tags: string[]
  publishedAt: Date
}

const posts = [
  {
    id: 1,
    author: 'Larissa Nogueira',
    profession: 'Frontend Developer',
    avatar_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eum! Vero eum animi consequuntur dignissimos aperiam quisquam error mollitia blanditiis ea.'},
      {type: 'paragraph', content: 'Veniam quidem asperiores molestiae temporibus illum cupiditate impedit dolor?'}
    ],
    tags: ['#novoprojeto', '#ignite'],
    publishedAt: new Date('2021-12-03 20:00:00')
  },
  {
    id: 2,
    author: 'Felipe Smith',
    profession: 'DevOps Engineer',
    avatar_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eum! Vero eum animi consequuntur dignissimos aperiam quisquam error mollitia blanditiis ea.'},
      {type: 'paragraph', content: 'Veniam quidem asperiores molestiae temporibus illum cupiditate impedit dolor?'},
      {type: 'paragraph', content: 'Consequuntur aperiam at eius ipsa recusandae repellendus!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus, id adipisci ratione veniam odio non atque esse quasi, similique quam recusandae perspiciatis.'},
    ], 
    tags: ['#bootstrap', '#react', '#lotsoferrors'],
    publishedAt: new Date('2021-11-10 20:00:00')
  },
  {
    id: 3,
    author: 'Wellington Damasio',
    profession: 'Frontend Engineer',
    avatar_url: 'https://github.com/wellington-damasio.png',
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eum! Vero eum animi consequuntur dignissimos aperiam quisquam error mollitia blanditiis ea.'},
      {type: 'paragraph', content: 'Veniam quidem asperiores molestiae temporibus illum cupiditate impedit dolor?'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus, id adipisci ratione veniam odio non atque esse quasi, similique quam recusandae perspiciatis.'},
    ],
    tags: ['#react', '#nodejs', '#complexapplication'],
    publishedAt: new Date('2022-05-13 20:00:00')
  },
  {
    id: 4,
    author: 'Manoel Gonçalves',
    profession: 'Backend Engineer',
    avatar_url: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}
    ],
    tags: ['#nodejs', '#rubyonrails', '#backend'],
    publishedAt: new Date('2022-07-18 20:00:00')
  },
  {
    id: 5,
    author: 'Miguel Miliani',
    profession: 'Tech Lead',
    avatar_url: 'https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    content: [
      {type: 'paragraph', content: 'Lorem adipisicing elit. Odio, eum! Vero eum animi consequuntur dignissimos aperiam quisquam error mollitia blanditiis ea.'},
      {type: 'paragraph', content: 'Veniam  illum cupiditate impedit dolor?'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus, id adipisci ratione veniam odio non atque esse quasi, similique quam recusandae perspiciatis.'},
      {type: 'paragraph', content: 'Officiis, nostrum dignissimos voluptatum dolorum voluptate magni amet, vitae repellat natus harum labore culpa architecto illo perspiciatis. Sit aspernatur praesentium cum culpa!'},
    ],
    tags: ['#leadership', '#teamplay', '#letsgo'],
    publishedAt: new Date('2022-11-09 13:44')
  }
] as PostProps[]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map((post) => {
              return(
                <Post
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  profession={post.profession}
                  avatarUrl={post.avatar_url}
                  content={post.content}
                  tags={post.tags}
                  publishedAt={post.publishedAt}
                />
              ) 
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
