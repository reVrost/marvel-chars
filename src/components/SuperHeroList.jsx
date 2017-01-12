import React, { Component } from 'react';
import SuperHero from "./SuperHero";

class SuperHeroList extends Component {
  render() {
    return (
      <div>
        {
            this.props.heroes.length > 0 ? 
                this.props.heroes.map((hero) => {
                return (<SuperHero 
                        key={hero.id} 
                        name={hero.name} 
                        series={hero.series.items}
                        stories={hero.stories.items}
                        comics={hero.comics.items}
                        events={hero.events.items}
                        description={hero.description}
                        thumbnail={hero.thumbnail.path + "." + hero.thumbnail.extension}
                        />);
                })
                :
                <div style={{fontSize:25, color:"#ddd"}}>No Results Found</div>
    }
      </div>
    );
  }
}

export default SuperHeroList;
