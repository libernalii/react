const MiniBlog = () => {
  return (
    <div style={{
        border: "2px solid grey",
        borderRadius: "10px",
        padding: "1em",
        maxWidth: "300px",
        fontFamily: "Arial",
        textAlign: "left",
        margin: "20px"
    }}>
        <h2>Мій перший блог-пост</h2>
        <p>Сьогодні я почала вивчати React і вже створила свій перший компонент!</p>
        <img src="/public/assets/blog.png" alt="picture" style={{width:"100%"}}/>
        <ul>
            <li>React</li>
            <li>JSX</li>
            <li>Frontend</li>
        </ul>
        <a href="https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwj3qrn-76ORAxXCT5EFHbFKCdAYACICCAEQABoCbHI&co=1&ase=2&gclid=Cj0KCQiA_8TJBhDNARIsAPX5qxS6fwDRczhw6NZBuv1jHQMHazWW3399cnNsZR4UDXerWj_7vhm32S0aApPnEALw_wcB&cid=CAASugHkaEede4mufymF0jmHANFhrByj7-fqfdi3tuBlZhonty2mpqRGvru4zc6XCx4UYzJBzWfcQoU4TylefQxNdgBZdx4ZTjSHf72U4-R_-kDgjbWQzU_ZDjrM75hA5DJx48xdgRgXoA25SftOjYqi1Cm8vdNQjN2EsB1RoqYTk6qHQ0babt7l28OwGzXlyY_HxnKnALS694-YElllaQySlj3t2IlAX9baTATrdVDTPUVCmu7F8FcYHqChb7A&cce=2&category=acrcp_v1_32&sig=AOD64_3QcNQjXNOv7bu_oLPWu5Hw9OCTaA&q&nis=4&adurl=https://tldraw.dev/?utm_source%3Dgoogle%26utm_medium%3Dsearch%26utm_campaign%3Dsearch_nonbranded_sdk%26gad_source%3D1%26gad_campaignid%3D22862053414%26gbraid%3D0AAAABAVDjv7WjtOK_af1iBTL6JyVq6P4r%26gclid%3DCj0KCQiA_8TJBhDNARIsAPX5qxS6fwDRczhw6NZBuv1jHQMHazWW3399cnNsZR4UDXerWj_7vhm32S0aApPnEALw_wcB&ved=2ahUKEwjc-bP-76ORAxVxLBAIHfrpI5wQ0Qx6BAgMEAE">Документація React</a>
    </div>
  )
}

export default MiniBlog
