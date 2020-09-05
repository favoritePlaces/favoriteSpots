import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const FriendGroupDetails = (props) => {

    return(
        <SafeAreaView>
          <View>
            <Text>message button, their favorite places(tags and who added will be shown for each) 
              maybe one last photo from there</Text>
          </View>
        </SafeAreaView>
      );
}

const mapStateToProps = ({ placeResponse }) => {
    const { list } = placeResponse;
    return { list };
};

export default connect(mapStateToProps, {})(FriendGroupDetails);
