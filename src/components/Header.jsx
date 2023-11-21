function Header(){
    const valor = false

    return (
        <header style={valor ? {color: "blue"} : {color: "red"}}>
            <div>Logo</div>
            <nav>
                Link
            </nav>
        </header>
    )
}

export default Header;