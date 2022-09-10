import { StyleSheet, FlatList } from "react-native";
import { customStyles } from "../constants/Color";
import NoAnime from "./NoAnime";
import RenderListItem from "./RenderListItem";

// create a component
const AnimeList = ({ data }) => {
  if (data.length == 0) {
    return <NoAnime />;
  }

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => <RenderListItem item={itemData.item} />}
      contentContainerStyle={customStyles.list}
      initialNumToRender={7}
    />
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default AnimeList;
