import React,{Component} from 'react';
import "./card-list.scss";
import monster from "./monster";
import Card from "./card";
class CardList extends Component
{
  render()
  {
    const {collections}=this.props;
    return (
            <div className="Card-list">       
                {  
                    collections.map(({id, ...otherCollectionProps})=>
                    (
                    <Card key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
    );
  }
}
export default CardList;
