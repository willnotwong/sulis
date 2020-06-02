import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
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
						<Cell col={4}>
							<NewsCard
								title="Rutgers Business School - Winning Rutgers Hult Prize"
								description="SULIS: Redefining Liquid Sunshine wins Hult Prize at Rutgers Competition"
								link="https://www.business.rutgers.edu/news/sulis-redefining-liquid-sunshine-wins-hult-prize-rutgers-competition"
							/>
						</Cell>
						<Cell col={4}>
							{/* Card 2 */}
							<Card shadow={5} style={{minWidth: '450'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i1.wp.com/www.roi-nj.com/wp-content/uploads/2018/03/Hult-Prize-2018-crop.jpg?fit=800%2C470&ssl=1) center/cover'}}>ROI-NJ</CardTitle>
								<CardText>
									<p style={{color:'black',fontSize:'20px'}}>ROI NJ</p>
									Rutgers, Princeton make Hult Prize regional competition; potential to win $1M in seed cash
								</CardText>
								<CardActions border>
									<Button colored style={{float:'right'}} href="https://www.roi-nj.com/2018/03/16/education/rutgers-princeton-make-hult-prize-regional-competition-potential-to-win-1m-in-seed-cash/">Read More</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>	
						</Cell>
						<Cell col={4}>
							{/* Card 3 */}
							<Card shadow={5} style={{minWidth: '450'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.njtechweekly.com/media/cache/photos/TechLaunch_BullPen_7_judges_imageDetailSize.jpg) center/cover'}}>New Jersey Tech Weekly</CardTitle>
								<CardText>
									New Jersey startup Welnys takes January Bullpen Pitch Contest at Rutgers
								</CardText>
								<CardActions border>
									<Button colored style={{float:'right'}} href="https://njtechweekly.com/new-jersey-startup-welnys-takes-january-bullpen-pitch-contest-at-rutgers/">Read More</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>					
						</Cell>
					</Grid>

				</div>

				<div className="card-grid">
					<Grid>
						<Cell col={4}>
							<NewsCard
								title="Rutgers Business School - Winning Rutgers Hult Prize"
								description="SULIS: Redefining Liquid Sunshine wins Hult Prize at Rutgers Competition"
								link="https://www.business.rutgers.edu/news/sulis-redefining-liquid-sunshine-wins-hult-prize-rutgers-competition"
							/>
						</Cell>
						<Cell col={4}>
							{/* Card 2 */}
							<Card shadow={5} style={{minWidth: '450'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i1.wp.com/www.roi-nj.com/wp-content/uploads/2018/03/Hult-Prize-2018-crop.jpg?fit=800%2C470&ssl=1) center/cover'}}>ROI-NJ</CardTitle>
								<CardText>
									Rutgers, Princeton make Hult Prize regional competition; potential to win $1M in seed cash
								</CardText>
								<CardActions border>
									<Button colored style={{float:'right'}} href="https://www.roi-nj.com/2018/03/16/education/rutgers-princeton-make-hult-prize-regional-competition-potential-to-win-1m-in-seed-cash/">Read More</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>	
						</Cell>
						<Cell col={4}>
							{/* Card 3 */}
							<Card shadow={5} style={{minWidth: '450'}}>
								<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.njtechweekly.com/media/cache/photos/TechLaunch_BullPen_7_judges_imageDetailSize.jpg) center/cover'}}>New Jersey Tech Weekly</CardTitle>
								<CardText>
									New Jersey startup Welnys takes January Bullpen Pitch Contest at Rutgers
								</CardText>
								<CardActions border>
									<Button colored style={{float:'right'}} href="https://njtechweekly.com/new-jersey-startup-welnys-takes-january-bullpen-pitch-contest-at-rutgers/">Read More</Button>
								</CardActions>
								<CardMenu style={{color: '#fff'}}>
									<IconButton name="share" />
								</CardMenu>
							</Card>					
						</Cell>
					</Grid>

				</div>
			</div>
		)
	}

}

export default News;