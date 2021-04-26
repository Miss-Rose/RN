import React from 'react';
import {FlatList, View} from 'react-native';
import {HourItem} from './HourItem';
import styles from '../styles/HourListStyle';
import {IdGenarator} from '../../../components/helpers/IdGenerator';
import {TempByHours} from '../../../components/interfaces/TempByHours';

interface HourListProps {
  list: TempByHours[] ;
}

export const HourList = (props: HourListProps):JSX.Element => {
  const {list} = props;
  console.log('data in Hour list', list);
  const ID = () => IdGenarator();
  return (
    <View style={styles.list}>
      <FlatList
        data={props.list}
        renderItem={({item}) => <HourItem item={item} key={+ID} /> }
        keyExtractor={ID}
        horizontal
      />
    </View>
  );
};
