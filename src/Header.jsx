import { Link } from "react-router-dom";

export default function Header(){
    return <header>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/introduction">Introduction</Link> | 
            <Link to="/contract">Contract</Link>
        </nav>
    </header>;
}