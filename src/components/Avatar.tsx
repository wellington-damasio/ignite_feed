import styles from './Avatar.module.css'

type AvatarProps = {
    hasBorder?: boolean
    src: string
    alt?: string
}

const Avatar = ({ hasBorder = true, src }: AvatarProps) => {
    return(
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt=""
        />
    )
}

export default Avatar