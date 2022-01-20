import React, { useEffect } from "react";
import "./SelectedCard.css";
import { connect } from "react-redux";
import { onPageLoad } from "../actions";

const SelectedCard = props => {

    useEffect(()=> {
        props.dispatch(onPageLoad());
      }, []);

    const handleClick = () => {
        props.dispatch(onPageLoad());
    }

    return (
        <div>
            <div className="cardFrame">
                <div className="card-name">{props.card.name}</div>
                <div className="level">{props.card.level}</div>
                <div className="image">
                    <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/${props.card.id}.jpg`} />
                </div>
                <div className="card-id">{props.card.id}</div>
                <div className="card-description-box">
                    <div className="type">{props.card.type}</div>
                    <div className="description">
                        <p>{props.card.desc}</p>
                    </div>
                </div>
                <div className="stats">{props.card.atk} : {props.card.def}</div>
            </div>
            <button onClick={handleClick}>Get New Card</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        card: state.card
    }
}


export default connect(mapStateToProps)(SelectedCard);