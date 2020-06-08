import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'
import sulisbanner from './img/sulisbanner.png';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header 
                className="header-color" 
                title={<Link 
                            style={{textDecoration:'none',color:'white'}} to="/sulis">
                            <img
                                src={sulisbanner}
                                alt="avatar"
                                className="avatar-img"
                            />  
                        </Link>} 
                scroll
            >
                <Navigation>
                    <Link to="/sulis/aboutus">About Us</Link>

                    <Link to="/sulis/technology">Technology</Link>
                    <a href="https://www.indiegogo.com/projects/sulis-making-water-scarcity-a-thing-of-the-past#/" rel="noopener noreferrer" target="_blank">IndieGoGo</a>
                    <Link to="/sulis/news">News</Link>
                    <Link to="/sulis/contact">Contact</Link>
                    {/*<Link to="/contact">Contact</Link>*/}
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none',color:'grey'}} to="/sulis">SULIS</Link>}>
                <Navigation>
                    <Link to="/sulis/aboutus">About Us</Link>

                    <Link to="/sulis/technology">Technology</Link>
                    <a href="https://www.indiegogo.com/projects/sulis-making-water-scarcity-a-thing-of-the-past#/" rel="noopener noreferrer" target="_blank">IndieGoGo</a>
                    <Link to="/sulis/news">News</Link>
                    <Link to="/sulis/contact">Contact</Link>
                    {/*<Link to="/contact">Contact</Link>*/}
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content">
                    <Main/>
                </div>
                <Footer size="mini" className="footer">
                    <FooterSection type="middle">
                        <FooterLinkList>
                            <Link to="/sulis/privacy">Privacy</Link>
                            <Link to="/sulis/terms">Terms</Link>
                            <a style={{ fontSize:'16px',color:'#424242' }}>William Wong</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Content>
            
        </Layout>     
    </div>

  );
}

export default App;
