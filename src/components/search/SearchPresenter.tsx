import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

import styles from './SearchStyled';



interface SearchProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    keyword : string | undefined;
    onSetKeyword : (e : string) => void;
    onSearchButton : () => void;
}

const SearchPresenter = ({ navigation, route, ...props } : SearchProps) => {
    return (
        <SafeAreaView style = {styles.container}>
        <View style = {styles.wrapper}>
            <ScrollView style = {styles.frame}>
                <View style = {styles.searchBarWrapper}>
                    <TextInput
                        style = {styles.searchBar}
                        value = {props.keyword}
                        onChangeText = {props.onSetKeyword}
                        placeholder = "제목, 가수, 앨범 등을 입력하세요."
                        placeholderTextColor = "#a0a0a0"
                    />
                    <TouchableOpacity
                        style = {styles.searchButton}
                        onPress = {props.onSearchButton}
                    >
                        <Image style = {styles.searchButtonImg} source = {require('../../../assets/search-glass.png')}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.partitionLine}/>
            </ScrollView>
        </View>
        </SafeAreaView>
    );
};

export default SearchPresenter;
