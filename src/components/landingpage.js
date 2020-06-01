import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import sulisbanner from './../img/sulisbanner.png';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin:'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src={sulisbanner}
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Making Water Scarcity a Thing of the Past</h1>
							<hr/>
							<p>Enabling communities to easily clean water with an affordable and sustainable technology.</p>
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
						</div>
						
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;