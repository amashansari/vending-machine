export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("SaveData");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("SaveData", serializedState);
    } catch (error) {
      return undefined;
    }
  };
  