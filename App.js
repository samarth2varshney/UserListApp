import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Loader from './components/loader';
import FooterloaderComponent from './components/footLoader';
import styles from './styles';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadView, setLoadView] = useState(true);
  const [page, setPage] = useState(1);
  const [footLoader,setfootLoader] = useState(false);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async currpage => {
    try {
      const response = await fetch(
        'https://reqres.in/api/users?page=' + currpage + '&delay=3',
      );
      if (response.ok) {
        const data = await response.json();
        if (currpage == 1){
           setUsers(data.data);
           setLoadView(false);
          }
        else {
          setfootLoader(false);
          setUsers(prevUsers => [...prevUsers, ...data.data]);
        }
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEndReached = () => {
    if (page < 2) {
      let Page = page + 1;
      setfootLoader(true);
      setPage(Page);
      fetchData(Page);
    }
  };

  const handleUserPress = user => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  function UserData(props) {
    const item = props.itm;
    return (
      <TouchableOpacity onPress={() => handleUserPress(item)}>
        <View style={styles.box}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.avatar}} style={styles.image} />
          </View>
          <Text style={styles.text}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
        <View style={styles.line}></View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{flex: 1}}>
      {loadView ? (
        <Loader/>
      ) : 
      <View style={{flex: 1}}>
        <FlatList
          data={users}
          renderItem={({item}) => <UserData itm={item} />}
          onEndReached={handleEndReached}
        />
        <View>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            {selectedUser && (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image
                    source={{uri: selectedUser.avatar}}
                    style={styles.modalImage}
                  />
                  <Text
                    style={
                      styles.modalText
                    }>{`${selectedUser.first_name} ${selectedUser.last_name}`}</Text>
                  <Text style={[styles.modalText, {marginBottom: 15}]}>
                    {selectedUser.email}
                  </Text>
                  <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            )}
          </Modal>
        </View>
        {footLoader ? (<FooterloaderComponent/>): null}
      </View>
      }
    </View>
  );
};


export default App;
