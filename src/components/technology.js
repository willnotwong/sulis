import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Technology extends Component {	

	render() {
		return(
			<div className="technology-grid">
				<Grid>
					<Cell col={12}>
						<h2>The Sulis Device</h2>
						<p>Our first product released is a solar-activated water sanitization device that decomposes organic contaminants and neutralizes pathogenic species in a container of water. The Sulis device consists of a 10-liter plastic container and proprietary metal catalyst insert. When the device is placed outside without overhead obstruction, sunlight activates the catalyst to sanitize the water in the container. To meet the needs of the Indian market, our product was designed to decrease sensitivity to turbidity, to operate on a large scale, and to retain functionality during extended periods of cloudy weather, such as during the monsoon season in South Asia. In many parts of India, the municipal water supply is restricted to certain hours of the day, so families are already accustomed to storing water in large containers similar to ours. Thus, Sulis easily integrates into our users’ daily routines, enabling rapid cultural adoption.</p>
						<hr/>
						<h2>Competitive Advantage</h2>
						<p>Existing water purification technologies and methodologies, including reverse osmosis, filtration, electrical ultraviolet light disinfection, solar disinfection, and chemical treatments are often expensive and/or unsustainable in the context of developing nations. In addition, demineralized water from reverse osmosis and chemically-treated water can often be injurious to health. More importantly, the majority of these technologies and methodologies were developed with the goal of producing drinking water at the level of the individual. As such, they have significant disadvantages for large-scale use in developing nations.</p>
						<p>The Sulis technology improves upon the aforementioned existing technologies and methodologies by reducing cost and increasing sustainability. We recognize that clean water is not only required for drinking, but also for washing dishes, washing clothes, washing hands, and so on. We also recognize that clean water is required on the scale of an entire village. It is for this reason that we have designed our device to contain a substantial volume of water, to decrease sensitivity to turbidity, and to retain functionality during extended periods of cloudy or stormy weather, such as during the monsoon season in South Asia. Unlike other water sanitation technologies, Sulis does not depend on replaceable parts and does not require any regular maintenance for over five years.</p>
						<hr/>
							
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Technology;