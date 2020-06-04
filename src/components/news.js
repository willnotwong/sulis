import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import NewsCard from './newscard.js';

class News extends Component {	

	render() {
		return(
			<div>
				<div className="news-grid">
					<Grid>
						<Cell col={12}>
							<h2>News</h2>
							<hr/>
								
						</Cell>
					</Grid>
				</div>
				
				<div className="card-grid">
					<Grid>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="Rutgers Business School - Winning Rutgers Hult Prize"
								description="SULIS: Redefining Liquid Sunshine wins Hult Prize at Rutgers Competition"
								link="https://www.business.rutgers.edu/news/sulis-redefining-liquid-sunshine-wins-hult-prize-rutgers-competition"
								background="https://www.business.rutgers.edu/sites/default/files/styles/hero_detail_1200x500_/public/images/news/sulis-hult-hero_0.jpg?h=f97871b5&itok=TNSNKZmX"
							/>
						</Cell>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="ROI-NJ"
								description="Rutgers, Princeton make Hult Prize regional competition; potential to win $1M in seed cash"
								link="https://www.roi-nj.com/2018/03/16/education/rutgers-princeton-make-hult-prize-regional-competition-potential-to-win-1m-in-seed-cash/"
								background="https://i1.wp.com/www.roi-nj.com/wp-content/uploads/2018/03/Hult-Prize-2018-crop.jpg?fit=800%2C470&ssl=1"
							/>
						</Cell>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="New Jersey Tech Weekly"
								description="New Jersey startup Welnys takes January Bullpen Pitch Contest at Rutgers"
								link="https://njtechweekly.com/new-jersey-startup-welnys-takes-january-bullpen-pitch-contest-at-rutgers/"
								background="http://www.njtechweekly.com/media/cache/photos/TechLaunch_BullPen_7_judges_imageDetailSize.jpg"
							/>				
						</Cell>
					</Grid>

				</div>

				{/*row 2*/}
				<div className="card-grid">
					<Grid>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="The Tab"
								description="Rutgers becomes only school to have two winning Hult Prize teams"
								link="https://thetab.com/us/rutgers/2018/04/06/rutgers-becomes-only-school-to-have-two-winning-hult-prize-teams-13683"
								background="https://media.thetab.com/blogs.dir/110/files/2018/03/redcarpetpremiere-redcarpet-premiere-team-speech-pressconference-crowd-audience-person-people-human-600x284.jpeg"
							/>
						</Cell>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="Rutgers Today"
								description="The challenge: Find a way to harness the power of energy to transform the lives of 10 million people in less than a decade."
								link="https://www.rutgers.edu/news/rutgers-teams-advance-hult-prize-competition-after-regional-victories#.WvCjZi-ZNN3"
								background="https://www.rutgers.edu/sites/default/files/styles/max_width_embed_1024_1x/public/legacy-inline/2018/Apr/SulisHighRes.jpg?itok=Rpzo-DDV"
							/>
						</Cell>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="The Daily Targum"
								description="2 student groups from Rutgers win Hult Prize Regional Competition with new technology to approach water scarcity"
								link="https://www.dailytargum.com/article/2018/03/2-student-groups-from-rutgers-win-hult-prize-regional-competition-with-new-technology-to-approach-water-scarcity"
								background="https://snworksceo.imgix.net/rdt/82f50038-d353-4fc5-85b0-a6a3b96247f7.sized-1000x1000.jpg?w=1000"
							/>				
						</Cell>
					</Grid>

				</div>

				{/* row 3 */}
				<div className="card-grid">
					<Grid>
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="Rutgers Business School - Sulis Crowdfunding"
								description="The Sulis team is crowdfunding to pay for a pilot of their water purification system in India next month. It’s another step in the team's quest for the $1 million Hult Prize."
								link="https://www.business.rutgers.edu/news/putting-business-idea-test"
								background="https://www.business.rutgers.edu/sites/default/files/styles/hero_detail_1200x500_/public/images/news/Sulisteam-crowdfundingstory-HERO.jpg?h=526e4b02&itok=N8LAdQEO"
							/>
						</Cell>
						
						<Cell col={4} className="cardStyle">
							<NewsCard
								title="Gujarati Local News"
								description="12 લિટર ગંદુ પાણી સૂર્યઊર્જાથી 7 કલાકમાં ચોખ્ખું થઇ શકે"
								link="https://www.divyabhaskar.co.in/news/UGUJ-MEH-OMC-MAT-latest-mehsana-news-030543-2331359-NOR.html"
								background="https://i9.dainikbhaskar.com/thumbnails/730x548/images/betaimg/no-image-found_divya.jpg"
							/>				
						</Cell>

						<Cell col={4} className="cardStyle">
							<NewsCard
								title="More to Come"
								description="Check back soon!"
							/>
						</Cell>
					</Grid>

				</div>
			</div>
		)
	}

}

export default News;