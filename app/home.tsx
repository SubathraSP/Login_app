import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import PagerView from "react-native-pager-view";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

export default function Home() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 4;

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % totalPages;
        pagerRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []); 
  
  const handleNext = () => {
    setCurrentPage((prevPage) => {
      const nextPage = (prevPage + 1) % totalPages;
      pagerRef.current?.setPage(nextPage);
      return nextPage;
    });
  };

  const onPageSelected = (e: { nativeEvent: { position: number } }) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Page1 />
        </View>
        <View key="2" style={styles.page}>
          <Page2 />
        </View>
        <View key="3" style={styles.page}>
          <Page3 />
        </View>
        <View key="4" style={styles.page}>
          <Page4 />
        </View>
      </PagerView>

      <View style={styles.stepperContainer}>
        {[...Array(totalPages)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.step, index === currentPage && styles.activeStep]}
            onPress={() => {
              setCurrentPage(index);
              pagerRef.current?.setPage(index);
            }}
          >
            <Text style={styles.stepText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    alignItems: "center",
    justifyContent: "center",
  },
  pager: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
  },
  page: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 10, 
  },
  stepperContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  step: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  activeStep: {
    backgroundColor: "#0f0", 
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: "#FF6F61", 
    paddingVertical: 15,
    paddingHorizontal: 100, 
    borderRadius: 25, 
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 20, 
    marginBottom: 150, 
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
