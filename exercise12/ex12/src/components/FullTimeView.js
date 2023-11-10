import '../../public/FullTimeView.css';

function FullTimeView() {
    return (
        <>
            <div style={{ marginLeft: "150px" }}>
                <img src={'ss.jpg'} alt='Img' style={{width: '100%', height:'400px'}}></img>
                <div className='flex-container'>

                    <div>
                        <article>
                            <h1>Amazon</h1>
                            <p>Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.</p>
                        </article>
                    </div>
                    <div>
                        <article>
                            <h1>Cisco</h1>
                            <p>Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.</p>
                        </article>
                    </div>
                    <div>
                        <article>
                            <h1>IBM</h1>
                            <p>For more than a century, IBM has been a global technology innovator, leading advances in AI, automation and hybrid cloud solutions</p>
                        </article>
                    </div>

                </div>

            </div>

        </>
    )
}

export default FullTimeView;