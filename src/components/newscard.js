import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class NewsCard extends Component{
	render(){
		return(
			<div>
				{/* Card 1 */}
				<Card shadow={5}>
					<CardTitle style={{color: '#fff', height: '176px', background: `url(${this.props.background}) center/cover`}}></CardTitle>
					<CardText>
						<p style={{color:'black',fontSize:'20px'}}>{this.props.title}</p>
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