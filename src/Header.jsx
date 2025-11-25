import { Link } from "react-router-dom";

export default function Header(){
    return <header>
        <h1>ITIS3135 | James Karwowski-Mulready's | Jumbo King-Mackerel</h1>
        <nav>
            <Link to="/">Home</Link>-|-
            <Link to="/introduction">Introduction</Link>-|-
            <Link to="/contract">Contract</Link>-|-
            <Link to="/all-introductions">All Introductions</Link>
        </nav>
    </header>;
}