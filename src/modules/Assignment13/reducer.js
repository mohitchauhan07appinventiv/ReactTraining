import dummyData from "./components/dummyData";

export const initialState = {
  data: dummyData,
  mainTheme: { color: "black", backgroundColor: "white"},
  themeName: "Dark Mode",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ChangeCardColor":
      return {
        data: dummyData.map((curr) => {
          return {
            ...curr,
            name: "PINKY pink",
            color: "pink",
            pantone_value: "1987q234",
            year: "2021",
          };
        }),
        mainTheme: { ...state.mainTheme },
        themeName: state.themeName,
      };

    case "ChangeTheme":
      return {
        data: [...state.data],
        mainTheme:
          state.mainTheme.backgroundColor === "black"
            ? { color: "black", backgroundColor: "white" }
            : { color: "white", backgroundColor: "black" },
        themeName:
          state.mainTheme.backgroundColor === "black"
            ? "Dark Mode"
            : "Lite Mode",
      };

    default:
      return state;
  }
};