import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class NewsCard extends Component{
	render(){
		return(
			<div>
				{/* Card 1 */}
				<Card shadow={5} style={{minWidth: '450'}}>
					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover'}}>{this.props.title}</CardTitle>
					<CardText>
						{this.props.description}
					</CardText>
					<CardActions border>
						<Button colored style={{float:'right'}} href={this.props.link}>Read More</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>			
			</div>
		)
	}
}

export default NewsCard;