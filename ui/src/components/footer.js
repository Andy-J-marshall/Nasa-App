import githubIcon from '../assets/github.png';

function Footer() {
    return (
        <footer id='footer'>
            <a class='footer-links' href='https://www.github.com/andy-j-marshall'>
                <img src={githubIcon} alt='Github link' />
            </a>
            <p>@Andy-J-Marshall</p>
        </footer >
    );
}

export default Footer;
