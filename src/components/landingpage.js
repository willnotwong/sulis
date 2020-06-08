import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div>
				{/*<Grid className="landing-grid">
					<Cell col={4}>
						<img
							src={sulisbanner}
							alt="avatar"
							className="avatar-img"
						/>						
						
					</Cell>
					<Cell col={12}>
						<iframe width="80%" height="450" src="https://www.youtube.com/embed/9BeS1srFZho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</Cell>
				</Grid>*/}
				
				<Grid className="landing-grid">
					<Cell col={12}>
						<div className="banner-text">
							{/*<h1>Making Water Scarcity a Thing of the Past</h1>*/}
							{/* <br/><hr/> */}
							<p>Sulis, Making Water Scarcity a Thing of the Past</p>
							<hr/>
							<div className="video-grid">
								<iframe width="80%" height="450" src="https://www.youtube.com/embed/9BeS1srFZho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							
							<div className="social-links">
								{/* fb */}
								<a href="https://www.facebook.com/suliswaterinternational/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-facebook" aria-hidden="true" />
								</a>
								{/* insta */}
								<a href="https://www.instagram.com/suliswaterinternational/?hl=en" rel="noopener noreferrer" target="_blank">
									<i class="fa fa-instagram" aria-hidden="true" />
								</a>
								{/* twtr */}
								<a href="https://twitter.com/suliswater" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-twitter" aria-hidden="true" />
								</a>
							</div>
							
							<hr/>
							<p>Enabling communities to easily clean water with an affordable and sustainable technology.</p>
						</div>
					</Cell>
				</Grid>
				<Grid className="landing-grid">
					<br/>
				</Grid>
			</div>
		)
	}
}

export default Landing;