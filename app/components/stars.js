/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, PixelRatio} from 'react-native';
import feedback from '../styles/feedback';
import StarRating from 'react-native-star-rating';

export default class RatingStars extends React.Component {
  submit(rate) {
      this.props.rateStars(rate);
      setTimeout(() => { this.props.submit(); }, 100);
  }

    render() {
        return (
            <View style={feedback.starsFooterWrap}>
                <View style={{flex: 4}}>
                    <StarRating
                        starColor={'#FFA600'}
                        emptyStar={'star'}
                        emptyStarColor={'#D1D1D1'}
                        disabled={false}
                        maxStars={5}
                        rating={this.props.starsRate}
                        starSize={90 / PixelRatio.get()}
                        selectedStar={(rating) => this.submit(rating)}
                    />
                </View>
            </View>

        );
    }
}
