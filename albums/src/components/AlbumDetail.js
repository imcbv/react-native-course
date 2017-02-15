// Import a library for miking a Component
import React, { Component } from 'react';
import { Text, View, Image, Linking, PanResponder } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Make a Component
class AlbumDetail extends Component {
  state = { dimensions: undefined };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
        var { dimensions } = this.state;
        var { width, height } = dimensions;
        this.setState({ startingWidth: width });
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        if (this.state.dimensions) {
          var { dimensions, startingWidth } = this.state;
          var { width, height } = dimensions;
          console.log('dx: ' + gestureState.dx)
          width = startingWidth + gestureState.dx;
          this.setState({ dimensions: { width, height } });

          console.log('onPanResponderMove() - width: ' + width);
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded

      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  onLayout = event => {
      const { width, height } = event.nativeEvent.layout;
      console.log('OnLayout() - width: ' + width);
      if (this.state.dimensions === undefined) {
        this.setState({ dimensions: { width, height } });
      }
  }

  render() {
    let dimensions;
    const {
      headerContentStyle,
      headerTextStyle,
      thumbnailStyle,
      thumbnailContainerStyle,
      imageStyle
    } = styles;
    if (this.state.dimensions) {
      dimensions = this.state.dimensions;
      imageStyle.width = dimensions.width;
      imageStyle.height = dimensions.height;
      console.log('render() - width: ' + imageStyle.width);
    }
    const { title, artist, thumbnail_image, image, url } = this.props.album;

    return (
      <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumbnailStyle}
      source={{ uri: thumbnail_image }}
      />
      </View>
      <View style={headerContentStyle}>
      <Text style={headerTextStyle}>{ title }</Text>
      <Text>{ artist }</Text>
      </View>
      </CardSection>

      <CardSection>
      <Image
      style={imageStyle}
      source={{ uri: image }}
      onLayout={this.onLayout}
      {...this._panResponder.panHandlers}
      />
      </CardSection>

      <CardSection>
      <Button whenPressed={() => Linking.openURL(url)}>
      Buy {title}
      </Button>
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: 300
  }
};

// Make the component available for other parts of the app
export default AlbumDetail;
