import axios from 'axios';
import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardSubtitle,

} from 'reactstrap';



const Review = ({ review, update }) => {



    const deleteReview = (id) => {


        axios.delete(`/deletereview/${id}`)
            .then(res => console.log('delete'))
            .catch(err => console.log(err, 'not deleted'))
        update(id)

    }


    return (
        <div>

            <Card className='bg-primary' >
                <CardBody className='text-center'>

                    <CardText>{review.college}</CardText>
                    <CardText>{review.state}</CardText>
                    <CardText>{review.city}</CardText>
                    <CardText>{review.about}</CardText>
                    <CardText></CardText>
                    <Container >
                        <Button color='danger' onClick={() => { deleteReview(review.id) }} >Delete</Button>
                        <Button color='warning ms-3' >Update</Button>
                    </Container>
                </CardBody>
            </Card>
            <br />


        </div>
    )
}

export default Review
