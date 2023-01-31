import axios from 'axios';
import React, { Fragment, useState } from 'react'
import {
    
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';

const AddReviews = () => {


 const [review, setReview] = useState({});

 //form handler function
 const handleform =(e)=>{
    console.log(review);
    postDataApi(review);

    e.preventDefault()
 }

 //post data to the backend
 const postDataApi=(data)=>{
    axios.post('/addreview', data)
    .then(res=>{
        console.log(res)
        setReview({})

    })
    .catch(err => console.log(err))
 }

    return (
        <div  >
            <br />
            <h1 className='text-center'>Fill College Details</h1>
            <br />
            <Form onSubmit={handleform}>
                <FormGroup>
                    <Label>College Name </Label>
                    <Input type='text' id='college' placeholder='Enter here' name='collegeName' 
                    onChange={(e)=>{
                        setReview({...review,college:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <Label>State </Label>
                    <Input type='text' id='state' placeholder='Enter here' name='state'
                     onChange={(e)=>{
                        setReview({...review,state:e.target.value})
                    }} />
                </FormGroup>

                <FormGroup>
                    <Label>City </Label>
                    <Input type='text' id='city' placeholder='Enter here' name='city' 
                     onChange={(e)=>{
                        setReview({...review,city:e.target.value})
                    }} />
                </FormGroup>

                <FormGroup>
                    <Label>About </Label>
                    <Input type='textarea' id='about' placeholder='Enter description here' name='about' 
                     onChange={(e)=>{
                        setReview({...review,about:e.target.value})
                    }} />
                </FormGroup>
                <Container className='text-center'>
                    <Button type='submit' color='success ms-3 '>Add Review</Button>
                    <Button type='reset' color='danger ms-3'>Clear</Button>
                </Container>
            </Form>

        </div>
    )
}

export default AddReviews
