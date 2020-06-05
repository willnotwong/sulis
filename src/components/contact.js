import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Cell, Grid} from 'react-mdl';
import emailjs from 'emailjs-com';

class Contact extends Component {

	constructor(){
		super()
		this.state={
			name:"",
			organization:"",
			email:"",
			phonenumber:"",
			message:"",
			success:"0"
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
	          this.setState({
	          	success:"1"
	          })
	      }, (error) => {
	          console.log(error.text);
	          this.setState({
	          	success:"2"
	          })
	      });
	}

	toggleSuccess(){
		if(this.state.success === "0"){
			return(
				<div></div>
			)
		}
		else if(this.state.success === "1"){
			return(
				<div>
					<br/>
					<p style={{color:"green"}}>OK! Message successfully sent</p>
					
				</div>
			)
		}
		else if(this.state.success === "2"){
			return(
				<div>
					<br/>
					<p style={{color:"red"}}>Uh Oh! Looks like there was an error, try again later</p>
					
				</div>
			)
		}
	}

	render() {
		return(
			<div>

				<div className="contact-grid">
					<Grid>
						<Cell col={12}>
							<h2>Contact Us</h2>
							<p>Are you looking to obtain more information about us or are interested in investing or establishing a partnership? Please fill out the form below and specify the nature of your request. We will respond to you as soon as we can.</p>
							<hr/>
								
						</Cell>
					</Grid>
					<Grid>
						<Cell col={12}>
							<Form onSubmit={this.submitEmail}>
							
							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Name</Form.Label>
							    <Form.Control type="name" placeholder="Enter name" name="name" onChange={this.handleChange}/>
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Organization</Form.Label>
							    <Form.Control type="organization" placeholder="Enter organization" name="organization" onChange={this.handleChange}/>
							  </Form.Group>

							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
							    <Form.Text className="text-muted">
							      We'll never share your email with anyone else.
							    </Form.Text>
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Phone number</Form.Label>
							    <Form.Control type="phonenumber" placeholder="Enter phone number" name="phonenumber" onChange={this.handleChange}/>
							  </Form.Group>

							  <Form.Group controlId="exampleForm.ControlTextArea1">
							    <Form.Label>Message</Form.Label>
							    <Form.Control as="textarea" rows="5" name="message" onChange={this.handleChange}/>
							  </Form.Group>
							  <Button variant="primary" type="submit">
							    Submit
							  </Button>
							  {this.toggleSuccess()}
							</Form>
									
						</Cell>
					</Grid>
					
			    </div>
			</div>
		)
	}
}

export default Contact;