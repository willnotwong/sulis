import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import Anurag from './../img/anurag.png';
import Yuki from './../img/yuki.png';
import Sarah from './../img/sarah.jpg';
import Ari from './../img/ari.png';
import slogan from './../img/slogan.jpg';
import cleanwater from './../img/cleanwater.jpg';
import marketsegment from './../img/marketsegment.jpg';

class AboutUs extends Component {

	constructor(props){
		super(props);
		this.state={activeTab:0};
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					<Grid>
						<Cell col={5}>
							<h2>Who We Are</h2>
							<p>Sulis Water International, Inc. is a social entrepreneurship venture dedicated to addressing the global clean water scarcity.</p>
							<p>When our device was initially conceptualized, it was referred to as the “solar ultraviolet light-induced sterilization array,” abbreviated as the S.U.L.I.S. array. As we iterated and refined the device and underlying technology, the array aspect was dropped, leaving just the acronym “S.U.L.I.S.” As we began approaching commercialization, we sought to develop an identity that captured the essence of our mission, vision, and values in a concise manner.</p>


						</Cell>
						<Cell col={7}>
							<img src={slogan} alt="slogan" width="100%"/>
						</Cell>
					</Grid>
					<Grid>
						<Cell col={12}>
							<hr/>
							<h2>The Meaning of Our Name</h2>
							<p>Our team envisions the company evolving beyond this singular product, however we decided to keep “Sulis” as the name of the company because it combines the functionality of our device with the rich linguistic and cultural histories of several civilizations. Our connection to solar energy is evidenced in the common roots of English sun, Latin sol, and Sanskrit Surya, the Hindu solar deity, to Sulis. In addition, Sulis Minerva was the Romano-British goddess of springs, which represents our connection with water. The Sanskrit prefix su-, meaning good, symbolizes our good intentions and desire to empower and uplift people without access to sanitized water.</p>
							<hr/>
						</Cell>

					</Grid>
				</div>
			)
		}
		else if(this.state.activeTab === 1){
			return(
				<div className="projects-grid">
					<Grid>
						<Cell col={4}>	
							<img
								src={Anurag}
								alt="anurag"
								className="profile-img"
							/>
						</Cell>
						<Cell col={8}>
							<h2>Anurag Modak</h2>
							<h4>Founder, CEO & CFO</h4>
							<p>Anurag Modak is a senior in the Honors College at Rutgers University. He has held multiple leadership roles in student organizations at Rutgers, including in student government and professional societies. In addition, he has extensive research experience in neuroscience and protein engineering and is involved in the development of therapeutics for a neurodegenerative disorder. He has lived in three countries and is fluent in four languages. He uses his background in science and business and strong leadership and organizational skills to guide our company’s efforts towards successful development and distribution of our technology.</p>
						</Cell>
					</Grid>
					<hr/>
					<Grid>
						<Cell col={4}>	
							<img
								src={Yuki}
								alt="yuki"
								className="profile-img"
							/>
						</Cell>
						<Cell col={8}>
							<h2>Yuki Osumi</h2>
							<h4>Founder & CTO</h4>
							<p>Yuki Osumi is a senior in the Honors College at Rutgers University. He has extensive research experience in chemistry and is a published author. His chemical and scientific expertise is essential for ensuring the effectiveness of our product design and aids in overseeing its manufacturing.</p>
						</Cell>
					</Grid>
					<hr/>
					<Grid>
						<Cell col={4}>	
							<img
								src={Sarah}
								alt="sarah"
								className="profile-img"
							/>
						</Cell>
						<Cell col={8}>
							<h2>Sarah Pomeranz</h2>
							<h4>Business Development Consultant</h4>
							<p>Sarah Pomeranz is a senior in the Honors College at Rutgers University. She has extensive experience in entrepreneurship as the founder of several initiatives and organizations at Rutgers as well as considerable leadership experience through her service on multiple student organizations. Her strengths are critical in negotiating business deals, securing strategic partnerships, and overseeing the daily operations of the company. As such, she oversees communications with our stakeholders and guides the development of our company as a viable social entrepreneurship venture.</p>	
						</Cell>
					</Grid>
					<hr/>
					<Grid>
						<Cell col={4}>	
							<img
								src={Ari}
								alt="ari"
								className="profile-img"
							/>
						</Cell>
						<Cell col={8}>
							<h2>Ari Mendelow</h2>
							<h4>Graphic Design Consultant</h4>
							<p>Ari Mendelow is an alumnus of Rutgers University. He has experience working for Cognizant, one of the largest consulting and information technology firms in the world, and for Absolute Medical Equipment as its Director for Web Development. He provides the technical expertise for product design and managing our brand identity, including our marketing campaigns and digital presence, with an air of legitimacy and professionalism.</p>
						</Cell>
					</Grid>
				</div>
			)
		}
		else if(this.state.activeTab === 2){
			return(
				<div className="projects-grid">
					<Grid>
						<Cell col={5}>
							<h2>By supplying clean water, Sulis transforms lives.</h2>
							<p>Sulis is a simple and innovative technology for water sanitation. In many parts of the world, clean water is a luxury that cannot be taken for granted. Water scarcity is a global issue that affects more than 40% of the world population today. Collectively, women and children spend 140 million hours daily collecting water, which does not even account for the time that they spend each day cleaning that water.</p>

						</Cell>
						<Cell col={7}>
							<img src={cleanwater} alt="cleanwater" width="100%"/>
						</Cell>
					</Grid>
					<Grid>

						<Cell col={12}>
							<p> Collecting and cleaning water takes time away from work, school, and caring for family, which locks families in a cycle of poverty. In addition to the economic and safety risks, health is a serious concern. It is devastating to consider that over a thousand children die from a preventable water-related disease every day. There is a desperate need for a safer, more reliable way to access clean water. We need a solution that allows people to clean the contaminated water they do have available.</p>
						</Cell>
						
					</Grid>
					<hr/>
					<Grid>

						<Cell col={7}>
							<img src={marketsegment} alt="marketsegment" width="100%"/>
						</Cell>
						<Cell col={5}>
							
							<h2>Sulis is the solution.</h2>
							<p>We have developed a groundbreaking technology that harnesses the power of sunlight to clean water. Sulis is affordable, sustainably produced, and effective at generating potable water without depending on infrastructure. Our technology eliminates pathogens from the water source, drastically improving the health and wellbeing of those without naturally safe water. By giving individuals the ability to easily clean the water they have nearby with only solar energy, Sulis saves users those long hours collecting the wood and buying the kerosene needed to boil their water. </p>
						</Cell>
					</Grid>
					<Grid>
						<Cell col={12}>
							<p>This enables people to stay in school and at work for more hours, gives them the freedom to start their own businesses, and allows them to improve their own standard of living, rather than depending on others. In essence, Sulis does more than provide clean water, it empowers. </p>
						</Cell>
					</Grid>
					<hr/>
				</div>
			)
		}
	}

	

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Who We Are</Tab>
					<Tab>Meet the Team</Tab>
					<Tab>Goals</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
					
			</div>
		)
	}
}

export default AboutUs;