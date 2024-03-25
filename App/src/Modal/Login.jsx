import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { screens as styles } from "../Style";
import { strings } from '../Localized';

function Login({show, action, reset}) {
    const [message, btnText] = strings.Modal["Login"];
    const css = styles["LoginModal"];

    const handlePress = () => {
        reset({username: '', password: ''})
        action(!show)
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
            // onRequestClose={handleClose}
        >
            <View style={css.modal}>
                <View style={css.container}>
                    <Text style={css.message}>{message}</Text>
                    <TouchableOpacity style={css.btn} onPress={handlePress}>
                        <Text style={css.btn.text}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Login;