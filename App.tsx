import React, {Fragment} from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import MyMaskedView from "./MyMaskedView";
import {Hello} from "./Hello";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Hello name={'kk'} enthusiasmLevel={1}/>
                {/*<MyMaskedView></MyMaskedView>*/}
                <WebView
                    source={{uri: 'http://www.baidu.com'}}
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