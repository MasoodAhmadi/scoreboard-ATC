import { Card, Col, Container, Row } from 'react-bootstrap';
import embeddedFlag from '../pngegg.png';
import useWindowSize from '../use-window-dimentions.hook';
import { useHistory } from 'react-router-dom';
export default function Homepage() {
  const size = useWindowSize();
  const history = useHistory();

  return (
    <>
      <Container className='pt-2'>
        <div className='m-1 mt-4 pt-4'>
          <Card>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center'>
                <h3 style={{ textTransform: 'uppercase' }}>Afghanistan</h3>
              </Card.Title>
              {size.width <= 643 ? (
                <>
                  <Card
                    style={{
                      border: 'none',
                      boxShadow:
                        'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px rgba(0, 0, 0, 0.17) 0px 12px 13px rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                    }}
                  >
                    <Row>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'black',
                              height: '10rem',
                              width: '100%',

                              boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}></span>
                          </Card>
                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'red',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'Red',
                              height: '10rem',
                              width: '100%',
                              boxShadow: 'rgba(255, 40, 0, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}>
                              <div className=''>
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                  <img
                                    className=''
                                    alt='embedded-flag'
                                    src={embeddedFlag}
                                    height={size.width <= 643 ? 90 : 300}
                                  />
                                </div>
                              </div>
                            </span>
                          </Card>
                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'black',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'green',
                              height: '10rem',
                              width: '100%',
                              boxShadow: 'rgba(48, 155, 35, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}></span>
                          </Card>

                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'green',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </>
              ) : (
                <>
                  {' '}
                  <Card
                    style={{
                      border: 'none',
                      boxShadow:
                        'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                    }}
                  >
                    <Row>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'red',
                              height: '50rem',
                              width: '100%',

                              boxShadow: 'rgba(255, 40, 0, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}></span>
                          </Card>
                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'red',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'black',
                              height: '50rem',
                              width: '100%',

                              boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}>
                              <div className=''>
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                  <img
                                    className=''
                                    alt='embedded-flag'
                                    src={embeddedFlag}
                                    height={size.width <= 643 ? 90 : 300}
                                  />
                                </div>
                              </div>
                            </span>
                          </Card>
                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'black',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                      <Col style={{ backgroundColor: '#fff' }}>
                        <div className='d-flex align-items-center flex-column gap-4'>
                          <Card
                            style={{
                              backgroundColor: 'green',
                              height: '50rem',
                              width: '100%',
                              boxShadow: 'rgba(48, 155, 35, 1) 0px 15px 25px',
                            }}
                          >
                            <span style={{ color: '#fff' }}></span>
                          </Card>

                          {/* <Button
                            variant='primary'
                            style={{
                              width: '100%',
                              backgroundColor: 'green',
                              border: 'none',
                            }}
                          >
                            Cities
                          </Button> */}
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </Container>
      <>
        <Container className='pt-2'>
          <div className='m-1 mt-4 pt-4'>
            <Card>
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  <h3 style={{ textTransform: 'uppercase' }}>Score board</h3>
                </Card.Title>
                {size.width <= 643 ? (
                  <>
                    <Card
                      style={{
                        border: 'none',
                        boxShadow:
                          'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px rgba(0, 0, 0, 0.17) 0px 12px 13px rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                      }}
                    >
                      <Row>
                        {/* <Col style={{ backgroundColor: '#fff' }}>
                    <div className='d-flex align-items-center flex-column gap-4'>
                      <Card
                        style={{
                          backgroundColor: 'red',
                          height: '10rem',
                          width: '100%',

                          boxShadow: 'rgba(255, 40, 0, 1) 0px 15px 25px',
                        }}
                      >
                        <span style={{ color: '#fff' }}></span>
                      </Card>
                      <Button
                        variant='primary'
                        style={{
                          width: '100%',
                          backgroundColor: 'red',
                          border: 'none',
                        }}
                      >
                        Cities
                      </Button>
                    </div>
                  </Col> */}
                        <Col style={{ backgroundColor: '#fff' }}>
                          <div className='d-flex align-items-center flex-column gap-4'>
                            <Card
                              style={{
                                backgroundColor: 'black',
                                height: '10rem',
                                width: '100%',

                                boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                              }}
                            >
                              <span style={{ color: '#fff' }}>
                                <div className=''>
                                  <div className='position-absolute top-50 start-50 translate-middle'>
                                    <img
                                      onClick={() => history.push('/scores')}
                                      className=''
                                      alt='embedded-flag'
                                      src={embeddedFlag}
                                      height={size.width <= 643 ? 90 : 300}
                                    />
                                  </div>
                                </div>
                              </span>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </>
                ) : (
                  <>
                    {' '}
                    <Card
                      style={{
                        border: 'none',
                        boxShadow:
                          'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px rgba(0, 0, 0, 0.17) 0px 12px 13px rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                      }}
                    >
                      <Row>
                        <Col style={{ backgroundColor: '#fff' }}>
                          <div className='d-flex align-items-center flex-column gap-4'>
                            <Card
                              style={{
                                backgroundColor: 'black',
                                height: '50rem',
                                width: '100%',

                                boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                              }}
                            >
                              <span style={{ color: '#fff' }}>
                                <div className=''>
                                  <div className='position-absolute top-50 start-50 translate-middle'>
                                    <img
                                      className=''
                                      onClick={() => history.push('/scores')}
                                      alt='embedded-flag'
                                      src={embeddedFlag}
                                      height={size.width <= 643 ? 90 : 300}
                                    />
                                  </div>
                                </div>
                              </span>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
    </>
  );
}
