import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import { LineChart, XAxis, Grid } from 'react-native-svg-charts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon, Card, Button } from 'react-native-elements';
import Infoslider from 'react-native-infoslider';



class HomeScreen extends React.Component {
    static navigationOptions = {
        headerRight: (<TouchableOpacity style={{paddingBottom: 5}} onPress={() => {
    Alert.alert('Welcome To Smart Garden');
}}>
<Image
style={{width: wp('35%'), height: hp('50%'), resizeMode: 'contain'}}
source={require('./assets/logo.gif')}/>
</TouchableOpacity>
),
headerStyle: {
    backgroundColor: '#297793',
},
}
constructor(props) {
    super(props);

    this.state = {
        data:[
            {
                title:"Hello Farmer",
                text:"Selamat datang di aplikasi Smart Garden, Aplikasi untuk membantu anda mengetahui kondisi tanah pertanian",
                image: require('./assets/petani.png')},
            {
                title:"Apa itu Smart Garden ?",
                text:"Smart Garden adalah aplikasi android yang menampilkan data tentang pH dan RH tanah yang terintegrasi langsung dengan alat dari smart garden",
                image: require('./assets/apaitu.png')},
            {
                title:"Kenapa harus Smart Garden ?",
                text:"Karena Smart Garden menawarkan kemudahan, kecepatan, keakuratan, dan kepraktisan dalam mengetahui kondisi tanah pertanian",
                image:require('./assets/kenapa.png')
            },

        ]
    };
}


render() {

    return (


        <View style={styles.container}>
<View>
    <Infoslider
    data={this.state.data}
    showDots={false}
    activeDotColor="#666"
    titleColor="#000"
    textColor="#666"
    loop={true}
    autoplay={true}
    autoplayTimeout={9}/>
    </View>
    <ActionButton buttonColor="#114656">

        <ActionButton buttonColor='#66b624' title="New Task"
    onPress={() => this.props.navigation.navigate('pH')}>
<Image
    style={{width: 60, height: 90}}
    source={require('./assets/ph-meter.png')}/>
    </ActionButton>

    <ActionButton buttonColor='#66b624' title="New Task"
    onPress={() => this.props.navigation.navigate('RH')}>
<Image
    style={{width: 60, height: 90}}
    source={require('./assets/rh-meter.png')}/>
    </ActionButton>

    <ActionButton buttonColor='#66b624' title="New Task"
    onPress={() => this.props.navigation.navigate("DT")}>
<Image
    style={{width: 60, height: 90}}
    source={require('./assets/file.png')}/>
    </ActionButton>

    <ActionButton buttonColor='#66b624' title="New"
    onPress={() => this.props.navigation.navigate("mp")}>

<Image
    style={{width: 60, height: 90}}
    source={require('./assets/market.png')}/>
    </ActionButton>

    </ActionButton>
    </View>


);
}
}


class pHScreen extends React.Component {
    static navigationOptions = {
        title:'pH tanah',
        headerStyle: {
            backgroundColor: '#90dd5b',
        },
    };
    render() {
        const data = [ 5.5, 4.6, 6.3, 6.5, 6.0]
        return (
            <View style={{ height: 550, padding: 10, width: wp('100%'), height: hp('80%') }}>
    <Image style={{ position: 'absolute', flex: 1, resizeMode: 'stretch', width: wp('100%'), height: hp('88%') }} source={require('./assets/newbg1.png')}/>
        <LineChart
        style={{ flex: 1}}
        data={ data }
        gridMin={ 1 }
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'white'}}
    >
    <Grid/>
        </LineChart>
        <XAxis
        style={{ marginHorizontal: 25}}
        data={ data }
        formatLabel={ value => data[value]+"%" }
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'white'}}
        />

        <Text style={{fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginVertical: 30, fontSize: 16, width: wp('100%'), color: '#ffffff'}}>
        pH Tanah Terbaru
        </Text>
        <TouchableHighlight style={{alignItems: 'center'}}>
    <Text style={styles.teksph}>1000data[value]</Text>
        </TouchableHighlight>
        <Text style={{fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginVertical: 20, fontSize: 16, width: wp('100%'), color: '#ffffff'}}>
    <Text>Status Tanah : Aman</Text>
        </Text>
        </View>
    );
    }
}

class RHScreen extends React.Component {
    static navigationOptions = {
        title:'RH tanah',
        headerStyle: {
            backgroundColor: '#90dd5b',
        },
    };

