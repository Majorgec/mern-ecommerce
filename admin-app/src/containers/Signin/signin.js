import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/layout';
import Input from '../../components/UI/Input';

function Signin() {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form >
                            <Input
                                label="Email"
                                placeholder="Email"
                                value=""
                                type="text"
                                onChange={() => { }}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default Signin