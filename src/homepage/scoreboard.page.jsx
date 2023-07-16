import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { App, PlusSquare } from 'react-bootstrap-icons';
import { TeamModal } from './modal';
// import generate from './screenshot';

const highScores = [
  { id: '1', name: '', score: 0 },
  { id: '2', name: '', score: 0 },
  { id: '3', name: '', score: 0 },
  { id: '4', name: '', score: 0 },
  { id: '5', name: '', score: 0 },
  { id: '6', name: '', score: 0 },
  { id: '7', name: '', score: 0 },
  { id: '8', name: '', score: 0 },
  { id: '9', name: '', score: 0 },
  { id: '10', name: '', score: 0 },
  { id: '11', name: '', score: 0 },
];

function ScoreBoard() {
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [countSix, setCountSix] = useState(() => {
    const savedState = localStorage.getItem('sixRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });
  const [countFour, setCountFour] = useState(() => {
    const savedState = localStorage.getItem('fourRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });

  const [countTwo, setCountTwo] = useState(() => {
    const savedState = localStorage.getItem('twoRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });
  const [count, setCount] = useState(() => {
    const savedState = localStorage.getItem('oneRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });

  const [totalScore, setTotalScore] = useState(() => {
    const savedState = localStorage.getItem('totalScore');
    const notes = JSON.parse(savedState);
    return notes || '';
  });

  const [teamName, setTeamName] = useState(() => {
    const savedState = localStorage.getItem('teamName');
    const notes = JSON.parse(savedState);
    return notes || '';
  });

  const [items, setItems] = useState(highScores);
  //count six runs
  useEffect(() => {
    localStorage.setItem('sixRuns', JSON.stringify(countSix));
  }, [countSix]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('sixRuns'));
  }, []);

  //count fours
  useEffect(() => {
    localStorage.setItem('fourRuns', JSON.stringify(countFour));
  }, [countFour]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('fourRuns'));
  }, []);

  //count twos
  useEffect(() => {
    localStorage.setItem('twoRuns', JSON.stringify(countTwo));
  }, [countTwo]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('twoRuns'));
  }, []);

  //count ones
  useEffect(() => {
    localStorage.setItem('oneRuns', JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('oneRuns'));
  }, []);

  useEffect(() => {
    localStorage.setItem('totalScore', JSON.stringify(totalScore));
  }, []);

  useEffect(() => {
    localStorage.setItem('teamName', JSON.stringify(teamName));
  }, [teamName]);

  // useEffect(() => {
  //   localStorage.setItem('highScores', JSON.stringify(highScores));
  // }, [items]);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('highscores'));
  // }, []);

  // const updateNotes = (event) => {
  //   event.preventDefault();
  //   // var newNotes = notes.slice();
  //   if (palyname === '') {
  //     return;
  //   } else {
  //     setNotes(palyname);
  //     // newNotes.push(palyname);
  //   }
  // };

  // const updateChalk = (event) => {
  //   setChalk(event.target.value);
  // };
  // const updateNotes2 = (event) => {
  //   event.preventDefault();
  //   var newNotes = notes.slice();
  //   newNotes.push(chalk);
  //   setChalk('');
  //   setNotes(newNotes);
  // };
  const countIncrementSix = () => {
    // Update state with incremented value
    setCountSix(countSix + 1);
  };
  const countIncrementFour = () => {
    // Update state with incremented value
    setCountFour(countFour + 1);
  };
  const countIncrementTwo = () => {
    // Update state with incremented value
    setCountTwo(countTwo + 1);
  };
  const countIncrement = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  console.log('items', items);
  const Total = countSix * 6 + countFour * 4 + countTwo * 2 + count * 1;

  console.log('total', Total);
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'>
            {' '}
            <p>Team Name: {teamName}</p>
            <PlusSquare size={30} onClick={handleShow} />
            <TeamModal
              handleClose={handleClose}
              show={show}
              name={teamName}
              setName={setTeamName}
            />
          </Card.Title>
          <br />
          <br />
          <Row>
            <Card.Text>
              <InputGroup className='mb-3'>
                <Form.Control
                  onChange={(event) => {
                    setItems(event.target.value);
                  }}
                  value={items.name}
                  placeholder='playername'
                  aria-label='playername'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Card.Text>
            <Button variant='primary'>Add player</Button>
            {/* <Button
                variant='primary'
                onClick={() => {
                  generate();
                }}
              >
                screenshoot
              </Button> */}
          </Row>
        </Card.Body>
      </Card>
      <br />
      <br />
      <table className='table table-bordered'>
        <thead>
          <tr className='text-center text-bold table-active'>
            <th scope='col'>Player name:</th>
            <th scope='col'>6</th>
            <th scope='col'>4</th>
            <th scope='col'>2</th>
            <th scope='col'>1</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center text-bold'>
            <th scope='row'>masood</th>
            <th scope='row' onClick={countIncrementSix}>
              {' '}
              <Button
                variant='none'
                style={{
                  width: '100%',

                  boxShadow:
                    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                }}
              >
                {countSix}
              </Button>
            </th>
            <th scope='row' onClick={countIncrementFour}>
              {' '}
              <Button
                variant='none'
                style={{
                  width: '100%',
                  boxShadow:
                    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                }}
              >
                {countFour}
              </Button>
            </th>
            <th scope='row' onClick={countIncrementTwo}>
              <Button
                variant='none'
                style={{
                  width: '100%',
                  boxShadow:
                    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                }}
              >
                {countTwo}
              </Button>
            </th>
            <th scope='row' onClick={countIncrement}>
              <Button
                variant='none'
                style={{
                  width: '100%',
                  boxShadow:
                    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                }}
              >
                {' '}
                {count}
              </Button>
            </th>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <Card style={{ border: 'none' }}>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th
                scope='col'
                className='d-flex justify-content-center'
                style={{ textTransform: 'uppercase' }}
              >
                Total score:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='d-flex justify-content-center'>
                <h3>{Total}</h3>
              </th>
            </tr>
          </tbody>
        </table>
      </Card>
      <div className='d-flex gap-2 mt-3'>
        <Button
          onClick={() => history.push('/')}
          variant='primary'
          style={{
            width: '100%',
            backgroundColor: 'red',
            border: 'none',
          }}
        >
          go back
        </Button>
        <br />
        <br />

        <Button
          onClick={() => {
            localStorage.clear() || window.location.reload();
          }}
          variant='primary'
          style={{
            width: '100%',
            backgroundColor: 'gray',
            border: 'none',
          }}
        >
          clear
        </Button>
      </div>
    </Container>
  );
}
export default ScoreBoard;