    render() {
        const data = [ 50, 46, 70, 65, 60]
        return (
            <View style={{ height: 550, padding: 10, width: wp('100%'), height: hp('80%') }}>
    <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('88%') }} source={require('./assets/newbg1.png')}/>

        <LineChart
        style={{ flex: 1 }}
        data={ data }
        gridMin={ 1 }
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'white' }}
    >
    <Grid></Grid>
        </LineChart>
        <XAxis
        style={{ marginHorizontal: 25 }}
        data={ data }
        formatLabel={ value => data[value]+"%" }
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'white'}}
        />

        <Text style={{fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginVertical: 30, fontSize: 16, width: wp('100%'), color: '#ffffff'}}>
        RH Tanah Terbaru
        </Text>
        <TouchableHighlight style={{alignItems: 'center'}}>
    <Text style={styles.teksph}>1000data[value]</Text>
        </TouchableHighlight>
        <Text style={{fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginVertical: 20, fontSize: 16, width: wp('100%'), color: '#ffffff'}}>
    <Text>Status Tanah : Aman</Text>
        </Text>

        </View>


    );
    }
}

class DtanamanScreen extends React.Component {
    static navigationOptions = {
        title:'Data Tanaman',
        headerStyle: {
            backgroundColor: '#90dd5b',
        },
    };


    render() {

        const data = [ 5.5, 4.6, 6.3, 6.5, 6.0];
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#2aa1c5' }} >
    <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('1500%')}} />
        <Card title="Sawi Pakcoy">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/sawi.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Tomat',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Cabai">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/lombok.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Tomat',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Tomat">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/tomat.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Tomat',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Jagung">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/jagung.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Jagung',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Terong">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/terong.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Terong',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Bayam">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/bayam.jpg')}
        />
        <Button onPress={() => {Alert.alert(
            'Bayam',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Kangkung">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/kangkung.jpg')}
        />
        <Button onPress={() => {Alert.alert(
            'Kangkung',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>

        <Card title="Kubis">
            <Image
        style={styles.image}
        resizeMode="contain"
        justifyContent='center'
        source={require('./assets/kubis.png')}
        />
        <Button onPress={() => {Alert.alert(
            'Kubis',
            'pH Optimal : 5 - 6                                                                 RH Optimal : 70 - 90%',
        );}} title="Detail" borderRadius={10} backgroundColor='#8ccd56' icon={{name: 'details'}} fontWeight={'bold'} />

        </Card>


        </ScrollView>
    );
    }
}

class marketScreen extends React.Component {
    static navigationOptions = {
        title:'Market Place',
        headerStyle: {
            backgroundColor: '#90dd5b',
        },
    };
    render() {
        return (
            <ScrollView style={{container: 'black'}}>
    <Image style={{ position: 'absolute', flex: 1, resizeMode: 'cover', width: wp('100%'), height: hp('800%') }} source={require('./assets/splash.png')}/>
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post1.png')} />
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post2.png')} />
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post3.png')} />
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post2.png')} />
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post1.png')} />
        <Image
        style={{width: wp('100%'),height: hp('25%'), resizeMode: 'contain'}}
        source={require('./assets/post3.png')} />

        </ScrollView>
    );
    }
}

class PengaturanScreen extends React.Component {
    static navigationOptions = {
        title:'Pengaturan',
        headerStyle: {
            backgroundColor: '#297793',
        },
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>menu pengaturan</Text>
        </View>
    );
    }

}

const RootStack = createStackNavigator(
    {
        H: HomeScreen,
        RH: RHScreen,
        pH: pHScreen,
        DT: DtanamanScreen,
        mp: marketScreen,
    },
    {
        initialRouteName: 'H',
    },
    {
        headerMode:'none',
    }
);

const Appx = createAppContainer(RootStack);


export default class App extends React.Component {
    render() {
        return <Appx />;
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#599e21',
        alignItems: 'center',
        justifyContent: 'flex-start',
        resizeMode:'contain',
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

    teks:{
        textAlign:'center',
        fontSize:20,
        color :'white',
    },


    market: {
        flex:1,

        alignItems: 'center',
        justifyContent: 'flex-start',
        resizeMode:'contain',
    },

    satu: {
        //padding: 10,
        alignItems: 'flex-start',
        //width: wp('10%'),
        //height: hp('10%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    teksph: {

        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#84d9f3',
        borderRadius: 120,
        paddingVertical: 50,
        width: wp('36%'),
        height: hp('20%'),

    },

    image: {
        width: 250,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 28,
    },


});