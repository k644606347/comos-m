import React, {Fragment} from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import MyMaskedView from "./MyMaskedView";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <MyMaskedView></MyMaskedView>
                <WebView
                    source={{uri: 'http://cms.pub.sina.com.cn/index.php?r=document/BatchOfflineEntry&_debug=1'}}
                    style={{marginTop: 20, marginBottom: 20}}
                />
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});