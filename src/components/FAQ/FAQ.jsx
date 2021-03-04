import { useHistory } from 'react-router-dom';

function Faq() {

    const history = useHistory();

    return (
        <div className='policy-section sign-up'>
            <div className='header'>
                <h1>FAQ</h1>
                <div className='policy-page-image'>
                    <img src="./images/Townhall1.JPG" />
                </div>
                <br />
                <br />
                <div>
                    <h1 className="text-success">Frequently Asked Questions</h1>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#1</div>
                        <div className="card-body">
                            <h4 className="card-title">WHAT IS THE PRIVACY POLICY?</h4>
                            <p className="card-text">You can view our Privacy Policy by clicking <span onClick={() => {history.push('/privacy-policy')}} className='forum-item'><u>here</u></span>.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#2</div>
                        <div className="card-body">
                            <h4 className="card-title">IS TRAIZELCRAFT ON A SERVER? HOW DO I JOIN?</h4>
                            <p className="card-text">TraizelCraft at the moment is held on a Bedrock Realm by Traizel. If you play on Java only, unfortunately there is no support for Java yet. To join the realm, simply join the Discord and head to the FAQ section to get the Realm code. The code will often change so we do not post it here.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#3</div>
                        <div className="card-body">
                            <h4 className="card-title">HOW DO I APPLY FOR STAFF?</h4>
                            <p className="card-text">First, you must be a member of the Discord. Second, have a passion for the community, TraizelCraft, and have met any other requirements posted in the Applications Channel on the Discord. If you meet the requirements, you may apply by filling out the Application forum. New members can only apply for Builder at the moment, and builders then may be promoted. More experienced members may apply for higher positions at the start.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#4</div>
                        <div className="card-body">
                            <h4 className="card-title">WHAT ARE YOUR PLANS WITH TRAIZELCRAFT?</h4>
                            <p className="card-text">TraizelCraft was originally a fun building project for Traizel. When it became a bigger world, he decided to open it up to the public to show it off. Eventually, it naturally turned into a small server. Traizel never intended TraizelCraft to be a server, or even have a in depth RPG gamemode, which is the main game of TraizelCraft. As of right now, Traizel is keeping most of his future plans a secret, because he loves to surprise his community with new ideas and changes he provides. Join the discord for future updates, and teasers!</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#5</div>
                        <div className="card-body">
                            <h4 className="card-title">IF I DOWNLOAD A VERSION OF TRAIZELCRAFT, CAN I USE IT TO HOST MY OWN SERVER?</h4>
                            <p className="card-text">Yes! You may explore TraizelCraft to all your worldly desires, as well as host it and run it as an owner! We provide a template with the most recent available download for players who would like to run TraizelCraft as an owner. Please refer to the Privacy Policy before downloading any worlds or hosting TraizelCraft.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#6</div>
                        <div className="card-body">
                            <h4 className="card-title">CAN I USE THE TRAIZELCRAFT MOD ON MY OWN WORLD/SERVER?</h4>
                            <p className="card-text">Yes! You may download any of Traizel's mods and use them with any of your own creations. We ask that you credit him if you do, and do not claim the mods as your own.</p>
                        </div>
                    </div>
                    <br />
                    <div className="card border-info mb-3">
                        <div className="card-header">#7</div>
                        <div className="card-body">
                            <h4 className="card-title">I WANT TO GET SOME HELP FROM TRAIZEL, BUT HE WON'T RESPOND!</h4>
                            <p className="card-text">Traizel tries his hardest to help everyone who needs it, but he can become very busy. If he is not responding or continuously can not help, understand that he may be preoccupied, but will help later when he has the time.</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Faq;