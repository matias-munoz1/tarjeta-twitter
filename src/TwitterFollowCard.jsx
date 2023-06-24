import { useState } from "react"

export function TwitterFollowCard({formatUserName, children, userName='unknow', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
      
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following' :
    'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        
            <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
            alt="El avatar mio" 
            src={`https://unavatar.io/github/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong> {children} </strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    {texto}
                </button>
            </aside>
        </article>
        )
}