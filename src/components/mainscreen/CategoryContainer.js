import React, { Component } from 'react';
import Category from './Category';

class CategoryContainer extends Component {
constructor(props){
  super(props)
  this.state={
    allEmails: [
    [{sender: "Segal Design Institute", subject: "Tomorrow, 4pm: Interacting with Personal Fabrication Machines - Stefanie Mueller, MIT", message:"Talk Title: Interacting with Personal Fabrication Machines \n \n In anticipation of 3D printers reaching millions of users, I am investigating how to allow future users to interact with the new hardware. I present a series of interactive software+hardware systems that I created to answer this question. They are characterized by two main properties. First, they produce physical output quickly, allowing users not only to see their results, but also to touch and test their mechanical properties as users work towards a solution. Second, the systems allow users to interact directly with the workpiece, i.e., rather than using a digital 3D editor, users manipulate the workpiece located inside the 3D printer by pointing at it, causing the machine to then modify the workpiece accordingly. I put my research into perspective by drawing analogies to the evolution of interactive computing from batch processing, to turn taking, to direct manipulation."},
    {sender: "Segal Design Institute", subject: "You're invited to Spring Design Expo 2017 - design judges needed!", message:"We are looking for design judges to evaluate student portfolios and projects! RSVP for the event or sign up to be a design judge by clicking the image below:"},
    ],
    [{sender: "Casey Russell", subject: "[Segal Bulletin Board] FW: Job Opportunity: Research Scientist Position at Disney Research Pittsburgh", message:"Disney Research Pittsburgh is seeking applicants for a Research Scientist position, at either the junior or senior level, in Human Computer Interaction."},
    {sender: "Casey Russell", subject: "[Segal Bulletin Board] FW: Community Currency is recruiting", message:"\n \n If you have passion for social impact and working with nonprofits than this is the perfect position for you! Community Currency is an innovative start-up that seeks to serve disadvantaged children in the Chicagoland community by salvaging leftover foreign currency from the travel industry and donating the proceeds to charitable initiatives. We dream of solving a billion dollar problem and are currently working with everyone from prominent Chicago officials to multinational businesses."},
    {sender: "Casey Russell", subject: "request from bay area immersion prospective student", message:"\n \nHi All, \n \nA prospective student for the bay area immersion program, Lorenzo Siy, is interested in being put in touch with one of the McCormick students who went through the program this past winter so he can hear more about their experience.  If any of you are willing/able, please let me know and I will forward you his contact info. \n \n \n Thanks."},
    {sender: "Casey Russell", subject: "Free tickets for urban planning documentary & discussion", message:"Spring into the world of documentary filmmaking with a visit to the Siskel Film Center. This NU in Chicago event will explore urban planning and grassroots activism with a viewing of Citizen Jane: Battle for the City, followed by a discussion with Janet Smith, Co-Director of the Center for Neighborhood and Community Improvement at the UIC Chicago College of Urban Planning & Public Affairs."}
    ],
    [{sender: "CTEC Office", subject: "CTEC: Course and Teacher Evaluations are Now Open", message:"CTEC course evaluations are a valuable tool for students in making registration decisions; the more complete they are, the better they are. We strongly urge you to share your constructive and objective evaluation addressing the content of the class and the instructor's teaching methods. Student evaluations also serve an important role for instructors and administrators. They assist instructors in improving teaching methods and revising the class content. Administrators use these evaluations in promotion and tenure decisions, as well as for curriculum planning."}]
    ]
  }
}  

  render() {

    function parseCategories(Email){
			return (
				<div>
					<Category emails={Email} />
					<br/>
				</div>	
			);
	}

	const divStyle = {
		margin: 'auto',
		width: 450,
	}

    return (
      <div style={{flex:1, alignItems: 'right'}}>
	      <div style={divStyle}>
	      	{this.state.allEmails.map(parseCategories)}
	      </div>
      </div>
      
      /*
		When isOpen is false, there are two states we can be in: isRead, or !isRead.
		When isOpen is true, isRead will not change.


		<div id= "openButton" />
		<div id = "Email" />
      */
    );
  }
}

export default CategoryContainer;

