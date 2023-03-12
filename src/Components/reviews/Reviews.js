import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/reviewForm';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;
  const uri = `http://localhost:5001/api/v1/${movieId}`;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const review = revText.current;
    const data = { imdbId: movieId, reviewBody: review.value };
    try {
      const response = await fetch(uri, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const updatedReviews = [...reviews, { body: review.value }];
      review.value = '';

      setReviews(updatedReviews);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img
            src={movie?.poster}
            alt=''
          />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText='Write a Review?'
                  />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
