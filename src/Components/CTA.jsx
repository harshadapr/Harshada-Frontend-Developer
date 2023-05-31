import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTA() {
    return (
        <Container>
            <Navbar initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1 }} >
                <img src="https://cdn.worldvectorlogo.com/logos/spacex.svg" alt="spacex-logo" />
                {/* <div>
                    <a href='#'>Home</a>
                    <a href='#searchform'>About</a>
                    <a href='#'>Contact</a>
                </div> */}
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/searchform'>About</Link>
                    <Link to='/contact'>Contact</Link>

                </div>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            </Navbar>
            <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} >
                <h1>Unlocking the Solar System</h1>
                <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
                <button>Learn More</button>
            </Content>
            <CTAfooter>
                <FooterLeft>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </FooterLeft>
                <FooterRight initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1 }} >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWZ3gYBVMWKMltxjAxxjOwa3k_CRWcyr_jknalK823g&usqp=CAU&ec=48600113' />
                    <img src='https://wallpapercrafter.com/sizes/2048x1152/86810-space-x-spaceship-rocket-hd-4k.jpg' />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHnHFdFY0vGUDFjelCzVRIayDvo3fLQLuIfF2vMaIfQ&usqp=CAU&ec=48600113" />
                    <img src="https://c4.wallpaperflare.com/wallpaper/593/348/935/4k-falcon-9-rocket-spacex-cape-canaveral-wallpaper-preview.jpg" />
                </FooterRight>
            </CTAfooter>
        </Container>
    );
}

const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-image: url("/assets/background.jpg");
    background-size: cover;
    /* background-position: center; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

const Navbar = styled(motion.div)`
    width: 100%;
    height: 100px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    
    img{
        width: 150px;
    }
    
    div{

        @media (max-width: 700px){
            display: none;
        }

        display: flex;
        padding-right: 50px;
        gap: 20px;
        font-size: 1.1rem;
        font-weight: 500;
    }

    svg{
        width: 30px;
        height: 30px;
    }

`;

const Content = styled(motion.div)`
    width: 80%;
    max-width: 600px;
    color: white;
    margin-left: 100px;

    @media (max-width: 700px){
        &{
            margin-left: 50px;
        }
    }

    h1{
        font-size: 3rem;
        font-weight: 700;
    }

    p{
        font-size: 1.2rem;
    }

    button{
        background-color: white;
        color: black;
        padding: 10px 20px;
        margin-top: 20px;
        border-radius: 5px;
    }

`;

const CTAfooter = styled(motion.div)`
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;
`;

const FooterLeft = styled(motion.div)`
    display: flex;
    gap: 10px;

    @media (max-width: 800px){
        &{
            display: none;
        }
    }


    svg{
        width: 30px;
        height: 30px;
    }

    span{
        background-color: rgba(255, 255, 255, 0.5);
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

`;

const FooterRight = styled(motion.div)`
    display: flex;
    gap: 10px;
    margin-right: -100px;

    @media (max-width: 800px){
        margin: auto;
    }

    img{
        width: 150px;
        border-radius: 10px;
    }

`;

export default CTA;