import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { fonts, styles } from "../../Style/style";
import { COLORS } from "../../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { ADDEVENT } from "../../api";
import { num } from "./../TabScreens/Events";

const initialTags = ["Run", "Barbecue", "Park", "Yoga", "Cycling"];
const AddEvent = ({ navigation, route, params }) => {
  const handleSubmit = () => {
    fetch(ADDEVENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        numberOfParticipant: numberOfParticipants,
        description: description,
        category: tags,
        locationUrl: location,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setIsLoading(false);
        if (json.success == true) {
          navigation.navigate("SignIn");
        } else {
          setIsLoading(false);
          setPassword("");
          setConfirmPassword("");
          return setError(json.message);
        }
      });
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const handelStartDate = () => {
    setShowCalendar(!showCalendar);
  };
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
    }
    setShowPicker(false);
  };
  const [endTime, setEndTime] = useState(new Date());
  const [showEndingPicker, setShowEndingPicker] = useState(false);
  const handleTimeEnding = (event, selectedTime) => {
    if (selectedTime) {
      setEndTime(selectedTime);
    }
    setShowEndingPicker(false);
  };
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState(initialTags);
  const [showInput, setShowInput] = useState(false);

  const handleAddTag = () => {
    if (text !== "") {
      setTags([...tags, text]);
      setText("");
    }
    setShowInput(false);
  };
  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <ScrollView>
      <View style={{ margin: 15, flex: 1 }}>
        <Text style={{ fontSize: 25 }}>Category</Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag) => (
            <View
              style={{
                alignItems: "center",
                marginBottom: 10,

                flexDirection: "row",
                flexWrap: "wrap",
              }}
              key={tag}
            >
              <Text
                style={{
                  backgroundColor: COLORS.main,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  color: "white",
                  fontSize: 16,
                  margin: 5,
                }}
              >
                {tag}
                <TouchableOpacity onPress={() => handleRemoveTag(tag)}>
                  <Ionicons
                    name="close-circle-outline"
                    size={23}
                    color="black"
                    top={-8}
                    left={12}
                  />
                </TouchableOpacity>
              </Text>
            </View>
          ))}
          {showInput ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,

                width: "90%",
              }}
            >
              <Modal
                transparent={true}
                visible={showInput}
                animationType="fade"
              >
                <View
                  style={{
                    margin: 20,
                    marginTop: 300,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 35,
                    height: 50,
                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <TextInput
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={handleAddTag}
                    placeholder="Enter a new category"
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      width: "50%",

                      backgroundColor: "white",
                      height: 60,
                      position: "relative",
                      borderRadius: 8,
                    }}
                  />
                </View>
              </Modal>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setShowInput(true)}
              style={{
                borderRadius: 20,
                padding: 10,
                alignItems: "center",
                alignSelf: "center",
                flex: 1,
                marginLeft: 10,
              }}
            >
              <Ionicons
                name="add-circle"
                size={40}
                color={COLORS.main}
                marginLeft={0}
                alignItems={"center"}
              ></Ionicons>
            </TouchableOpacity>
          )}
        </View>

        <Text style={(fonts.h1, { fontSize: 25 })}>Event Title</Text>
        <TextInput
          style={styles.addEventBox}
          placeholder="e.g Climbign"
          onChangeText={setTitle}
          value={title}
        ></TextInput>
        <Text style={(fonts.h1, { fontSize: 25 })}>Add Description</Text>
        <TextInput
          style={[styles.addEventBox, { height: 122 }]}
          maxLength={500}
          multiline={true}
          onChangeText={setDescription}
          value={description}
          placeholder="Event Description-Maximum length is 500 characters"
          textAlignVertical="top"
        ></TextInput>
        <Text style={(fonts.h1, { fontSize: 25 })}>Location</Text>

        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <TextInput
            keyboardType="url"
            placeholder="Add Location"
            style={styles.addEventBox}
            onChangeText={setNumberOfParticipants}
            value={numberOfParticipants}
          ></TextInput>
          <Ionicons
            name="location-outline"
            size={25}
            position={"absolute"}
            right={15}
            color={COLORS.main}
          ></Ionicons>
        </View>
        <Text style={(fonts.h1, { fontSize: 25 })}>Date</Text>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <TouchableOpacity onPress={handelStartDate}>
            <Text placeholder="Enter your date" style={styles.addEventBox}>
              {selectedDate}
            </Text>
            <Ionicons
              name="calendar-outline"
              size={25}
              position={"absolute"}
              right={15}
              top={20}
              color={COLORS.main}
            ></Ionicons>
          </TouchableOpacity>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Modal
              animationType="slide"
              visible={showCalendar}
              transparent={true}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "90%",
                    paddingVertical: 5,
                    marginBottom: 10,
                  }}
                >
                  <DatePicker
                    mode="calendar"
                    onSelectedChange={(date) => setSelectedDate(date)}
                    options={{
                      textHeaderColor: "#FFA25B",
                      selectedTextColor: "#fff",
                      mainColor: "#F4722B",
                      textSecondaryColor: "#D6C7A1",
                      borderColor: "rgba(122, 146, 165, 0.1)",
                    }}
                  />
                  <Button
                    title="Confirm Date"
                    backgroundColor="green"
                    onPress={handelStartDate}
                  ></Button>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        {/* The end of Date */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "45%",
            }}
          >
            <Text style={(fonts.h1, { fontSize: 25 })}>Start Time</Text>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              {time && (
                <Text style={[styles.addEventBox, { width: 143 }]}>
                  {time.toLocaleTimeString()}
                </Text>
              )}

              <Ionicons
                name="chevron-down-outline"
                size={25}
                position={"absolute"}
                alignItems="center"
                bottom={15}
                right={30}
                color={COLORS.main}
              ></Ionicons>
            </TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Modal
                animationType="slide"
                visible={showPicker}
                transparent={true}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "90%",
                      paddingVertical: 5,
                      marginBottom: 10,
                    }}
                  >
                    {showPicker && (
                      <DateTimePicker
                        mode="time"
                        value={time}
                        onChange={handleTimeChange}
                        minuteInterval={3}
                      />
                    )}
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View
            style={{ alignItems: "center", justifyContent: "center" }}
          ></View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "45%",
            }}
          >
            <Text style={(fonts.h1, { fontSize: 25, marginRight: 30 })}>
              End Time
            </Text>
            <TouchableOpacity onPress={() => setShowEndingPicker(true)}>
              {endTime && (
                <Text style={[styles.addEventBox, { width: 143 }]}>
                  {endTime.toLocaleTimeString()}
                </Text>
              )}

              <Ionicons
                name="chevron-down-outline"
                size={25}
                position={"absolute"}
                alignItems="center"
                bottom={15}
                right={30}
                color={COLORS.main}
              ></Ionicons>
            </TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Modal
                animationType="slide"
                visible={showEndingPicker}
                transparent={true}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "90%",
                      paddingVertical: 5,
                      marginBottom: 10,
                    }}
                  >
                    {showEndingPicker && (
                      <DateTimePicker
                        mode="time"
                        value={endTime}
                        onChange={handleTimeEnding}
                        minuteInterval={3}
                        textColor="red"
                      />
                    )}
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <Text
          style={[
            fonts.h1,
            { fontSize: 25, marginTop: 5, color: COLORS.black },
          ]}
        >
          Number of Participant
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "45%",
          }}
        >
          <TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              onChangeText={setNumberOfParticipants}
              value={numberOfParticipants}
              style={[styles.addEventBox, { width: 140, marginTop: -5 }]}
            ></TextInput>
            <Ionicons
              name="arrow-up-circle"
              size={40}
              position={"absolute"}
              bottom={15}
              right={5}
              color={COLORS.main}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <Text style={[fonts.h1, { fontSize: 25, color: COLORS.black }]}>
          Add Photo
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="add-outline"
            style={{
              borderRadius: 10,
              borderColor: COLORS.main,
              borderWidth: 1.2,
              margin: 10,
            }}
            size={50}
          ></Ionicons>

          <Ionicons
            name="add-outline"
            style={{
              borderRadius: 10,
              borderColor: COLORS.main,
              borderWidth: 1.2,
            }}
            size={50}
          ></Ionicons>
        </View>
        <Pressable onPress={() => navigation.navigate("Events")}>
          <View style={[styles.bottonBlock, { marginTop: 55 }]}>
            <Text style={styles.bottonText}>Post Event</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddEvent;
