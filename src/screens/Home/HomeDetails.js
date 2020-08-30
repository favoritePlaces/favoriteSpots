import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const HomeDetails = (props) => {

}

const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};

export default connect(mapStateToProps, {})(HomeDetails);
