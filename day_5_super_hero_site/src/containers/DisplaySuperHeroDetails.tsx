import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';

import SuperHeroDetails from '../custom_types/SuperHeroData';
import DisplaySuperHeroProperty from './DisplaySuperHeroProperties';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

type SuperHeroData = {
  data: SuperHeroDetails;
};

export default class DisplaySuperHeroDetails extends Component<{}, SuperHeroData> {
  loadNewSuperHeroDetails = async () => {
    try {
      const response = await apiClient.get('/');
      this.setState({ data: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.loadNewSuperHeroDetails();
  }

  render() {
    if (this.state === null || !('data' in this.state)) return <div>Loading</div>;
    const { data } = this.state;
    return (
      <div>
        <Container style={{ paddingTop: '30px', border: '2px solid red', borderRadius: '40px', margin: '40 auto' }}>
          <h1 style={{ textAlign: 'center' }}>{data.name}</h1>

          <Row style={{ padding: '20px' }}>
            <Col lg={8}>
              <DisplaySuperHeroProperty name={'Full Name'} data={data.biography.fullName} />
              <DisplaySuperHeroProperty name={'First Appearance'} data={data.biography.firstAppearance} />
              <DisplaySuperHeroProperty name={'Gender'} data={data.appearance.gender} />
              <DisplaySuperHeroProperty name={'Race'} data={data.appearance.race} />
              <DisplaySuperHeroProperty name={'Power'} data={data.powerstats.power} />
              <DisplaySuperHeroProperty name={'Speed'} data={data.powerstats.speed} />
              <DisplaySuperHeroProperty name={'Strength'} data={data.powerstats.strength} />
              <DisplaySuperHeroProperty name={'Intelligence'} data={data.powerstats.intelligence} />
              <DisplaySuperHeroProperty name={'Combat'} data={data.powerstats.combat} />
            </Col>
            <Col LG={4}>
              <img alt={'superhero'} src={data.images.md} />
            </Col>
          </Row>
        </Container>
        <Button
          onClick={this.loadNewSuperHeroDetails}
          className={'justify-content-center mx-auto d-block'}
          style={{ margin: '40px' }}
        >
          Show Random SuperHero
        </Button>
      </div>
    );
  }
}
