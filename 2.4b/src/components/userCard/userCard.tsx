import "./userCard.css"

interface UserCardProps {
    name : string;
    age : number;
    statut : string;
}
function isOnline(user : UserCardProps) : boolean {
    return (user.statut === "online")
}
const UserCard = (props : UserCardProps) =>{
    return(
        <div>
            <h1 className="nom-user"> Nom : {props.name}</h1>
            <h2 className="age-user"> Age : {props.age}</h2>
            {isOnline(props) ?(
                <div className="online">En ligne</div>
            ) : (
                <div className="offline">Hors Ligne</div>
            )}
        </div>  
    )
}




export default UserCard