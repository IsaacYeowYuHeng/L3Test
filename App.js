import react, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText})=>{
    return(
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    )
}
const MyApp = ()=> {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{padding: 20, paddingTop: 50}}>
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    {label: 'Admin', value: 'Admin'},
                    {label: 'Guest', value: 'Guest'},
                ]}
            />

            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}}/>

            <Button
                title="Submit Answers"
                onPress={() => Alert.alert("Another Thing!")}
            />

            <TouchableOpacity
                onPress={() => Alert.alert("Welcome!")}>
                <Text>Submit Answers</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => ToastAndroid.show("Welcome!", ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>

            <InputBox label"User Name:" onChangeText={(text) => setName(text)}/>
            <InputBox label"Password:" onChangeText={(text) => setPw(text)}/>
            <TouchableOpacity onPress={() =>
                ToastAndroid.show("Welcome!" + type + ' ' + name, ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );
};
export default MyApp;



