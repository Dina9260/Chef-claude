import chefCloud from "../images/chef-claude-icon.png";
export default function Header(){
    return (
        <header>
            <img src={chefCloud} alt="chefCloud"/>
            <h1>Chef Claude</h1>
        </header>
    )
}