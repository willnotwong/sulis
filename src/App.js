import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import cover from './img/cover.png';
import Main from './components/main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to="/sulis">SULIS</Link>} scroll>
                <Navigation>
                    <Link to="/aboutus">About Us</Link>

                    <Link to="/technology">Technology</Link>
                    <a href="https://www.indiegogo.com/projects/sulis-making-water-scarcity-a-thing-of-the-past#/" rel="noopener noreferrer" target="_blank">IndieGoGo</a>
                    {/*<Link to="/contact">Contact</Link>*/}
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none',color:'grey'}} to="/sulis">SULIS</Link>}>
                <Navigation>
                    <Link to="/aboutus">About Us</Link>

                    <Link to="/technology">Technology</Link>
                    <a href="https://www.indiegogo.com/projects/sulis-making-water-scarcity-a-thing-of-the-past#/" rel="noopener noreferrer" target="_blank">IndieGoGo</a>
                    {/*<Link to="/contact">Contact</Link>*/}
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
            <Footer size="mini" className="footer">
                <FooterSection type="left">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                        <a style={{ fontSize:'16px',color:'#424242' }} href="#">William Wong</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>               
        </Layout>     
    </div>

  );
}

export default App;
