import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Cell, Grid} from 'react-mdl';
import emailjs from 'emailjs-com';

class Contact extends Component {

	constructor(){
		super()
		this.state={
			name:"",
			email:"",
			message:""
		}
		this.handleChange = this.handleChange.bind(this)
		this.submitEmail = this.submitEmail.bind(this)
	}

	handleChange(event){
		const {name,value} = event.target
		
		this.setState({
			[name]: value
		})
		console.log(this.state)
	}

	submitEmail(event){
		event.preventDefault()

	    emailjs.send('sulis', 'template_QUjTl6Xv', this.state, 'user_jcrsJjU0RO1iFk1npN4jl')
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
	}

	render() {
		return(
			<div>
				<div className="contact-grid">
						<Grid>
							<Cell col={12}>
								<h2>Contact Us</h2>
								<hr/>
									
							</Cell>
						</Grid>
				</div>

				<div className="contact-grid">
					<Grid>
						<Cell col={12}>
							<Form onSubmit={this.submitEmail}>
							
							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Name</Form.Label>
							    <Form.Control type="name" placeholder="Enter name" name="name" onChange={this.handleChange}/>
							  </Form.Group>

							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
							    <Form.Text className="text-muted">
							      We'll never share your email with anyone else.
							    </Form.Text>
							  </Form.Group>

							  <Form.Group controlId="exampleForm.ControlTextArea1">
							    <Form.Label>Message</Form.Label>
							    <Form.Control as="textarea" rows="5" name="message" onChange={this.handleChange}/>
							  </Form.Group>
							  <Button variant="primary" type="submit">
							    Submit
							  </Button>
							</Form>
									
						</Cell>
					</Grid>
					
			    </div>
			</div>
		)
	}
}

export default Contact;