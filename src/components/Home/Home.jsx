import './Home.css';

function Home() {

    return (
        <> 
            <div className='subheader'>
                <img src='./images/landscape3.JPG' />
                <h1>TraizelCraft</h1>
            </div>
            <div className='about-section'>
                <h1>What is TraizelCraft?</h1>
                <p>TraizelCraft is an massive project started by Traizel. 
                    He started the project in 2012 on the Xbox 360 with no intention to be embarking on such a long and incredible journey. 
                    Over the years, TraizelCraft grew and grew, and today, 
                    it is undoubtedly one of the most ambitious and incredibly large projects on the Bedrock edition of Minecraft! 
                    TraizelCraft has tons of secrets and lore to discover. 
                    The world is currently envisioned to be a massive RPG world with an immersive story that will link everything together. 
                    The next update, the DarkReach Update, will do just that. 
                    The update is projected to launch sometime Summer 2021. 
                    Join the Discord and follow TraizelCraft on Twiter and Insta for more updates!</p>
            </div>
            <br />
            <div className='home-page-image'>
                <img src="./images/JungleTree1.JPG" />
            </div>
            <div className='social-media-links-container'>
                <h1>Follow Us!</h1>
                <div className='social-media-links-col'>
                    <div className='social-media-links-row'>
                        <a href="https://discord.com/invite/qWssnBP" target="_blank"><img src='/images/discord.png' /></a>
                    </div>
                    <div className='social-media-links-row'>
                        <a href="https://twitter.com/traizelcraft" target="_blank"><img src='/images/twitter.png' /></a>
                    </div>
                    <div className='social-media-links-row'>
                        <a href="https://www.instagram.com/traizelcraft/" target="_blank"><img src='/images/instagram.png' /></a>
                    </div>
                </div>
                <div className='social-media-links-col'>
                    <div className='social-media-links-row'>
                        <a href="https://www.youtube.com/c/Traizel" target="_blank"><img src='/images/youtube.png' /></a>
                    </div>
                    <div className='social-media-links-row'>
                        <a href="https://traizelcraft-shop.tebex.io/" target="_blank"><img src='/images/shops.png' /></a>
                    </div>
                    <div className='social-media-links-row'>
                        <a href="https://merch.streamelements.com/traizel_gaming" target="_blank"><img src='/images/merchandise.png' /></a>
                    </div>
                </div>
            </div>
            <div className='home-page-image'>
                <img src="./images/Mansion1.JPG" />
            </div>
            <br />
            <div className='videos-container'>
                <h1>Videos</h1>
                <div className='videos-col'>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9GwnmJY7s9I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fXNzRMS1s34" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AXK3EmoT9i4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='videos-col'>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ujSxiUIVdMM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZO3V7P1G-Ag" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='videos-row'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wuho_o1cv9A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <h3>More Videos on our YouTube!</h3>
            </div>
        </>
    );
}

export default Home;