import React from 'react';
import { Table, TableWrapper, Rows, Row, Cell } from 'react-native-table-component';
import { TextInput, StyleSheet } from 'react-native';

const ExerciseTable = ({ sets }) => {
  const textStyle = {
    text: {
      fontSize: 14,
      fontWeight: 'normal',
      textAlign: 'center',
    }
  };

  const styles = StyleSheet.create({
    head: {
      height: 20,
      backgroundColor: '#f1f8ff',
    },
  });

  const tableData = [["Set", "Weight", "Intensity"]];
  for (let i = 1; i <= sets; i++) {
    tableData.push([`Set ${i}`, <TextInput keyboardType="numeric" placeholder="0"/>, <TextInput keyboardType="numeric" placeholder="0"/>]);
  }

  return (
    <Table borderStyle={{borderWidth: 1}}>
      <Row data={tableData[0]} style={styles.head} textStyle={textStyle.text}/>
      <Rows data={tableData.slice(1)} textStyle={textStyle.text}/>
    </Table>
  );
};


export default ExerciseTable;
