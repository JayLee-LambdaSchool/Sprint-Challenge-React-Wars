import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CharCard from './Character';
import {Container, Row} from 'reactstrap';

export default function CharData() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")

      .then(response => {
        console.log(response.data.results);
        setHeros(response.data.results);
      })

      .catch(error => {
        console.log('the data was not returned', error);
      });
  }, []);

  return (
    <Container>
      <Row>

        {heros.map(item => {
          // console.log(item.name)
          console.log(item.mass);

          return (
            <div>
              <div class='row'>

                <div class='col'>
                  <CharCard
                    character={item.name}
                    howTall={item.height}
                    weight={item.mass}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}