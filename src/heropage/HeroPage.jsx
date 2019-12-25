import React, { Component } from 'react';
import ItemCard from '../common/ItemCard';

class HeroPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tr>
                    <ItemCard name={people.name} />
                </tr>

                {/*<SpecCell />
        <ItemCard homeworld={people.homeworld} />
        <ListCell films={people.films} />
        <ListCell vehicles={people.vehicles} />
        <ListCell starships={people.starships} />*/}
            </table>
        )
    }
}

export default HeroPage;