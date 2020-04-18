import React from 'react';
import {Card, CardText} from 'reactstrap';

const CharCard = props => {
  console.log(props.character);
  console.log(props.howTall);
  console.log(props.weight);
  console.log(props.birth_year);

  return (
    <div key={props.character}>
      <Card>

        <strong>
          {props.character}
        </strong>

        <CardText>
          Height: {props.howTall}cm,
          Weight: {props.weight}kg
        </CardText>
      </Card>
    </div>
  );
};

export default CharCard;
