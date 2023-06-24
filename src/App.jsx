import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const formatUserName = (userName) => `@${userName}`


export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard 
        
        formatUserName={formatUserName} 
         userName="code-mochi" >
        Matias Muñoz
        </TwitterFollowCard>
        
        <TwitterFollowCard
        formatUserName={formatUserName} 
        initialIsFollowing={true} userName="NatachaIrken" 
        >
        Victoria Saldaña
        </TwitterFollowCard>
        
        <TwitterFollowCard
        
        formatUserName={formatUserName}
        userName="midudev">
        Miguel Duran
        </TwitterFollowCard>
        </section>
    )
}