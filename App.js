import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ShranderGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shrander: 'none',
            title: 'Choose your Shrander!',
            image: require('./assets/blank.jpg')
        };
        this.selectMolniya = this.selectMolniya.bind(this);
        this.selectSemyorka = this.selectSemyorka.bind(this);
        this.selectNone = this.selectNone.bind(this);
    }

    selectMolniya() {
        this.setState({
            shrander: 'Molniya',
            title: 'Well done for choosing Molniya as your shrander!',
            image: require('./assets/Molniya.jpg')
        },
        () => console.log(this.state.shrander))
    }

    selectSemyorka() {
        this.setState({
            shrander: 'Semyorka',
            title: 'Well done for choosing Semyorka as your shrander!',
            image: require('./assets/Semyorka.jpg')
        },
        () => console.log(this.state.shrander))
    }

    selectNone() {
        this.setState({
            shrander: 'none',
            title: 'Choose your Shrander!',
            image: require('./assets/blank.jpg')
        },
        () => console.log(this.state.shrander))
    }


    render() {
        const buttonAway = <Button color='orange' onPress={this.selectNone} title='It is too cute, take it away!'/>;
        const blank = <View/>;

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{this.state.title}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button color='orange' onPress={this.selectMolniya} title='Molniya'/>
                    <Button color='orange' onPress={this.selectSemyorka} title='Semyorka'/>
                    <Button color='orange' onPress={Math.random() < 0.5 ? this.selectMolniya : this.selectSemyorka} title='Give me a random one!'/>
                </View>
                <View style={styles.picContainer}>
                    <Image style={styles.shranderPic} source={this.state.image} />
                </View>
                <View style={styles.buttonsContainer}>
                    {this.state.shrander != 'none' ? buttonAway : null }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        paddingTop: 90,
        paddingBottom: 80,
        paddingLeft: 50,
        paddingRight: 50,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    titleText: {
        fontSize: 26,
    },
    buttonsContainer: {
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shranderPic: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height:250,
        width:250,
    },

});
