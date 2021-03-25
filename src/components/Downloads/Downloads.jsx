import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Faq() {

    const history = useHistory();

    return (
        <div className='policy-section'>
            <div className='header'>
                <h1>Downloads</h1>
                <div className='news-page-image'>
                    <img src="./images/Darkreach1.JPG" />
                </div>
            </div>
            <div className='sign-up'>
                <br />
                <br />
                <h1>Traizel's Addons</h1>
                <h4>All of these Add-ons are made by Traizel and available for download!</h4>
                <Container>
                    <Row>
                        <Col><h5 className="text-info">Man Hunt Mod</h5>
                            <p>Traizel's Mod for Man Hunt: A gamemode by the Famous YouTuber- Dream!</p>
                            <a href="https://www.mediafire.com/file/kmbhwhx5fd10z5e/Traizel%2527s_ManHunt.mcpack/file" className="text-warning">Download</a></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><h5 className="text-info">TraizelCraft Mod</h5>
                            <p>This is the mod that Traizel uses in the current version of TraizelCraft! Please note that the music is copyright by Epidemic Sounds. A subscription to them is required to use their music.</p>
                            <a href="https://www.mediafire.com/file/lro4lcxpdh1a4cv/TraizelCraft_Mod.zip/file" className="text-warning">Download</a></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><h5 className="text-info">Hide N Seek</h5>
                            <p>Traizel's Hide N Seek Add-On that allow ANYTHING to be turned into a Hide N Seek map! ANYTHING!</p>
                            <a href="https://www.mediafire.com/file/dk0of9oklgz7mhi/Traizel%2527s_HideNSeek.mcpack/file" className="text-warning">Download</a></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><h5 className="text-info">Anti-Hack Mod</h5>
                            <p>Traizel's Anti Hack Mod for Minecraft Bedrock. Use this on your world/server to manage and protect from cheaters and hackers!</p>
                            <a href="https://www.mediafire.com/file/bi2y2q0fglpi8xa/Anti_Hack.mcpack/file" className="text-warning">Download</a></Col>
                    </Row>
                </Container>
                <br />
                <h1>TraizelCraft Downloads</h1>
                <h4>Download any version of TraizelCraft as early as 2014!</h4>
                <p>By downloading any TraizelCraft Network™ content, you agree to the TraizelCraft Network™ <span onClick={() => { history.push('/privacy-policy') }} className='forum-item'><u>Privacy Policy</u></span> and that this content is not your property, and you will not claim these as your own or anything of similar nature. Please note that the current version of TraizelCraft is not available for download. Join Traizel's Realm to play the current version!</p>
            <Container className="traizelcraft-downloads">
                <Row>
                    <Col><h5 className="text-success">TraizelCraft Template</h5>
                        <p>This version is completely reset and data wiped! It is meant if you want to have a fresh copy to use for hosting a server or world yourself! Traizel has included some tools to help you learn how to manage TraizelCraft as an owner. This version is using the 3.3 Update.</p>
                        <a href="https://www.mediafire.com/file/o2a6uso4wkalduc/TraizelCraft_3.3_Template.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                    <div className='downloads-page-image'>
                        <img src="./images/Template.webp" />
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/Java.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">TraizelCraft for Java 1.16</h5>
                        <p>This version has been converted to Java Edition Minecraft! It is a bit buggy as the world is meant for Bedrock. There is no purpose beyond enjoying the pure beauty that is to come when you see TraizelCraft with high render distance an a fancy RTX Shader! Enjoy!</p>
                        <a href="https://www.mediafire.com/file/wxllcezr7zkzldn/TraizelCraft_3.3_Java.zip/file" className="text-warning">Download</a></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-success">TraizelCraft 3.3- RPG Update</h5>
                        <p>This is the update that turned TraizelCraft into a much more RPG world! This update added a complex leveling system and tons of secrets to TCraft! This update finished during the beginning of Season 4.</p>
                        <a href="https://www.mediafire.com/file/7tszf3wqbt6zdyo/TraizelCraft_3.3-_RPG_Update.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/RPGUpdate.webp" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/Explorers3.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">TraizelCraft 3.2- Explorer's Update 3</h5>
                        <p>This update was the last of the Explorer's updates. The main focus of the Explorer's updates were to add much more to "explore" in TraizelCraft. The update was aimed to add more zones and loot, so players would never get tired of playing.</p>
                        <a href="https://www.mediafire.com/file/jyjlzzgbzh3cnyb/TraizelCraft_3.2-_Explorer%2527s_Update_3.mcworld/file" className="text-warning">Download</a></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-success">TraizelCraft 3.1.9- End of Season 3</h5>
                        <p>This is NOT an update, but a version at which took place during the very end of Season 3. You may want to download this if you want to see the end of the Factions map in season 3, or even visit your old base!</p>
                        <a href="https://www.mediafire.com/file/3kus706blnynute/TraizelCraft_3.1.9-_End_of_Season_3.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/EOS3.webp" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/Explorers2.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">TraizelCraft 3.1- Explorer's Update 2</h5>
                        <p>This update is the second update for the Explorer's Update. This update added several more zones and loot to the table of TraizelCraft, and was focused on keeping players busy while playing TraizelCraft!</p>
                        <a href="https://www.mediafire.com/file/dkriurlzfsfd6x3/TraizelCraft_3.1-_Explorer%2527s_Update_2.mcworld/file" className="text-warning">Download</a></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-success">TraizelCraft 3.0.9- End of Season 2</h5>
                        <p>This is NOT an update, but a version at which took place at the very end of season 2. You may want to download this if you want to see the end of the Factions map in season 2, or even visit your old base!</p>
                        <a href="https://www.mediafire.com/file/0q2uxmx164tggpd/TraizelCraft_3.0.9-_End_of_Season_2.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/EOS2.webp" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/Explorers1.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">TraizelCraft 3.0- Explorer's Update</h5>
                        <p>This is the first update for Explorers! This update is for people who love the world of TraizelCraft and how vast it can be. This update is aimed to add much more to the land and loot table!</p>
                        <a href="https://www.mediafire.com/file/wy4ce3ymvzh8whx/TraizelCraft_3.0-_Explorer%2527s_Update.mcworld/file" className="text-warning">Download</a></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-success">TraizelCraft 2.9- The Variety Update</h5>
                        <p>This update added a ton more to TraizelCraft in general, hense the name the variety update. This update improved factions, the rpg world, and several other quality of life fixes. TraizelCraft after this update was a lot smoother!</p>
                        <a href="https://www.mediafire.com/file/dcxgwhex64kdnbx/TraizelCraft_2.9-_Variety_Update.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/VarietyUpdate.webp" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/RealmUpdate.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">TraizelCraft 2.8- The Realm Update</h5>
                        <p>This update is the update that brought TraizelCraft onto the realm! It allowed for the world to "reset", meaning the loot would refill, and players could not grief it, so it could sustain itself on a realm forever! This update is estimated to have taken place early 2018. This is also around the time of Season 0: The first unofficial season of TraizelCraft.</p>
                        <a href="https://www.mediafire.com/file/zjru1wb9rmg78wi/TraizelCraft_2.8-_Realm_Update.mcworld/file" className="text-warning">Download</a></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-success">TraizelCraft 2.7- Pre Realm</h5>
                        <p>This update is the version several months before Traizel made it compatible with the realm. If you read the "Building TCraft" book in game, this update was just around the end of the "Mini Games Days" when Traizel decided to put it onto a realm, but before the world could support it.</p>
                        <a href="https://www.mediafire.com/file/qy5z4uk593ov7wu/TraizelCraft_2.7-_Pre_Realm.mcworld/file" className="text-warning">Download</a></Col>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/PreRealm.webp" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='downloads-page-image'>
                            <img src="./images/EarlyTCraft.webp" />
                        </div>
                    </Col>
                    <Col><h5 className="text-success">Early TraizelCraft</h5>
                        <p>This is the earliest version of TraizelCraft that Traizel has ever been able to recover. There is hopes that there are copies older on an Xbox 360 somewhere, but for now, this is it. This version is from 2014!! That is about 2 years into the project! Enjoy!</p>
                        <a href="https://www.mediafire.com/file/e9ws2unja5laz75/Early_TraizelCraft.mcworld/file" className="text-warning">Download</a></Col>
                </Row>
            </Container>
            </div>
            <div className='white-space'><h1>-</h1></div>
        </div>
    );
}

export default Faq;