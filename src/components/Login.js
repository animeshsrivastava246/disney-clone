import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserPhoto, selectUserName, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); //const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                navigate("/home");
            }
        })
    }, [userName]);

    const handleAuth= () => {
        if(!userName) {
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                navigate("/");
            }).catch((err) => {
                alert(err.message);
            });
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="This is an image"/>
                    <SignUp onClick={handleAuth}>JOIN</SignUp>
                    <Discription>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Discription>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="This is an image"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
        background-color: #0483ee;
    }
`;

const Discription = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    vertical-align: bottom;
    display: inline-block;
    width: 100%;
`;

export default Login;
