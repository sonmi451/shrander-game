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

            <View style={styles.oneButtonContainer}>
                <Button color='orange' onPress={this.selectMolniya} title='Molniya'/>
                <Button color='orange' onPress={this.selectSemyorka} title='Semyorka'/>
            </View>

            <View style={styles.oneButtonContainer}>
                <Button color='orange' onPress={Math.random() < 0.5 ? this.selectMolniya : this.selectSemyorka} title='Give me a random one!'/>
            </View>

            <Image style={styles.shranderPic} source={this.state.image} />

            <View style={styles.oneButtonContainer}>
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
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    titleContainer: {
        flex: 2,
        fontSize: 26,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    titleText: {
        fontSize: 26,
    },
    oneButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shranderPic: {
        flex: 5,
        alignSelf: 'center',
    },

});
