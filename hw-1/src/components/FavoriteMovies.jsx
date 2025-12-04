const FavoriteMovies = () => {
  return (
    <div style={{
        border: "2px solid skyblue",
        borderRadius: "10px",
        padding: "1em",
        maxWidth: "300px",
        fontFamily: "Arial",
        textAlign: "left",
        margin: "20px"
    }}>
        <h3>Мої улюблені фільми</h3>
        <ol>
            <li>
                Інтерстеллар
                <img src="/public/assets/interstellar.jpg" alt="interstellar" style={{width:"100%"}}/>
                <button style={{
                    border: "2px solid deepskyblue",
                    borderRadius:"10px",
                    padding: "5px",
                    background: "skyblue",
                    color: "#fff",
                    margin: "15px 0"
                }}>Детальніше</button>
            </li>
            <li>
                Матриця
                <img src="/public/assets/matrix.png" alt="matrix" style={{width:"100%"}}/>
                <button style={{
                    border: "2px solid deepskyblue",
                    borderRadius:"10px",
                    padding: "5px",
                    background: "skyblue",
                    color: "#fff",
                    margin: "15px 0"
                }}>Детальніше</button>
            </li>
        </ol>
    </div>
  )
}

export default FavoriteMovies
