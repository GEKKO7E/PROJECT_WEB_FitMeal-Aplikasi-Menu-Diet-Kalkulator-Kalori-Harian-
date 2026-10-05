codelab 1
import { View, Text } from "react-native";

export default function Index() {
return (
<View>
<Text>Hello World!</Text>
</View>
);
}

codelab 2
import {
View,
Text,
TextInput,
Button,
} from "react-native";

export default function Index() {
return (
<View>
<Text>Hello World</Text>
<TextInput placeholder="Type here..." />
<Button title="Click Me" />
</View>
);
}

codelab 3
import {
View,
Text,
TextInput,
Button,
StyleSheet,
} from "react-native";

export default function Index() {
return (
<View style={styles.container}>
<Text style={styles.title}>Hello World</Text>

      <TextInput placeholder="Type here..." style={styles.input} />

      <Button title="Click Me" />
    </View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#e0f2fe",
justifyContent: "center",
padding: 20,
},
title: {
fontSize: 30,
fontWeight: "bold",
color: "red",
marginBottom: 20,
textAlign: "center",
},
input: {
borderWidth: 2,
borderColor: "blue",
backgroundColor: "white",
padding: 10,
borderRadius: 10,
marginBottom: 20,
},
});

codelab 4
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
return (
<View style={styles.container}>
{/_ Ikon Informasi Atas _/}
<Ionicons
        name="information-circle"
        size={70}
        color="#2563eb"
        style={styles.iconTop}
      />

      <Text style={styles.title}>Hello World</Text>

      <TextInput placeholder="Type here..." style={styles.input} />

      {/* Tombol Custom Berisi Ikon & Teks */}
      <Pressable style={styles.button}>
        <Ionicons name="hand-left" size={20} color="white" />
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#e0f2fe",
justifyContent: "center",
padding: 20,
},
iconTop: {
alignSelf: "center",
marginBottom: 10,
},
title: {
fontSize: 30,
fontWeight: "bold",
color: "red",
marginBottom: 20,
textAlign: "center",
},
input: {
borderWidth: 2,
borderColor: "blue",
backgroundColor: "white",
padding: 10,
borderRadius: 10,
marginBottom: 20,
},
button: {
backgroundColor: "#2563eb",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
paddingVertical: 12,
paddingHorizontal: 20,
borderRadius: 8,
gap: 8,
},
buttonText: {
color: "white",
fontWeight: "bold",
fontSize: 16,
},
});

CD5:
interface Student {
name: string;
age: number;
score: number;
}

const students: Student[] = [
{
name: "Andi",
age: 20,
score: 85,
},
{
name: "Budi",
age: 19,
score: 70,
},
{
name: "Citra",
age: 21,
score: 90,
},
];

function getGrade(score: number): string {
if (score >= 85) {
return "A";
} else if (score >= 70) {
return "B";
} else {
return "C";
}
}

students.map((student) => {
const grade = getGrade(student.score);
if (student.age >= 20) {
console.log(student.name + " " + grade);
}
});

let i: number = 0;
while (i < students.length) {
console.log("Student:", students[i].name);
i++;
}
