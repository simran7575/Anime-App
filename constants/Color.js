import { Dimensions } from "react-native";

export const Colors = {
  lightTeal: "#CFFBFA",
  teal: "#4ac1bd",
  gray2: "#CECECE",
  gray4: "#858282",
  gray5: "#757474",
  appBackground: "#f7f7f7",
  black: "#2f2d2d",
  white: "#ffffff",
  gray1: "#ebe8e8",
  gray3: "#AAAAAA",
  red: "#FF0000",
  lightBlack: "#4d4c4c",
};

export const customStyles = {
  pressed: {
    opacity: 0.7,
  },
  cardOuterContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    borderRadius: 12,
  },
  cardInnerContainer: {
    marginHorizontal: 24,
    paddingHorizontal: 18,
    paddingVertical: 32,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    backgroundColor: "white",
    borderRadius: 12,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginTop: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "100",
    fontFamily: "bubblegum-regular",
    marginRight: 6,
    marginVertical: 8,
    color: Colors.lightBlack,
  },
  titleTextLarge: {
    fontSize: 18,
    fontWeight: "100",
    fontFamily: "bubblegum-regular",
    marginRight: 8,
    marginVertical: 8,
    color: Colors.black,
  },
  originalTitle: {
    fontSize: 12,
    color: Colors.gray3,
    fontFamily: "bubblegum-regular",
  },
  originalTitleLarge: {
    fontSize: 16,
    color: Colors.gray4,
    fontFamily: "bubblegum-regular",
  },
  yearText: {
    color: Colors.gray3,
    fontSize: 12,
    fontFamily: "bubblegum-regular",
  },
  yearTextMedium: {
    color: Colors.gray3,
    fontSize: 15,
    fontFamily: "bubblegum-regular",
  },
  yearTextLarge: {
    color: Colors.gray4,
    fontSize: 15,
    fontFamily: "bubblegum-regular",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainerPadding: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  titleAndYear: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 12,
    fontFamily: "bubblegum-regular",
    color: Colors.gray5,
  },
  tomatoIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  tomatoIconLarge: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  clockIconLarge: {
    width: 36,
    height: 36,
    marginRight: 6,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: "white",
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    fontFamily: "bubblegum-regular",
  },
  mainContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  divider: {
    height: 4,
    marginVertical: 16,
  },
  dividerShort: {
    height: 4,
    marginTop: 24,

    width: 150,
    alignSelf: "center",
    backgroundColor: Colors.gray2,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  highlightContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 28,
    minWidth: 180,
    maxWidth: 180,

    marginTop: 16,
  },
  detailText: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: "bubblegum-regular",
  },
  background: {
    backgroundColor: Colors.gray1, //"#f4f5d3",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 12,
  },
  list: {
    paddingTop: 24,
    paddingBottom: 48,
  },
  wrap: {
    flexWrap: "wrap",
  },
};
